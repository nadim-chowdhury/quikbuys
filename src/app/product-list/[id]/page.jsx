"use client";

import Image from "next/image";

export default function ProductDetails() {
  const product = {
    id: 1,
    name: "Sample Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 200,
    image: "/products/shorts-1.jpg", // Replace with your actual image path
  };

  const addToCart = () => {
    // Implement your add to cart logic here
    console.log("Product added to cart:", product);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Product Details
      </h2>

      <div className="rounded-lg overflow-hidden flex items-start justify-center gap-8">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            className="w-80 h-80 object-cover border rounded-lg p-4"
            width={400}
            height={400}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-800 font-bold text-lg mb-2">
            ${product.price}
          </p>
          <div className="flex justify-end">
            <button
              onClick={addToCart}
              className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
