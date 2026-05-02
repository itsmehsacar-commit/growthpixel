"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { submitContact } from "@/lib/actions";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("submitting");
    setServerError(null);

    const result = await submitContact(data);

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
          Message Sent!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for getting in touch. We will respond within 24 hours.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Send Another Message
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
          id="name"
          label="Your Name *"
          placeholder="John Smith"
          error={errors.name?.message}
          {...register("name")}
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
        <Input
          id="subject"
          label="Subject *"
          placeholder="How can we help?"
          error={errors.subject?.message}
          {...register("subject")}
        />
      </div>

      <Textarea
        id="message"
        label="Message *"
        placeholder="Tell us more about your enquiry..."
        error={errors.message?.message}
        {...register("message")}
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
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
