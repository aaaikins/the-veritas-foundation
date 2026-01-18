import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import {
  updateDonationStatus,
  getDonationByStripePaymentIntent,
} from '@/lib/dynamodb';
import Stripe from 'stripe';

// Disable body parsing, we need the raw body for webhook signature verification
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set');
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  try {
    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const donationId = session.metadata?.donationId;
        const paymentIntentId = session.payment_intent as string;
        const subscriptionId = session.subscription as string;

        if (donationId) {
          await updateDonationStatus(
            donationId,
            'completed',
            paymentIntentId || subscriptionId,
            session.customer as string
          );
          console.log(`Donation ${donationId} marked as completed (${session.mode === 'subscription' ? 'subscription' : 'one-time'})`);
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        // Handle recurring subscription payments
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionId = invoice.subscription as string;
        
        if (subscriptionId && invoice.metadata?.donationId) {
          const donationId = invoice.metadata.donationId;
          await updateDonationStatus(
            donationId,
            'completed',
            subscriptionId,
            invoice.customer as string
          );
          console.log(`Recurring donation ${donationId} payment succeeded`);
        }
        break;
      }

      case 'invoice.payment_failed': {
        // Handle failed recurring subscription payments
        const invoice = event.data.object as Stripe.Invoice;
        if (invoice.metadata?.donationId) {
          const donationId = invoice.metadata.donationId;
          await updateDonationStatus(donationId, 'failed');
          console.log(`Recurring donation ${donationId} payment failed`);
        }
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const donation = await getDonationByStripePaymentIntent(paymentIntent.id);

        if (donation) {
          await updateDonationStatus(
            donation.donationId,
            'completed',
            paymentIntent.id,
            paymentIntent.customer as string
          );
          console.log(`Donation ${donation.donationId} marked as completed`);
        }
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const donation = await getDonationByStripePaymentIntent(paymentIntent.id);

        if (donation) {
          await updateDonationStatus(donation.donationId, 'failed');
          console.log(`Donation ${donation.donationId} marked as failed`);
        }
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        const paymentIntentId = charge.payment_intent as string;

        if (paymentIntentId) {
          const donation = await getDonationByStripePaymentIntent(paymentIntentId);
          if (donation) {
            await updateDonationStatus(donation.donationId, 'refunded');
            console.log(`Donation ${donation.donationId} marked as refunded`);
          }
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

