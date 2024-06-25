import Image from "next/image";
import { Button } from "./ui/button";

export default function ProductCard({ data }) {
  return (
    <div key={data.id} className="rounded-lg p-4 bg-rose-50">
      <Image
        src={data.image}
        alt={data.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{data.name}</h3>
        <p className="text-gray-500">{data.price}</p>
        <Button className="mt-4 w-full bg-rose-500 text-white py-2 rounded-lg">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
