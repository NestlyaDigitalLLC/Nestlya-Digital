import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-lime-200/30 blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-lime-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-6 lg:min-h-[580px] lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Content */}
        <div className="max-w-[700px]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-lime-600">
            Nestlya
          </p>

          <h1 className="text-[48px] font-extrabold leading-[0.9] tracking-tight text-slate-950 md:text-[60px] xl:text-[76px]">
            Helping Businesses
            <br />
            Build Better
            <br />
            <span className="text-lime-500">
              Digital Experiences
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            We design modern websites, build digital products, and create
            growth strategies that help businesses stand out, attract
            customers, and scale with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-2xl bg-lime-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-xl"
            >
              Start Your Project →
            </a>

            <a
              href="/services"
              className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-50"
            >
              View Services
            </a>
          </div>

 {/* Trust Block */}
<div className="mt-10">
  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
    Trusted By Growing Brands
  </p>

  <div className="flex flex-wrap gap-3">
    {[
      "Bankai Agency",
      "Explore Indonesia",
      "Epicurious Social",
    ].map((brand) => (
      <div
        key={brand}
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
      >
        {brand}
      </div>
    ))}
  </div>

  <p className="mt-4 text-sm text-slate-500">
    Helping businesses create stronger digital experiences.
  </p>
</div>

</div>

{/* Right Visual */}
<div className="relative flex items-center justify-center">
          {/* Circular Rings */}
          <div className="absolute h-[420px] w-[420px] rounded-full border border-lime-100/50" />

          <div className="absolute h-[580px] w-[580px] rounded-full border border-lime-100/35" />

          <div className="absolute h-[760px] w-[760px] rounded-full border border-lime-100/25" />

          {/* Green Aura */}
          <div className="absolute h-[520px] w-[520px] rounded-full bg-lime-300/15 blur-[90px]" />

          <div className="absolute h-[360px] w-[360px] rounded-full bg-lime-200/25 blur-[60px]" />

          {/* Decorative Dots */}
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="grid grid-cols-5 gap-3">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="h-1 w-1 rounded-full bg-lime-300"
                />
              ))}
            </div>
          </div>

          {/* Ground Shadow */}
          <div className="absolute bottom-[95px] h-[28px] w-[240px] rounded-full bg-black/20 blur-xl" />

          {/* Hero Image */}
          <div className="relative z-10">
            <Image
              src="https://xocwycgjxoumhacazbft.supabase.co/storage/v1/object/public/settings/ChatGPT%20Image%20Jul%208,%202026,%2012_48_08%20AM.webp"
              alt="Nestlya Digital Experience"
              width={540}
              height={540}
              priority
              sizes="(max-width:768px) 380px, (max-width:1280px) 480px, 540px"
              className="
                h-auto
                w-[380px]
                md:w-[480px]
                xl:w-[540px]
                drop-shadow-[0_0_40px_rgba(163,230,53,0.18)]
                transition-all
                duration-500
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200" />
    </section>
  );
}