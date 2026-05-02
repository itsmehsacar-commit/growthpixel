from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.config import settings
from app.content import BLOG_POSTS, CASE_STUDIES, SERVICES, TESTIMONIALS
from app.db import ContactSubmission, get_db, init_db
from app.schemas import (
    BlogPost,
    BlogPostSummary,
    CaseStudy,
    ContactCreate,
    ContactResponse,
    HealthResponse,
    Service,
    Testimonial,
)


@asynccontextmanager
async def lifespan(_: FastAPI):
    init_db()
    yield


app = FastAPI(
    title="GrowthPixel API",
    description="Backend API for the GrowthPixel digital marketing website.",
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health", response_model=HealthResponse)
def health() -> HealthResponse:
    return HealthResponse(status="ok", service="growthpixel-api")


@app.get("/api/services", response_model=list[Service])
def list_services() -> list[Service]:
    return SERVICES


@app.get("/api/testimonials", response_model=list[Testimonial])
def list_testimonials() -> list[Testimonial]:
    return TESTIMONIALS


@app.get("/api/case-studies", response_model=list[CaseStudy])
def list_case_studies() -> list[CaseStudy]:
    return CASE_STUDIES


@app.get("/api/blog", response_model=list[BlogPostSummary])
def list_blog_posts() -> list[BlogPostSummary]:
    return [
        BlogPostSummary(
            slug=p.slug,
            title=p.title,
            excerpt=p.excerpt,
            author=p.author,
            read_time_minutes=p.read_time_minutes,
            category=p.category,
            published_at=p.published_at,
        )
        for p in BLOG_POSTS
    ]


@app.get("/api/blog/{slug}", response_model=BlogPost)
def get_blog_post(slug: str) -> BlogPost:
    for post in BLOG_POSTS:
        if post.slug == slug:
            return post
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Post not found")


@app.post(
    "/api/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_contact(payload: ContactCreate, db: Session = Depends(get_db)) -> ContactResponse:
    services_csv = ",".join(payload.services) if payload.services else None
    submission = ContactSubmission(
        name=payload.name.strip(),
        email=payload.email,
        company=payload.company.strip() if payload.company else None,
        budget=payload.budget,
        services=services_csv,
        message=payload.message.strip(),
    )
    db.add(submission)
    db.commit()
    db.refresh(submission)
    return ContactResponse.model_validate(submission)
