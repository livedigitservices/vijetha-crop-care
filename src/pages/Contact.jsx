import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Sparkles, ChevronDown, ChevronUp, PhoneCall, Clock, ShieldCheck, MapPin } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { pageEnter } from "../animations/pageTransitions";
import { COMPANY_INFO } from "../data/company";

const FAQS = [
  {
    q: "Can Vijetha organic formulations be tank-mixed with other biological products?",
    a: "Yes. Vijetha bio-stimulants, humic acids, and botanical extracts are physically and biologically compatible with most beneficial microbial bio-fertilizers and organic inputs. Avoid tank-mixing with strong chemical bactericides or alkaline lime sulfur."
  },
  {
    q: "How quickly do crops respond after applying Bhoomi Ratna or Mritika-Vital?",
    a: "Within 5 to 7 days of soil application or drenching, growers observe significant new white feeder root initiation, improved leaf turgidity, and accelerated lateral branch emergence."
  },
  {
    q: "Are Vijetha products approved for certified organic export crops?",
    a: "Yes. Our formulations are 100% free from synthetic chemical residues, heavy metals, and persistent toxic compounds, complying with export NPOP / APEDA organic residue standards."
  },
  {
    q: "How can I become an authorized distributor or dealer for Vijetha Crop Care?",
    a: "Please fill out the enquiry form selecting your district, or contact our central sales and distribution director directly via our helpline. We welcome agricultural dealers across South and Central India."
  }
];

export default function Contact() {
  const containerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get("product") || "";
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    pageEnter(containerRef);
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div ref={containerRef} className="pt-28 pb-24 bg-[#F6F8FB] text-[#1E293B]">
      {/* Editorial Header */}
      <section className="relative py-20 md:py-28 bg-[#11102B] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2100&q=85')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#11102B] via-[#11102B]/75 to-[#11102B]/90"></div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#58B023]/50 bg-[#1F1C4A]/90 backdrop-blur-md mb-6 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#E89C12]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#58B023] font-extrabold">
              Farmer Concierge & Support
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.12]">
            Connect With Vijetha
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed max-w-2xl mx-auto">
            Our qualified agronomists and crop specialists are at your service for farm visits, dosage advice, dealership enquiries, and customized soil rejuvenation schedules.
          </p>

          {/* Quick Stats Strip */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/10 text-left">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-xs border border-white/10">
              <PhoneCall className="w-5 h-5 text-[#58B023] shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">Agronomist Helpline</span>
                <span className="text-[11px] text-[#E89C12] font-semibold">{COMPANY_INFO.contact.farmerHotline}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-xs border border-white/10">
              <Clock className="w-5 h-5 text-[#58B023] shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">Response Time</span>
                <span className="text-[11px] text-slate-300 font-light">Within 24 Hours</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-xs border border-white/10">
              <ShieldCheck className="w-5 h-5 text-[#58B023] shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">Field Coverage</span>
                <span className="text-[11px] text-slate-300 font-light">50+ Districts across AP & TS</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm initialProduct={initialProduct} />
            </div>

            {/* Info Column (5 cols) */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white border-t border-slate-200">
        <Container className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Farmer Knowledge Base"
            title="Frequently Asked Questions"
            subtitle="Clear answers regarding application protocols, tank mixtures, and organic certification."
            align="center"
            theme="light"
          />

          <div className="space-y-4 mt-10">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#58B023] bg-emerald-50/20 shadow-md"
                      : "border-slate-200 bg-[#F8FAFC] hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-serif text-base sm:text-lg text-[#11102B] font-bold">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#58B023] text-white" : "bg-slate-200 text-slate-600"
                    }`}>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#475569] font-light leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Location / Directions Card */}
          <div className="mt-16 p-8 bg-[#11102B] text-white rounded-2xl border border-[#58B023]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#58B023]/20 border border-[#58B023] flex items-center justify-center shrink-0 text-[#58B023]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-white">
                  Visiting Our Central Agronomy Labs?
                </h4>
                <p className="text-xs text-slate-300 font-light mt-1">
                  {COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state}
                </p>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(`${COMPANY_INFO.headquarters.address}, ${COMPANY_INFO.headquarters.city}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#58B023] text-[#11102B] text-xs uppercase tracking-widest font-extrabold rounded-xl hover:bg-[#6CB42C] transition-colors shrink-0 shadow-md"
            >
              Open Google Maps
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}

