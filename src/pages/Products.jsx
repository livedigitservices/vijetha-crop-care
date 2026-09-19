import { useEffect, useRef } from "react";
import { Sparkles, Sprout } from "lucide-react";
import { PRODUCTS } from "../data/products";
import ProductGrid from "../components/products/ProductGrid";
import Container from "../components/common/Container";
import { pageEnter } from "../animations/pageTransitions";

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    pageEnter(containerRef);
  }, []);

  return (
    <div ref={containerRef} className="pt-28 pb-24 bg-[#F6F8FB] text-[#11102B]">
      {/* Modern High-Impact Header */}
      <section className="relative py-16 md:py-24 bg-[#11102B] text-white border-b border-[#E0ECE2] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 filter brightness-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2400&q=90')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#11102B] via-[#11102B]/80 to-[#11102B]/90"></div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#58B023]/50 bg-[#1F1C4A]/90 backdrop-blur-md mb-6 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#E89C12]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#58B023] font-extrabold">
              Certified Organic Agronomy
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.12]">
            Our Organic Formulations
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed max-w-2xl mx-auto">
            High-potency bio-fertilizers, botanical crop defenders, and soil conditioners crafted for resilient, high-yield Indian farming.
          </p>
        </Container>
      </section>

      {/* Main Visual Image Cards Catalog */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex items-center justify-between pb-6 mb-10 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <Sprout className="w-5 h-5 text-[#58B023]" />
              <h2 className="font-serif text-2xl font-bold text-[#11102B]">
                Product Portfolio
              </h2>
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#006E38] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
              {PRODUCTS.length} Bio-Solutions
            </span>
          </div>

          {/* Dynamic 4-Column Product Grid */}
          <ProductGrid products={PRODUCTS} theme="light" />
        </Container>
      </section>
    </div>
  );
}

