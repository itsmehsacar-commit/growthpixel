import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with LinusServices. Call, email, or send us a message. We are here to help with all your cleaning needs.",
  openGraph: {
    title: "Contact Us | LinusServices",
    description:
      "Get in touch with LinusServices for all your cleaning enquiries.",
  },
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Address",
    detail: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postcode}`,
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon - Sat: 7:00 AM - 7:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-secondary md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or need assistance? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold text-secondary mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <info.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary text-sm">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {info.detail}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600">{info.detail}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-gray-50 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-secondary mb-3">
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
