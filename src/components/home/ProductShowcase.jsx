import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../../data/products";
import ProductCard from "../products/ProductCard";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Display 4 columns x 2 rows = 8 products
  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS.slice(0, 8)
      : PRODUCTS.filter((p) => p.categorySlug === selectedCategory).slice(0, 8);

  return (
    <section className="py-24 md:py-32 bg-[#F2F8F4] text-[#11102B] relative overflow-hidden border-t border-[#E0ECE2]">
      {/* Background subtle atmospheric radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#58B023]/8 blur-[140px] pointer-events-none"></div>

      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Pure Botanical & Microbial Science"
          title="Curated Organic Crop-Care Formulations"
          subtitle="Engineered with pharmaceutical rigor to rebuild soil organic carbon and protect crop foliage with zero synthetic residues."
          align="center"
          theme="light"
        />

        {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
        <div className="flex items-center justify-start md:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-extrabold transition-all duration-300 rounded-md border cursor-pointer ${
                  isSelected
                    ? "bg-[#58B023] text-[#FFFFFF] border-[#58B023] shadow-md shadow-[#58B023]/25"
                    : "bg-white text-[#334155] border-[#E0ECE2] hover:border-[#58B023] hover:text-[#006E38] shadow-xs"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* 4-Column Grid with 2 Rows (8 Products Total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} theme="light" />
          ))}
        </div>

        {/* More Products Button */}
        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-md bg-[#58B023] text-[#FFFFFF] hover:bg-[#6CB42C] transition-all duration-300 text-xs uppercase tracking-[0.24em] font-extrabold group shadow-xl shadow-[#58B023]/25 cursor-pointer"
          >
            <span>More Products</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
