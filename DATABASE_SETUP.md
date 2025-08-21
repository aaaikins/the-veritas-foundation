# RDS Database Setup Guide

## Quick Setup (Recommended)

### 1. Install PostgreSQL client and AWS CLI
```bash
# Install PostgreSQL client (for database operations)
brew install postgresql

# Install AWS CLI (if not already installed)
brew install awscli

# Configure AWS CLI with your credentials
aws configure
```

### 2. Create the database using AWS CLI
```bash
# Make the script executable
chmod +x aws-cli-commands.sh

# Run the automated setup script
./aws-cli-commands.sh
```

### 3. Install dependencies in your backend
```bash
cd backend
npm install pg
```

### 4. Set up your environment variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your actual database credentials
# Replace the placeholders with values from the setup script output
```

### 5. Test the database connection
```bash
# Run the database initialization
node -e "require('./database').testConnection()"

# Initialize database tables (run once)
node -e "require('./database').initializeDatabase()"
```

## Manual Setup Alternative

If you prefer to set up manually through AWS Console:

1. Go to [AWS RDS Console](https://console.aws.amazon.com/rds/)
2. Click "Create database"
3. Choose:
   - Engine: PostgreSQL
   - Template: Free tier
   - DB instance identifier: `veritas-foundation-db`
   - Master username: `postgres`
   - Auto generate password (save it!)
   - Instance class: db.t3.micro
   - Storage: 20 GB
   - Disable Multi-AZ
   - Create new security group
4. After creation (5-10 minutes), note down the endpoint
5. Update your `.env` file with the connection details

## Cost Optimization Tips

1. **Use Free Tier**: db.t3.micro is free for first 12 months
2. **Single AZ**: Avoid Multi-AZ for development
3. **Minimal Storage**: Start with 20GB, you can increase later
4. **Short Backup Retention**: Use 1 day for dev, 7 days for production
5. **No Enhanced Monitoring**: Basic CloudWatch is sufficient
6. **Turn off Performance Insights**: Save costs for development

## Security Considerations

1. **VPC Security Groups**: Only allow necessary IP ranges
2. **SSL Connections**: Always use SSL in production
3. **Strong Passwords**: Use generated passwords
4. **Regular Updates**: Keep PostgreSQL version updated
5. **Backup Strategy**: Test your backups regularly

## Monitoring

- Use AWS CloudWatch for basic monitoring
- Set up billing alerts to avoid unexpected costs
- Monitor database connections and performance

## Next Steps

1. Set up your database schema
2. Create API endpoints that use the database
3. Add proper error handling
4. Set up database migrations
5. Configure automated backups for production
