"use client";

import { motion } from "framer-motion";
import { MessageSquare, CalendarCheck, Sparkles, ThumbsUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Request a Quote",
    description:
      "Fill out our simple online form or give us a call. We will get back to you within 24 hours.",
  },
  {
    icon: CalendarCheck,
    step: "2",
    title: "Book Your Clean",
    description:
      "Choose a date and time that works for you. We will confirm your booking promptly.",
  },
  {
    icon: Sparkles,
    step: "3",
    title: "We Clean",
    description:
      "Our professional team arrives on time and delivers a thorough, high-quality clean.",
  },
  {
    icon: ThumbsUp,
    step: "4",
    title: "Enjoy the Results",
    description:
      "Relax and enjoy your spotless space. We guarantee your satisfaction.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="Getting your space professionally cleaned is simple."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center relative"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="font-semibold text-secondary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
