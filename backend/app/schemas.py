from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    company: str | None = Field(default=None, max_length=160)
    budget: str | None = Field(default=None, max_length=40)
    services: list[str] | None = Field(default=None)
    message: str = Field(min_length=1, max_length=5000)


class ContactResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    email: EmailStr
    company: str | None
    budget: str | None
    services: str | None
    message: str
    created_at: datetime


class Service(BaseModel):
    slug: str
    title: str
    tagline: str
    description: str
    icon: str
    bullets: list[str]
    accent: str


class Testimonial(BaseModel):
    name: str
    role: str
    company: str
    quote: str
    avatar_initials: str
    rating: int


class CaseStudy(BaseModel):
    slug: str
    client: str
    industry: str
    headline: str
    summary: str
    metrics: list[dict[str, str]]


class BlogPostSummary(BaseModel):
    slug: str
    title: str
    excerpt: str
    author: str
    read_time_minutes: int
    category: str
    published_at: str


class BlogPost(BlogPostSummary):
    body: str


class HealthResponse(BaseModel):
    status: str
    service: str
