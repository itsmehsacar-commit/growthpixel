import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { api } from "../lib/api";
import type { BlogPost as BlogPostType } from "../lib/types";

export default function BlogPost() {
  const { slug = "" } = useParams<{ slug: string }>();
  return <BlogPostContent slug={slug} key={slug} />;
}

function BlogPostContent({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    api
      .getBlogPost(slug)
      .then((p) => {
        if (!cancelled) setPost(p);
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : "Not found");
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (error) {
    return (
      <section className="container-page py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-white">
          Post not found
        </h1>
        <p className="mt-2 text-slate-400">{error}</p>
        <Link to="/blog" className="btn-secondary mt-6">
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="container-page py-32 text-center text-slate-400">
        Loading post…
      </section>
    );
  }

  return (
    <article className="container-page max-w-3xl pt-16 pb-24 sm:pt-24">
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <span className="badge">{post.category}</span>
        <span className="flex items-center gap-1 text-xs text-slate-400">
          <Clock className="h-3.5 w-3.5" />
          {post.read_time_minutes} min read
        </span>
      </div>

      <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-slate-300">{post.excerpt}</p>

      <div className="mt-8 flex items-center gap-3 border-y border-white/5 py-5 text-sm text-slate-400">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-xs font-bold text-white">
          {post.author
            .split(" ")
            .map((p) => p[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <div className="text-white text-sm font-medium">{post.author}</div>
          <div className="text-xs">
            {new Date(post.published_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-300">
        {post.body.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
