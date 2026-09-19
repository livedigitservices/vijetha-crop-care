import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import Container from "../common/Container";
import { COMPANY_INFO } from "../../data/company";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#11102B] text-white overflow-hidden border-t border-slate-800">
      {/* Background imagery with crisp resolution */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.85] saturate-[1.1]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=2100&q=85')`
        }}
      ></div>

      {/* Dark Vignette Overlay for Crisp Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#11102B]/95 via-[#11102B]/80 to-[#11102B]/35"></div>

      <Container className="relative z-10">
        <div className="max-w-2xl bg-[#11102B]/85 backdrop-blur-md border border-[#58B023]/40 p-8 sm:p-12 rounded-3xl shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#58B023]/50 bg-[#1F1C4A]/90 backdrop-blur-md shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E89C12]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#58B023] font-extrabold">
              Start Your Sustainable Journey
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Grow With Nature. <br />
            <span className="italic text-[#58B023] font-normal">
              Grow With Vijetha.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-light leading-relaxed">
            Discover a better approach to crop care. Connect with our dedicated regional agronomists for customized soil health reports, dosage recommendations, and field trials.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#58B023] text-[#11102B] text-xs uppercase tracking-[0.24em] font-extrabold hover:bg-[#6CB42C] transition-all duration-300 shadow-lg shadow-[#58B023]/25 group cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs uppercase tracking-[0.24em] font-extrabold transition-all duration-300 backdrop-blur-xs cursor-pointer"
            >
              <span>Contact Vijetha</span>
            </Link>
          </div>

          {/* Quick Farmer Direct Access */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-slate-300 font-medium">
            <span>Direct Agronomist Hotline:</span>
            <a
              href={`tel:${COMPANY_INFO.contact.farmerHotline}`}
              className="font-extrabold text-[#E89C12] hover:text-white inline-flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#58B023]" />
              <span>{COMPANY_INFO.contact.farmerHotline} (Mon – Sat, 8AM – 7PM)</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

