import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function BankaiAgencyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/case-studies"
            className="mb-10 inline-flex items-center gap-2 text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Back to Case Studies
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_420px] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
                Case Study
              </p>

              <h1 className="text-5xl font-bold leading-tight text-slate-950 md:text-7xl">
                Bankai Agency
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                A premium agency website focused on modern branding,
                conversion-driven experiences and a high-end digital presence.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-500">Industry</p>
                  <p className="font-semibold text-slate-950">
                    Digital Agency
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Services</p>
                  <p className="font-semibold text-slate-950">
                    Web Design, UI/UX Design, Branding
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Platform</p>
                  <p className="font-semibold text-slate-950">
                    Next.js & Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-6 md:grid-cols-4">
      {[
        {
          value: "+145%",
          label: "Engagement",
        },
        {
          value: "+82%",
          label: "Lead Growth",
        },
        {
          value: "98%",
          label: "Satisfaction",
        },
        {
          value: "2.1s",
          label: "Load Speed",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="text-4xl font-bold text-slate-950">
            {item.value}
          </div>

          <p className="mt-2 text-slate-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[40px]">
            <Image
              src="https://xocwycgjxoumhacazbft.supabase.co/storage/v1/object/public/settings/New%20Project%20-%202026-07-08T193729.763%20(1).webp"
              alt="Bankai Agency"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-4xl font-bold text-slate-950">
            Project Overview
          </h2>

          <p className="text-lg leading-9 text-slate-600">
            Bankai Agency needed a premium online presence that matched the
            quality of their services. The goal was to create a modern website
            with strong visual hierarchy, better user experience and a more
            professional brand perception.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-4xl font-bold text-slate-950">
            The Challenge
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Outdated visual presentation",
              "Weak conversion flow",
              "Lack of premium positioning",
              "Poor mobile experience",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-3xl bg-white p-6"
              >
                <CheckCircle2
                  size={24}
                  className="mt-1 text-lime-500"
                />

                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-4xl font-bold text-slate-950">
            Our Solution
          </h2>

          <p className="text-lg leading-9 text-slate-600">
            We designed a clean, modern and conversion-focused website using
            a premium layout system, strategic content hierarchy and mobile-first
            design principles.
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">
            Results
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[32px] bg-slate-900 p-10 text-center">
              <div className="text-5xl font-bold text-white">
                +145%
              </div>

              <p className="mt-3 text-slate-400">
                Engagement Growth
              </p>
            </div>

            <div className="rounded-[32px] bg-slate-900 p-10 text-center">
              <div className="text-5xl font-bold text-white">
                +82%
              </div>

              <p className="mt-3 text-slate-400">
                Lead Generation
              </p>
            </div>

            <div className="rounded-[32px] bg-slate-900 p-10 text-center">
              <div className="text-5xl font-bold text-white">
                98%
              </div>

              <p className="mt-3 text-slate-400">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      
      <section className="py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-16 text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
        Our Process
      </p>

      <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
        From Strategy To Launch
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-5">
      {[
        "Discovery",
        "Strategy",
        "Design",
        "Development",
        "Launch",
      ].map((step, index) => (
        <div
          key={step}
          className="rounded-[28px] border border-slate-200 bg-white p-8 text-center"
        >
          <div className="mb-4 text-5xl font-bold text-lime-500">
            0{index + 1}
          </div>

          <h3 className="font-semibold text-slate-950">
            {step}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-4xl font-bold text-slate-950">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
              "Vercel",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-5 py-3 font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
  <div className="mx-auto max-w-5xl px-6">
    <div className="rounded-[40px] bg-slate-950 p-12 text-center">
      <p className="text-2xl font-medium leading-relaxed text-white">
        "Nestlya transformed our online presence into a
        premium digital experience that truly reflects our
        brand."
      </p>

      <div className="mt-8">
        <p className="font-semibold text-white">
          Founder
        </p>

        <p className="text-slate-400">
          Bankai Agency
        </p>
      </div>
    </div>
  </div>
</section>
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[40px] bg-slate-950 p-12 text-center">
            <h2 className="text-4xl font-bold text-white">
              Ready To Build Something Exceptional?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Let's create a digital experience that helps your business
              grow and stand out.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-lime-500 px-8 py-4 font-semibold text-slate-950"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}