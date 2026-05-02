import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read the terms of service for ${siteConfig.name}. These terms govern your use of our website and services.`,
};

export default function TermsPage() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-secondary mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString("en-AU")}
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            1. Agreement to Terms
          </h2>
          <p className="text-gray-600">
            By accessing or using {siteConfig.name}&apos;s website and services,
            you agree to be bound by these Terms of Service. If you do not agree
            to these terms, please do not use our services.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            2. Services
          </h2>
          <p className="text-gray-600">
            {siteConfig.name} provides professional cleaning services including
            residential cleaning, commercial cleaning, end of lease cleaning,
            and other related services as described on our website.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            3. Bookings and Cancellations
          </h2>
          <p className="text-gray-600">
            All bookings are subject to availability. We require at least 24
            hours notice for cancellations or rescheduling. Cancellations made
            with less than 24 hours notice may incur a cancellation fee of up to
            50% of the quoted price.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            4. Pricing and Payment
          </h2>
          <p className="text-gray-600">
            Prices listed on our website are starting prices in Australian
            Dollars (AUD). Final pricing depends on property size, condition, and
            specific requirements. Payment is due upon completion of the service
            unless otherwise arranged.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            5. Our Guarantee
          </h2>
          <p className="text-gray-600">
            We stand behind the quality of our work. If you are not satisfied
            with our service, please contact us within 24 hours and we will
            arrange a re-clean at no additional cost.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            6. Liability
          </h2>
          <p className="text-gray-600">
            While our cleaners are fully insured, {siteConfig.name}&apos;s
            liability is limited to the cost of the service provided. We are not
            liable for pre-existing damage, normal wear and tear, or items left
            in an unsafe condition.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            7. Access and Safety
          </h2>
          <p className="text-gray-600">
            Clients must ensure safe and reasonable access to the property. We
            reserve the right to decline or cease service if working conditions
            are deemed unsafe for our team.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            8. Intellectual Property
          </h2>
          <p className="text-gray-600">
            All content on our website, including text, images, logos, and
            design, is the property of {siteConfig.name} and is protected by
            Australian copyright law.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            9. Changes to Terms
          </h2>
          <p className="text-gray-600">
            We reserve the right to modify these terms at any time. Continued
            use of our services after changes are posted constitutes acceptance
            of the modified terms.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            10. Contact
          </h2>
          <p className="text-gray-600">
            For questions about these terms, please contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary hover:underline"
            >
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-primary hover:underline"
            >
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
