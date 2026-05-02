import type {
  BlogPost,
  BlogPostSummary,
  CaseStudy,
  ContactPayload,
  ContactResponse,
  Service,
  Testimonial,
} from "./types";

const API_BASE = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });
  if (!res.ok) {
    let detail: string | undefined;
    try {
      const data = await res.json();
      detail =
        typeof data?.detail === "string"
          ? data.detail
          : Array.isArray(data?.detail)
            ? data.detail.map((d: { msg?: string }) => d?.msg ?? "Invalid input").join(", ")
            : undefined;
    } catch {
      // ignore parsing errors
    }
    throw new Error(detail ?? `Request failed (${res.status})`);
  }
  return (await res.json()) as T;
}

export const api = {
  getServices: () => request<Service[]>("/api/services"),
  getTestimonials: () => request<Testimonial[]>("/api/testimonials"),
  getCaseStudies: () => request<CaseStudy[]>("/api/case-studies"),
  getBlogPosts: () => request<BlogPostSummary[]>("/api/blog"),
  getBlogPost: (slug: string) => request<BlogPost>(`/api/blog/${slug}`),
  submitContact: (payload: ContactPayload) =>
    request<ContactResponse>("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
