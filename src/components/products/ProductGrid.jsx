import ProductCard from "./ProductCard";

export default function ProductGrid({ products, theme = "light" }) {
  if (!products || products.length === 0) {
    return (
      <div className="py-20 text-center rounded-xl border border-[#E0ECE2] bg-white p-12 shadow-sm">
        <p className="font-serif text-2xl text-[#11102B] mb-2 font-light">
          No matching formulations discovered.
        </p>
        <p className="text-xs uppercase tracking-widest text-[#E89C12] font-bold">
          Please adjust your category or search filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} theme={theme} />
      ))}
    </div>
  );
}
