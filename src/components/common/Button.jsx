import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary-green",
  size = "md",
  icon = true,
  className = "",
  type = "button",
  disabled = false
}) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-sans cursor-pointer select-none group text-center rounded-md font-bold tracking-wider";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase",
    md: "px-6 py-3.5 text-sm uppercase tracking-widest",
    lg: "px-8 py-4 text-base uppercase tracking-widest"
  };

  const variantStyles = {
    "primary-green": "bg-[#58B023] text-[#FFFFFF] hover:bg-[#6CB42C] shadow-md shadow-[#58B023]/25 active:translate-y-0.5",
    "primary-indigo": "bg-[#2E2870] text-[#FFFFFF] hover:bg-[#1B1947] shadow-md shadow-[#2E2870]/25 active:translate-y-0.5",
    "primary-gold": "bg-[#E89C12] text-[#11102B] hover:bg-[#FAA61A] shadow-md shadow-[#E89C12]/25 active:translate-y-0.5",
    "outline-indigo": "border-2 border-[#2E2870] text-[#2E2870] hover:bg-[#2E2870] hover:text-[#FFFFFF] active:translate-y-0.5",
    "outline-green": "border-2 border-[#58B023] text-[#006E38] hover:bg-[#58B023] hover:text-[#FFFFFF] active:translate-y-0.5",
    "light-mint": "bg-[#E8F2EA] text-[#006E38] border border-[#58B023]/30 hover:bg-[#58B023] hover:text-[#FFFFFF] active:translate-y-0.5",
    "text-arrow": "p-0 text-[#006E38] hover:text-[#58B023] uppercase text-xs sm:text-sm bg-transparent border-0"
  };

  const combinedClass = `${baseStyles} ${size === "text" ? "" : sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles["primary-green"]} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className={`ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5 ${size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"}`} />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClass}>
      {content}
    </button>
  );
}
