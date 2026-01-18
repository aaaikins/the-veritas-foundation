import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
});

/**
 * Create a Stripe Checkout Session for a donation
 */
export async function createCheckoutSession({
  amount,
  currency = 'usd',
  donorName,
  donorEmail,
  donationId,
  purpose,
  isAnonymous,
  donationType = 'one-time',
}: {
  amount: number;
  currency?: string;
  donorName?: string;
  donorEmail?: string;
  donationId: string;
  purpose?: string;
  isAnonymous: boolean;
  donationType?: 'one-time' | 'monthly' | 'yearly';
}) {
  // Determine if this is a recurring donation
  const isRecurring = donationType === 'monthly' || donationType === 'yearly';
  const interval = donationType === 'monthly' ? 'month' : 'year';

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: 'Donation to Veritas Foundation',
            description: purpose || 'Supporting education and empowering students',
          },
          unit_amount: Math.round(amount * 100), // Convert to cents
          ...(isRecurring && {
            recurring: {
              interval: interval as 'month' | 'year',
            },
          }),
        },
        quantity: 1,
      },
    ],
    mode: isRecurring ? 'subscription' : 'payment',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/donate?canceled=true`,
    customer_email: donorEmail || undefined,
    metadata: {
      donationId,
      donorName: donorName || 'Anonymous',
      isAnonymous: isAnonymous.toString(),
      purpose: purpose || '',
      donationType,
    },
  });

  return session;
}

/**
 * Create a Stripe Payment Intent (for custom payment flow)
 */
export async function createPaymentIntent({
  amount,
  currency = 'usd',
  donationId,
  donorEmail,
  donorName,
  purpose,
  isAnonymous,
}: {
  amount: number;
  currency?: string;
  donationId: string;
  donorEmail?: string;
  donorName?: string;
  purpose?: string;
  isAnonymous: boolean;
}) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency: currency.toLowerCase(),
    metadata: {
      donationId,
      donorName: donorName || 'Anonymous',
      isAnonymous: isAnonymous.toString(),
      purpose: purpose || '',
    },
    receipt_email: donorEmail || undefined,
  });

  return paymentIntent;
}

/**
 * Retrieve a Stripe Checkout Session
 */
export async function getCheckoutSession(sessionId: string) {
  return await stripe.checkout.sessions.retrieve(sessionId);
}

/**
 * Retrieve a Stripe Payment Intent
 */
export async function getPaymentIntent(paymentIntentId: string) {
  return await stripe.paymentIntents.retrieve(paymentIntentId);
}

