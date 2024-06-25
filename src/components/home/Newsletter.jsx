import { Button } from "../ui/button";

export default function Newsletter() {
  return (
    <div className="container mx-auto py-16">
      <div className="bg-rose-50 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-500 mb-8">
          Stay updated with the latest news and special offers.
        </p>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-2/3 md:w-1/3 p-2 border rounded-l-lg focus:outline-none"
          />
          <Button className="bg-rose-500 text-white py-2 px-4 rounded-l-none">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
