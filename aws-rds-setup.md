# AWS RDS Setup for Minimal Cost

## Database Configuration for Cost Optimization

### Recommended Settings:
1. **Engine**: PostgreSQL (free tier eligible, reliable for most use cases)
2. **Instance Class**: db.t3.micro (eligible for free tier)
3. **Storage**: 20GB General Purpose (SSD) - minimum required
4. **Multi-AZ**: Disabled (reduces cost significantly)
5. **Backup Retention**: 7 days (minimum for production, 1 day for dev)
6. **Monitoring**: Basic (CloudWatch logs included)

### Estimated Monthly Cost:
- **Free Tier (First 12 months)**: $0/month for db.t3.micro with 20GB storage
- **After Free Tier**: ~$13-15/month

## Setup Instructions

### Option 1: AWS Console (Recommended for beginners)
1. Go to AWS RDS Console
2. Click "Create database"
3. Choose "Standard create"
4. Engine: PostgreSQL
5. Templates: Free tier
6. Instance identifier: `veritas-foundation-db`
7. Master username: `postgres`
8. Auto generate password (save it securely)
9. Instance class: db.t3.micro
10. Storage: 20 GB gp2
11. Turn OFF Multi-AZ deployment
12. Create new VPC security group: `veritas-db-sg`
13. Turn OFF automated backups (for dev) or set to 7 days (for prod)
14. Turn OFF Enhanced monitoring
15. Turn OFF Performance Insights

### Option 2: AWS CLI (Faster setup)
See aws-cli-commands.sh for automated setup

### Option 3: Infrastructure as Code
See cloudformation-template.yml or terraform-config.tf
