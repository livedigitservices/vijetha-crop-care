import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Sprout, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { CROP_STAGES } from "../../data/crops";
import { PRODUCTS } from "../../data/products";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=85";

export default function CropCareStages() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = CROP_STAGES[activeStageIndex];

  // Find matching product data
  const recommendedProducts = PRODUCTS.filter((p) =>
    activeStage.solutions.includes(p.id)
  );

  return (
    <section className="py-20 md:py-28 bg-[#F6F8FB] text-[#1E293B] relative overflow-hidden border-t border-slate-200">
      <Container>
        <SectionHeading
          eyebrow="Chronological Agronomy"
          title="Care For Every Stage of Growth."
          subtitle="A holistic organic regimen synchronized with the natural physiological shifts in crop development."
          align="center"
          theme="light"
        />

        {/* Visual Stepper Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {CROP_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                className={`group text-left rounded-xl overflow-hidden border transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-[#11102B] text-white border-[#58B023] ring-2 ring-[#58B023]/50 shadow-xl scale-[1.02] z-10"
                    : "bg-white text-slate-700 border-slate-200 hover:border-[#58B023]/60 hover:shadow-md hover:bg-slate-50"
                }`}
              >
                {/* Thumbnail Image Header */}
                <div className="relative h-20 w-full overflow-hidden">
                  <img
                    src={stage.image || FALLBACK_IMAGE}
                    alt={stage.title}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isActive ? "saturate-110 brightness-100" : "saturate-90 brightness-90"
                    }`}
                  />
                  <div className={`absolute inset-0 ${
                    isActive 
                      ? "bg-gradient-to-t from-[#11102B] via-[#11102B]/40 to-transparent" 
                      : "bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"
                  }`} />
                  
                  {/* Stage Number Badge */}
                  <span className={`absolute top-2 left-2 px-2 py-0.5 text-[11px] font-bold rounded-md font-mono ${
                    isActive
                      ? "bg-[#58B023] text-white shadow-sm"
                      : "bg-slate-900/80 text-slate-200 backdrop-blur-xs"
                  }`}>
                    {stage.step}
                  </span>

                  {isActive && (
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#E89C12] ring-2 ring-white animate-pulse" />
                  )}
                </div>

                {/* Text Title */}
                <div className="p-3 flex-1 flex flex-col justify-center">
                  <h4 className={`text-xs font-bold uppercase tracking-wider line-clamp-1 ${
                    isActive ? "text-white" : "text-slate-800"
                  }`}>
                    {stage.title}
                  </h4>
                  <p className={`text-[10px] line-clamp-1 mt-0.5 font-light ${
                    isActive ? "text-[#E89C12]" : "text-slate-500"
                  }`}>
                    {stage.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Feature Card (2-Column Layout) */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Column (5 Cols): Stage Portrait Banner */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full flex flex-col justify-between p-6 sm:p-8 text-white overflow-hidden bg-slate-900">
              {/* Background Image */}
              <img
                src={activeStage.image || FALLBACK_IMAGE}
                alt={activeStage.title}
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105 filter brightness-90 saturate-[1.1]"
              />
              {/* Gradient Vignette Overlay for Crisp Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11102B] via-[#11102B]/60 to-[#11102B]/30" />
              
              {/* Top Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#58B023] text-white text-[11px] uppercase tracking-widest font-extrabold rounded-lg shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  Stage {activeStage.step}
                </span>
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-[#E89C12] text-xs font-semibold rounded-lg border border-white/10">
                  {activeStage.subtitle}
                </span>
              </div>

              {/* Bottom Info Overlay */}
              <div className="relative z-10 mt-auto pt-16">
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-semibold leading-tight drop-shadow-md">
                  {activeStage.title}
                </h3>
                <p className="text-slate-200 text-sm font-light mt-2 line-clamp-3">
                  {activeStage.description}
                </p>

                {/* Key Nutrients Tag Box */}
                <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#E89C12] font-bold">
                    Key Bio-Nutrients:
                  </span>
                  <span className="text-xs text-white/90 bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-xs font-light">
                    {activeStage.keyNutrients}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols): Narrative Details & Recommended Products */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white text-slate-800">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#006E38] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#58B023]" />
                    Stage Physiological Strategy
                  </h4>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {activeStage.detailedNotes}
                  </p>
                </div>

                {/* Agronomist Protocol Box */}
                <div className="p-4 sm:p-5 bg-[#F8FAFC] border-l-4 border-[#58B023] rounded-r-xl shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#11102B]">
                    <ShieldCheck className="w-4 h-4 text-[#006E38]" />
                    <span>Agronomist Protocol:</span>
                  </div>
                  <p className="text-sm text-slate-600 font-light pl-6">
                    {activeStage.bestPractice}
                  </p>
                </div>

                {/* Recommended Formulations with Product Images */}
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-[#11102B] flex items-center gap-2">
                      <Sprout className="w-4 h-4 text-[#58B023]" />
                      <span>Recommended Solutions ({recommendedProducts.length})</span>
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {recommendedProducts.map((prod) => (
                      <div
                        key={prod.id}
                        className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl shadow-xs"
                      >
                        {/* Product Thumbnail Image */}
                        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-[#0D0C22] p-1 relative">
                          <img
                            src={prod.image || FALLBACK_IMAGE}
                            alt={prod.name}
                            onError={(e) => {
                              e.currentTarget.src = FALLBACK_IMAGE;
                            }}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Product Text */}
                        <div className="flex-1 min-w-0">
                          <h5 className="font-serif text-sm font-bold text-slate-900 truncate">
                            {prod.name}
                          </h5>
                          <span className="text-[10px] text-[#58B023] font-semibold uppercase tracking-wider block truncate">
                            {prod.category}
                          </span>
                          <p className="text-[11px] text-slate-500 truncate mt-0.5 font-light">
                            {prod.shortDescription}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Schedule Link */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <Link
                  to="/crop-care"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#11102B] hover:text-[#006E38] transition-colors group"
                >
                  <span>Explore Full Crop Care Schedules</span>
                  <ChevronRight className="w-4 h-4 text-[#58B023] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}


