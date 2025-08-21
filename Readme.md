# The Veritas Foundation

> Empowering Ideas, Transforming Lives

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/mohammedsaabiqsaha2023-gmailcoms-projects/v0-veritas-foundation-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/9gQdUudnCNk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

The Veritas Foundation is a comprehensive full-stack web application with **AWS RDS PostgreSQL database integration** dedicated to fostering innovation and creating opportunities that lead to lasting positive change in communities. This project provides a complete foundation website with production-ready backend API support for managing donations, contact forms, newsletter subscriptions, and more.

## 🌟 Features

### Frontend (Next.js)
- **Modern React/Next.js Architecture** - Server-side rendering and optimal performance
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Interactive Components** - Hero sections, achievement showcases, gallery, and more
- **University Logos Integration** - Showcase partner institutions
- **Contact Forms** - Easy ways for visitors to get in touch
- **Donation Interface** - Seamless donation experience

### Backend (Node.js/Express + PostgreSQL)
- **AWS RDS PostgreSQL Database** - Production-ready cloud database
- **RESTful API** - Comprehensive API for all foundation operations
- **Database-Powered Operations** - All data persisted to PostgreSQL
- **Contact Management** - Handle and track contact form submissions
- **Newsletter System** - Manage newsletter subscriptions with user database
- **Donation Processing** - Process and track donations with complete audit trail
- **Statistics Dashboard** - Real-time statistics from database
- **Security Features** - Input validation, CORS, security headers, SSL connections

## 🗄️ Database Architecture

### PostgreSQL Tables
- **`users`** - Newsletter subscribers and user accounts
- **`contact_messages`** - Contact form submissions with timestamps
- **`donations`** - Donation records with amounts and user relationships

### Database Features
- **AWS RDS PostgreSQL 17.4** - Latest stable PostgreSQL version
- **SSL Connections** - Encrypted database connections
- **Connection Pooling** - Optimized database performance
- **Automated Backups** - Built-in AWS backup system
- **Cost-Optimized** - Free tier eligible, ~$13-15/month after first year

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aaaikins/the-veritas-foundation.git
   cd the-veritas-foundation
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Configure Database Environment**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your AWS RDS credentials:
   # DB_HOST=your-rds-endpoint.amazonaws.com
   # DB_PORT=5432
   # DB_NAME=veritas_foundation
   # DB_USER=postgres
   # DB_PASS=your-secure-password
   ```

4. **Install backend dependencies**
   ```bash
   npm install
   ```

5. **Initialize Database Tables**
   ```bash
   node -e "require('./database').initializeDatabase()"
   ```

6. **Start the development servers**

   **Frontend (Terminal 1):**
   ```bash
   cd ../  # back to root
   npm run dev
   ```
   Frontend will be available at: `http://localhost:3000`

   **Backend (Terminal 2):**
   ```bash
   cd backend
   PORT=3001 node server.js
   ```
   Backend API will be available at: `http://localhost:3001`

7. **Test the API and Database**
   Visit `http://localhost:3001/api/health` to verify database connection.

## 📁 Project Structure

```
the-veritas-foundation/
├── 📁 app/                    # Next.js app directory
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── 📁 components/             # React components
│   ├── header.tsx
│   ├── hero.tsx
│   ├── achievements.tsx
│   ├── gallery.tsx
│   ├── footer.tsx
│   └── 📁 ui/                # Reusable UI components
├── 📁 backend/               # Express.js API server + Database
│   ├── server.js            # Main server file with DB connection
│   ├── routes.js            # Database-powered API routes
│   ├── database.js          # PostgreSQL connection module
│   ├── models.js            # Data models (legacy)
│   ├── middleware.js        # Custom middleware
│   ├── .env.example         # Environment variables template
│   ├── package.json
│   ├── README.md
│   └── 📁 public/
│       └── test.html        # API testing console
├── 📁 public/               # Static assets
├── 📁 lib/                  # Utility functions
├── 📁 hooks/                # React hooks
└── 📁 styles/               # Additional styles
```

## 🔧 API Endpoints

### Core Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | API information and documentation |
| `/api/health` | GET | System health check |
| `/api/statistics` | GET | Overall system statistics |

