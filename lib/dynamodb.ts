import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, QueryCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';

// Initialize DynamoDB client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY ? {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  } : undefined,
});

const docClient = DynamoDBDocumentClient.from(client);

export interface Donation {
  donationId: string;
  donorName?: string;
  donorEmail?: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  stripePaymentIntentId?: string;
  stripeCustomerId?: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  purpose?: string;
  isAnonymous: boolean;
  createdAt: string;
  updatedAt: string;
  // GSI partition key for querying by date
  donationDate: string; // YYYY-MM-DD format
}

const DONATIONS_TABLE = process.env.DONATIONS_TABLE_NAME || 'veritas-donations';

/**
 * Create a new donation record
 */
export async function createDonation(donation: Omit<Donation, 'donationId' | 'createdAt' | 'updatedAt' | 'donationDate'>): Promise<Donation> {
  const donationId = `don_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const now = new Date().toISOString();
  const donationDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const donationRecord: Donation = {
    donationId,
    ...donation,
    createdAt: now,
    updatedAt: now,
    donationDate,
  };

  await docClient.send(
    new PutCommand({
      TableName: DONATIONS_TABLE,
      Item: donationRecord,
    })
  );

  return donationRecord;
}

/**
 * Get a donation by ID
 */
export async function getDonation(donationId: string): Promise<Donation | null> {
  const result = await docClient.send(
    new GetCommand({
      TableName: DONATIONS_TABLE,
      Key: { donationId },
    })
  );

  return (result.Item as Donation) || null;
}

/**
 * Update donation status
 */
export async function updateDonationStatus(
  donationId: string,
  status: Donation['status'],
  stripePaymentIntentId?: string,
  stripeCustomerId?: string
): Promise<Donation | null> {
  const donation = await getDonation(donationId);
  if (!donation) return null;

  const updated: Donation = {
    ...donation,
    status,
    updatedAt: new Date().toISOString(),
    ...(stripePaymentIntentId && { stripePaymentIntentId }),
    ...(stripeCustomerId && { stripeCustomerId }),
  };

  await docClient.send(
    new PutCommand({
      TableName: DONATIONS_TABLE,
      Item: updated,
    })
  );

  return updated;
}

/**
 * Get donations by date range (using GSI)
 */
export async function getDonationsByDateRange(startDate: string, endDate: string): Promise<Donation[]> {
  const result = await docClient.send(
    new ScanCommand({
      TableName: DONATIONS_TABLE,
      FilterExpression: 'donationDate BETWEEN :startDate AND :endDate',
      ExpressionAttributeValues: {
        ':startDate': startDate,
        ':endDate': endDate,
      },
    })
  );

  return (result.Items as Donation[]) || [];
}

/**
 * Get all donations (with pagination support)
 */
export async function getAllDonations(limit: number = 100): Promise<Donation[]> {
  const result = await docClient.send(
    new ScanCommand({
      TableName: DONATIONS_TABLE,
      Limit: limit,
    })
  );

  return (result.Items as Donation[]) || [];
}

/**
 * Get donation statistics
 */
export async function getDonationStats(): Promise<{
  totalDonations: number;
  totalAmount: number;
  completedDonations: number;
  completedAmount: number;
  averageDonation: number;
}> {
  const donations = await getAllDonations(10000); // Get all donations for stats

  const completed = donations.filter(d => d.status === 'completed');
  const totalAmount = donations.reduce((sum, d) => sum + (d.amount || 0), 0);
  const completedAmount = completed.reduce((sum, d) => sum + (d.amount || 0), 0);

  return {
    totalDonations: donations.length,
    totalAmount,
    completedDonations: completed.length,
    completedAmount,
    averageDonation: completed.length > 0 ? completedAmount / completed.length : 0,
  };
}

/**
 * Get donation by Stripe Payment Intent ID
 */
export async function getDonationByStripePaymentIntent(paymentIntentId: string): Promise<Donation | null> {
  const result = await docClient.send(
    new ScanCommand({
      TableName: DONATIONS_TABLE,
      FilterExpression: 'stripePaymentIntentId = :paymentIntentId',
      ExpressionAttributeValues: {
        ':paymentIntentId': paymentIntentId,
      },
    })
  );

  return result.Items && result.Items.length > 0 ? (result.Items[0] as Donation) : null;
}

