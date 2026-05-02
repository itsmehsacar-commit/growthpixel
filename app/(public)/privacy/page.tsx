import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read the privacy policy for ${siteConfig.name}. We are committed to protecting your personal information.`,
};

export default function PrivacyPage() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-secondary mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString("en-AU")}
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            1. Information We Collect
          </h2>
          <p className="text-gray-600">
            We collect personal information that you provide to us when you
            request a quote, contact us, or use our services. This may include
            your name, email address, phone number, address, and details about
            the services you require.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600">We use your personal information to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Provide and manage our cleaning services</li>
            <li>Respond to your enquiries and requests</li>
            <li>Send you quotes and service confirmations</li>
            <li>Improve our services and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            3. Information Sharing
          </h2>
          <p className="text-gray-600">
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with trusted service providers
            who assist us in operating our business, provided they agree to keep
            your information confidential.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            4. Data Security
          </h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal
            information against unauthorised access, alteration, disclosure, or
            destruction. However, no method of transmission over the Internet is
            100% secure.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            5. Cookies
          </h2>
          <p className="text-gray-600">
            Our website may use cookies to enhance your browsing experience.
            Cookies are small files stored on your device that help us understand
            how you use our website. You can choose to disable cookies through
            your browser settings.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            6. Your Rights
          </h2>
          <p className="text-gray-600">
            Under Australian Privacy Act 1988, you have the right to access,
            correct, or delete your personal information. To exercise these
            rights, please contact us using the details below.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            7. Changes to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-xl font-semibold text-secondary mt-8">
            8. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have questions about this privacy policy, please contact us
            at{" "}
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
