"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/validations";
import { submitQuote } from "@/lib/actions";

const serviceOptions = [
  { value: "residential", label: "Residential Cleaning" },
  { value: "commercial", label: "Commercial / Office Cleaning" },
  { value: "end-of-lease", label: "End of Lease Cleaning" },
  { value: "deep-cleaning", label: "Deep Cleaning" },
  { value: "carpet", label: "Carpet Cleaning" },
  { value: "window", label: "Window Cleaning" },
  { value: "move-in-out", label: "Move-In / Move-Out Cleaning" },
  { value: "scheduled", label: "Scheduled Cleaning" },
];

const propertyOptions = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "townhouse", label: "Townhouse" },
  { value: "office", label: "Office" },
  { value: "other", label: "Other" },
];

const bedroomOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5+", label: "5+" },
];

const bathroomOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4+", label: "4+" },
];

const timeOptions = [
  { value: "morning", label: "Morning (8am - 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm - 5pm)" },
  { value: "evening", label: "Evening (5pm - 8pm)" },
];

const frequencyOptions = [
  { value: "one-off", label: "One-off" },
  { value: "weekly", label: "Weekly" },
  { value: "fortnightly", label: "Fortnightly" },
  { value: "monthly", label: "Monthly" },
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      frequency: "one-off",
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setStatus("submitting");
    setServerError(null);

    const result = await submitQuote(data);

    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setServerError(result.error || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-secondary mb-2">
          Quote Request Submitted!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your enquiry. We will get back to you within 24 hours
          with a customised quote.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {serverError && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">{serverError}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          id="fullName"
          label="Full Name *"
          placeholder="John Smith"
          error={errors.fullName?.message}
          {...register("fullName")}
        />
        <Input
          id="email"
          label="Email Address *"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          id="phone"
          label="Phone Number *"
          type="tel"
          placeholder="0412 345 678"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Select
          id="serviceType"
          label="Service Type *"
          options={serviceOptions}
          placeholder="Select a service"
          error={errors.serviceType?.message}
          {...register("serviceType")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          id="propertyType"
          label="Property Type *"
          options={propertyOptions}
          placeholder="Select type"
          error={errors.propertyType?.message}
          {...register("propertyType")}
        />
        <Select
          id="bedrooms"
          label="Bedrooms *"
          options={bedroomOptions}
          placeholder="Select"
          error={errors.bedrooms?.message}
          {...register("bedrooms")}
        />
        <Select
          id="bathrooms"
          label="Bathrooms *"
          options={bathroomOptions}
          placeholder="Select"
          error={errors.bathrooms?.message}
          {...register("bathrooms")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          id="suburb"
          label="Suburb *"
          placeholder="e.g. Richmond"
          error={errors.suburb?.message}
          {...register("suburb")}
        />
        <Input
          id="postcode"
          label="Postcode *"
          placeholder="e.g. 3121"
          error={errors.postcode?.message}
          {...register("postcode")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          id="preferredDate"
          label="Preferred Date *"
          type="date"
          error={errors.preferredDate?.message}
          {...register("preferredDate")}
        />
        <Select
          id="preferredTime"
          label="Preferred Time *"
          options={timeOptions}
          placeholder="Select time"
          error={errors.preferredTime?.message}
          {...register("preferredTime")}
        />
        <Select
          id="frequency"
          label="Frequency *"
          options={frequencyOptions}
          error={errors.frequency?.message}
          {...register("frequency")}
        />
      </div>

      <Textarea
        id="additionalNotes"
        label="Additional Notes"
        placeholder="Any specific requirements or details..."
        error={errors.additionalNotes?.message}
        {...register("additionalNotes")}
      />

      <Button
        type="submit"
        size="lg"
        className="w-full gap-2"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Submit Quote Request
          </>
        )}
      </Button>
    </form>
  );
}
