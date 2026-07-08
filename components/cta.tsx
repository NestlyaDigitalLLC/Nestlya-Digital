import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-t-[40px] border border-slate-800 bg-slate-950">
          {/* Background Glow */}
          <div className="absolute inset-0">
            <div className="absolute right-0 top-0 h-full w-[50%] bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.18),transparent_65%)]" />
            <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(2,6,23,1),rgba(2,6,23,0.95))]" />
          </div>

          <div className="relative grid gap-12 px-8 py-16 md:px-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-20">
            {/* Left */}
            <div>
              <div className="mb-5 inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-lime-400">
                Let&apos;s Grow Together
              </div>

              <h2 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl">
                Ready to take your business to the next level?
              </h2>

              <p className="mt-5 max-w-xl text-lg text-slate-400">
                Let&apos;s build something amazing together.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start lg:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-lime-400 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-lime-300"
              >
                Let&apos;s Talk
                <ArrowRight size={18} />
              </Link>

              <p className="mt-6 text-sm text-slate-500">
                or email us at
              </p>

              <a
                href="mailto:hello@nestlya.com"
                className="mt-1 font-semibold text-lime-400"
              >
                hello@nestlyadigital.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}