"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base transition ${
                  isActive
                    ? "font-semibold text-slate-950"
                    : "font-medium text-slate-600 hover:text-slate-950"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute -bottom-4 left-0 h-[2px] w-full rounded-full bg-lime-500" />
                )}
              </Link>
            );
          })}
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