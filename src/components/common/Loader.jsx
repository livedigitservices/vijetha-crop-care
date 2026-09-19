export default function Loader({ message = "Loading Vijetha Bio-Agronomy..." }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071F15] text-[#FAF8F2]">
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer luxury ring */}
        <div className="w-16 h-16 rounded-full border border-[#C5A880]/20 animate-spin border-t-[#C5A880]"></div>
        <div className="absolute font-serif text-xl font-bold tracking-widest text-[#C5A880]">
          V
        </div>
      </div>
      <p className="font-serif text-sm uppercase tracking-[0.3em] text-[#C5A880]">
        VIJETHA CROP CARE
      </p>
      <p className="mt-2 text-xs tracking-wider text-[#FAF8F2]/60 font-light">
        {message}
      </p>
    </div>
  );
}
