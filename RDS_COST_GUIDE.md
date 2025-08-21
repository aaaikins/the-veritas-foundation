# AWS RDS Cost Estimation and Monitoring

## Monthly Cost Breakdown (as of 2024)

### Free Tier (First 12 months)
- **db.t3.micro instance**: $0 (750 hours free per month)
- **20GB General Purpose Storage**: $0 (20GB free per month)
- **Backup Storage**: $0 (automated backups equal to DB size)
- **Data Transfer**: $0 (1GB free per month)
- **Total**: **$0/month**

### After Free Tier
- **db.t3.micro instance**: ~$12.60/month (24/7 uptime)
- **20GB General Purpose Storage**: ~$2.30/month
- **Backup Storage**: ~$2.00/month (if you keep 7 days of backups)
- **Data Transfer**: $0.09/GB (after first GB)
- **Estimated Total**: **~$13-17/month**

## Cost Optimization Strategies

### Development Environment
```bash
# Stop database during off-hours (saves ~60% on compute)
aws rds stop-db-instance --db-instance-identifier veritas-foundation-db

# Start when needed
aws rds start-db-instance --db-instance-identifier veritas-foundation-db
```

### Production Optimization
1. **Right-size your instance**: Monitor CPU/memory usage
2. **Reserved Instances**: Save up to 60% with 1-year commitment
3. **Aurora Serverless**: Consider for variable workloads
4. **Storage optimization**: Use gp3 instead of gp2 for larger databases

## Monitoring Tools

### AWS Cost Explorer
- Track RDS spending
- Set up billing alerts
- Analyze usage patterns

### CloudWatch Metrics to Monitor
- DatabaseConnections
- CPUUtilization
- FreeStorageSpace
- ReadLatency/WriteLatency

### Setting Up Billing Alerts
```bash
# Create a billing alarm (requires AWS CLI configured)
aws cloudwatch put-metric-alarm \
    --alarm-name "RDS-High-Cost" \
    --alarm-description "Alert when RDS costs exceed $20" \
    --metric-name EstimatedCharges \
    --namespace AWS/Billing \
    --statistic Maximum \
    --period 86400 \
    --threshold 20 \
    --comparison-operator GreaterThanThreshold \
    --dimensions Name=Currency,Value=USD Name=ServiceName,Value=AmazonRDS \
    --evaluation-periods 1
```

## Cost Monitoring Script

Create a simple script to check your current RDS costs:

```bash
#!/bin/bash
# Get RDS costs for current month
aws ce get-cost-and-usage \
    --time-period Start=2024-12-01,End=2024-12-31 \
    --granularity MONTHLY \
    --metrics BlendedCost \
    --group-by Type=DIMENSION,Key=SERVICE \
    --filter file://rds-filter.json

# rds-filter.json content:
# {
#   "Dimensions": {
#     "Key": "SERVICE",
#     "Values": ["Amazon Relational Database Service"]
#   }
# }
```

## Alternative Low-Cost Options

If RDS is still too expensive, consider:

1. **Amazon Aurora Serverless v2**: Pay per request
2. **Self-managed PostgreSQL on EC2**: More work, lower cost
3. **Supabase**: Managed PostgreSQL with generous free tier
4. **PlanetScale**: MySQL-compatible with generous free tier
5. **Railway**: Simple deployment with PostgreSQL included

## Production Recommendations

When you're ready for production:

1. **Multi-AZ Deployment**: For high availability (+100% cost)
2. **Automated Backups**: 7-30 day retention
3. **Enhanced Monitoring**: Performance Insights
4. **Read Replicas**: For read-heavy workloads
5. **Encryption at Rest**: Required for sensitive data

## Cost Comparison with Alternatives

| Service | Free Tier | Paid Tier |
|---------|-----------|-----------|
| AWS RDS | $0 (12 months) | $13-17/month |
| Supabase | $0 (500MB) | $25/month |
| PlanetScale | $0 (5GB) | $29/month |
| Railway | $5/month | $20/month |
| Self-hosted EC2 | ~$5/month | $10-15/month |
