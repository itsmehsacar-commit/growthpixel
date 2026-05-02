import { redirect } from "next/navigation";
import { validateSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { AdminDashboardClient } from "./dashboard-client";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const user = await validateSession();
  if (!user) redirect("/admin/login");

  const [quoteCount, contactCount, newQuotes, newContacts] = await Promise.all([
    prisma.quoteRequest.count(),
    prisma.contactMessage.count(),
    prisma.quoteRequest.count({ where: { status: "new" } }),
    prisma.contactMessage.count({ where: { status: "new" } }),
  ]);

  return (
    <AdminDashboardClient
      stats={{
        totalQuotes: quoteCount,
        totalContacts: contactCount,
        newQuotes,
        newContacts,
      }}
      username={user.username}
    />
  );
}
