"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function CTABanner() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready for a Spotless Space?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Get a free, no-obligation quote today. Our team is ready to deliver
            the clean you deserve.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quote">
              <Button
                variant="secondary"
                size="lg"
                className="gap-2 bg-white text-primary hover:bg-gray-100"
              >
                Request a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
