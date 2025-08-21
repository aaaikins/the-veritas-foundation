# Manual RDS Setup Guide (Easiest Method)

## Step-by-Step AWS Console Setup

### 1. Go to AWS RDS Console
Open [AWS RDS Console](https://console.aws.amazon.com/rds/) in your browser

### 2. Create Database
1. Click **"Create database"**
2. Choose **"Standard create"**
3. Engine type: **PostgreSQL**
4. Templates: **Free tier** ⭐
5. Settings:
   - DB instance identifier: `veritas-foundation-db`
   - Master username: `postgres`
   - Click **"Auto generate a password"** ✅
   - Save the password when prompted!

### 3. Instance Configuration
- DB instance class: **db.t3.micro** (Free tier eligible)
- Storage type: **General Purpose SSD (gp2)**
- Allocated storage: **20 GiB**

### 4. Connectivity
- Compute resource: **Don't connect to an EC2 compute resource**
- VPC: **Default VPC**
- Public access: **Yes** (so you can connect from your app)
- VPC security group: **Create new**
- New VPC security group name: `veritas-db-sg`

### 5. Additional Configuration
- Initial database name: `veritas_foundation`
- DB parameter group: **default.postgres15**
- Backup retention period: **1 day** (to save costs)
- ❌ Turn OFF "Enable Enhanced monitoring"
- ❌ Turn OFF "Enable Performance Insights"
- ❌ Turn OFF "Enable automated backups" (for development)

### 6. Click "Create database"

## After Creation (5-10 minutes)

### 1. Get Connection Details
- Go to your database in RDS console
- Note down the **Endpoint** (something like `veritas-foundation-db.xxxxx.us-east-1.rds.amazonaws.com`)
- Note down the **Port** (should be `5432`)

### 2. Configure Security Group
1. Go to **EC2 Console** → **Security Groups**
2. Find `veritas-db-sg`
3. Edit inbound rules
4. Add rule: **PostgreSQL** (port 5432) from **Anywhere** (0.0.0.0/0)
   - For production, restrict to specific IPs

### 3. Update Your Environment File
Edit `backend/.env`:
```env
DB_HOST=your-actual-endpoint.us-east-1.rds.amazonaws.com
DB_PORT=5432
DB_NAME=veritas_foundation
DB_USER=postgres
DB_PASS=your-generated-password
DB_SSL=true
```

### 4. Test Connection
```bash
cd backend
npm install pg
node -e "require('./database').testConnection()"
```

## Estimated Timeline
- Database creation: 5-10 minutes
- Total setup time: 15-20 minutes
- Monthly cost: **$0** (free tier) → **~$13-15** after 12 months

## Troubleshooting

### Connection Issues
- Check security group allows port 5432
- Verify endpoint URL is correct
- Ensure public access is enabled
- Check VPC settings

### Cost Monitoring
- Set up billing alerts in AWS Console
- Monitor usage in RDS dashboard
- Consider stopping DB during off-hours for development
