"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a website project take?",
    answer:
      "Most website projects take between 2–6 weeks depending on the scope, complexity, and content requirements.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. Every website we build is fully responsive and optimized for desktop, tablet, and mobile devices.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Absolutely. We offer ongoing maintenance, updates, and technical support after your website goes live.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can modernize your current website, improve performance, enhance user experience, and increase conversions.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the project scope. Contact us for a custom quote tailored to your business needs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[420px_1fr]">
          {/* Left Side */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-lime-600">
              FAQ
            </p>

            <h2 className="text-5xl font-bold leading-tight text-slate-950">
              Frequently Asked Questions
            </h2>

            <div className="mt-12 rounded-[32px] border border-slate-100 bg-white p-8 shadow-sm">
              <div
                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-lime-50
                  text-xl
                  font-bold
                  text-lime-600
                "
              >
                ?
              </div>

              <h3 className="text-2xl font-bold text-slate-950">
                Still have questions?
              </h3>

              <p className="mt-3 text-lg text-slate-600">
                We're here to help you.
              </p>

              <a
                href="/contact"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  font-semibold
                  text-lime-600
                  transition
                  hover:translate-x-1
                "
              >
                Contact Us →
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={faq.question}
                  className="
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-slate-100
                    bg-white
                    transition-all
                    duration-300
                    hover:border-lime-200
                    hover:shadow-lg
                  "
                >
                  <button
                    onClick={() =>
                      setOpen(isOpen ? null : index)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-8
                      py-7
                      text-left
                    "
                  >
                    <span className="text-xl font-bold text-slate-950">
                      {faq.question}
                    </span>

                    {isOpen ? (
                      <Minus
                        size={20}
                        className="text-slate-400"
                      />
                    ) : (
                      <Plus
                        size={20}
                        className="text-slate-400"
                      />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-8 pb-8">
                      <p className="max-w-3xl text-lg leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}