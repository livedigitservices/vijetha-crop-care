import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowRight, Phone } from "lucide-react";
import { NAV_LINKS } from "../../data/navigation";
import { COMPANY_INFO } from "../../data/company";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          scrolled
            ? "py-3 bg-[#FFFFFF]/96 backdrop-blur-xl border-b border-[#E0ECE2] shadow-md shadow-slate-900/5"
            : "py-5 bg-gradient-to-b from-[#FFFFFF]/95 via-[#FFFFFF]/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo - Official Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-hidden"
            aria-label="Vijetha Crop Care Home"
          >
            <div className="bg-white px-3 py-1.5 rounded-lg border border-[#E0ECE2] shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="/logo.svg"
                alt="Vijetha Crop Care"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {NAV_LINKS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xs uppercase tracking-[0.2em] font-extrabold transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-[#58B023]"
                      : "text-[#11102B] hover:text-[#58B023]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#58B023] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.contact.farmerHotline}`}
              className="hidden lg:flex items-center gap-1.5 text-xs text-[#11102B] hover:text-[#58B023] transition-colors mr-2 font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#E89C12]" />
              <span>{COMPANY_INFO.contact.farmerHotline}</span>
            </a>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#58B023] text-[#FFFFFF] text-xs font-extrabold uppercase tracking-[0.18em] hover:bg-[#6CB42C] transition-all duration-300 group shadow-md shadow-[#58B023]/20"
            >
              <span>Discover Products</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2.5 rounded-md bg-[#F2F8F4] border border-[#E0ECE2] text-[#11102B] hover:text-[#58B023] focus:outline-hidden"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6 stroke-[2]" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
