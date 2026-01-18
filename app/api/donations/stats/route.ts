import { NextRequest, NextResponse } from 'next/server';
import { getDonationStats } from '@/lib/dynamodb';

export async function GET(request: NextRequest) {
  try {
    const stats = await getDonationStats();
    return NextResponse.json(stats);
  } catch (error: any) {
    console.error('Error fetching donation stats:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch donation statistics' },
      { status: 500 }
    );
  }
}
