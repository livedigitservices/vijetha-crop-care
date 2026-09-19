import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout } from "lucide-react";
import { CROPS } from "../../data/crops";
import CropCard from "./CropCard";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function CropSelector() {
  const [selectedCropId, setSelectedCropId] = useState("paddy");

  const selectedCrop = CROPS.find((c) => c.id === selectedCropId) || CROPS[0];

  return (
    <section className="py-20 md:py-28 bg-[#F6F8FB] text-[#1E293B] relative overflow-hidden border-t border-slate-200">
      {/* Background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#58B023]/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container>
        <SectionHeading
          eyebrow="Targeted Agronomy"
          title="Engineered For Every Indian Crop."
          subtitle="Select your crop to uncover customized organic nutritional and defensive protocols built for maximum harvest vitality."
          align="center"
          theme="light"
        />

        {/* Visual Crop Selection Cards Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {CROPS.map((crop) => {
            const isSelected = crop.id === selectedCropId;
            return (
              <button
                key={crop.id}
                onClick={() => setSelectedCropId(crop.id)}
                className={`group text-left rounded-xl overflow-hidden border transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#11102B] text-white border-[#58B023] ring-2 ring-[#58B023]/50 shadow-xl scale-[1.03] z-10"
                    : "bg-white text-slate-700 border-slate-200 hover:border-[#58B023]/60 hover:shadow-md hover:bg-slate-50"
                }`}
              >
                {/* Crop Hero Thumbnail Header */}
                <div className="relative h-20 w-full overflow-hidden">
                  <img
                    src={crop.heroImage}
                    alt={crop.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isSelected ? "saturate-110 brightness-100" : "saturate-90 brightness-90"
                    }`}
                  />
                  <div className={`absolute inset-0 ${
                    isSelected 
                      ? "bg-gradient-to-t from-[#11102B] via-[#11102B]/40 to-transparent" 
                      : "bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"
                  }`} />
                  
                  {/* Telugu Badge */}
                  <span className={`absolute top-2 left-2 px-2 py-0.5 text-[11px] font-bold rounded-md font-serif ${
                    isSelected
                      ? "bg-[#58B023] text-white shadow-sm"
                      : "bg-slate-900/80 text-[#E89C12] backdrop-blur-xs"
                  }`}>
                    {crop.teluguName}
                  </span>

                  {isSelected && (
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#E89C12] ring-2 ring-white animate-pulse" />
                  )}
                </div>

                {/* Crop Name */}
                <div className="p-3 flex-1 flex flex-col justify-center">
                  <h4 className={`text-xs font-bold uppercase tracking-wider line-clamp-1 ${
                    isSelected ? "text-white" : "text-slate-800"
                  }`}>
                    {crop.name.split(" ")[0]}
                  </h4>
                  <p className={`text-[10px] line-clamp-1 mt-0.5 font-light ${
                    isSelected ? "text-[#E89C12]" : "text-slate-500"
                  }`}>
                    {crop.category}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Crop Detail Component */}
        <div className="max-w-5xl mx-auto">
          <CropCard crop={selectedCrop} />
        </div>

        {/* Direct Link to Crop Care Page */}
        <div className="mt-12 text-center">
          <Link
            to="/crop-care"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-slate-200 text-xs uppercase tracking-[0.2em] font-extrabold text-[#11102B] hover:text-[#006E38] hover:border-[#58B023] shadow-sm hover:shadow-md transition-all group"
          >
            <Sprout className="w-4 h-4 text-[#58B023]" />
            <span>Explore Comprehensive Crop Schedules</span>
            <ArrowRight className="w-4 h-4 text-[#58B023] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