### Contact & Communication
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form |
| `/api/contacts` | GET | Get all contact submissions |
| `/api/newsletter` | POST | Subscribe to newsletter |
| `/api/newsletters` | GET | Get newsletter subscribers |

### Donations
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/donation` | POST | Process donation |
| `/api/donations` | GET | Get donation history |

### Scholars & Achievements
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/scholars` | GET/POST | Manage scholars |
| `/api/scholars/:id` | GET/PUT/DELETE | Individual scholar operations |
| `/api/achievements` | GET | Get foundation achievements |

### Media
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/gallery` | GET | Get gallery items |

## 🛠 Technologies Used

### Frontend
- **Framework:** Next.js 15.2.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js 4.x
- **Database:** PostgreSQL 17.4 (AWS RDS)
- **Database Driver:** pg (node-postgres)
- **Language:** JavaScript
- **Middleware:** CORS, Custom validation
- **Development:** Nodemon

### Development Tools
- **Package Manager:** npm/pnpm
- **Version Control:** Git
- **Deployment:** Vercel (Frontend)

## 📊 Current Statistics (Example Data)

- **30+** Scholars Supported Annually
- **1500+** Average SAT Score Achieved
- **$5M+** In Scholarship Funding Secured
- **Top-Tier** University Placements

## 🔒 Security Features

- Input validation and sanitization
- CORS configuration
- Security headers implementation
- Error handling and logging
- Environment variable management
- Rate limiting ready (configurable)

## 🚀 Deployment

### Frontend Deployment
The frontend is automatically deployed on Vercel and stays in sync with this repository.

**Live URL:** [https://vercel.com/mohammedsaabiqsaha2023-gmailcoms-projects/v0-veritas-foundation-website](https://vercel.com/mohammedsaabiqsaha2023-gmailcoms-projects/v0-veritas-foundation-website)

### Backend Deployment
The backend can be deployed to various platforms:

- **Heroku:** Ready for deployment with Procfile
- **Railway:** Simple deployment with environment variables
- **DigitalOcean App Platform:** Container-ready deployment
- **AWS/GCP/Azure:** Cloud platform deployment

## 🔄 Development Workflow

### Continue Building
Continue building your app on: **[https://v0.dev/chat/projects/9gQdUudnCNk](https://v0.dev/chat/projects/9gQdUudnCNk)**

### Database Integration
The backend is integrated with **AWS RDS PostgreSQL**:
- **Production Database:** AWS RDS PostgreSQL 17.4
- **Cost:** FREE for 12 months (AWS Free Tier), then ~$13-15/month
- **Features:** SSL connections, automated backups, connection pooling
- **Tables:** users, contact_messages, donations
- **Setup Guides:** See `DATABASE_SETUP.md` and `MANUAL_RDS_SETUP.md`

### Payment Integration (Future)
Ready for integration with:
- Stripe
- PayPal
- Square
- Other payment processors

## 📝 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (.env)
```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Database Configuration (AWS RDS PostgreSQL)
DB_HOST=your-rds-endpoint.amazonaws.com
DB_PORT=5432
DB_NAME=veritas_foundation
DB_USER=postgres
DB_PASS=your-secure-password
DB_SSL=true

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

See `backend/.env.example` for full configuration options including email, payment gateway, and JWT settings.

## 🗄️ Database Setup

### Quick Setup Options:

1. **Manual Setup (Recommended)**: Follow `MANUAL_RDS_SETUP.md`
2. **Automated Setup**: Use `aws-cli-commands-fixed.sh` 
3. **Infrastructure as Code**: Use `cloudformation-template.yml`

### Cost Information:
- **First 12 months**: FREE (AWS Free Tier)
- **After free tier**: ~$13-15/month
- **Instance**: db.t3.micro with 20GB storage
- **Monitoring**: See `RDS_COST_GUIDE.md`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email:** support@veritasfoundation.org
- **Website:** [https://veritas-foundation.vercel.app](https://veritas-foundation.vercel.app)
- **Issues:** [GitHub Issues](https://github.com/aaaikins/the-veritas-foundation/issues)

## 🙏 Acknowledgments

- Built with [v0.dev](https://v0.dev) for rapid prototyping
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Deployed on [Vercel](https://vercel.com)

---

*The Veritas Foundation - Empowering Ideas, Transforming Lives* 🌟