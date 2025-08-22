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
- **Interactive Test Console** - Built-in API testing interface at `/test.html`
- **Security Features** - Input validation, CORS, security headers, SSL connections
- **Clean Architecture** - Streamlined codebase with only essential files

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
- AWS Account (for database)

### Repository Status
✅ **Clean & Organized** - All duplicate files removed  
✅ **Up-to-date Documentation** - Current setup instructions  
✅ **Streamlined Structure** - Easy to navigate and understand  
✅ **Production Ready** - Optimized for deployment  

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
   cd backend
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
   npm run dev
   ```
   Backend API will be available at: `http://localhost:5000`

7. **Test the API and Database**
   Visit `http://localhost:5000/api/health` to verify database connection.
   Use the interactive test console at: `http://localhost:5000/test.html`

## 📁 Project Structure

```
the-veritas-foundation/
├── 📁 app/                    # Next.js app directory
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page component
│   └── not-found.tsx        # 404 page component
├── 📁 components/             # React components
│   ├── header.tsx           # Header component
│   ├── hero.tsx             # Hero section component
│   ├── achievements.tsx     # Achievements showcase
│   ├── gallery.tsx          # Image gallery component
│   ├── footer.tsx           # Footer component
│   ├── university-logos.tsx # University logos display
│   └── 📁 ui/               # Reusable UI components
├── 📁 backend/               # Express.js API server
│   ├── server.js            # Main server entry point
│   ├── routes.js            # API routes and endpoints
│   ├── database.js          # PostgreSQL connection & queries
│   ├── middleware.js        # Express middleware functions
│   ├── .env.example         # Backend environment template
│   ├── package.json         # Backend dependencies
│   └── 📁 public/
│       └── test.html        # Interactive API test console
├── 📁 public/               # Static assets
│   ├── hero-image.jpg       # Hero section image
│   ├── logo.png             # Foundation logo
│   └── 📁 gallery/          # Gallery images
├── 📁 lib/                  # Utility functions
├── 📁 hooks/                # React custom hooks
├── 📁 styles/               # Additional styles
├── .env.example             # Frontend environment template
├── package.json             # Frontend dependencies
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── DATABASE_SETUP.md       # Database setup instructions
├── MANUAL_RDS_SETUP.md     # Manual RDS setup guide
├── RDS_COST_GUIDE.md       # AWS RDS cost information
├── aws-cli-commands-fixed.sh # AWS CLI setup script
├── cloudformation-template.yml # Infrastructure as Code
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                 # MIT license
└── README.md               # Project documentation
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
- **Security:** CORS, Input validation, Security headers
- **Testing:** Interactive HTML test console
- **Development:** Nodemon for hot reloading

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
The backend has been streamlined for easy deployment to various platforms:

**Current Structure:**
- ✅ Clean, minimal file structure (6 core files)
- ✅ No duplicate or unnecessary files
- ✅ Optimized for production deployment
- ✅ Clear documentation and setup

**Deployment Platforms:**
- **Heroku:** Ready for deployment with environment variables
- **Railway:** Simple deployment with PostgreSQL integration
- **DigitalOcean App Platform:** Container-ready deployment
- **AWS/GCP/Azure:** Cloud platform deployment
- **Vercel:** Serverless functions (with modifications)

## 🔄 Development Workflow

### Recent Improvements (August 2025)
- **🧹 Repository Cleanup** - Removed duplicate and unnecessary files
- **📁 Organized Structure** - Clean, logical file organization
- **📝 Updated Documentation** - Comprehensive and accurate information
- **🛡️ Enhanced Security** - Improved .gitignore for better protection
- **🔧 Simplified Setup** - Streamlined installation and deployment process
- **📊 Better Organization** - Clear separation of concerns between frontend/backend
- **🗂️ Documentation Structure** - Organized setup guides and cost information

### File Organization
- **Core Files** - Essential project files in root directory
- **Setup Guides** - Database and AWS setup documentation  
- **Infrastructure** - CloudFormation templates and CLI scripts
- **No Duplicates** - All duplicate files removed for clarity
- **Clean Backend** - Streamlined backend with only necessary files

#### Files Cleaned Up:
- ❌ `aws-cli-commands 2.sh` (duplicate)
- ❌ `aws-cli-commands.sh` (empty duplicate)  
- ❌ `aws-rds-setup 2.md` (duplicate)
- ❌ `aws-rds-setup.md` (empty duplicate)
- ❌ `amplify.yml` (not using Amplify)
- ❌ `CLEANUP_SUMMARY.md` (temporary file)
- ❌ `DOCUMENTATION_UPDATES.md` (temporary file)

#### Remaining Essential Files:
- ✅ `aws-cli-commands-fixed.sh` - Working AWS setup script
- ✅ `DATABASE_SETUP.md` - Database setup guide
- ✅ `MANUAL_RDS_SETUP.md` - Manual setup instructions
- ✅ `RDS_COST_GUIDE.md` - Cost breakdown and optimization
- ✅ `cloudformation-template.yml` - Infrastructure as Code
- ✅ `CONTRIBUTING.md` - Contribution guidelines

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
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (.env)
```env
# Server Configuration
PORT=5000
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

1. **Manual Setup (Recommended)**: Follow [`MANUAL_RDS_SETUP.md`](MANUAL_RDS_SETUP.md)
2. **Automated Setup**: Use [`aws-cli-commands-fixed.sh`](aws-cli-commands-fixed.sh) 
3. **Infrastructure as Code**: Use [`cloudformation-template.yml`](cloudformation-template.yml)

### Documentation Available:
- [`DATABASE_SETUP.md`](DATABASE_SETUP.md) - General database setup guide
- [`MANUAL_RDS_SETUP.md`](MANUAL_RDS_SETUP.md) - Step-by-step manual setup
- [`RDS_COST_GUIDE.md`](RDS_COST_GUIDE.md) - Detailed cost breakdown and optimization

### Cost Information:
- **First 12 months**: FREE (AWS Free Tier)
- **After free tier**: ~$13-15/month
- **Instance**: db.t3.micro with 20GB storage
- **Features**: SSL connections, automated backups, connection pooling

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

> **✨ Repository Status: CLEAN & ORGANIZED**  
> Last cleaned: August 21, 2025  
> All duplicate files removed, documentation updated, structure optimized

*The Veritas Foundation - Empowering Ideas, Transforming Lives* 🌟