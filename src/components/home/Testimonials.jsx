import { testimonials } from "@/lib/testimonials";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Customer Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-rose-50 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
