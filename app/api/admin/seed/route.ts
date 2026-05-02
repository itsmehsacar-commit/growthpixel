import { NextResponse } from "next/server";
import { ensureAdminExists } from "@/lib/auth";

export async function POST() {
  try {
    await ensureAdminExists();
    return NextResponse.json({ message: "Admin user created successfully." });
  } catch {
    return NextResponse.json(
      { error: "Failed to create admin user." },
      { status: 500 }
    );
  }
}
