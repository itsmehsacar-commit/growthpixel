"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Key,
  Sparkles,
  Layers,
  Sun,
  Truck,
  Calendar,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Key,
  Sparkles,
  Layers,
  Sun,
  Truck,
  Calendar,
};

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Our Cleaning Services"
          subtitle="From regular home cleans to specialised commercial solutions, we have you covered."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/services#${service.slug}`}>
                  <Card className="h-full text-center group cursor-pointer">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-semibold text-secondary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.shortDescription}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
