export type ServiceType =
  | "residential"
  | "commercial"
  | "end-of-lease"
  | "deep-cleaning"
  | "carpet"
  | "window"
  | "move-in-out"
  | "scheduled";

export type PropertyType =
  | "house"
  | "apartment"
  | "townhouse"
  | "office"
  | "other";

export type Frequency = "one-off" | "weekly" | "fortnightly" | "monthly";

export type SubmissionStatus = "new" | "contacted" | "completed";

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  propertyType: PropertyType;
  bedrooms: string;
  bathrooms: string;
  suburb: string;
  postcode: string;
  preferredDate: string;
  preferredTime: string;
  frequency: Frequency;
  additionalNotes?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  search?: string;
  status?: SubmissionStatus;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
