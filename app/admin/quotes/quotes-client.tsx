"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Search,
  Trash2,
  ChevronLeft,
  ChevronRight,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { updateQuoteStatus, deleteQuote, logoutAction } from "@/lib/actions";

interface Quote {
  id: string;
  createdAt: Date;
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  suburb: string;
  postcode: string;
  preferredDate: string;
  preferredTime: string;
  frequency: string;
  additionalNotes: string | null;
  status: string;
}

interface QuotesClientProps {
  quotes: Quote[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  search: string;
  statusFilter: string;
  username: string;
}

const statusColors: Record<string, string> = {
  new: "bg-yellow-100 text-yellow-800",
  contacted: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
};

export function QuotesClient({
  quotes,
  pagination,
  search,
  statusFilter,
  username,
}: QuotesClientProps) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(search);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchInput) params.set("search", searchInput);
    if (statusFilter) params.set("status", statusFilter);
    router.push(`/admin/quotes?${params.toString()}`);
  };

  const handleStatusFilter = (status: string) => {
    const params = new URLSearchParams();
    if (searchInput) params.set("search", searchInput);
    if (status) params.set("status", status);
    router.push(`/admin/quotes?${params.toString()}`);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    await updateQuoteStatus(id, newStatus);
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this quote request?")) return;
    await deleteQuote(id);
    router.refresh();
  };

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
              Quote Requests
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden sm:block">
              {username}
            </span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4">
            <form onSubmit={handleSearch} className="flex gap-2 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search by name, email, suburb..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <Button type="submit" size="sm">
                Search
              </Button>
            </form>
            <div className="flex gap-2">
              {["", "new", "contacted", "completed"].map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    statusFilter === status
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {status || "All"}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-medium text-gray-600">
                    Name
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">
                    Service
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">
                    Location
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">
                    Date
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {quotes.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No quote requests found.
                    </td>
                  </tr>
                ) : (
                  quotes.map((quote) => (
                    <tr
                      key={quote.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-secondary">
                            {quote.fullName}
                          </p>
                          <p className="text-xs text-gray-500">{quote.email}</p>
                          <p className="text-xs text-gray-500">{quote.phone}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-gray-700 capitalize">
                          {quote.serviceType.replace(/-/g, " ")}
                        </p>
                        <p className="text-xs text-gray-500 capitalize">
                          {quote.propertyType} &middot; {quote.bedrooms}BR{" "}
                          {quote.bathrooms}BA
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-gray-700">{quote.suburb}</p>
                        <p className="text-xs text-gray-500">
                          {quote.postcode}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {new Date(quote.createdAt).toLocaleDateString("en-AU")}
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={quote.status}
                          onChange={(e) =>
                            handleStatusChange(quote.id, e.target.value)
                          }
                          className={`text-xs font-medium px-2 py-1 rounded-full border-0 cursor-pointer ${
                            statusColors[quote.status] || "bg-gray-100"
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleDelete(quote.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {pagination.totalPages > 1 && (
            <div className="p-4 border-t border-gray-200 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
                {Math.min(pagination.page * pagination.limit, pagination.total)}{" "}
                of {pagination.total} results
              </p>
              <div className="flex gap-2">
                <Link
                  href={`/admin/quotes?page=${pagination.page - 1}${
                    search ? `&search=${search}` : ""
                  }${statusFilter ? `&status=${statusFilter}` : ""}`}
                  className={`p-2 rounded-lg border ${
                    pagination.page <= 1
                      ? "opacity-50 pointer-events-none"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Link>
                <Link
                  href={`/admin/quotes?page=${pagination.page + 1}${
                    search ? `&search=${search}` : ""
                  }${statusFilter ? `&status=${statusFilter}` : ""}`}
                  className={`p-2 rounded-lg border ${
                    pagination.page >= pagination.totalPages
                      ? "opacity-50 pointer-events-none"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
