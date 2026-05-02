import os
import tempfile

os.environ.setdefault("DATABASE_URL", f"sqlite:///{tempfile.gettempdir()}/growthpixel-test.db")

from fastapi.testclient import TestClient  # noqa: E402

from app.db import init_db  # noqa: E402
from app.main import app  # noqa: E402

init_db()
client = TestClient(app)


def test_health() -> None:
    resp = client.get("/api/health")
    assert resp.status_code == 200
    assert resp.json() == {"status": "ok", "service": "growthpixel-api"}


def test_services_endpoint() -> None:
    resp = client.get("/api/services")
    assert resp.status_code == 200
    data = resp.json()
    assert isinstance(data, list)
    assert len(data) >= 4
    assert all("slug" in item and "title" in item for item in data)


def test_testimonials_endpoint() -> None:
    resp = client.get("/api/testimonials")
    assert resp.status_code == 200
    data = resp.json()
    assert len(data) >= 3
    assert all(item["rating"] >= 1 for item in data)


def test_case_studies_endpoint() -> None:
    resp = client.get("/api/case-studies")
    assert resp.status_code == 200
    data = resp.json()
    assert len(data) >= 1
    assert all("metrics" in item for item in data)


def test_blog_list_and_detail() -> None:
    resp = client.get("/api/blog")
    assert resp.status_code == 200
    posts = resp.json()
    assert len(posts) >= 1

    slug = posts[0]["slug"]
    detail = client.get(f"/api/blog/{slug}")
    assert detail.status_code == 200
    assert detail.json()["slug"] == slug
    assert "body" in detail.json()


def test_blog_detail_not_found() -> None:
    resp = client.get("/api/blog/does-not-exist")
    assert resp.status_code == 404


def test_contact_submission_persists() -> None:
    payload = {
        "name": "Test Lead",
        "email": "lead@example.com",
        "company": "Acme Co",
        "budget": "$5k-10k/mo",
        "services": ["seo", "ppc"],
        "message": "We'd love to chat about scaling demand.",
    }
    resp = client.post("/api/contact", json=payload)
    assert resp.status_code == 201
    body = resp.json()
    assert body["id"] > 0
    assert body["email"] == payload["email"]
    assert body["services"] == "seo,ppc"


def test_contact_validation_errors() -> None:
    resp = client.post(
        "/api/contact",
        json={"name": "", "email": "not-an-email", "message": ""},
    )
    assert resp.status_code == 422
