import { PRODUCT_CATEGORIES } from "../../data/products";

export default function ProductCategory({ selectedCategory, onSelectCategory, counts = {} }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
      {PRODUCT_CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        const count = counts[cat.id];

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`shrink-0 px-4 sm:px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 rounded-md border cursor-pointer ${
              isSelected
                ? "bg-[#6CB42C] text-[#11102B] border-[#6CB42C] font-extrabold shadow-md shadow-[#6CB42C]/20"
                : "bg-[#1F1C4A]/80 text-[#CBD5E1] border-[#6CB42C]/30 hover:border-[#6CB42C] hover:text-[#FFFFFF]"
            }`}
          >
            <span>{cat.name}</span>
            {count !== undefined && (
              <span className={`ml-2 text-[10px] font-extrabold ${isSelected ? "text-[#11102B]" : "text-[#E89C12]"}`}>
                ({count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
