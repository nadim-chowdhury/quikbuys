"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { demoBanner } from "@/lib/demo-banner";

export default function HeroSection() {
  return (
    <div className="container mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[75vh] rounded-lg custom-swiper"
        freeMode={true}
        effect="fade"
      >
        {demoBanner.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.path}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
