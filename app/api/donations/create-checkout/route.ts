import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';
import { createDonation } from '@/lib/dynamodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      amount,
      currency = 'usd',
      donorName,
      donorEmail,
      purpose,
      isAnonymous = false,
      donationType = 'one-time',
    } = body;

    // Validate required fields
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Amount is required and must be greater than 0' },
        { status: 400 }
      );
    }

    // Create donation record in DynamoDB with pending status
    const donation = await createDonation({
      donorName: isAnonymous ? undefined : donorName,
      donorEmail: isAnonymous ? undefined : donorEmail,
      amount: parseFloat(amount),
      currency: currency.toUpperCase(),
      paymentMethod: 'stripe',
      status: 'pending',
      purpose: purpose || undefined,
      isAnonymous,
    });

    // Create Stripe Checkout Session
    const session = await createCheckoutSession({
      amount: parseFloat(amount),
      currency,
      donorName,
      donorEmail,
      donationId: donation.donationId,
      purpose,
      isAnonymous,
      donationType,
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
      donationId: donation.donationId,
    });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

