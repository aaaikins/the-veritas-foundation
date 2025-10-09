# The Veritas Foundation

> Empowering Ideas, Transforming Lives

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/mohammedsaabiqsaha2023-gmailcoms-projects/v0-veritas-foundation-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/9gQdUudnCNk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

The Veritas Foundation is a comprehensive full-stack web application with **Python FastAPI backend** and **SQLite/PostgreSQL database integration** dedicated to fostering innovation and creating opportunities that lead to lasting positive change in communities. This project provides a complete foundation website with production-ready backend API support for managing donations, contact forms, newsletter subscriptions, and more.

## 🌟 Features

### Frontend (Next.js)
- **Modern React/Next.js Architecture** - Server-side rendering and optimal performance
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Interactive Components** - Multiple hero variants (slide, video, static), achievement showcases, gallery, and more
- **Rich Content Pages** - About section with founder, team, and mission pages
- **Scholar Programs** - Dedicated pages for undergraduate and graduate scholar programs
- **Impact Showcase** - Comprehensive impact and testimonials sections
- **University Logos Integration** - Showcase partner institutions with interactive display
- **Advanced Navigation** - Dropdown menus and responsive navigation system
- **Media Gallery** - Rich media support with videos and photo galleries by year
- **Get Involved Section** - Application forms and membership pages
- **Blog System** - Dynamic blog with slug-based routing
- **Donation Interface** - Enhanced donation experience with banners and stats
- **Success Stories** - Featured stories and testimonials showcase

### Backend (Python/FastAPI + SQLAlchemy)
- **FastAPI Framework** - High-performance async API with automatic OpenAPI docs
- **SQLAlchemy ORM** - Robust database operations with SQLite/PostgreSQL support
- **AWS S3 Integration** - File upload and storage capabilities
- **Clerk Authentication** - User authentication and authorization
- **JWT Tokens** - Secure API authentication
- **CORS Support** - Cross-origin resource sharing configured
- **Modular Architecture** - Organized routers for different features

## 🗄️ Database Architecture

### SQLAlchemy Models
The backend uses SQLAlchemy ORM with support for SQLite (default) and PostgreSQL.

### Database Features
- **SQLite Default** - Local database for development
- **PostgreSQL Support** - Production-ready with connection string configuration
- **AWS S3 Integration** - File storage for uploads
- **Automatic Migrations** - Database schema management
- **Connection Pooling** - Optimized database performance

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- pip (Python package manager)
- Git
- AWS Account (optional, for S3 and production database)

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

3. **Set up Python virtual environment**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

4. **Install Python dependencies**
   ```bash
   pip install fastapi uvicorn sqlalchemy pydantic-settings python-multipart python-jose[cryptography] passlib[bcrypt] python-dotenv boto3
   ```

5. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration (optional for basic setup)
   ```

6. **Initialize database**
   ```bash
   python -c "from app.database import Base, engine; Base.metadata.create_all(bind=engine)"
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
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```
   Backend API will be available at: `http://localhost:8000`

7. **Test the API**
   Visit `http://localhost:8000/docs` for interactive API documentation (Swagger UI)
   Visit `http://localhost:8000/health` for health check

## 📁 Project Structure

