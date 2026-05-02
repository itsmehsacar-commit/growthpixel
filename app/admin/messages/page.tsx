import { redirect } from "next/navigation";
import { validateSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { MessagesClient } from "./messages-client";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ page?: string; search?: string; status?: string }>;
}

export default async function AdminMessagesPage({ searchParams }: PageProps) {
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
        { name: { contains: search } },
        { email: { contains: search } },
        { subject: { contains: search } },
      ],
    }),
  };

  const [messages, total] = await Promise.all([
    prisma.contactMessage.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.contactMessage.count({ where }),
  ]);

  return (
    <MessagesClient
      messages={messages}
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
