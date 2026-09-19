import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CropSolution({ solution, product }) {
  if (!solution) return null;

  return (
    <div className="p-5 bg-[#0B2B1E] border border-[#C5A880]/20 rounded-none space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
          {solution.stage}
        </span>
        {product && (
          <Link
            to={`/products/${product.id}`}
            className="text-xs text-[#DFC7A5] hover:text-[#FAF8F2] font-medium inline-flex items-center gap-1 group"
          >
            <span>{product.name}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      <p className="text-xs sm:text-sm text-[#FAF8F2]/80 font-light leading-relaxed">
        {solution.action}
      </p>
    </div>
  );
}
