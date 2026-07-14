import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import CTASection from "@/components/cta";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lime-500">
            Contact Us
          </p>

          <h1 className="text-5xl font-bold text-slate-950 md:text-7xl">
            Let's Build Something
            <span className="block text-lime-500">
              Amazing Together
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Tell us about your project and we'll help you create a digital
            solution designed for growth.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">

            {/* Form */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 md:p-10">
              <h2 className="mb-8 text-3xl font-bold text-slate-950">
                Start Your Project
              </h2>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-lime-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-lime-500"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Company Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-lime-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Budget
                    </label>

                    <select className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-lime-500">
                      <option>Under $500</option>
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Service Needed
                  </label>

                  <select className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-lime-500">
                    <option>Web Design</option>
                    <option>Web Development</option>
                    <option>E-Commerce</option>
                    <option>SEO</option>
                    <option>Digital Marketing</option>
                    <option>Custom Project</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project Details
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-lime-500"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-2xl bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-[32px] bg-slate-950 p-8 text-white">
                <h3 className="mb-6 text-3xl font-bold">
                  Let's Talk
                </h3>

                <p className="mb-8 text-slate-300">
                  We'd love to hear about your business and goals.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="text-lime-400" />
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p>hello@nestlyadigital.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-lime-400" />
                    <div>
                      <p className="text-sm text-slate-400">Phone</p>
                      <p>+1 2135926001</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="text-lime-400" />
                    <div>
                      <p className="text-sm text-slate-400">US Registered Office</p>
                      <p>1209 Mountain Road Pl NE Ste 6960,
Albuquerque, NM 87110</p>
                    </div>
                  </div>
                                    <div className="flex gap-4">
                    <MapPin className="text-lime-400" />
                    <div>
                      <p className="text-sm text-slate-400">Bangladesh Operations Office</p>
                      <p>House 10, Road 6, Block B
Banasree, Rampura, Dhaka 1219, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-8">
                <h3 className="mb-6 text-2xl font-bold text-slate-950">
                  Response Time
                </h3>

                <p className="text-slate-600 leading-8">
                  Most inquiries receive a response within
                  24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lime-500">
              Why Work With Nestlya
            </p>

            <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
              Focused On Results
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Strategy First Approach",
              "Premium Design",
              "Fast Performance",
              "Long-Term Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 p-8"
              >
                <CheckCircle2 className="mb-4 text-lime-500" />
                <h3 className="font-semibold text-slate-950">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How quickly can we start?",
                a: "Most projects can begin within a few business days after approval.",
              },
              {
                q: "Do you work with international clients?",
                a: "Yes. We work with businesses around the world.",
              },
              {
                q: "Can I request a custom quote?",
                a: "Absolutely. Every business has unique needs and we can create a tailored solution.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-[28px] border border-slate-200 bg-white p-8"
              >
                <h3 className="mb-4 text-xl font-bold text-slate-950">
                  {faq.q}
                </h3>

                <p className="leading-8 text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}