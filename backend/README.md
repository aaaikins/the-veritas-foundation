# Veritas Foundation Backend API

A REST API backend for The Veritas Foundation website built with Node.js and Express.js.

## Features

- **Contact Form Management** - Handle contact form submissions
- **Newsletter Subscriptions** - Manage newsletter signups
- **Donation Processing** - Handle donation submissions (simulation)
- **Scholar Management** - CRUD operations for scholar profiles
- **Achievement Statistics** - Dynamic statistics for the foundation
- **Gallery Management** - Image gallery endpoints
- **Health Monitoring** - API health checks

## Getting Started

### File Structure

```
backend/
├── .env                 # Environment variables
├── .env.example        # Environment variables example
├── server.js           # Main server entry point
├── routes.js           # API routes and endpoints
├── database.js         # PostgreSQL database configuration
├── middleware.js       # Express middleware functions
├── package.json        # Project dependencies and scripts
├── README.md          # Project documentation
└── public/
    └── test.html      # Interactive API test console
```

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## API Endpoints

### General
- `GET /` - API information and available endpoints
- `GET /api/health` - Health check endpoint

### Contact Management
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contact submissions (admin)

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/newsletters` - Get all subscribers (admin)

### Donations
- `POST /api/donation` - Process donation
- `GET /api/donations` - Get donation history (admin)

### Achievements
- `GET /api/achievements` - Get foundation achievements/statistics

### Scholars
- `GET /api/scholars` - Get all scholars
- `POST /api/scholars` - Add new scholar
- `GET /api/scholars/:id` - Get specific scholar

### Gallery
- `GET /api/gallery` - Get gallery images

## API Usage Examples

### Submit Contact Form
```javascript
fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Inquiry about scholarships',
    message: 'I would like to learn more about your scholarship programs.'
  })
})
```

### Subscribe to Newsletter
```javascript
fetch('http://localhost:5000/api/newsletter', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'subscriber@example.com',
    name: 'Jane Smith'
  })
})
```

### Submit Donation
```javascript
fetch('http://localhost:5000/api/donation', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 100,
    donorName: 'John Donor',
    donorEmail: 'donor@example.com',
    message: 'Keep up the great work!',
    anonymous: false
  })
})
```

## Data Storage

Currently, the API uses in-memory storage for development purposes. For production, you should integrate with a proper database like:

- PostgreSQL
- MongoDB
- MySQL
- SQLite

## Security Considerations

For production deployment, consider adding:

- Input validation and sanitization
- Rate limiting
- Authentication and authorization
- HTTPS enforcement
- Database integration with proper security
- Environment variable management
- Logging and monitoring

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (not implemented yet)

## Environment Variables

See `.env.example` for available configuration options.

## CORS Configuration

The API is configured to accept requests from any origin in development. For production, update the CORS configuration to only allow requests from your frontend domain.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
