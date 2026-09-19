import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";

export default function BrandIntro() {
  return (
    <section id="brand-intro" className="py-24 md:py-32 bg-[#FFFFFF] text-[#1E293B] relative overflow-hidden">
      {/* Subtle hairline background embellishment */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#6CB42C]/40 to-transparent"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 overflow-hidden rounded-xl border border-[#6CB42C]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85"
                alt="Fertile healthy agricultural landscape"
                className="w-full h-[460px] sm:h-[540px] object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11102B]/75 via-transparent to-transparent"></div>

              {/* Floating Monogram Box */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#11102B]/95 backdrop-blur-md border border-[#6CB42C]/40 text-[#FFFFFF] rounded-lg shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E89C12]"></div>
                  <span className="text-[10px] uppercase tracking-[0.26em] text-[#6CB42C] font-bold">
                    Biological Philosophy
                  </span>
                </div>
                <p className="font-serif text-base italic text-[#E89C12] font-semibold">
                  “Rebuilding the living carbon memory of our soil.”
                </p>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#6CB42C]/20 rounded-xl -z-0 hidden sm:block pointer-events-none"></div>
          </div>

          {/* Right Narrative Column (7 cols) */}
          <div className="lg:col-span-7 lg:pl-6 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#6CB42C]"></span>
              <span className="text-xs uppercase tracking-[0.28em] font-bold text-[#006E38]">
                Brand Introduction
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-light text-[#11102B] tracking-tight leading-[1.15]">
              Where Nature Meets <br />
              <span className="italic font-normal text-[#006E38]">Better Farming.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#334155] font-light leading-relaxed">
              At <strong className="font-bold text-[#11102B]">Vijetha Crop Care</strong>, we believe agriculture is at its most potent when science works in pure harmony with nature. Decades of intensive chemical application have depleted microbial biodiversity and compacted Indian soils.
            </p>

            <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed">
              We engineer specialized organic and bio-active formulations designed around crop vigor, subterranean root proliferation, and long-term soil health. From bio-fertilizers enriched with mycorrhizae to botanical pest deterrents, every Vijetha solution empowers growers to break chemical dependency without sacrificing crop yield or quality.
            </p>

            {/* Two Pillar Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#6CB42C]/20">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#6CB42C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-[#11102B] uppercase">Soil Regeneration</h4>
                  <p className="text-xs text-[#64748B] mt-1 font-light leading-relaxed">
                    Restoring humus reserves, water retention, and indigenous soil microbes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#6CB42C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-[#11102B] uppercase">Zero Chemical Residue</h4>
                  <p className="text-xs text-[#64748B] mt-1 font-light leading-relaxed">
                    Cold-extracted botanical limonoids safe for pollinators, livestock, and export compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Discover Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] font-bold text-[#11102B] hover:text-[#006E38] group transition-colors"
              >
                <span>Read Our Full Philosophy & Story</span>
                <ArrowRight className="w-4 h-4 text-[#6CB42C] transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
