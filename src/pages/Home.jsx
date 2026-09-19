import { useEffect, useRef } from "react";
import Hero from "../components/home/Hero";
import BrandIntro from "../components/home/BrandIntro";
import ProductShowcase from "../components/home/ProductShowcase";
import CropCareStages from "../components/home/CropCareStages";
import CropSelector from "../components/crops/CropSelector";
import WhyVijetha from "../components/home/WhyVijetha";
import BrandPhilosophy from "../components/home/BrandPhilosophy";
import CTASection from "../components/home/CTASection";
import { pageEnter } from "../animations/pageTransitions";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    pageEnter(containerRef);
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <Hero />
      <BrandIntro />
      <ProductShowcase />
      <CropCareStages />
      <CropSelector />
      <WhyVijetha />
      <BrandPhilosophy />
      <CTASection />
    </div>
  );
}
