#!/bin/bash

# AWS CLI commands to create a cost-effective RDS instance
# Make sure AWS CLI is configured with your credentials

# Variables
DB_IDENTIFIER="veritas-foundation-db"
DB_NAME="veritas_foundation"
DB_USERNAME="postgres"
DB_PASSWORD=$(openssl rand -base64 12)  # Generate random password
REGION="us-east-1"  # Change to your preferred region

echo "Creating RDS database with the following settings:"
echo "DB Identifier: $DB_IDENTIFIER"
echo "Database Name: $DB_NAME"
echo "Username: $DB_USERNAME"
echo "Generated Password: $DB_PASSWORD"
echo "Region: $REGION"

# Create security group for RDS
SECURITY_GROUP_ID=$(aws ec2 create-security-group \
    --group-name veritas-db-sg \
    --description "Security group for Veritas Foundation RDS database" \
    --region $REGION \
    --query 'GroupId' \
    --output text)

echo "Created security group: $SECURITY_GROUP_ID"

# Add inbound rule to allow PostgreSQL connections (port 5432)
aws ec2 authorize-security-group-ingress \
    --group-id $SECURITY_GROUP_ID \
    --protocol tcp \
    --port 5432 \
    --cidr 0.0.0.0/0 \
    --region $REGION

echo "Added inbound rule for PostgreSQL (port 5432)"

# Create RDS instance
aws rds create-db-instance \
    --db-identifier $DB_IDENTIFIER \
    --db-name $DB_NAME \
    --db-instance-class db.t3.micro \
    --engine postgres \
    --master-username $DB_USERNAME \
    --master-user-password $DB_PASSWORD \
    --allocated-storage 20 \
    --storage-type gp2 \
    --vpc-security-group-ids $SECURITY_GROUP_ID \
    --no-multi-az \
    --no-publicly-accessible \
    --backup-retention-period 1 \
    --no-storage-encrypted \
    --no-auto-minor-version-upgrade \
    --region $REGION

echo "RDS instance creation initiated. This will take 5-10 minutes to complete."
echo ""
echo "Save these credentials securely:"
echo "Database Endpoint: (will be available after creation completes)"
echo "Database Name: $DB_NAME"
echo "Username: $DB_USERNAME"
echo "Password: $DB_PASSWORD"
echo ""
echo "To check status, run:"
echo "aws rds describe-db-instances --db-instance-identifier $DB_IDENTIFIER --region $REGION"
