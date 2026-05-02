# GrowthPixel Backend

FastAPI service that powers the GrowthPixel marketing website.

## Endpoints

- `GET /api/health` — health check
- `GET /api/services` — list of marketing services
- `GET /api/testimonials` — list of client testimonials
- `GET /api/case-studies` — list of case study results
- `GET /api/blog` — list of blog posts (titles + excerpts)
- `GET /api/blog/{slug}` — single blog post body
- `POST /api/contact` — submit a contact form lead (persisted to SQLite)

## Run locally

```bash
uv sync --extra dev
uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Tests

```bash
uv run pytest
```
