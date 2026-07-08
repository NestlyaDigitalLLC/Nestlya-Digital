import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Bankai Agency",
    category: "Web Design",
    image:
      "https://xocwycgjxoumhacazbft.supabase.co/storage/v1/object/public/settings/New%20Project%20-%202026-07-08T193729.763%20(1).webp",
  },
  {
    title: "Explore Indonesia",
    category: "Travel & Tourism Website",
    image:
      "https://xocwycgjxoumhacazbft.supabase.co/storage/v1/object/public/settings/New%20Project%20-%202026-07-08T194257.250%20(1).webp",
  },
  {
    title: "Epicurious Social",
    category: "Social Media Marketing",
    image:
      "https://xocwycgjxoumhacazbft.supabase.co/storage/v1/object/public/settings/Design%20dylan%20(1).webp",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[280px_1fr]">
          {/* Left Side */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-lime-500">
              Featured Work
            </p>

            <h2 className="mb-6 text-3xl font-bold text-slate-950 md:text-4xl">
              Our Recent Projects
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              We build digital experiences that help brands grow.
            </p>

<Link
  href="/case-studies"
  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-950 transition hover:border-slate-950"
>
  View All Projects
  <ArrowRight size={18} />
</Link>
          </div>

          {/* Right Side */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-lime-600">
                    {project.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}