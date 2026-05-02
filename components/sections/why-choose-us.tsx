"use client";

import { motion } from "framer-motion";
import { Shield, Users, ThumbsUp, Clock, Award, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "All our cleaners are fully insured and background-checked for your complete peace of mind.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our trained professionals deliver consistent, high-quality results every single time.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "Not happy with our service? We will come back and re-clean at no additional cost.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Book at a time that suits you. We offer morning, afternoon, and weekend appointments.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Regular quality inspections ensure our standards remain consistently high.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description:
      "Choose from our range of environmentally friendly cleaning products and methods.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Why Choose LinusServices"
          subtitle="We are committed to delivering exceptional cleaning services with professionalism and care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <reason.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
