export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = ""
}) {
  const isCenter = align === "center";

  const textColor = theme === "dark" ? "text-[#FFFFFF]" : "text-[#11102B]";
  const subtextColor = theme === "dark" ? "text-[#CBD5E1]" : "text-[#475569]";
  const eyebrowColor = theme === "dark" ? "text-[#58B023]" : "text-[#006E38]";
  const lineColor = theme === "dark" ? "bg-[#E89C12]" : "bg-[#58B023]";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto" : "text-left"} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-3 mb-3.5 ${isCenter ? "justify-center" : "justify-start"}`}>
          <span className={`h-0.5 w-6 sm:w-8 ${lineColor}`}></span>
          <span className={`text-xs uppercase tracking-[0.28em] font-extrabold ${eyebrowColor}`}>
            {eyebrow}
          </span>
          <span className={`h-0.5 w-6 sm:w-8 ${lineColor}`}></span>
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-light tracking-tight leading-[1.18] ${textColor}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 sm:mt-5 text-base sm:text-lg font-light leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""} ${subtextColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
