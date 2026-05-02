import type { Metadata } from "next";
import { Shield, Users, Award, Leaf, Clock, Heart } from "lucide-react";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LinusServices — Australia's trusted professional cleaning company. Our experienced team delivers quality results for homes and businesses.",
  openGraph: {
    title: "About Us | LinusServices",
    description:
      "Learn about LinusServices — Australia's trusted professional cleaning company.",
  },
};

const values = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description:
      "We build lasting relationships with our clients through consistent, dependable service.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every clean meets our rigorous quality standards, backed by regular inspections.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Our cleaners are carefully vetted, trained, and insured for your peace of mind.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description:
      "We offer environmentally friendly cleaning options to minimise our impact.",
  },
  {
    icon: Clock,
    title: "Punctual & Efficient",
    description:
      "We respect your time. Our team arrives on schedule and works efficiently.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary md:text-5xl text-center">
            About LinusServices
          </h1>
          <p className="mt-6 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Delivering professional cleaning services across Australia with
            integrity, quality, and care.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              LinusServices was founded with a simple mission: to provide
              Australians with reliable, high-quality cleaning services they can
              trust. What started as a small local cleaning business has grown
              into a trusted name across multiple cities in Australia.
            </p>
            <p className="text-gray-600 mb-6">
              Over the years, we have built a team of dedicated professionals
              who share our passion for cleanliness and customer satisfaction.
              Every member of our team is carefully selected, thoroughly trained,
              and fully insured to ensure the highest standards of service.
            </p>
            <p className="text-gray-600">
              Today, we serve hundreds of residential and commercial clients
              across Australia, providing everything from regular home cleans to
              specialised end of lease and deep cleaning services. Our commitment
              to quality, reliability, and customer care remains at the heart of
              everything we do.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <value.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
              { value: "50+", label: "Team Members" },
              { value: "8", label: "Cities Covered" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
