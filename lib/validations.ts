import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  serviceType: z.enum([
    "residential",
    "commercial",
    "end-of-lease",
    "deep-cleaning",
    "carpet",
    "window",
    "move-in-out",
    "scheduled",
  ]),
  propertyType: z.enum(["house", "apartment", "townhouse", "office", "other"]),
  bedrooms: z.string().min(1, "Please select number of bedrooms"),
  bathrooms: z.string().min(1, "Please select number of bathrooms"),
  suburb: z.string().min(2, "Please enter your suburb"),
  postcode: z
    .string()
    .regex(/^\d{4}$/, "Please enter a valid 4-digit Australian postcode"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  frequency: z.enum(["one-off", "weekly", "fortnightly", "monthly"]),
  additionalNotes: z.string().optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
