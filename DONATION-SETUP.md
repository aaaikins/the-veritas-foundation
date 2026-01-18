# Donation System Setup Guide

This guide will help you set up the donation feature using DynamoDB, Next.js, and Stripe.

## Prerequisites

1. AWS Account with DynamoDB access
2. Stripe Account (test or live)
3. Node.js and npm installed

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_... # Your Stripe secret key
STRIPE_WEBHOOK_SECRET=whsec_... # Your Stripe webhook signing secret
NEXT_PUBLIC_APP_URL=http://localhost:3000 # Your app URL (change for production)

# AWS DynamoDB Configuration
AWS_REGION=us-east-1 # Your AWS region
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
DONATIONS_TABLE_NAME=veritas-donations # DynamoDB table name
```

### Getting Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to **Developers** > **API keys**
3. Copy your **Secret key** (starts with `sk_test_` for test mode or `sk_live_` for production)
4. For webhook secret:
   - Go to **Developers** > **Webhooks**
   - Click **Add endpoint**
   - Set URL to: `https://yourdomain.com/api/donations/webhook`
   - Select events: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`, `charge.refunded`
   - Copy the **Signing secret** (starts with `whsec_`)

### Getting AWS Credentials

1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam/)
2. Create a new user or use an existing one
3. Attach the `AmazonDynamoDBFullAccess` policy (or create a custom policy with necessary permissions)
4. Create access keys and save them securely

## DynamoDB Table Setup

### Option 1: Using AWS Console

1. Go to [DynamoDB Console](https://console.aws.amazon.com/dynamodb/)
2. Click **Create table**
3. Configure:
   - **Table name**: `veritas-donations`
   - **Partition key**: `donationId` (String)
   - Leave other settings as default
4. Click **Create table**

### Option 2: Using AWS CLI

```bash
aws dynamodb create-table \
  --table-name veritas-donations \
  --attribute-definitions AttributeName=donationId,AttributeType=S \
  --key-schema AttributeName=donationId,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region us-east-1
```

### Table Schema

The donation records will have the following structure:

```typescript
{
  donationId: string,           // Primary key
  donorName?: string,
  donorEmail?: string,
  amount: number,
  currency: string,
  paymentMethod: string,
  stripePaymentIntentId?: string,
  stripeCustomerId?: string,
  status: 'pending' | 'completed' | 'failed' | 'refunded',
  purpose?: string,
  isAnonymous: boolean,
  createdAt: string,
  updatedAt: string,
  donationDate: string          // YYYY-MM-DD format for querying
}
```

## Testing the Integration

### 1. Test Stripe Checkout

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/donate` page
3. Fill out the donation form
4. Click "Donate Now"
5. You'll be redirected to Stripe Checkout
6. Use test card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits

### 2. Test Webhook (Local Development)

For local webhook testing, use [Stripe CLI](https://stripe.com/docs/stripe-cli):

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/donations/webhook
```

This will give you a webhook signing secret starting with `whsec_` - use this in your `.env.local` for local testing.

### 3. Verify Donation in DynamoDB

After completing a test donation:

1. Go to [DynamoDB Console](https://console.aws.amazon.com/dynamodb/)
2. Select the `veritas-donations` table
3. Click **Explore table items**
4. You should see your donation record with `status: completed`

## API Endpoints

### Create Checkout Session
```
POST /api/donations/create-checkout
Body: {
  amount: number,
  currency?: string,
  donorName?: string,
  donorEmail?: string,
  purpose?: string,
  isAnonymous?: boolean
}
Response: {
  sessionId: string,
  url: string,
  donationId: string
}
```

### Get Donation
```
GET /api/donations?donationId=<donation-id>
Response: {
  donation: Donation
}
```

### Get Donation Statistics
```
GET /api/donations/stats
Response: {
  totalDonations: number,
  totalAmount: number,
  completedDonations: number,
  completedAmount: number,
  averageDonation: number
}
```

### Webhook Endpoint
```
POST /api/donations/webhook
Headers: {
  stripe-signature: string
}
Body: Stripe webhook event
```

## Production Deployment

### 1. Update Environment Variables

- Use production Stripe keys (`sk_live_...`)
- Set `NEXT_PUBLIC_APP_URL` to your production domain
- Update AWS credentials if using different account/region

### 2. Configure Webhook Endpoint

1. In Stripe Dashboard, add webhook endpoint:
   - URL: `https://yourdomain.com/api/donations/webhook`
   - Select events: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`, `charge.refunded`
2. Copy the webhook signing secret to your production environment variables

### 3. DynamoDB Considerations

- Consider enabling point-in-time recovery for production
- Set up CloudWatch alarms for table metrics
- Consider using on-demand billing for variable traffic

## Troubleshooting

### Webhook Not Working

1. Verify `STRIPE_WEBHOOK_SECRET` is set correctly
2. Check webhook endpoint URL in Stripe Dashboard
3. Verify webhook events are selected correctly
4. Check server logs for webhook errors

### DynamoDB Connection Issues

1. Verify AWS credentials are correct
2. Check IAM permissions for DynamoDB access
3. Verify table name matches `DONATIONS_TABLE_NAME`
4. Check AWS region is correct

### Stripe Checkout Not Redirecting

1. Verify `STRIPE_SECRET_KEY` is set
2. Check `NEXT_PUBLIC_APP_URL` is correct
3. Verify Stripe account is in test mode (for testing) or live mode (for production)

## Security Considerations

1. **Never commit `.env.local`** to version control
2. Use environment variables for all sensitive data
3. Enable Stripe webhook signature verification (already implemented)
4. Use HTTPS in production
5. Regularly rotate AWS access keys
6. Use least-privilege IAM policies for DynamoDB access

## Support

For issues or questions:
- Stripe Documentation: https://stripe.com/docs
- AWS DynamoDB Documentation: https://docs.aws.amazon.com/dynamodb/
- Next.js Documentation: https://nextjs.org/docs

