"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FileText,
  MessageSquare,
  AlertCircle,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { logoutAction } from "@/lib/actions";

interface AdminDashboardClientProps {
  stats: {
    totalQuotes: number;
    totalContacts: number;
    newQuotes: number;
    newContacts: number;
  };
  username: string;
}

export function AdminDashboardClient({
  stats,
  username,
}: AdminDashboardClientProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold text-secondary">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Welcome, {username}
            </span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card hover={false} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Quotes</p>
              <p className="text-2xl font-bold text-secondary">
                {stats.totalQuotes}
              </p>
            </div>
          </Card>
          <Card hover={false} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Messages</p>
              <p className="text-2xl font-bold text-secondary">
                {stats.totalContacts}
              </p>
            </div>
          </Card>
          <Card hover={false} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">New Quotes</p>
              <p className="text-2xl font-bold text-secondary">
                {stats.newQuotes}
              </p>
            </div>
          </Card>
          <Card hover={false} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">New Messages</p>
              <p className="text-2xl font-bold text-secondary">
                {stats.newContacts}
              </p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/admin/quotes">
            <Card className="flex items-center gap-4 cursor-pointer">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h2 className="font-semibold text-secondary">
                  Manage Quote Requests
                </h2>
                <p className="text-sm text-gray-600">
                  View, update, and manage all quote submissions.
                </p>
              </div>
            </Card>
          </Link>
          <Link href="/admin/messages">
            <Card className="flex items-center gap-4 cursor-pointer">
              <MessageSquare className="h-8 w-8 text-accent" />
              <div>
                <h2 className="font-semibold text-secondary">
                  Manage Contact Messages
                </h2>
                <p className="text-sm text-gray-600">
                  View, respond to, and manage all contact enquiries.
                </p>
              </div>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
}
