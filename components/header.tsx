import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-[28px] font-extrabold tracking-tight text-slate-950"
        >
          Nestlya<span className="text-lime-500">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-12 md:flex">
          <Link
            href="/"
            className="relative text-base font-semibold text-slate-950"
          >
            Home

            <span className="absolute -bottom-4 left-0 h-[2px] w-full rounded-full bg-lime-500" />
          </Link>

          <Link
            href="/about"
            className="text-base font-medium text-slate-600 transition hover:text-slate-950"
          >
            About
          </Link>

          <Link
            href="/services"
            className="flex items-center gap-1 text-base font-medium text-slate-600 transition hover:text-slate-950"
          >
            Services
            <ChevronDown size={16} />
          </Link>

          <Link
            href="/case-studies"
            className="text-base font-medium text-slate-600 transition hover:text-slate-950"
          >
            Case Studies
          </Link>

          <Link
            href="/pricing"
            className="text-base font-medium text-slate-600 transition hover:text-slate-950"
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className="text-base font-medium text-slate-600 transition hover:text-slate-950"
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-lime-400
            px-5
            py-2.5
            text-sm
            font-semibold
            text-black
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-lime-300
            hover:shadow-lg
          "
        >
          Get Started
          <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  );
}