import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Agency Website",
    category: "Web Design",
  },
  {
    title: "E-Commerce Store",
    category: "Development",
  },
  {
    title: "Business Landing Page",
    category: "Web Design",
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

            <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-950 transition hover:border-slate-950">
              View All Projects
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Side */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Project Preview */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  {index === 0 && (
                    <div className="h-full w-full bg-gradient-to-br from-slate-50 to-slate-200 p-4">
                      <div className="h-full rounded-2xl border border-slate-300 bg-white p-4">
                        <div className="mb-4 flex gap-2">
                          <div className="h-2 w-2 rounded-full bg-slate-300" />
                          <div className="h-2 w-2 rounded-full bg-slate-300" />
                          <div className="h-2 w-2 rounded-full bg-slate-300" />
                        </div>

                        <div className="mb-4 h-6 w-32 rounded bg-slate-200" />

                        <div className="mb-2 h-3 w-full rounded bg-slate-100" />
                        <div className="mb-2 h-3 w-4/5 rounded bg-slate-100" />
                        <div className="h-3 w-3/5 rounded bg-slate-100" />
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-white">
                      <div className="h-32 w-32 rounded-full border-[12px] border-slate-800" />
                    </div>
                  )}

                  {index === 2 && (
                    <div className="h-full bg-slate-950 p-5">
                      <div className="mb-4 h-4 w-24 rounded bg-lime-400/40" />
                      <div className="mb-3 h-8 w-3/4 rounded bg-white/10" />
                      <div className="mb-2 h-3 w-full rounded bg-white/10" />
                      <div className="h-3 w-2/3 rounded bg-white/10" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-500">
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