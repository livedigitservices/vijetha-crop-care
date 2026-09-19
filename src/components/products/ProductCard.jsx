import { useState } from "react";
import { Sparkles, Leaf } from "lucide-react";

export default function ProductCard({ product, theme = "light" }) {
  const isDark = theme === "dark";
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group relative flex flex-col justify-between transition-all duration-300 rounded-2xl overflow-hidden border ${
        isDark
          ? "bg-[#11102B] border-[#58B023]/30 hover:border-[#58B023] shadow-xl"
          : "bg-white border-slate-200 hover:border-[#58B023] shadow-md hover:shadow-xl"
      }`}
    >
      {/* Product Image Container (Full Bottle/Box Packaging Display) */}
      <div className="relative aspect-3/4 sm:aspect-4/5 overflow-hidden bg-[#0D0C22] p-4 flex items-center justify-center">
        {!imgError && product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain filter saturate-[1.08] group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
            loading="lazy"
          />
        ) : (
          /* Custom Mockup Fallback */
          <div className="w-full h-full bg-gradient-to-br from-[#11102B] via-[#0B1A12] to-[#1F1C4A] p-6 flex flex-col justify-between items-center text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-[#58B023]/20 border border-[#58B023]/50 flex items-center justify-center mt-4">
              <Leaf className="w-6 h-6 text-[#58B023]" />
            </div>
            <div className="relative z-10 my-auto">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#E89C12] font-bold block mb-1">
                {product.category}
              </span>
              <h4 className="font-serif text-xl font-bold text-white tracking-tight">
                {product.name}
              </h4>
            </div>
          </div>
        )}

        {/* Top Floating Category / Pack Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11102B]/90 backdrop-blur-md border border-[#58B023]/50 text-[#58B023] text-[10px] uppercase tracking-[0.2em] font-extrabold shadow-md">
              <Sparkles className="w-2.5 h-2.5 text-[#E89C12]" />
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Card Text Details (No Overview Option) */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white text-slate-800 border-t border-slate-100">
        <div>
          <span className="text-[10px] uppercase tracking-[0.22em] font-extrabold text-[#58B023] block mb-1">
            {product.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#11102B] tracking-tight leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 font-light italic mt-1 line-clamp-2">
            {product.subtitle}
          </p>
        </div>

        {/* Pack Size & Suitable Crops Info */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="font-semibold text-[#006E38] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
            {product.packSizes ? product.packSizes[0] : "Certified Product"}
          </span>
          <span className="font-light italic text-slate-400">
            Vijetha Bio-Care
          </span>
        </div>
      </div>
    </div>
  );
}