```
the-veritas-foundation/
├── 📁 app/                    # Next.js app directory
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page component
│   ├── not-found.tsx        # 404 page component
│   ├── 📁 about/             # About section pages
│   │   ├── page.tsx         # Main about page
│   │   ├── founder/         # Founder information page
│   │   ├── team/            # Team members page
│   │   └── what-we-do/      # Mission and programs page
│   ├── 📁 applications/      # Application forms and processes
│   ├── 📁 blogs/            # Blog system
│   │   ├── page.tsx         # Blog listing page
│   │   └── [slug]/          # Dynamic blog post pages
│   ├── 📁 donate/           # Donation pages
│   ├── 📁 gallery/          # Photo and media gallery
│   ├── 📁 get-involved/     # Engagement and participation
│   │   ├── apply/           # Application process
│   │   └── become-member/   # Membership information
│   ├── 📁 impact/           # Impact showcase and metrics
│   ├── 📁 join-us/         # Join organization pages
│   ├── 📁 scholars/         # Scholar programs
│   │   ├── page.tsx         # Main scholars page
│   │   ├── graduate/        # Graduate program information
│   │   └── undergraduate/   # Undergraduate program information
│   └── 📁 testimonials/     # Success stories and testimonials
├── 📁 components/             # React components
│   ├── header.tsx           # Header with advanced navigation
│   ├── hero.tsx             # Static hero component
│   ├── slide-hero.tsx       # Slideshow hero component
│   ├── video-hero.tsx       # Video background hero
│   ├── achievements.tsx     # Achievements showcase
│   ├── gallery.tsx          # Media gallery component
│   ├── testimonials.tsx     # Testimonials display
│   ├── success-stories.tsx  # Featured success stories
│   ├── featured-stories.tsx # Highlighted stories component
│   ├── donation-banner.tsx  # Donation call-to-action
│   ├── donation-form.tsx    # Donation processing form
│   ├── donation-stats.tsx   # Donation statistics display
│   ├── footer.tsx           # Footer component
│   ├── university-logos.tsx # University partnerships display
│   ├── team-members.tsx     # Team showcase component
│   └── 📁 ui/               # Reusable UI components
│       ├── navigation-dropdown.tsx # Advanced dropdown navigation
│       └── ...              # Other UI components
├── 📁 backend/               # FastAPI backend server
│   ├── main.py              # Main FastAPI application
│   └── 📁 app/              # Application modules
│       ├── config.py        # Application configuration
│       ├── database.py      # SQLAlchemy database setup
│       ├── models.py        # Database models
│       ├── clerk_auth.py    # Clerk authentication
│       ├── s3_service.py    # AWS S3 file service
│       └── 📁 routers/      # API route modules
│           ├── applications.py
│           ├── blogs.py     # Blog management
│           ├── donations.py # Donation processing
│           ├── gallery.py   # Media management
│           ├── testimonials.py # Testimonials management
│           └── ...          # Other route files
├── 📁 public/               # Static assets
│   ├── hero-image.jpg       # Hero section image
│   ├── logo.png             # Foundation logo
│   ├── 📁 gallery/          # Gallery images organized by year
│   │   ├── 2022-2023/       # Academic year 2022-2023 photos
│   │   └── 2023-2024/       # Academic year 2023-2024 photos
│   ├── 📁 videos/           # Video content
│   ├── 📁 blog/             # Blog post images
│   ├── 📁 testimonials/     # Testimonial photos
│   └── 📁 logos/            # University and partner logos
├── 📁 lib/                  # Utility functions
│   ├── homepage-config.ts   # Homepage configuration
│   └── utils.ts             # Utility functions
├── 📁 hooks/                # React custom hooks
├── .env.example             # Frontend environment template
├── package.json             # Frontend dependencies
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── HOMEPAGE-BANNERS.md     # Homepage banner configurations
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
| `/` | GET | API information |
| `/health` | GET | System health check |
| `/docs` | GET | Interactive API documentation (Swagger UI) |
| `/redoc` | GET | Alternative API documentation (ReDoc) |

### Authentication
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/*` | Various | Authentication endpoints |

### Content Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/blogs` | GET/POST | Blog posts management |
| `/api/events` | GET/POST | Events management |
| `/api/gallery` | GET/POST | Gallery management |
| `/api/programs` | GET/POST | Programs management |

### Administrative
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/dashboard` | GET | Dashboard data |
| `/api/reports` | GET/POST | Reports management |
| `/api/documents` | GET/POST | Document management |

### Financial
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/donations` | GET/POST | Donation management |

