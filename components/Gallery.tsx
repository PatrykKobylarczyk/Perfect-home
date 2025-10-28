"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
  "/assets/images/1.jpg",
  "/assets/images/2.jpg",
  "/assets/images/3.jpg",
  "/assets/images/4.jpg",
  "/assets/images/6.jpg",
  "/assets/images/7.jpg",
];

export default function Gallery() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section id="galeria" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-10">
        Galeria
      </h2>
      <div ref={sliderRef} className="keen-slider max-w-6xl mx-auto">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide relative h-64 overflow-hidden rounded shadow group"
          >
            <Image
              src="/assets/images/1.jpg"
              alt={`Galeria ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
