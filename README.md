# GrowthPixel

A full-stack marketing site for **GrowthPixel**, a senior-led digital marketing studio offering SEO, paid media, social media, content marketing, analytics, and brand work.

The repo is split into two apps:

- **`backend/`** — FastAPI service that powers the contact form and content endpoints (services, testimonials, case studies, blog posts). SQLite is used for contact submission storage.
- **`frontend/`** — React + Vite + TypeScript SPA styled with Tailwind CSS. Modern dark-mode design with gradients, animations, and a fully responsive layout.

## Pages

- `/` — Landing page with hero, services, value props, case studies, process, testimonials, and CTA
- `/services` — Full services catalog with engagement tiers
- `/work` — Case studies grid with metrics
- `/pricing` — Pricing tiers + FAQ
- `/blog` — Blog index pulling from API
- `/blog/:slug` — Blog post detail
- `/about` — Team + values
- `/contact` — Multi-field contact form posting to the backend

## Local development

### Backend

```bash
cd backend
uv sync --extra dev
uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API serves at `http://localhost:8000` and the OpenAPI docs at `http://localhost:8000/docs`.

Run tests with:

```bash
uv run pytest
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app serves at `http://localhost:5173`. Vite's dev server proxies `/api/*` to the local backend on port 8000, so no extra config is needed when both are running locally.

For a production build (e.g., when deploying separately from the backend):

```bash
VITE_API_URL=https://your-backend.example.com npm run build
```

## Project structure

```
growthpixel/
├── backend/                 # FastAPI app
│   ├── app/
│   │   ├── main.py          # API routes
│   │   ├── content.py       # Static services / testimonials / blog content
│   │   ├── db.py            # SQLAlchemy models
│   │   ├── schemas.py       # Pydantic schemas
│   │   └── config.py
│   └── tests/
└── frontend/                # React + Vite + Tailwind SPA
    ├── src/
    │   ├── components/      # Reusable UI (Header, Footer, ServiceCard, ...)
    │   ├── pages/           # Route components
    │   ├── lib/             # API client + types
    │   └── App.tsx
    └── tailwind.config.js
```

## Deploying

- **Backend** — deploys cleanly to Fly.io. A FastAPI app + SQLite volume is enough; configure `CORS_ORIGINS` to your frontend's origin and `DATABASE_URL` if you want Postgres.
- **Frontend** — `npm run build` produces a static `dist/` folder you can host anywhere (Vercel, Netlify, S3, Cloudflare Pages, devinapps). Set `VITE_API_URL` at build time to point at the deployed backend.

## License

MIT
