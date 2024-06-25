import { categories as categoryList } from "@/lib/categories";
console.log("🚀 ~ categoryList:", categoryList);
import Image from "next/image";

export default function Categories() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categoryList.map((category) => (
          <div
            key={category.id}
            className="relative rounded-lg overflow-hidden h-40"
          >
            <Image
              src={category.image}
              alt={category.name}
              className="transition-transform duration-300 transform hover:scale-105 object-cover w-full h-full"
              width={300}
              height={300}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
