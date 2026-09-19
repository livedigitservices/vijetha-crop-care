import React from "react";
import { 
  Leaf, 
  Layers, 
  Target, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  FlaskConical, 
  CheckCircle2, 
  Award,
  ArrowRight,
  Sprout
} from "lucide-react";
import { WHY_VIJETHA_PILLARS } from "../../data/company";
import Container from "../common/Container";

export default function WhyVijetha() {
  const getIcon = (iconName) => {
    const iconClass = "w-6 h-6 transition-transform duration-300 group-hover:scale-110";
    switch (iconName) {
      case "Leaf":
        return <Leaf className={iconClass} />;
      case "Layers":
        return <Layers className={iconClass} />;
      case "Target":
        return <Target className={iconClass} />;
      case "ShieldCheck":
        return <ShieldCheck className={iconClass} />;
      case "HeartHandshake":
        return <HeartHandshake className={iconClass} />;
      case "Sparkles":
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FAFDFB] via-white to-[#F2F8F4] text-[#11102B] relative overflow-hidden border-t border-emerald-100/60">
      {/* Subtle background ambient blur spots */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-200/30 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-green-200/20 rounded-full filter blur-3xl pointer-events-none"></div>
      
      {/* Geometric grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#006E38_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-[#006E38] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-[#58B023]" />
            <span>The Vijetha Benchmark</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#11102B] leading-tight mb-4">
            Why Farmers Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006E38] via-[#3B8D14] to-[#E89C12]">
              Vijetha Crop Care
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            A harmonious convergence of traditional agricultural wisdom, biological purity, and field-tested agronomic efficacy designed for Indian farming conditions.
          </p>
        </div>

        {/* 6 High-Impact Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {WHY_VIJETHA_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-7 lg:p-8 border border-emerald-100 hover:border-emerald-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,110,56,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Animated Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006E38] via-[#58B023] to-[#E89C12] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Header row: Icon & Index badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-green-100/60 border border-emerald-200/60 flex items-center justify-center text-[#006E38] group-hover:bg-[#006E38] group-hover:text-white group-hover:border-[#006E38] transition-all duration-300 shadow-sm">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-serif text-2xl font-bold text-slate-200 group-hover:text-emerald-200 transition-colors duration-300">
                    0{idx + 1}
                  </span>
                </div>

                {/* Subtitle tag */}
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#006E38] bg-emerald-50 px-2.5 py-1 rounded-md mb-2.5">
                  {pillar.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-[#11102B] group-hover:text-[#006E38] transition-colors duration-300 mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-[#006E38] group-hover:text-[#58B023] transition-colors">
                <span>Certified Bio-Quality</span>
                <CheckCircle2 className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Empirical Excellence / Laboratory R&D Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-emerald-900/30 shadow-2xl bg-gradient-to-br from-[#0B2516] via-[#11102B] to-[#0A1D12] text-white">
          {/* Subtle glowing elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[11px] uppercase tracking-widest font-extrabold rounded-full">
                <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
                <span>Empirical & Quality Assured</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                Tested In Advanced Labs. <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-amber-300 font-normal">
                  Proven In The Heartland.
                </span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                Every batch of Vijetha organic inputs undergoes multi-stage liquid chromatography, colony-forming unit (CFU) assays, and field-pot validations. We bridge scientific rigor with genuine farmer profitability.
              </p>

              {/* Feature Chips */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Residue-Free</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm">
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>APEDA & NPOP Certified</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm col-span-2 sm:col-span-1">
                  <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>High Active CFU</span>
                </div>
              </div>
            </div>

            {/* Right Image Column with Glassmorphic Floating Badge */}
            <div className="lg:col-span-5 h-72 sm:h-80 lg:h-full relative overflow-hidden min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=85"
                alt="Bio-agronomy researcher analyzing organic crop formulations"
                className="w-full h-full object-cover filter saturate-110 brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2516] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0B2516] lg:via-transparent lg:to-transparent"></div>

              {/* Glassmorphic Floating Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:bottom-8 lg:max-w-xs bg-slate-900/80 backdrop-blur-md border border-white/15 p-4 rounded-2xl shadow-xl text-white space-y-1">
                <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Zero Batch Variation</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-snug">
                  Strict quality assurance ensures consistent microbial viability from factory gate to farm soil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
