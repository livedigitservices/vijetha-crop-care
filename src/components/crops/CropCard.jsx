import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Quote, Sparkles } from "lucide-react";
import { PRODUCTS } from "../../data/products";

const FALLBACK_CROP_IMAGE = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85";

export default function CropCard({ crop }) {
  const [heroErr, setHeroErr] = useState(false);

  // Map solutions with real product info
  const enrichedSolutions = crop.recommendedSolutions.map((sol) => {
    const matchedProduct = PRODUCTS.find((p) => p.id === sol.productSlug);
    return {
      ...sol,
      product: matchedProduct
    };
  });

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-500 shadow-xl">
      {/* Top Banner with Crop Image & Header */}
      <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden bg-slate-900">
        <img
          src={heroErr ? FALLBACK_CROP_IMAGE : crop.heroImage}
          alt={crop.name}
          onError={() => setHeroErr(true)}
          className="w-full h-full object-cover filter saturate-[1.1] brightness-90 hover:scale-105 transition-transform duration-1000"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11102B] via-[#11102B]/60 to-transparent"></div>

        {/* Floating Header Badges & Info */}
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#58B023] text-white text-[11px] uppercase tracking-widest font-extrabold shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              {crop.category}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[#E89C12] font-serif text-base sm:text-lg font-bold border border-white/10 shadow-sm">
              {crop.teluguName}
            </span>
          </div>

          <div className="mt-auto">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight drop-shadow-md">
              {crop.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#E2E8F0] mt-2 font-light italic max-w-2xl drop-shadow-xs">
              {crop.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-white text-slate-800">
        {/* Core Agronomic Challenges */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-[#58B023]" />
            <h4 className="text-xs uppercase tracking-widest text-[#11102B] font-bold">
              Core Agronomic Challenges Resolved
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {crop.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#58B023] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-light leading-relaxed">
                  {challenge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Solutions Protocol */}
        <div>
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <h4 className="text-xs uppercase tracking-widest text-[#11102B] font-bold">
              Tailored Bio-Organic Solutions Protocol
            </h4>
            <span className="text-[11px] text-[#58B023] font-bold uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
              {enrichedSolutions.length} Growth Stages
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {enrichedSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 border border-slate-200 hover:border-[#58B023] rounded-xl transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-200/80">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#E89C12] bg-[#11102B] px-2.5 py-1 rounded-md shadow-xs">
                      {sol.stage}
                    </span>
                  </div>

                  {sol.product && (
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-[#0D0C22] p-1 shadow-2xs">
                        <img
                          src={sol.product.image}
                          alt={sol.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h5 className="font-serif text-sm font-bold text-slate-900 line-clamp-1">
                          {sol.product.name}
                        </h5>
                        <span className="text-[10px] text-[#58B023] font-semibold block truncate">
                          {sol.product.category}
                        </span>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {sol.action}
                  </p>
                </div>


              </div>
            ))}
          </div>
        </div>

        {/* Agronomist Field Quote */}
        {crop.highlightQuote && (
          <div className="p-5 bg-gradient-to-r from-emerald-50 to-slate-50 border-l-4 border-[#58B023] rounded-r-xl shadow-2xs flex items-start gap-3.5">
            <Quote className="w-6 h-6 text-[#58B023] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-serif italic text-slate-800 leading-relaxed font-semibold">
              {crop.highlightQuote}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

