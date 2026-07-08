import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Briefcase,
  Star,
} from "lucide-react";
import CTASection from "@/components/cta";

const projects = [
  {
    title: "Bankai Agency",
    slug: "/case-studies/bankai-agency",
    category: "Web Design",
    image:
      "https://xocwycgjxoumhacazbft.supabase.co/storage/v1/object/public/settings/New%20Project%20-%202026-07-08T193729.763%20(1).webp",
    description:
      "Designed a premium agency website focused on modern UI/UX, branding and conversion-driven user experiences.",
    services: ["Web Design", "UI/UX Design", "Brand Identity"],
    result: "Premium Agency Experience",
  },
  {
    title: "Explore Indonesia",
    slug: "/case-studies/explore-indonesia",
    category: "Travel & Tourism Website",
    image:
      "https://xocwycgjxoumhacazbft.supabase.co/storage/v1/object/public/settings/New%20Project%20-%202026-07-08T194257.250%20(1).webp",
    description:
      "Built a visually engaging travel platform showcasing destinations, luxury experiences and seamless booking journeys.",
    services: ["Web Design", "Tourism Website", "UX Strategy"],
    result: "Enhanced User Engagement",
  },
  {
    title: "Epicurious Social",
    slug: "/case-studies/epicurious-social",
    category: "Social Media Marketing",
    image:
      "https://xocwycgjxoumhacazbft.supabase.co/storage/v1/object/public/settings/Design%20dylan%20(1).webp",
    description:
      "Created a modern marketing-focused website designed to strengthen brand visibility and audience engagement.",
    services: ["Marketing Website", "Brand Strategy", "Content Design"],
    result: "Stronger Brand Presence",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
              Case Studies
            </p>

            <h1 className="text-5xl font-bold leading-tight text-slate-950 md:text-7xl">
              Real Projects.
              <br />
              Real Results.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
              Explore how Nestlya helps businesses grow through strategy,
              design, development and digital marketing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
              Featured Projects
            </p>

            <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
              Work That Drives Growth
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-[32px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-lime-600">
                    {project.category}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-8 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6 rounded-2xl bg-lime-50 p-4">
                    <p className="font-semibold text-lime-700">
                      {project.result}
                    </p>
                  </div>

                  <Link
                    href={project.slug}
                    className="inline-flex items-center gap-2 font-semibold text-slate-950"
                  >
                    View Project
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lime-400">
              Results & Impact
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Numbers That Matter
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Star,
                value: "98%",
                label: "Client Satisfaction",
              },
              {
                icon: Briefcase,
                value: "50+",
                label: "Projects Delivered",
              },
              {
                icon: TrendingUp,
                value: "5+",
                label: "Digital Services",
              },
              {
                icon: Users,
                value: "24/7",
                label: "Support",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-slate-800 bg-slate-900 p-8 text-center"
                >
                  <Icon className="mx-auto mb-5 text-lime-400" size={34} />

                  <div className="mb-2 text-5xl font-bold text-white">
                    {item.value}
                  </div>

                  <p className="text-slate-400">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Nestlya */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[500px_1fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
                Why Clients Choose Us
              </p>

              <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
                A Partner Focused On Long-Term Growth
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We don't just deliver projects. We build digital solutions that
                help businesses grow, generate leads and create lasting impact.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Strategy First Approach",
                "Premium Modern Design",
                "Performance Focused Development",
                "Long-Term Partnership",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200 p-6"
                >
                  <CheckCircle2
                    size={24}
                    className="mt-1 text-lime-500"
                  />

                  <h3 className="font-semibold text-slate-950">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}