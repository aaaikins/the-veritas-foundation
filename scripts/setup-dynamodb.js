#!/usr/bin/env node

/**
 * Script to set up DynamoDB table for donations
 * 
 * Usage:
 *   node scripts/setup-dynamodb.js
 * 
 * Requires AWS credentials to be configured (via environment variables or AWS CLI)
 */

const { DynamoDBClient, CreateTableCommand, DescribeTableCommand } = require('@aws-sdk/client-dynamodb');

const TABLE_NAME = process.env.DONATIONS_TABLE_NAME || 'veritas-donations';
const REGION = process.env.AWS_REGION || 'us-east-1';

const client = new DynamoDBClient({
  region: REGION,
  credentials: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY ? {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  } : undefined,
});

async function tableExists() {
  try {
    await client.send(new DescribeTableCommand({ TableName: TABLE_NAME }));
    return true;
  } catch (error) {
    if (error.name === 'ResourceNotFoundException') {
      return false;
    }
    throw error;
  }
}

async function createTable() {
  const command = new CreateTableCommand({
    TableName: TABLE_NAME,
    AttributeDefinitions: [
      {
        AttributeName: 'donationId',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'donationId',
        KeyType: 'HASH',
      },
    ],
    BillingMode: 'PAY_PER_REQUEST', // On-demand pricing
  });

  try {
    const response = await client.send(command);
    console.log(`✅ Table "${TABLE_NAME}" created successfully!`);
    console.log(`   Table ARN: ${response.TableDescription.TableArn}`);
    console.log(`   Status: ${response.TableDescription.TableStatus}`);
    return true;
  } catch (error) {
    if (error.name === 'ResourceInUseException') {
      console.log(`⚠️  Table "${TABLE_NAME}" already exists.`);
      return true;
    }
    throw error;
  }
}

async function main() {
  console.log(`Setting up DynamoDB table: ${TABLE_NAME}`);
  console.log(`Region: ${REGION}\n`);

  try {
    const exists = await tableExists();
    
    if (exists) {
      console.log(`✅ Table "${TABLE_NAME}" already exists.`);
      console.log('   No action needed.\n');
      return;
    }

    console.log(`Creating table "${TABLE_NAME}"...`);
    await createTable();
    console.log('\n✨ Setup complete!');
    console.log('\nNext steps:');
    console.log('1. Set up your environment variables (see DONATION-SETUP.md)');
    console.log('2. Configure Stripe webhook endpoint');
    console.log('3. Test the donation flow\n');
  } catch (error) {
    console.error('❌ Error setting up DynamoDB table:');
    console.error(error.message);
    
    if (error.name === 'UnrecognizedClientException' || error.name === 'InvalidSignatureException') {
      console.error('\n💡 Tip: Make sure your AWS credentials are configured correctly.');
      console.error('   You can set them via:');
      console.error('   - Environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)');
      console.error('   - AWS CLI: aws configure');
      console.error('   - IAM role (if running on AWS)');
    }
    
    process.exit(1);
  }
}

main();

