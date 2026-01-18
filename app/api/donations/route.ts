import { NextRequest, NextResponse } from 'next/server';
import { createDonation, getDonation } from '@/lib/dynamodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      donorName,
      donorEmail,
      amount,
      currency = 'USD',
      paymentMethod = 'stripe',
      purpose,
      isAnonymous = false,
    } = body;

    // Validate required fields
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Amount is required and must be greater than 0' },
        { status: 400 }
      );
    }

    // Create donation record
    const donation = await createDonation({
      donorName: isAnonymous ? undefined : donorName,
      donorEmail: isAnonymous ? undefined : donorEmail,
      amount: parseFloat(amount),
      currency: currency.toUpperCase(),
      paymentMethod,
      status: 'pending',
      purpose: purpose || undefined,
      isAnonymous,
    });

    return NextResponse.json({
      success: true,
      donation: {
        donationId: donation.donationId,
        amount: donation.amount,
        currency: donation.currency,
        status: donation.status,
        createdAt: donation.createdAt,
      },
    });
  } catch (error: any) {
    console.error('Error creating donation:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create donation' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const donationId = searchParams.get('donationId');

    if (donationId) {
      // Get specific donation
      const donation = await getDonation(donationId);
      if (!donation) {
        return NextResponse.json(
          { error: 'Donation not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ donation });
    }

    // If no donationId, return error (use stats endpoint for statistics)
    return NextResponse.json(
      { error: 'Please provide a donationId query parameter' },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Error fetching donation:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch donation' },
      { status: 500 }
    );
  }
}
