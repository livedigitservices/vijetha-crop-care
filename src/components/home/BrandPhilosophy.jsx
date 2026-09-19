import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../common/Container";

export default function BrandPhilosophy() {
  return (
    <section className="relative py-32 md:py-40 bg-[#F2F8F4] text-[#11102B] overflow-hidden border-t border-[#E0ECE2]">
      {/* Full-width parallax background image with light filter */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center filter brightness-95 saturate-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2200&q=90')`
        }}
      ></div>

      {/* Light cool radial and gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F2F8F4] via-[#F2F8F4]/85 to-[#FFFFFF]/75"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,rgba(242,248,244,0.95)_100%)]"></div>

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#58B023]/40 bg-white/95 shadow-sm backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#E89C12]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#006E38] font-extrabold">
            Our Living Creed
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#11102B] tracking-tight leading-[1.12]">
          Better Soil. Healthier Crops. <br />
          <span className="italic text-brand-gradient font-light">
            A Better Tomorrow.
          </span>
        </h2>

        <p className="mt-8 text-base sm:text-lg md:text-xl text-[#334155] font-light leading-relaxed max-w-2xl mx-auto">
          We honor the sacred covenant between farmer, soil, and seed. By treating the soil as a living organism rather than an inert medium, we protect harvests today while preserving fertile ground for generations yet to come.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#58B023] text-[#FFFFFF] text-xs uppercase tracking-[0.24em] font-extrabold hover:bg-[#6CB42C] transition-all duration-300 shadow-lg shadow-[#58B023]/25 group"
          >
            <span>Read The Full Vijetha Story</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white border-2 border-[#2E2870] text-[#2E2870] text-xs uppercase tracking-[0.24em] font-extrabold hover:bg-[#2E2870] hover:text-white transition-all shadow-sm"
          >
            <span>Connect With An Agronomist</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
