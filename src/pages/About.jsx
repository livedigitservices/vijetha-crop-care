import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Sprout, HeartHandshake, CheckCircle2, Award, TestTube } from "lucide-react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { pageEnter } from "../animations/pageTransitions";

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    pageEnter(containerRef);
  }, []);

  return (
    <div ref={containerRef} className="pt-28 pb-20 bg-[#F2F8F4] text-[#11102B]">
      {/* Light Cool Hero Header */}
      <section className="relative py-20 md:py-28 bg-[#11102B] text-[#FFFFFF] overflow-hidden border-b border-[#E0ECE2]">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50 saturate-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2400&q=90')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#11102B] via-[#11102B]/75 to-[#11102B]/85"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6CB42C_1.2px,transparent_1.2px)] [background-size:28px_28px]"></div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#6CB42C]/50 bg-[#1F1C4A]/90 backdrop-blur-md mb-6 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#E89C12]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#6CB42C] font-extrabold">
              Origins & Ethos
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.12] text-[#FFFFFF]">
            Rooted in Soil. <br />
            <span className="italic text-gold-gradient font-light">
              Committed to the Farmer.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#F1F5F9] font-light leading-relaxed max-w-2xl mx-auto">
            Vijetha Crop Care was founded with a singular conviction: that India’s richest harvests will not come from chemical exhaustion, but from biological revitalization.
          </p>
        </Container>
      </section>

      {/* Brand Genesis & Dual Image Showcase */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Dual Visual Column (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative border border-[#E0ECE2] rounded-xl shadow-xl overflow-hidden aspect-4/5 group">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=85"
                    alt="Farmer inspecting rich organic soil"
                    className="w-full h-full object-cover filter saturate-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11102B]/75 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-white bg-[#58B023] px-2.5 py-0.5 rounded">
                      Field Soil Testing
                    </span>
                  </div>
                </div>

                <div className="relative border border-[#E0ECE2] rounded-xl shadow-xl overflow-hidden aspect-4/5 sm:mt-8 group">
                  <img
                    src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=85"
                    alt="Biochemist analyzing organic microbial culture"
                    className="w-full h-full object-cover filter saturate-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11102B]/75 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-white bg-[#006E38] px-2.5 py-0.5 rounded">
                      Bio-Lab Formulation
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Quote Badge */}
              <div className="mt-6 p-5 bg-[#F2F8F4] text-[#11102B] border border-[#58B023]/40 rounded-xl shadow-lg">
                <p className="font-serif text-sm italic text-[#006E38] font-semibold">
                  “When the soil breathes, the plant flourishes without violence.”
                </p>
              </div>
            </div>

            {/* Narrative Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#58B023]"></span>
                <span className="text-xs uppercase tracking-[0.24em] font-extrabold text-[#006E38]">
                  Our Genesis
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#11102B] tracking-tight leading-[1.18]">
                A Journey Born in the <br />
                <span className="italic font-normal text-[#006E38]">Heartland of South India.</span>
              </h2>

              <p className="text-base text-[#334155] font-light leading-relaxed">
                Over the past three decades, Indian agricultural acreage witnessed unprecedented declines in soil organic carbon—dropping in many irrigated regions from historic norms to alarming fractions under 0.4%. Intensive chemical fertilizers provided temporary vegetative boosts while leaving soils compacted, saline, and starved of microbial flora.
              </p>

              <p className="text-sm text-[#475569] font-light leading-relaxed">
                Vijetha Crop Care was established to restore ecological equilibrium. Headquartered in Hyderabad with field testing grounds across Andhra Pradesh and Telangana, our dedicated biochemists and agronomists formulate certified bio-fertilizers, concentrated humic substrates, and cold-extracted botanical pest repellents that deliver measurable yield increases while regenerating the subterranean rhizosphere.
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-3 text-xs sm:text-sm text-[#334155]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#58B023] shrink-0" />
                  <span>Strictly non-synthetic, zero heavy-metal residue</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#58B023] shrink-0" />
                  <span>Bio-compatible with indigenous pollinators and earthworm colonies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#58B023] shrink-0" />
                  <span>Cost-effective per acre to ensure equitable farmer profitability</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Core Values */}
      <section className="py-20 bg-[#F2F8F4] text-[#11102B] border-y border-[#E0ECE2]">
        <Container>
          <SectionHeading
            eyebrow="Guiding Principles"
            title="Our Triple Commitment"
            subtitle="The enduring compass steering every formulation, trial, and farmer advisory."
            align="center"
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-[#E0ECE2] hover:border-[#58B023] cool-card-shadow cool-card-hover">
              <div className="w-12 h-12 rounded-lg border border-[#58B023]/30 bg-[#F2F8F4] flex items-center justify-center mb-6">
                <Sprout className="w-6 h-6 text-[#58B023]" />
              </div>
              <h3 className="font-serif text-2xl font-light text-[#11102B] mb-3">
                1. Soil Regeneration
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
                Treating soil as a living, biodiverse organism. Our products restore organic carbon, elevate Cation Exchange Capacity, and re-establish mycorrhizal root symbiosis.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-[#E0ECE2] hover:border-[#58B023] cool-card-shadow cool-card-hover">
              <div className="w-12 h-12 rounded-lg border border-[#58B023]/30 bg-[#F2F8F4] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#58B023]" />
              </div>
              <h3 className="font-serif text-2xl font-light text-[#11102B] mb-3">
                2. Biological Purity
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
                Zero tolerance for toxic organophosphates or synthetic residual toxins. Clean harvests allow Indian farmers to sell to premium export markets and urban health chains.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-[#E0ECE2] hover:border-[#58B023] cool-card-shadow cool-card-hover">
              <div className="w-12 h-12 rounded-lg border border-[#58B023]/30 bg-[#F2F8F4] flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-[#58B023]" />
              </div>
              <h3 className="font-serif text-2xl font-light text-[#11102B] mb-3">
                3. Farmer Prosperity
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
                Agriculture must remain financially rewarding. By systematically reducing synthetic fertilizer expenditure while augmenting harvest weight, farmers gain superior net margins.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* State-of-the-Art Laboratory Showcase Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="relative rounded-2xl overflow-hidden border border-[#E0ECE2] shadow-2xl bg-[#11102B]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-6 text-white relative z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#58B023] text-white text-[10px] uppercase tracking-[0.28em] font-extrabold rounded-full">
                  Scientific Integrity
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                  State-of-the-Art <br />
                  <span className="italic text-gold-gradient font-light">Agronomic Laboratory</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                  Every batch of Vijetha bio-inoculants and botanical concentrates undergoes multi-stage liquid chromatography, standardized colony-forming unit (CFU) assays, and rigorous field pot trials before commercial distribution.
                </p>
                <div className="pt-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#58B023] text-[#FFFFFF] text-xs uppercase tracking-[0.24em] font-extrabold hover:bg-[#6CB42C] transition-colors shadow-lg shadow-[#58B023]/25"
                  >
                    <span>Discover Tested Formulations</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 h-80 lg:h-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85"
                  alt="Vijetha Agronomic Research Laboratory"
                  className="w-full h-full object-cover filter saturate-110 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#11102B] via-transparent to-transparent hidden lg:block"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

