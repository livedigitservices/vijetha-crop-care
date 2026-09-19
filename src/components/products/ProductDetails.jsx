import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, MessageCircle, Package, Calendar, Layers } from "lucide-react";
import Container from "../common/Container";
import { COMPANY_INFO } from "../../data/company";

export default function ProductDetails({ product }) {
  if (!product) return null;

  return (
    <div className="pt-32 pb-24 bg-[#F6F8FB] text-[#1E293B]">
      <Container>
        {/* Back link & breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#006E38]">
          <Link to="/products" className="hover:text-[#11102B] inline-flex items-center gap-1.5 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Product Catalog</span>
          </Link>
          <span>/</span>
          <span className="text-[#11102B] font-extrabold">{product.category}</span>
        </div>

        {/* Top Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: Product Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-xl border border-[#6CB42C]/40 bg-[#11102B] shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center filter saturate-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11102B]/60 via-transparent to-transparent"></div>

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#11102B]/90 border border-[#6CB42C]/50 text-[#6CB42C] text-xs uppercase tracking-[0.24em] font-extrabold backdrop-blur-md rounded-md">
                    <Sparkles className="w-3 h-3 text-[#E89C12]" />
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Packaging options preview */}
            {product.packSizes && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs text-[#334155] shadow-sm">
                <span className="font-bold uppercase tracking-wider text-[#11102B] flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#6CB42C]" />
                  Pack Sizes:
                </span>
                <span className="font-medium text-[#475569]">
                  {product.packSizes.join(" • ")}
                </span>
              </div>
            )}
          </div>

          {/* Right: Product Narrative & Meta (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] font-bold text-[#006E38] block mb-2">
                {product.category}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-5.5xl font-light text-[#11102B] tracking-tight leading-[1.12]">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-[#E89C12] font-bold mt-2">
                {product.subtitle}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#334155] font-light leading-relaxed">
              {product.description}
            </p>

            {/* Key Benefits List */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs uppercase tracking-[0.24em] font-bold text-[#11102B]">
                Agronomic Advantages
              </h3>
              <ul className="space-y-2.5">
                {product.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#475569] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#6CB42C] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suitable Crops */}
            <div className="pt-2">
              <h3 className="text-xs uppercase tracking-[0.24em] font-bold text-[#11102B] mb-3">
                Recommended Crops
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.suitableCrops.map((crop) => (
                  <span
                    key={crop}
                    className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold rounded-md bg-white border border-slate-200 text-[#11102B] shadow-xs"
                  >
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-slate-200">
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md bg-[#6CB42C] text-[#11102B] text-xs uppercase tracking-[0.24em] font-extrabold hover:bg-[#74C12C] transition-colors shadow-md shadow-[#6CB42C]/20"
              >
                <span>Enquire For Farm Supply</span>
              </Link>

              <a
                href={`${COMPANY_INFO.socialLinks.whatsapp}?text=${encodeURIComponent(
                  `Hello Vijetha Agronomy Team, I would like more information and dosage details for ${product.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md border-2 border-[#25D366] text-[#11102B] hover:bg-[#25D366]/10 text-xs uppercase tracking-[0.24em] font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Agronomist</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Application & Technical Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white border border-slate-200 rounded-xl p-8 sm:p-12 shadow-lg">
          {/* Application Schedule (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm uppercase tracking-[0.24em] font-bold text-[#11102B] pb-3 border-b border-slate-200 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#6CB42C]" />
              <span>Recommended Application Protocol</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#334155]">
              <div className="p-4 bg-[#F8FAFC] rounded-lg border border-slate-200 space-y-1">
                <span className="font-bold uppercase tracking-wider text-[#11102B] text-xs block">
                  Prescribed Dosage
                </span>
                <p className="font-light">{product.application.dosage}</p>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-lg border border-slate-200 space-y-1">
                <span className="font-bold uppercase tracking-wider text-[#11102B] text-xs block">
                  Application Method
                </span>
                <p className="font-light">{product.application.method}</p>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-lg border border-slate-200 space-y-1">
                <span className="font-bold uppercase tracking-wider text-[#11102B] text-xs block">
                  Ideal Crop Timing
                </span>
                <p className="font-light">{product.application.timing}</p>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-lg border border-slate-200 space-y-1">
                <span className="font-bold uppercase tracking-wider text-[#11102B] text-xs block">
                  Application Frequency
                </span>
                <p className="font-light">{product.application.frequency}</p>
              </div>
            </div>
          </div>

          {/* Composition Analysis (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm uppercase tracking-[0.24em] font-bold text-[#11102B] pb-3 border-b border-slate-200 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#6CB42C]" />
              <span>Bio-Active Composition Breakdown</span>
            </h3>

            <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
              {product.composition.map((comp, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 bg-[#F8FAFC] even:bg-white">
                  <span className="font-medium text-[#334155]">{comp.component}</span>
                  <span className="font-bold text-[#11102B]">{comp.value}</span>
                </div>
              ))}
            </div>

            {/* Ecological Purity Guarantee */}
            <div className="p-5 bg-[#11102B] text-[#FFFFFF] rounded-lg border border-[#6CB42C]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#6CB42C] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Vijetha Biological Purity Standard</span>
              </div>
              <p className="text-xs text-[#CBD5E1] font-light leading-relaxed">
                Formulated exclusively with non-synthetic, heavy-metal-tested organic compounds. Completely harmless to beneficial insects, honeybees, and soil-building earthworms.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
