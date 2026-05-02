import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Building2,
  Key,
  Sparkles,
  Layers,
  Sun,
  Truck,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our full range of professional cleaning services including residential, commercial, end of lease, deep cleaning, carpet cleaning, and more.",
  openGraph: {
    title: "Our Services | LinusServices",
    description:
      "Explore our full range of professional cleaning services across Australia.",
  },
};

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

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-secondary md:text-5xl">
            Our Cleaning Services
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning solutions for every space. From regular home
            cleans to specialised commercial services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="space-y-20">
            {siteConfig.services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl font-bold text-secondary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <h3 className="font-semibold text-secondary mb-3">
                      Key Benefits
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Link href="/quote">
                      <Button>Get a Quote</Button>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="font-semibold text-secondary mb-4">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-3">
                        {service.inclusions.map((inclusion) => (
                          <li
                            key={inclusion}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            {inclusion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
