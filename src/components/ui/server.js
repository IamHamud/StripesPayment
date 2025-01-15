import { Carousel } from "flowbite-react";

export function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src="/images/1.jpeg" alt="..." />
        <img src="/images/2.jpeg" alt="..." />
        <img src="/images/3.jpeg" alt="..." />
        <img src="/images/4.jpeg" alt="..." />
        <img src="/images/5.jpeg" alt="..." />
      </Carousel>
    </div>
  );
}
