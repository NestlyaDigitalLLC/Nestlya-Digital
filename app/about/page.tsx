import Link from "next/link";
import { ArrowRight, Target, Zap, Shield, HeartHandshake } from "lucide-react";
import CTASection from "@/components/cta";
export default function AboutPage() {
  const values = [
    {
      title: "Strategy First",
      description:
        "Every project begins with research, planning and a clear growth strategy.",
      icon: Target,
    },
    {
      title: "Modern Design",
      description:
        "We create premium digital experiences that look exceptional and convert.",
      icon: Zap,
    },
    {
      title: "Performance Focused",
      description:
        "Fast-loading, SEO-ready and scalable websites built for long-term success.",
      icon: Shield,
    },
    {
      title: "Long-Term Partnership",
      description:
        "We build relationships, not just websites. Your growth is our priority.",
      icon: HeartHandshake,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
              About Nestlya
            </p>

            <h1 className="text-5xl font-bold leading-tight text-slate-950 md:text-7xl">
              Building Digital Experiences That Drive Real Business Growth.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
              Nestlya helps businesses grow through modern websites,
              conversion-focused design, SEO optimization and digital strategy.
              We combine creativity, technology and performance to deliver
              measurable results.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[300px_1fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
                Who We Are
              </p>

              <h2 className="text-4xl font-bold text-slate-950">
                A Digital Growth Partner
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-slate-600">
              <p>
                Nestlya is a modern digital agency focused on helping businesses
                establish a stronger online presence through strategic design,
                development and marketing solutions.
              </p>

              <p>
                Our mission is simple: create digital experiences that not only
                look exceptional but also generate leads, increase visibility
                and support long-term business growth.
              </p>

              <p>
                From business websites and e-commerce stores to SEO and digital
                marketing, we deliver solutions that are built to perform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["50+", "Projects Delivered"],
              ["98%", "Client Satisfaction"],
              ["5+", "Years Experience"],
              ["24/7", "Support Available"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-slate-200 bg-white p-10"
              >
                <div className="mb-3 text-5xl font-bold text-slate-950">
                  {number}
                </div>

                <p className="text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
              Our Values
            </p>

            <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
              The Principles Behind Every Project
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100">
                    <Icon size={28} className="text-lime-600" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-slate-950">
                    {value.title}
                  </h3>

                  <p className="leading-8 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Nestlya */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
              Why Businesses Choose Nestlya
            </p>

            <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
              More Than A Service Provider
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We work as an extension of your business, delivering solutions
              that support growth, strengthen your brand and create measurable
              results.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}