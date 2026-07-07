import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden border-x border-b border-slate-800 bg-slate-950 px-8 pb-8 md:px-12 lg:px-16">
          {/* Glow */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.08),transparent_70%)]" />
          </div>

          <div className="relative pt-14">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
              {/* Brand */}
              <div>
                <h3 className="text-4xl font-bold text-white">
                  Nestlya
                  <span className="text-lime-400">.</span>
                </h3>

                <p className="mt-6 max-w-xs leading-8 text-slate-400">
                  Modern digital solutions for growing businesses.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="mb-6 text-lg font-semibold text-white">
                  Quick Links
                </h4>

                <ul className="space-y-4 text-slate-400">
                  <li>
                    <Link
                      href="/"
                      className="transition hover:text-white"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      className="transition hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services"
                      className="transition hover:text-white"
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/projects"
                      className="transition hover:text-white"
                    >
                      Case Studies
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className="transition hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="mb-6 text-lg font-semibold text-white">
                  Services
                </h4>

                <ul className="space-y-4 text-slate-400">
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>E-Commerce</li>
                  <li>SEO</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="mb-6 text-lg font-semibold text-white">
                  Company
                </h4>

                <ul className="space-y-4 text-slate-400">
                  <li>
                    <Link
                      href="/about"
                      className="transition hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/pricing"
                      className="transition hover:text-white"
                    >
                      Pricing
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/blog"
                      className="transition hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/careers"
                      className="transition hover:text-white"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="mb-6 text-lg font-semibold text-white">
                  Newsletter
                </h4>

                <p className="mb-6 text-slate-400">
                  Get the latest updates and insights delivered to your inbox.
                </p>

                <div className="flex overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-slate-500"
                  />

                  <button className="flex items-center justify-center bg-lime-400 px-5 text-slate-950 transition hover:bg-lime-300">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-14 border-t border-slate-800 pt-8">
              <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                <p>
                  © 2026 Nestlya Digital LLC. All rights reserved.
                </p>

                <div className="flex gap-8">
                  <Link
                    href="/privacy-policy"
                    className="transition hover:text-white"
                  >
                    Privacy Policy
                  </Link>

                  <Link
                    href="/terms-and-conditions"
                    className="transition hover:text-white"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}