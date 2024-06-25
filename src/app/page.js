import HeroBanner from "@/components/home/HeroBanner";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import Newsletter from "@/components/home/Newsletter";
import PopularProducts from "@/components/home/PopularProducts";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      {/* <HeroBanner /> */}
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <PopularProducts />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
