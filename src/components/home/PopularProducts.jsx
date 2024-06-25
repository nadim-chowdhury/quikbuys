import { popularProducts } from "@/lib/popular-products";
import ProductCard from "../ProductCard";

export default function PopularProducts() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Popular Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularProducts.map((product, i) => (
          <ProductCard data={product} key={i} />
        ))}
      </div>
    </div>
  );
}
