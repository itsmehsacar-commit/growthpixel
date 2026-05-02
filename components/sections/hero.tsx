"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const badges = [
  { icon: Shield, text: "Fully Insured" },
  { icon: Clock, text: "Flexible Scheduling" },
  { icon: Star, text: "5-Star Rated" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-4 mb-8">
              {badges.map((badge) => (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  <badge.icon className="h-3.5 w-3.5" />
                  {badge.text}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
              {siteConfig.hero.headline}
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:text-xl">
              {siteConfig.hero.subheadline}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={siteConfig.hero.ctaLink}>
                <Button size="lg" className="gap-2">
                  {siteConfig.hero.cta}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
              { value: "50+", label: "Team Members" },
              { value: "4.9", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
