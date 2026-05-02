"""Static marketing content served by the API.

Kept in-code so the frontend can render rich pages without needing a CMS.
"""

from app.schemas import BlogPost, CaseStudy, Service, Testimonial

SERVICES: list[Service] = [
    Service(
        slug="seo",
        title="Search Engine Optimization",
        tagline="Rank where it matters most.",
        description=(
            "Technical, on-page, and off-page SEO strategies that compound over time. We audit, "
            "fix, and scale organic traffic for sustainable pipeline growth."
        ),
        icon="search",
        accent="from-violet-500 to-fuchsia-500",
        bullets=[
            "Technical SEO audits & Core Web Vitals fixes",
            "Keyword research mapped to buying intent",
            "Content briefs, optimization & internal linking",
            "Authoritative link building outreach",
        ],
    ),
    Service(
        slug="ppc",
        title="Paid Media & PPC",
        tagline="ROAS-obsessed paid acquisition.",
        description=(
            "Performance media across Google, Meta, LinkedIn, and TikTok. We blend creative, "
            "audience strategy, and incrementality testing to drive efficient revenue."
        ),
        icon="target",
        accent="from-cyan-400 to-blue-600",
        bullets=[
            "Full-funnel Google & Meta Ads management",
            "LinkedIn ABM campaigns for B2B pipeline",
            "Conversion tracking & GA4 / server-side setup",
            "Creative testing frameworks & UGC ad ops",
        ],
    ),
    Service(
        slug="social",
        title="Social Media Marketing",
        tagline="Build a brand people remember.",
        description=(
            "Organic social strategies that turn scrolls into community. We craft content "
            "systems that grow followers, engagement, and share of voice."
        ),
        icon="sparkles",
        accent="from-pink-500 to-rose-500",
        bullets=[
            "Channel strategy across Instagram, LinkedIn, X & TikTok",
            "Short-form video production & hooks library",
            "Community management & DM funnels",
            "Influencer & creator partnerships",
        ],
    ),
    Service(
        slug="content",
        title="Content Marketing",
        tagline="Stories that drive demand.",
        description=(
            "Editorial-grade content engines: SEO articles, thought leadership, lifecycle "
            "email, and lead magnets that move prospects through every funnel stage."
        ),
        icon="pen",
        accent="from-amber-400 to-orange-500",
        bullets=[
            "SEO content production at scale",
            "Thought leadership & ghostwriting",
            "Lifecycle email & newsletter strategy",
            "Lead magnets, ebooks & gated playbooks",
        ],
    ),
    Service(
        slug="analytics",
        title="Analytics & CRO",
        tagline="Decisions backed by data.",
        description=(
            "Wire up clean attribution, dashboards, and experiments. We obsess over the "
            "metrics that move revenue — not vanity numbers."
        ),
        icon="chart",
        accent="from-emerald-400 to-teal-600",
        bullets=[
            "GA4, Looker Studio & warehouse dashboards",
            "Server-side tracking & attribution modeling",
            "Landing page CRO & A/B testing",
            "Marketing mix & incrementality analysis",
        ],
    ),
    Service(
        slug="branding",
        title="Brand & Creative",
        tagline="Look like the category leader.",
        description=(
            "Strategic brand systems and conversion-ready creative. From visual identity to "
            "ad creative, we make sure every pixel pulls its weight."
        ),
        icon="palette",
        accent="from-indigo-500 to-purple-600",
        bullets=[
            "Brand strategy, positioning & messaging",
            "Visual identity systems & design tokens",
            "Conversion-focused landing page design",
            "Performance ad creative & motion design",
        ],
    ),
]


TESTIMONIALS: list[Testimonial] = [
    Testimonial(
        name="Priya Shah",
        role="Head of Growth",
        company="Lumen Health",
        quote=(
            "GrowthPixel rebuilt our paid acquisition stack in 60 days. We cut CAC by 38% "
            "while doubling qualified pipeline — they actually understand the numbers."
        ),
        avatar_initials="PS",
        rating=5,
    ),
    Testimonial(
        name="Marcus Chen",
        role="VP Marketing",
        company="Northwind SaaS",
        quote=(
            "Their SEO team is on another level. We went from page 4 to top-3 for our money "
            "keywords in eight months, and inbound demos are up 4x."
        ),
        avatar_initials="MC",
        rating=5,
    ),
    Testimonial(
        name="Elena Rodriguez",
        role="Founder & CEO",
        company="Brewly",
        quote=(
            "Working with GrowthPixel feels like having a senior in-house team. The strategy, "
            "creative, and reporting are tighter than any agency we've worked with."
        ),
        avatar_initials="ER",
        rating=5,
    ),
    Testimonial(
        name="David Okafor",
        role="CMO",
        company="Vela Logistics",
        quote=(
            "We hired them for PPC and they ended up upgrading our analytics, CRO, and landing "
            "pages too. ROAS jumped from 1.8 to 4.6 in two quarters."
        ),
        avatar_initials="DO",
        rating=5,
    ),
]


