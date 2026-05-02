import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Section } from "../components/Section";
import { api } from "../lib/api";
import type { BlogPostSummary } from "../lib/types";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getBlogPosts()
      .then(setPosts)
      .catch((e) => setError(e instanceof Error ? e.message : "Failed to load"));
  }, []);

  return (
    <>
      <section className="container-page pt-16 pb-8 sm:pt-24">
        <div className="max-w-3xl">
          <span className="badge">Playbooks</span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Field notes from the <span className="gradient-text">growth trenches.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            The same playbooks, frameworks, and breakdowns we share with our
            clients — published in full so you can steal them.
          </p>
        </div>
      </section>

      <Section title="Latest posts" eyebrow="Blog">
        {error && (
          <p className="mb-6 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-200">
            {error}
          </p>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group surface-card surface-card-hover p-6 lg:p-7 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <span className="badge">{post.category}</span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="h-3.5 w-3.5" />
                  {post.read_time_minutes} min read
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-slate-400">
                <span>{post.author}</span>
                <span>{new Date(post.published_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}</span>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-white/80 group-hover:text-white transition">
                Read post
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
