import {
  Zap,
  Layers3,
  TrendingUp,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description:
      "We respect your time and deliver projects on schedule.",
    icon: Zap,
  },
  {
    title: "Modern Technology",
    description:
      "We use the latest tools and technologies for your best results.",
    icon: Layers3,
  },
  {
    title: "SEO Ready",
    description:
      "All our websites are built SEO-friendly from the ground up.",
    icon: TrendingUp,
  },
  {
    title: "Reliable Support",
    description:
      "We provide ongoing support whenever you need us.",
    icon: Headphones,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[520px_1fr]">
          {/* Left Side */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
              Why Choose Us
            </p>

            <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              We&apos;re More Than Just An Agency
            </h2>

            <p className="text-lg text-slate-600">
              We are your growth partner.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100">
                    <Icon
                      size={24}
                      className="text-lime-600"
                    />
                  </div>

                  <h3
                    className={`mb-3 font-semibold text-slate-950 ${
                      feature.title === "Modern Technology"
                        ? "text-base"
                        : "text-lg"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}