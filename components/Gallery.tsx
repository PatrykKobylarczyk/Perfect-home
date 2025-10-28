"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";
import "keen-slider/keen-slider.min.css";

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
    <section
      data-scroll-section
      id="galeria"
      className="py-16 px-6 md:px-20 scroll-mt-[70px]"
    >
      <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-10">
        Galeria
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="keen-slider__slide relative h-64 overflow-hidden rounded shadow group"
            >
              <Image
                src={src}
                alt={`Galeria ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-opacity-40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Poprzednie zdjęcie"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => instanceRef.current?.next()}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Następne zdjęcie"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
