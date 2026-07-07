import {
  Monitor,
  Code2,
  ShoppingCart,
  BarChart3,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Web Design",
    description:
      "Modern, clean and conversion-focused website designs.",
    icon: Monitor,
  },
  {
    title: "Web Development",
    description:
      "Fast, scalable and secure websites built with best technologies.",
    icon: Code2,
  },
  {
    title: "E-Commerce",
    description:
      "High-converting online stores that drive sales and customer loyalty.",
    icon: ShoppingCart,
  },
  {
    title: "SEO",
    description:
      "Improve your search rankings and get found by the right audience.",
    icon: BarChart3,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that bring traffic, leads and real growth.",
    icon: Megaphone,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-lime-600">
            What We Do
          </p>

          <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
            Our Premium Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We provide end-to-end digital solutions tailored to help
            your business grow online.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  flex
                  min-h-[300px]
                  flex-col
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-lime-200
                  hover:shadow-lg
                "
              >
                {/* Icon */}
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-50">
                  <Icon className="h-7 w-7 text-lime-600" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-[24px] font-bold leading-tight text-slate-950">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-8 text-slate-600">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-auto pt-8">
                  <ArrowRight className="h-5 w-5 text-slate-900 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}