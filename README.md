# LinusServices — Professional Cleaning Services Website

A production-ready, full-stack web application for a professional cleaning services company in Australia. Built with Next.js 14, TypeScript, Tailwind CSS, Prisma, and SQLite.

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide Icons
- **Backend:** Next.js Server Actions
- **Database:** SQLite (dev) via Prisma ORM — ready for PostgreSQL in production
- **Auth:** Session-based admin authentication with bcrypt password hashing

## Features

- **Public Website:** Home, About, Services, Pricing, Request a Quote, Contact, FAQ, Privacy Policy, Terms of Service
- **SEO Optimised:** Meta tags, Open Graph, JSON-LD structured data (LocalBusiness)
- **Quote Request Form:** Full validation with Zod, saves to database, rate limiting
- **Contact Form:** Full validation, saves to database
- **Admin Dashboard:** Login, view/search/filter/paginate quote requests and contact messages, update status, delete records
- **Responsive Design:** Mobile-first, modern UI with subtle animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/itsmehsacar-commit/growthpixel.git
cd growthpixel

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your settings

# 4. Run Prisma migrations
npx prisma migrate dev --name init

# 5. Start the development server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Description | Default |
|---|---|---|
| `DATABASE_URL` | SQLite database path | `file:./dev.db` |
| `ADMIN_USERNAME` | Initial admin username | `admin` |
| `ADMIN_PASSWORD` | Initial admin password | `changeme123` |
| `SESSION_SECRET` | Secret for session management | (set a strong random value) |

### Creating the Admin User

The admin user is automatically created on first login attempt. The credentials are read from the `ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables.

Alternatively, you can seed the admin user via API:

```bash
curl -X POST http://localhost:3000/api/admin/seed
```

### Admin Dashboard

Access the admin dashboard at [http://localhost:3000/admin](http://localhost:3000/admin).

Default credentials:
- Username: `admin`
- Password: `changeme123`

**Important:** Change these credentials in your `.env` file before deploying to production.

## Project Structure

```
/app
  /(public)          # Public-facing pages
  /admin             # Admin dashboard
  /api               # API routes
/components
  /ui                # Reusable UI components
  /layout            # Navbar, Footer, JSON-LD
  /sections          # Homepage sections
  /forms             # Quote and Contact forms
/config              # Site configuration
/lib                 # Utilities, actions, auth, DB
/prisma              # Prisma schema and migrations
/types               # TypeScript types
```

## Deployment

### Vercel (Recommended)

1. Push the repo to GitHub
2. Connect to Vercel
3. Set environment variables in the Vercel dashboard
4. For production, switch to PostgreSQL:
   - Update `DATABASE_URL` to your PostgreSQL connection string
   - Change `provider` in `prisma/schema.prisma` from `"sqlite"` to `"postgresql"`

### Other Platforms

The app can be deployed to any platform that supports Next.js (Railway, Fly.io, AWS, etc.). Ensure you:

1. Set all required environment variables
2. Run `npx prisma migrate deploy` before starting
3. Use a production-grade database (PostgreSQL recommended)
4. Set a strong `SESSION_SECRET`
5. Change the default admin credentials

## Colour Palette

| Colour | Hex |
|---|---|
| Primary | `#0F766E` |
| Secondary | `#0F172A` |
| Accent | `#14B8A6` |
| Background | `#F8FAFC` |
| White | `#FFFFFF` |

## Licence

All rights reserved.
