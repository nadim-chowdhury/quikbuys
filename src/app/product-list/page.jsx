"use client";

import { useDispatch } from "react-redux";
import { addItem } from "@/store/slices/cartSlice";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { products } from "@/lib/products";
import Link from "next/link";

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Product List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white rounded-lg border overflow-hidden"
          >
            <Link href={`/product-list/${product.id}`}>
              <div className="relative h-60">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-lg"
                  layout="fill"
                />
              </div>
            </Link>
            <div className="p-6 bg-rose-50">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mb-2">Price: ${product.price}</p>
              <Button onClick={() => dispatch(addItem(product))}>
                Add to Cart
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-8">
        <Button className="bg-rose-500">Load More</Button>
      </div>
    </div>
  );
};

export default ProductList;
