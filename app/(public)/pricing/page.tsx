import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, competitive pricing for professional cleaning services. View our packages starting from $120 AUD.",
  openGraph: {
    title: "Pricing | LinusServices",
    description:
      "Transparent, competitive pricing for professional cleaning services in Australia.",
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-secondary md:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Competitive rates for professional cleaning services. No hidden
            fees, no surprises.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {siteConfig.pricing.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${
                  "popular" in plan && plan.popular
                    ? "ring-2 ring-primary relative"
                    : ""
                }`}
                hover={false}
              >
                {"popular" in plan && plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-secondary">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {plan.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="text-4xl font-bold text-primary">
                      ${plan.price}
                      <span className="text-base font-normal text-gray-500">
                        {" "}
                        AUD
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/quote" className="block">
                  <Button
                    variant={
                      "popular" in plan && plan.popular ? "primary" : "outline"
                    }
                    className="w-full"
                  >
                    Get a Quote
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Final pricing depends on property size and specific requirements.
              Contact us for a detailed, no-obligation quote tailored to your
              needs.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
