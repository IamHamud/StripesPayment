"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination } from "swiper/modules"; // Correct module import for Swiper 11+
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const SwiperCarousel = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
        Our Pricing Plans
      </h2>
      <Swiper
        modules={[Navigation, Pagination]} // Pass the modules explicitly
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md flex flex-col items-center">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/merchant-services.webp"
                alt="Merchant Services"
                layout="fill"
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Merchant Services
            </p>
            <p className="text-center text-3xl font-bold text-teal-500 mb-4 mt-4">
              $499/year
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md flex flex-col items-center">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/startup-services.webp"
                alt="Startup Services"
                layout="fill"
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Startup Services
            </p>
            <p className="text-center text-3xl font-bold text-purple-500 mb-4 mt-4">
              $199/year
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperCarousel;
