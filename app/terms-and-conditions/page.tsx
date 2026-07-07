export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions for Nestlya Digital LLC.",
  alternates: {
    canonical: "https://nestlyadigital.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lime-500">
            Legal
          </p>

          <h1 className="text-5xl font-bold text-slate-950 md:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            These Terms & Conditions govern your use of the Nestlya Digital
            website and any services provided by Nestlya Digital LLC.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 md:p-12">

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Services
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Nestlya Digital provides web design, web development,
              e-commerce, SEO, digital marketing and related digital services.
              All services are subject to project scope, agreements and
              availability.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Project Timelines
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Project timelines are estimates and may vary depending on
              project complexity, client feedback, content delivery and
              unforeseen circumstances.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Payments
            </h2>

            <p className="mb-5 leading-8 text-slate-600">
              Clients agree to pay all fees outlined in project proposals,
              invoices or agreements.
            </p>

            <ul className="mb-8 ml-6 list-disc space-y-2 text-slate-600">
              <li>Payments must be made according to agreed terms.</li>
              <li>Late payments may result in project delays.</li>
              <li>Final deliverables may be withheld until payment is received.</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Intellectual Property
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Upon full payment, ownership of approved project deliverables
              is transferred to the client unless otherwise agreed in writing.
              Nestlya Digital may display completed work within its portfolio
              and marketing materials.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Client Responsibilities
            </h2>

            <p className="mb-5 leading-8 text-slate-600">
              Clients are responsible for:
            </p>

            <ul className="mb-8 ml-6 list-disc space-y-2 text-slate-600">
              <li>Providing accurate information.</li>
              <li>Supplying required content and assets.</li>
              <li>Reviewing and approving work in a timely manner.</li>
              <li>Maintaining access credentials when applicable.</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Limitation of Liability
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Nestlya Digital shall not be liable for indirect, incidental,
              special or consequential damages arising from the use of our
              services or website.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Termination
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Either party may terminate a project or agreement in accordance
              with agreed terms. Any completed work and outstanding balances
              remain payable.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Refund Policy
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Due to the nature of digital services, refunds are generally
              not provided once work has commenced. Exceptions may be reviewed
              on a case-by-case basis.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Changes To Terms
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Nestlya Digital reserves the right to update these Terms &
              Conditions at any time. Updates will be posted on this page.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Contact Information
            </h2>

            <p className="mb-4 leading-8 text-slate-600">
              If you have questions regarding these Terms & Conditions,
              please contact us:
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