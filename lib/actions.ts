"use server";

import { prisma } from "./db";
import { quoteFormSchema, contactFormSchema } from "./validations";
import { rateLimit } from "./rate-limit";
import { revalidatePath } from "next/cache";
import {
  verifyCredentials,
  createSession,
  destroySession,
  validateSession,
  ensureAdminExists,
} from "./auth";

export async function submitQuote(formData: unknown) {
  const rateLimitResult = rateLimit("quote-form");
  if (!rateLimitResult.success) {
    return {
      success: false,
      error: "Too many requests. Please try again in a minute.",
    };
  }

  const parsed = quoteFormSchema.safeParse(formData);
  if (!parsed.success) {
    return {
      success: false,
      error: "Validation failed. Please check your inputs.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.quoteRequest.create({
      data: parsed.data,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}

export async function submitContact(formData: unknown) {
  const rateLimitResult = rateLimit("contact-form");
  if (!rateLimitResult.success) {
    return {
      success: false,
      error: "Too many requests. Please try again in a minute.",
    };
  }

  const parsed = contactFormSchema.safeParse(formData);
  if (!parsed.success) {
    return {
      success: false,
      error: "Validation failed. Please check your inputs.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contactMessage.create({
      data: parsed.data,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}

export async function loginAction(formData: {
  username: string;
  password: string;
}) {
  await ensureAdminExists();

  const user = await verifyCredentials(formData.username, formData.password);
  if (!user) {
    return { success: false, error: "Invalid username or password." };
  }

  await createSession(user.id);
  return { success: true };
}

export async function logoutAction() {
  await destroySession();
  return { success: true };
}

export async function updateQuoteStatus(id: string, status: string) {
  const user = await validateSession();
  if (!user) return { success: false, error: "Unauthorised." };

  await prisma.quoteRequest.update({
    where: { id },
    data: { status },
  });

  revalidatePath("/admin/quotes");
  return { success: true };
}

export async function deleteQuote(id: string) {
  const user = await validateSession();
  if (!user) return { success: false, error: "Unauthorised." };

  await prisma.quoteRequest.delete({ where: { id } });

  revalidatePath("/admin/quotes");
  return { success: true };
}

export async function updateContactStatus(id: string, status: string) {
  const user = await validateSession();
  if (!user) return { success: false, error: "Unauthorised." };

  await prisma.contactMessage.update({
    where: { id },
    data: { status },
  });

  revalidatePath("/admin/messages");
  return { success: true };
}

export async function deleteContact(id: string) {
  const user = await validateSession();
  if (!user) return { success: false, error: "Unauthorised." };

  await prisma.contactMessage.delete({ where: { id } });

  revalidatePath("/admin/messages");
  return { success: true };
}
