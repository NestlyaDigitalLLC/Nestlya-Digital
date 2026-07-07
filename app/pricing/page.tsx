import Link from "next/link";
import {
  Check,
  ArrowRight,
  Sparkles,
  Rocket,
  Building2,
} from "lucide-react";
import CTASection from "@/components/cta";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for startups and small businesses.",
    icon: Sparkles,
    featured: false,
    features: [
      "Up to 5 Pages",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "Speed Optimization",
      "30 Days Support",
    ],
  },
  {
    name: "Growth",
    price: "$999",
    description: "Ideal for businesses ready to scale.",
    icon: Rocket,
    featured: true,
    features: [
      "Up to 10 Pages",
      "Premium Custom Design",
      "Advanced SEO Setup",
      "Conversion Optimization",
      "Lead Generation Forms",
      "Performance Optimization",
      "60 Days Support",
    ],
  },
  {
    name: "Custom",
   price: "Let's Talk",
    description: "Tailored solutions for unique requirements.",
    icon: Building2,
    featured: false,
    features: [
      "Unlimited Scope",
      "Custom Features",
      "Web Applications",
      "CRM & Dashboard Systems",
      "E-Commerce Solutions",
      "API Integrations",
      "Dedicated Support",
    ],
  },
];

const faqs = [
  {
    q: "Can I upgrade later?",
    a: "Yes. You can upgrade your package at any time as your business grows.",
  },
  {
    q: "Do you require full payment upfront?",
    a: "No. Most projects start with a deposit and the remaining balance is paid according to milestones.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Yes. Every package includes SEO best practices to ensure a strong foundation.",
  },
  {
    q: "Do you provide hosting?",
    a: "We can recommend and help set up reliable hosting providers based on your needs.",
  },
];
export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lime-500">
            Pricing
          </p>

          <h1 className="text-5xl font-bold text-slate-950 md:text-7xl">
            Transparent Pricing
            <span className="block text-lime-500">
              Built For Growth
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Choose the right package for your business and start building
            a stronger online presence today.
          </p>
        </div>
      </section>

{/* Pricing Cards */}
<section className="bg-[#F8FAFC] py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
      {plans.map((plan) => {
        const Icon = plan.icon;

        return (
          <div
            key={plan.name}
            className={`relative flex h-full flex-col rounded-[32px] border p-8 transition-all duration-300 hover:-translate-y-2 ${
              plan.featured
                ? "scale-105 border-lime-400 bg-slate-950 text-white shadow-2xl"
                : plan.name === "Custom"
                ? "border-slate-300 bg-slate-50 shadow-sm"
                : "border-slate-200 bg-white shadow-sm"
            }`}
          >
            {plan.featured && (
              <div className="absolute right-6 top-6 rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-slate-950">
                Most Popular
              </div>
            )}

            {/* Icon */}
            <Icon
              size={32}
              className={`mb-6 ${
                plan.featured
                  ? "text-lime-400"
                  : "text-lime-500"
              }`}
            />

            {/* Title */}
            <h3
              className={`mb-3 text-3xl font-bold ${
                plan.featured
                  ? "text-white"
                  : "text-slate-950"
              }`}
            >
              {plan.name}
            </h3>

            {/* Description */}
            <p
              className={`mb-8 text-lg ${
                plan.featured
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              {plan.description}
            </p>

            {/* Price */}
            <div
              className={`mb-8 text-5xl font-bold ${
                plan.featured
                  ? "text-white"
                  : "text-slate-950"
              }`}
            >
              {plan.price}
            </div>

            {/* Features */}
            <div className="mb-10 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className={`flex items-center gap-3 ${
                    plan.featured
                      ? "text-white"
                      : "text-slate-800"
                  }`}
                >
                  <Check
                    size={18}
                    className={
                      plan.featured
                        ? "text-lime-400"
                        : "text-lime-500"
                    }
                  />

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/contact"
              className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold transition ${
                plan.featured
                  ? "bg-lime-400 text-slate-950 hover:bg-lime-300"
                  : "bg-slate-950 text-white hover:bg-slate-800"
              }`}
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Included */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lime-500">
              Included In Every Project
            </p>

            <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
              Built With Quality From Day One
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Mobile Responsive Design",
              "Performance Optimization",
              "SEO Best Practices",
              "Professional Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 p-8 text-center"
              >
                <Check className="mx-auto mb-4 text-lime-500" />
                <h3 className="font-semibold text-slate-950">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lime-400">
            Why Invest
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Your Website Is More Than A Cost
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-400">
            A professionally designed website helps build trust, attract
            customers, generate leads and create long-term business growth.
            It’s an investment that continues working for your business
            every day.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[28px] border border-slate-200 bg-white p-8"
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