CASE_STUDIES: list[CaseStudy] = [
    CaseStudy(
        slug="lumen-health-paid",
        client="Lumen Health",
        industry="Digital health",
        headline="-38% CAC, +112% MQLs in 90 days",
        summary=(
            "Rebuilt paid search & paid social from the ground up. New creative testing "
            "framework, server-side tracking, and audience segmentation unlocked efficient scale."
        ),
        metrics=[
            {"label": "CAC", "value": "-38%"},
            {"label": "MQLs", "value": "+112%"},
            {"label": "ROAS", "value": "3.2x"},
        ],
    ),
    CaseStudy(
        slug="northwind-seo",
        client="Northwind SaaS",
        industry="B2B SaaS",
        headline="4x demo pipeline from organic search",
        summary=(
            "Technical SEO overhaul, topical content clusters, and a programmatic comparison "
            "hub took organic traffic from 22K to 184K monthly sessions."
        ),
        metrics=[
            {"label": "Organic traffic", "value": "+736%"},
            {"label": "Demo pipeline", "value": "4.0x"},
            {"label": "Top-3 keywords", "value": "127"},
        ],
    ),
    CaseStudy(
        slug="brewly-social",
        client="Brewly",
        industry="DTC e-commerce",
        headline="0 → 184K social followers, 6.1x ROAS",
        summary=(
            "Built an end-to-end content engine across TikTok and Instagram, paired with "
            "creator partnerships and a UGC-driven Meta Ads strategy."
        ),
        metrics=[
            {"label": "Followers", "value": "184K"},
            {"label": "Meta ROAS", "value": "6.1x"},
            {"label": "AOV", "value": "+24%"},
        ],
    ),
]


BLOG_POSTS: list[BlogPost] = [
    BlogPost(
        slug="2025-paid-search-playbook",
        title="The 2025 Paid Search Playbook for Lean Teams",
        excerpt=(
            "Google's AI-driven auctions reward signal quality over manual tweaks. Here's the "
            "exact account structure we use to scale paid search without burning budget."
        ),
        author="GrowthPixel Team",
        read_time_minutes=8,
        category="Paid Media",
        published_at="2025-03-12",
        body=(
            "Modern paid search is less about manual bid tweaks and more about feeding Google's "
            "models the right signals. We cover account structure, conversion modeling, and the "
            "creative pipelines you need to compete in 2025.\n\n"
            "Topics include: smart bidding strategy selection, value-based bidding setup, "
            "first-party data activation, and how to design a creative testing cadence that "
            "compounds learnings month over month."
        ),
    ),
    BlogPost(
        slug="programmatic-seo-without-spam",
        title="Programmatic SEO Without the Spam",
        excerpt=(
            "Programmatic pages can drive massive organic traffic — or get you de-indexed. "
            "Here's how to build a 10,000-page hub that Google actually loves."
        ),
        author="Priya Nair",
        read_time_minutes=11,
        category="SEO",
        published_at="2025-02-04",
        body=(
            "We walk through the four pillars of high-quality programmatic SEO: a defensible "
            "data moat, intent-mapped templates, internal linking architecture, and human "
            "editorial review. Includes our exact QA checklist and a case study from a B2B "
            "SaaS client that hit 184K monthly sessions in eight months."
        ),
    ),
    BlogPost(
        slug="ugc-creative-pipeline",
        title="Building a UGC Creative Pipeline That Doesn't Burn Out",
        excerpt=(
            "Performance creative is the new targeting. Here's the operational model we use to "
            "ship 40+ UGC ad variants per month without sacrificing brand quality."
        ),
        author="Jordan Lee",
        read_time_minutes=7,
        category="Creative",
        published_at="2025-01-18",
        body=(
            "We break down our creator sourcing playbook, brief templates, post-production "
            "workflow, and the lightweight tagging system that lets us learn what's working "
            "across thousands of variants."
        ),
    ),
    BlogPost(
        slug="ga4-server-side-tracking",
        title="A No-Nonsense Guide to Server-Side Tracking with GA4",
        excerpt=(
            "ITP, ad blockers, and consent banners are eating your data. Server-side tracking "
            "is no longer optional — here's how to set it up in a weekend."
        ),
        author="GrowthPixel Team",
        read_time_minutes=9,
        category="Analytics",
        published_at="2024-12-09",
        body=(
            "Step-by-step guide to deploying a server-side GTM container on Google Cloud, "
            "wiring it up to GA4, Meta CAPI, and Google Ads, and validating data quality. "
            "Includes a free tagging spec template."
        ),
    ),
]