### User Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/beneficiaries` | GET/POST | Beneficiaries management |
| `/api/applications` | GET/POST | Applications management |

### File Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/uploads` | POST | File upload endpoint |

## 🛠 Technologies Used

### Frontend
- **Framework:** Next.js 15.2.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui with Radix UI primitives
- **Icons:** Lucide React + React Icons
- **Forms:** React Hook Form with Zod validation
- **Media:** Enhanced gallery with video support
- **Navigation:** Advanced dropdown and responsive navigation
- **Charts:** Recharts for data visualization

### Backend
- **Framework:** FastAPI
- **Language:** Python 3.8+
- **Database ORM:** SQLAlchemy
- **Database:** SQLite (default) / PostgreSQL
- **Authentication:** Clerk
- **File Storage:** AWS S3
- **API Documentation:** Automatic OpenAPI/Swagger
- **Security:** JWT tokens, CORS

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
The backend can be deployed to various platforms supporting Python applications:

**Current Structure:**
- ✅ FastAPI application with automatic API docs
- ✅ SQLAlchemy ORM with database flexibility
- ✅ Modular router architecture
- ✅ Environment-based configuration

**Deployment Platforms:**
- **Railway:** Python app deployment with PostgreSQL
- **Heroku:** Python app with easy scaling
- **DigitalOcean App Platform:** Container-ready deployment
- **AWS/GCP/Azure:** Cloud platform deployment
- **Vercel:** Serverless functions (with modifications)
- **Docker:** Containerized deployment

## 🔄 Development Workflow

### Recent Improvements (October 2025)
- **🎨 Enhanced UI Components** - Added multiple hero variants (slide, video, static)
- **� Expanded Page Structure** - Complete about section with founder, team, and mission pages
- **🎓 Scholar Programs** - Dedicated undergraduate and graduate program pages
- **🖼️ Rich Media Gallery** - Organized gallery with year-based categorization and video content
- **� Advanced Donation System** - Enhanced donation interface with banners, forms, and statistics
- **🏆 Success Stories** - Comprehensive testimonials and featured stories sections
- **🎯 Impact Showcase** - Dedicated impact metrics and achievements display
- **🤝 Get Involved Pages** - Streamlined application and membership processes
- **� Blog System** - Dynamic blog with slug-based routing and content management
- **🧭 Advanced Navigation** - Dropdown menus and responsive navigation system
- **📱 Mobile Optimization** - Enhanced mobile responsiveness across all components
- **� Component Architecture** - Modular, reusable component design

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
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (.env)
```env
# Database
DATABASE_URL=sqlite:///./veritas_foundation.db

# AWS S3 (optional)
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-bucket-name

# Clerk Authentication (optional)
CLERK_SECRET_KEY=your-clerk-secret-key

# JWT
SECRET_KEY=your-secret-key-here-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Application
DEBUG=true
API_V1_STR=/api/v1
CORS_ORIGINS=["http://localhost:3000"]
```

See `backend/.env.example` for full configuration options including email, payment gateway, and JWT settings.

## 🗄️ Database Setup

### Default Setup (SQLite):
No additional setup required. The application uses SQLite by default for local development.

### Production Setup (PostgreSQL):
Update the `DATABASE_URL` in `.env` to your PostgreSQL connection string:
```env
DATABASE_URL=postgresql://user:password@localhost/dbname
```

### Database Initialization:
Run the database initialization command from the backend directory:
```bash
python -c "from app.database import Base, engine; Base.metadata.create_all(bind=engine)"
```

### Supported Databases:
- **SQLite** - Default, no setup required
- **PostgreSQL** - Production recommended
- **MySQL** - Alternative option

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

> **✨ Repository Status: ENHANCED & FEATURE-COMPLETE**  
> Last updated: October 9, 2025  
> Major feature additions: Enhanced UI, Scholar programs, Rich media gallery, Advanced navigation

*The Veritas Foundation - Empowering Ideas, Transforming Lives* 🌟