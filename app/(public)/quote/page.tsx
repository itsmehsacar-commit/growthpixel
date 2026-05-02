import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/quote-form";
import { Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get a free, no-obligation cleaning quote. Fill out our form and we will respond within 24 hours with a customised price.",
  openGraph: {
    title: "Request a Quote | LinusServices",
    description:
      "Get a free, no-obligation cleaning quote from LinusServices.",
  },
};

export default function QuotePage() {
  return (
    <>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-secondary md:text-5xl">
            Request a Free Quote
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us about your cleaning needs and we will get back to you within
            24 hours with a customised quote.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <QuoteForm />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-secondary mb-4">
                  Why Request a Quote?
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    No obligation, completely free
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Customised to your needs
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="font-semibold text-secondary mb-2">
                  Prefer to call?
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Speak directly with our team for immediate assistance.
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
