import { Phone, Mail, MapPin, MessageCircle, Clock, Award, Navigation } from "lucide-react";
import { COMPANY_INFO } from "../../data/company";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Primary HQ Card */}
      <div className="bg-white text-[#11102B] rounded-2xl border border-[#E0ECE2] shadow-xl overflow-hidden space-y-6">
        {/* Top Facility Image Banner */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=85"
            alt="Vijetha Agronomy & Bio-Tech Research Complex"
            className="w-full h-full object-cover filter saturate-105 brightness-95 transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11102B]/90 via-[#11102B]/30 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] uppercase tracking-[0.24em] font-extrabold text-white bg-[#58B023] px-3 py-1 rounded-full shadow-md inline-block">
              Central Headquarters & Labs
            </span>
          </div>
        </div>

        <div className="px-6 sm:px-8 pb-8 pt-0 space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#11102B]">
              Vijetha Crop Care Pvt Ltd
            </h3>
            <p className="text-xs text-[#E89C12] mt-1 font-bold italic">
              Agricultural Biotechnology Research & Formulation Complex
            </p>
          </div>

          <div className="space-y-5 text-xs sm:text-sm text-[#334155] font-light divide-y divide-slate-100">
            <div className="flex items-start gap-4 pt-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-[#006E38] shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-[#11102B]">Head Office & Agronomy Lab</p>
                <p className="text-xs text-[#475569] mt-0.5 leading-relaxed">
                  {COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.landmark}, {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state} - {COMPANY_INFO.headquarters.pincode}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${COMPANY_INFO.headquarters.address}, ${COMPANY_INFO.headquarters.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#58B023] hover:text-[#006E38] mt-1.5 transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-[#006E38] shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-[#11102B]">Farmer Advisory Helpline</p>
                <p className="text-xs text-[#006E38] font-sans font-extrabold mt-0.5">
                  <a href={`tel:${COMPANY_INFO.contact.farmerHotline}`} className="hover:underline">
                    {COMPANY_INFO.contact.farmerHotline}
                  </a>{" "}
                  <span className="text-slate-500 font-normal">/ Toll-Free: {COMPANY_INFO.contact.helpline}</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-[#006E38] shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-[#11102B]">Official Agronomy Correspondence</p>
                <p className="text-xs text-[#475569] mt-0.5">
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-[#58B023] font-medium">
                    {COMPANY_INFO.contact.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-[#006E38] shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-[#11102B]">Operational Agronomy Hours</p>
                <p className="text-xs text-[#475569] mt-0.5">
                  {COMPANY_INFO.contact.hours}
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Action Button */}
          <div className="pt-2">
            <a
              href={COMPANY_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#25D366] text-white text-xs uppercase tracking-[0.2em] font-extrabold hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg cursor-pointer group"
            >
              <MessageCircle className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>Chat On WhatsApp With Agronomist</span>
            </a>
          </div>
        </div>
      </div>

      {/* Regional Field Hubs */}
      <div className="p-6 bg-white border border-[#E0ECE2] rounded-2xl shadow-sm space-y-4">
        <h4 className="text-xs uppercase tracking-[0.24em] font-extrabold text-[#11102B] pb-3 border-b border-slate-100 flex items-center justify-between">
          <span>Regional Depots & Hubs</span>
          <span className="text-[10px] text-[#58B023] bg-emerald-50 px-2 py-0.5 rounded font-bold">
            2 Depots
          </span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#334155]">
          <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200 space-y-1">
            <p className="font-bold text-[#11102B]">Guntur Chilli & Cotton Depot</p>
            <p className="text-[11px] text-slate-500">Autonagar Industrial Area, Guntur, AP</p>
          </div>

          <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200 space-y-1">
            <p className="font-bold text-[#11102B]">Warangal Agricultural Belt Hub</p>
            <p className="text-[11px] text-slate-500">Enumamula Grain Market Road, Warangal, TS</p>
          </div>
        </div>
      </div>

      {/* Trust & Organic Certification Note */}
      <div className="flex items-center gap-4 p-5 border border-[#58B023]/30 rounded-2xl bg-emerald-50/60 shadow-2xs">
        <div className="w-10 h-10 rounded-full bg-[#58B023]/20 flex items-center justify-center shrink-0">
          <Award className="w-6 h-6 text-[#006E38]" />
        </div>
        <p className="text-xs text-[#334155] leading-relaxed">
          <strong className="text-[#11102B]">Certified Quality Guarantee:</strong> Every batch undergoes strict microbial viability testing and metal spectroscopy prior to farm dispatch.
        </p>
      </div>
    </div>
  );
}

