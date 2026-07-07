export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Nestlya Digital collects, uses and protects your information.",
  alternates: {
    canonical: "https://nestlyadigital.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lime-500">
            Legal
          </p>

          <h1 className="text-5xl font-bold text-slate-950 md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This Privacy Policy explains how Nestlya Digital LLC collects,
            uses and protects information when you visit our website or use
            our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 md:p-12">

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Information We Collect
            </h2>

            <p className="mb-5 leading-8 text-slate-600">
              We may collect information that you voluntarily provide through
              contact forms, emails, project inquiries and other communications
              with us.
            </p>

            <p className="mb-8 leading-8 text-slate-600">
              Information may include your name, email address, company name,
              phone number and project details.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              How We Use Information
            </h2>

            <p className="mb-5 leading-8 text-slate-600">
              We use collected information to:
            </p>

            <ul className="mb-8 ml-6 list-disc space-y-2 text-slate-600">
              <li>Respond to inquiries and requests.</li>
              <li>Provide our services.</li>
              <li>Improve website performance and user experience.</li>
              <li>Communicate project updates.</li>
              <li>Maintain website security.</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Cookies
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Our website may use cookies and analytics tools to understand
              visitor behavior and improve performance.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Third-Party Services
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              We may use trusted third-party services including hosting,
              analytics, payment processors and communication platforms.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Data Security
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              We take reasonable measures to protect your information.
              However, no online transmission or storage method can be
              guaranteed to be 100% secure.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              External Links
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Our website may contain links to external websites. We are not
              responsible for the privacy practices of third-party websites.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Your Rights
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              You may request access, correction or deletion of your personal
              information where applicable by contacting us.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Changes To This Policy
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Contact Us
            </h2>

            <p className="mb-4 leading-8 text-slate-600">
              If you have questions regarding this Privacy Policy, please
              contact us at:
            </p>

            <p className="font-semibold text-slate-950">
              Email: hello@nestlyadigital.com
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}