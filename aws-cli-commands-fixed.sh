#!/bin/bash

# Improved AWS CLI commands to create a cost-effective RDS instance
# Make sure AWS CLI is configured with your credentials

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Variables
DB_IDENTIFIER="veritas-foundation-db"
DB_NAME="veritas_foundation"
DB_USERNAME="postgres"
DB_PASSWORD=$(openssl rand -base64 12)  # Generate random password
REGION="us-east-1"  # Change to your preferred region

echo -e "${GREEN}🚀 Creating RDS database with the following settings:${NC}"
echo "DB Identifier: $DB_IDENTIFIER"
echo "Database Name: $DB_NAME"
echo "Username: $DB_USERNAME"
echo "Generated Password: $DB_PASSWORD"
echo "Region: $REGION"
echo ""

# Check if AWS CLI is configured
echo -e "${YELLOW}📋 Checking AWS CLI configuration...${NC}"
if ! aws sts get-caller-identity > /dev/null 2>&1; then
    echo -e "${RED}❌ AWS CLI is not configured. Please run 'aws configure' first.${NC}"
    echo "You need:"
    echo "1. AWS Access Key ID"
    echo "2. AWS Secret Access Key"
    echo "3. Default region (us-east-1)"
    echo ""
    echo "Get these from AWS IAM Console: https://console.aws.amazon.com/iam/"
    exit 1
fi

echo -e "${GREEN}✅ AWS CLI configured successfully${NC}"

# Get default VPC ID
echo -e "${YELLOW}🔍 Finding default VPC...${NC}"
VPC_ID=$(aws ec2 describe-vpcs --filters "Name=is-default,Values=true" --query 'Vpcs[0].VpcId' --output text --region $REGION)

if [ "$VPC_ID" = "None" ] || [ -z "$VPC_ID" ]; then
    echo -e "${RED}❌ No default VPC found. Creating one...${NC}"
    VPC_ID=$(aws ec2 create-default-vpc --query 'Vpc.VpcId' --output text --region $REGION)
fi

echo -e "${GREEN}✅ Using VPC: $VPC_ID${NC}"

# Create security group for RDS
echo -e "${YELLOW}🔐 Creating security group...${NC}"
SECURITY_GROUP_ID=$(aws ec2 create-security-group \
    --group-name "veritas-db-sg-$(date +%s)" \
    --description "Security group for Veritas Foundation RDS database" \
    --vpc-id $VPC_ID \
    --region $REGION \
    --query 'GroupId' \
    --output text 2>/dev/null || echo "")

if [ -z "$SECURITY_GROUP_ID" ]; then
    echo -e "${RED}❌ Failed to create security group. It may already exist.${NC}"
    # Try to find existing security group
    SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \
        --filters "Name=group-name,Values=veritas-db-sg*" \
        --query 'SecurityGroups[0].GroupId' \
        --output text --region $REGION 2>/dev/null || echo "")
    
    if [ -z "$SECURITY_GROUP_ID" ] || [ "$SECURITY_GROUP_ID" = "None" ]; then
        echo -e "${RED}❌ Cannot create or find security group. Please create manually.${NC}"
        exit 1
    fi
fi

echo -e "${GREEN}✅ Created/Using security group: $SECURITY_GROUP_ID${NC}"

# Add inbound rule to allow PostgreSQL connections (port 5432)
echo -e "${YELLOW}🌐 Adding inbound rule for PostgreSQL...${NC}"
aws ec2 authorize-security-group-ingress \
    --group-id $SECURITY_GROUP_ID \
    --protocol tcp \
    --port 5432 \
    --cidr 0.0.0.0/0 \
    --region $REGION 2>/dev/null || echo -e "${YELLOW}⚠️  Inbound rule may already exist${NC}"

echo -e "${GREEN}✅ Added inbound rule for PostgreSQL (port 5432)${NC}"

# Check if RDS instance already exists
echo -e "${YELLOW}🔍 Checking if RDS instance already exists...${NC}"
EXISTING_DB=$(aws rds describe-db-instances \
    --db-instance-identifier $DB_IDENTIFIER \
    --region $REGION \
    --query 'DBInstances[0].DBInstanceStatus' \
    --output text 2>/dev/null || echo "NotFound")

if [ "$EXISTING_DB" != "NotFound" ]; then
    echo -e "${YELLOW}⚠️  RDS instance '$DB_IDENTIFIER' already exists with status: $EXISTING_DB${NC}"
    echo "If you want to create a new one, change the DB_IDENTIFIER in this script."
    exit 0
fi

# Create RDS instance
echo -e "${YELLOW}🗄️  Creating RDS instance...${NC}"
aws rds create-db-instance \
    --db-instance-identifier $DB_IDENTIFIER \
    --db-name $DB_NAME \
    --db-instance-class db.t3.micro \
    --engine postgres \
    --master-username $DB_USERNAME \
    --master-user-password $DB_PASSWORD \
    --allocated-storage 20 \
    --storage-type gp2 \
    --vpc-security-group-ids $SECURITY_GROUP_ID \
    --no-multi-az \
    --publicly-accessible \
    --backup-retention-period 1 \
    --no-storage-encrypted \
    --no-auto-minor-version-upgrade \
    --region $REGION > /dev/null

echo -e "${GREEN}✅ RDS instance creation initiated successfully!${NC}"
echo ""
echo -e "${GREEN}💾 Save these credentials securely:${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Database Identifier: $DB_IDENTIFIER"
echo "Database Name: $DB_NAME"
echo "Username: $DB_USERNAME"
echo "Password: $DB_PASSWORD"
echo "Region: $REGION"
echo "Security Group: $SECURITY_GROUP_ID"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${YELLOW}⏱️  Database creation takes 5-10 minutes. You can check status with:${NC}"
echo "aws rds describe-db-instances --db-instance-identifier $DB_IDENTIFIER --region $REGION --query 'DBInstances[0].[DBInstanceStatus,Endpoint.Address]'"
echo ""
echo -e "${YELLOW}📝 Next steps:${NC}"
echo "1. Wait for database to be 'available'"
echo "2. Update backend/.env with the endpoint"
echo "3. Run: cd backend && npm install pg"
echo "4. Test connection: node -e \"require('./database').testConnection()\""
