import {
  ArrowRight,
  Search,
  Target,
  Wand2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, goals and target audience.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create a winning strategy tailored to your business needs.",
    icon: Target,
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We design and build modern, responsive and high-performing solutions.",
    icon: Wand2,
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We launch, optimize and support you to ensure continuous growth.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[260px_1fr]">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
              Our Process
            </p>

            <h2 className="mb-6 text-3xl font-bold text-slate-950 md:text-4xl">
              How We Work
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              A simple, transparent process that ensures clarity and
              results at every step.
            </p>

            <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-slate-800">
              Work With Us
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-5 right-[18%] top-5 hidden border-t border-dashed border-slate-300 lg:block" />

            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="relative">
                    {/* Number Circle */}
                    <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-slate-950">
                      {step.number}
                    </div>

                    {/* Icon Box */}
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100">
                      <Icon
                        size={26}
                        className="text-lime-600"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-xl font-bold text-slate-950">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="leading-8 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}