import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { CROPS, CROP_STAGES } from "../data/crops";
import { PRODUCTS } from "../data/products";
import CropCard from "../components/crops/CropCard";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { pageEnter } from "../animations/pageTransitions";

export default function CropCare() {
  const containerRef = useRef(null);
  const [selectedCropFilter, setSelectedCropFilter] = useState("all");

  useEffect(() => {
    pageEnter(containerRef);
  }, []);

  const displayedCrops =
    selectedCropFilter === "all"
      ? CROPS
      : CROPS.filter((c) => c.id === selectedCropFilter);

  return (
    <div ref={containerRef} className="pt-28 pb-24 bg-[#F2F8F4] text-[#11102B]">
      {/* Light Cool Hero Header */}
      <section className="relative py-20 md:py-28 bg-[#11102B] text-[#FFFFFF] overflow-hidden border-b border-[#E0ECE2]">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50 saturate-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1536746803623-cef87080bfc8?auto=format&fit=crop&w=2400&q=90')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#11102B] via-[#11102B]/75 to-[#11102B]/85"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6CB42C_1.2px,transparent_1.2px)] [background-size:28px_28px]"></div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#6CB42C]/50 bg-[#1F1C4A]/90 backdrop-blur-md shadow-lg mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E89C12]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#6CB42C] font-extrabold">
              Precision Crop Management
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.12] text-[#FFFFFF]">
            Care For Every Stage. <br />
            <span className="italic text-gold-gradient font-light">
              Solutions For Every Crop.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#F1F5F9] font-light leading-relaxed max-w-2xl mx-auto">
            From preparing tired soils with microbial humus to natural botanical defense against devastating pests, discover tailored organic protocols for Indian agro-climates.
          </p>
        </Container>
      </section>

      {/* 6 Lifecycle Stages Detailed Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E0ECE2]">
        <Container>
          <SectionHeading
            eyebrow="The Universal Biological Cycle"
            title="The 6 Critical Growth Windows"
            subtitle="How Vijetha's organic inputs coordinate with the natural physiology of agricultural plants."
            align="center"
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CROP_STAGES.map((stage) => {
              const stageProds = PRODUCTS.filter((p) => stage.solutions.includes(p.id));
              return (
                <div
                  key={stage.step}
                  className="bg-white border border-[#E0ECE2] rounded-xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl hover:border-[#58B023] transition-all duration-500 group"
                >
                  {/* Top Visual Image Header */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover filter saturate-[1.1] brightness-95 transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11102B]/85 via-transparent to-transparent"></div>

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="font-serif text-2xl font-bold text-[#6CB42C] bg-[#11102B]/80 px-2.5 py-0.5 rounded backdrop-blur-xs">
                        {stage.step}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#FFFFFF] font-extrabold bg-[#58B023] px-2.5 py-1 rounded shadow-xs">
                        {stage.subtitle}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="font-serif text-2xl font-normal text-white drop-shadow-xs">
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed mb-4">
                        {stage.description}
                      </p>

                      <div className="text-[11px] text-[#334155] bg-[#F2F8F4] p-3 rounded-lg border border-[#E0ECE2] leading-relaxed font-light">
                        <strong className="font-bold text-[#11102B] block mb-0.5">Key Nutrients:</strong>
                        {stage.keyNutrients}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Individual Crop Diagnostic Guides */}
      <section className="py-20 md:py-28 bg-[#F2F8F4] text-[#11102B]">
        <Container>
          <SectionHeading
            eyebrow="Crop-Specific Protocols"
            title="Comprehensive Field Schedules"
            subtitle="Select a specific crop to view full diagnostic challenges and customized organic remedies."
            align="center"
            theme="light"
          />

          {/* Filter Bar */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none">
            <button
              onClick={() => setSelectedCropFilter("all")}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-extrabold rounded-md border transition-colors cursor-pointer shrink-0 ${
                selectedCropFilter === "all"
                  ? "bg-[#58B023] text-[#FFFFFF] border-[#58B023] shadow-md shadow-[#58B023]/25"
                  : "bg-white text-[#334155] border-[#E0ECE2] hover:border-[#58B023]"
              }`}
            >
              All Crops ({CROPS.length})
            </button>
            {CROPS.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCropFilter(c.id)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-extrabold rounded-md border transition-colors cursor-pointer shrink-0 ${
                  selectedCropFilter === c.id
                    ? "bg-[#58B023] text-[#FFFFFF] border-[#58B023] shadow-md shadow-[#58B023]/25"
                    : "bg-white text-[#334155] border-[#E0ECE2] hover:border-[#58B023]"
                }`}
              >
                {c.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {displayedCrops.map((crop) => (
              <CropCard key={crop.id} crop={crop} />
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom Agronomist Callout */}
      <section className="py-16 bg-white border-t border-[#E0ECE2]">
        <Container className="text-center max-w-2xl mx-auto space-y-4">
          <h3 className="font-serif text-3xl font-light text-[#11102B]">
            Have A Specialized Crop Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
            Our crop scientists offer personalized soil health evaluations and custom bio-spray schedules for commercial orchards, spice plantations, and greenhouse polyhouses.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#58B023] text-[#FFFFFF] text-xs uppercase tracking-[0.2em] font-extrabold hover:bg-[#6CB42C] transition-colors shadow-md shadow-[#58B023]/20"
            >
              <span>Consult Our Senior Agronomists</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
