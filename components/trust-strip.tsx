export default function TrustStrip() {
  const brands = [
    "Google",
    "Microsoft",
    "Amazon",
    "Stripe",
    "Shopify",
    "Airbnb",
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          Trusted By Businesses Worldwide
        </p>

        <div className="grid grid-cols-2 items-center gap-10 text-center md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="
                text-4xl
                font-bold
                tracking-tight
                text-slate-300
                transition-all
                duration-300
                hover:text-slate-500
              "
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}