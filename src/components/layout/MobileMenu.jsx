import { Link } from "react-router-dom";
import { X, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "../../data/navigation";
import { COMPANY_INFO } from "../../data/company";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#FFFFFF]/98 backdrop-blur-2xl text-[#11102B] p-6 sm:p-10 transition-all duration-500 animate-fadeIn">
      {/* Header with Official Logo & Close Button */}
      <div className="flex items-center justify-between pb-6 border-b border-[#E0ECE2]">
        <Link to="/" onClick={onClose} className="bg-white px-3 py-1.5 rounded-lg border border-[#E0ECE2] shadow-sm">
          <img src="/logo.svg" alt="Vijetha Crop Care" className="h-9 w-auto object-contain" />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2.5 rounded-full border border-[#E0ECE2] bg-[#F2F8F4] text-[#11102B] hover:text-[#58B023] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="my-auto py-8 space-y-6">
        {NAV_LINKS.map((link, idx) => (
          <div key={link.path} className="border-b border-slate-100 pb-4">
            <Link
              to={link.path}
              onClick={onClose}
              className="flex items-center justify-between text-2xl font-serif text-[#11102B] hover:text-[#58B023] transition-colors"
            >
              <span>
                <span className="text-xs font-sans tracking-widest text-[#006E38] font-extrabold mr-4">
                  0{idx + 1}
                </span>
                {link.name}
              </span>
              <ArrowRight className="w-5 h-5 text-[#58B023]" />
            </Link>
          </div>
        ))}

        <div className="pt-4">
          <Link
            to="/products"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-4 bg-[#58B023] text-[#FFFFFF] font-extrabold text-xs tracking-widest uppercase hover:bg-[#6CB42C] transition-colors rounded-md shadow-lg shadow-[#58B023]/20"
          >
            <span>Discover Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Quick Farmer Contact Assistance */}
      <div className="pt-6 border-t border-[#E0ECE2] space-y-3 text-xs tracking-wider text-[#334155]">
        <p className="uppercase text-[10px] tracking-[0.25em] text-[#006E38] font-extrabold">
          Farmer Agronomy Concierge
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${COMPANY_INFO.contact.farmerHotline}`}
            className="flex items-center gap-1.5 text-xs text-[#11102B] font-bold hover:text-[#58B023]"
          >
            <Phone className="w-3.5 h-3.5 text-[#E89C12]" />
            <span>{COMPANY_INFO.contact.farmerHotline}</span>
          </a>
          <span className="text-[#58B023]/40">|</span>
          <a
            href={COMPANY_INFO.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#11102B] font-bold hover:text-[#58B023]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
