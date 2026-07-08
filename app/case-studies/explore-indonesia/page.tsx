import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ExploreIndonesiaPage() {
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
                Explore Indonesia
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                A modern travel platform designed to showcase destinations,
                experiences and seamless journey planning.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-500">Industry</p>
                  <p className="font-semibold text-slate-950">
                    Travel & Tourism
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Services</p>
                  <p className="font-semibold text-slate-950">
                    Web Design, UX Strategy, Tourism Website
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

      {/* Stats */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { value: "+178%", label: "Engagement" },
              { value: "+94%", label: "Destination Views" },
              { value: "97%", label: "Satisfaction" },
              { value: "1.9s", label: "Load Speed" },
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

      {/* Hero Image */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[40px]">
            <Image
              src="https://xocwycgjxoumhacazbft.supabase.co/storage/v1/object/public/settings/New%20Project%20-%202026-07-08T194257.250%20(1).webp"
              alt="Explore Indonesia"
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
            Explore Indonesia required a premium tourism platform capable of
            showcasing destinations, experiences and travel opportunities in a
            visually engaging way while maintaining fast performance and
            intuitive navigation.
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
              "Complex destination content",
              "Poor travel discovery experience",
              "Weak user engagement",
              "Mobile usability challenges",
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
            We developed a destination-focused experience with immersive visuals,
            structured navigation and conversion-focused layouts that guide
            visitors toward exploration and booking actions.
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
                +178%
              </div>

              <p className="mt-3 text-slate-400">
                User Engagement
              </p>
            </div>

            <div className="rounded-[32px] bg-slate-900 p-10 text-center">
              <div className="text-5xl font-bold text-white">
                +94%
              </div>

              <p className="mt-3 text-slate-400">
                Destination Views
              </p>
            </div>

            <div className="rounded-[32px] bg-slate-900 p-10 text-center">
              <div className="text-5xl font-bold text-white">
                97%
              </div>

              <p className="mt-3 text-slate-400">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

    
      {/* Testimonial */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[40px] bg-slate-950 p-12 text-center">
            <p className="text-2xl font-medium leading-relaxed text-white">
              "The new platform dramatically improved how users discover and
              engage with our travel experiences."
            </p>

            <div className="mt-8">
              <p className="font-semibold text-white">
                Project Team
              </p>

              <p className="text-slate-400">
                Explore Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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