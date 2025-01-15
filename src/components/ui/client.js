"use client";

import { Carousel } from "flowbite-react";

export function ClientCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img
          src="/images/1.jpeg"
          alt="..."
          className="object-contain h-full w-full"
        />
        <img
          src="/images/2.jpeg"
          alt="..."
          className="object-contain h-full w-full"
        />
        <img
          src="/images/3.jpeg"
          alt="..."
          className="object-contain h-full w-full"
        />
        <img
          src="/images/4.jpeg"
          alt="..."
          className="object-contain h-full w-full"
        />
        <img
          src="/images/5.jpeg"
          alt="..."
          className="object-contain h-full w-full"
        />
      </Carousel>
    </div>
  );
}
