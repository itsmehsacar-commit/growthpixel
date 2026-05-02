import { redirect } from "next/navigation";
import { validateSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { QuotesClient } from "./quotes-client";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ page?: string; search?: string; status?: string }>;
}

export default async function AdminQuotesPage({ searchParams }: PageProps) {
  const user = await validateSession();
  if (!user) redirect("/admin/login");

  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || "1", 10));
  const limit = 10;
  const search = params.search || "";
  const status = params.status || "";

  const where = {
    ...(status && { status }),
    ...(search && {
      OR: [
        { fullName: { contains: search } },
        { email: { contains: search } },
        { suburb: { contains: search } },
        { phone: { contains: search } },
      ],
    }),
  };

  const [quotes, total] = await Promise.all([
    prisma.quoteRequest.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.quoteRequest.count({ where }),
  ]);

  return (
    <QuotesClient
      quotes={quotes}
      pagination={{
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      }}
      search={search}
      statusFilter={status}
      username={user.username}
    />
  );
}
