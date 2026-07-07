import Link from "next/link";
import {
  Globe,
  Code2,
  ShoppingCart,
  Search,
  Megaphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import CTASection from "@/components/cta";

const services = [
  {
    title: "Web Design",
    description:
      "Modern, visually engaging websites designed to build trust and improve conversions.",
    icon: Globe,
  },
  {
    title: "Web Development",
    description:
      "Fast, scalable and high-performance websites built with modern technologies.",
    icon: Code2,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Custom online stores designed to increase sales and improve customer experience.",
    icon: ShoppingCart,
  },
  {
    title: "SEO Optimization",
    description:
      "Search engine optimization strategies that help your business get discovered online.",
    icon: Search,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns focused on generating leads, sales and long-term growth.",
    icon: Megaphone,
  },
];

const faqs = [
  {
    q: "What services does Nestlya Digital provide?",
    a: "We provide web design, web development, e-commerce solutions, SEO optimization and digital marketing services designed to help businesses grow online.",
  },
  {
    q: "How long does a website project take?",
    a: "Most business websites are completed within 2–6 weeks depending on complexity, content availability and revision requirements.",
  },
  {
    q: "Do you build custom websites?",
    a: "Yes. Every website is tailored to your business goals, audience and branding requirements. We do not rely on generic templates.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. Every website we create is fully responsive and optimized for mobile, tablet and desktop devices.",
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes. We offer technical SEO, on-page optimization, content strategy and ongoing SEO campaigns to improve search rankings.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We can modernize outdated websites, improve performance, enhance user experience and increase conversion rates.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We provide maintenance, updates, monitoring and optimization support after launch.",
  },
  {
    q: "How do I get started?",
    a: "Simply contact us through our contact page. We'll schedule a consultation and create a custom plan for your project.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
              Our Services
            </p>

            <h1 className="text-5xl font-bold leading-tight text-slate-950 md:text-7xl">
              Digital Solutions Built For Growth
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
              From premium websites and e-commerce stores to SEO and digital
              marketing, we help businesses create stronger brands, attract
              more customers and grow online with confidence.
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

      {/* Services */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
              What We Do
            </p>

            <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
              Services Designed To Help You Scale
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100">
                    <Icon size={28} className="text-lime-600" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="leading-8 text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Process */}
      <section className="bg-slate-950 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lime-400">
              Our Process
            </p>

            <h2 className="text-4xl font-bold text-white md:text-6xl">
              A Proven Process For
              <span className="block text-lime-400">
                Consistent Growth
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
              Every project follows a structured workflow that ensures quality,
              transparency and measurable results.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-14 hidden border-t border-slate-700 xl:block" />

            <div className="grid gap-8 xl:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We learn about your business, audience, competitors and goals.",
                },
                {
                  number: "02",
                  title: "Strategy",
                  description:
                    "We create a roadmap focused on growth, branding and measurable ROI.",
                },
                {
                  number: "03",
                  title: "Design & Development",
                  description:
                    "We craft premium user experiences and build high-performance solutions.",
                },
                {
                  number: "04",
                  title: "Launch & Optimize",
                  description:
                    "After launch, we monitor, improve and optimize for long-term success.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="group relative rounded-[32px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-3 hover:border-lime-400/30"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-lime-400 bg-slate-950 text-xl font-bold text-lime-400">
                    {step.number}
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="leading-8 text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nestlya */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[500px_1fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
                Why Choose Nestlya
              </p>

              <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
                More Than Just A Service Provider
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We combine strategy, design, development and marketing to
                create solutions that help businesses grow faster.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Modern Design & User Experience",
                "Fast & SEO-Friendly Websites",
                "Scalable Growth Strategies",
                "Dedicated Long-Term Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200 p-6"
                >
                  <CheckCircle2 size={24} className="mt-1 text-lime-500" />
                  <h3 className="font-semibold text-slate-950">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lime-500">
              FAQ
            </p>

            <h2 className="text-4xl font-bold text-slate-950 md:text-6xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Everything you need to know about working with Nestlya Digital.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-lime-300 hover:shadow-lg"
              >
                <h3 className="mb-4 text-xl font-bold text-slate-950">
                  {faq.q}
                </h3>

                <p className="leading-8 text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}