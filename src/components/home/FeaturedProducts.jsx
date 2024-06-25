import { featuredProducts } from "@/lib/featured-products";
import ProductCard from "../ProductCard";

export default function FeaturedProducts() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProducts.map((product, i) => (
          <ProductCard data={product} key={i} />
        ))}
      </div>
    </div>
  );
}
