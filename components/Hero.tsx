import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-white text-center">
      <Image
        src="/assets/images/hero.jpg"
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          Znajdź idealną nieruchomość
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light">
          Mieszkania, domy i działki w Twoim zasięgu
        </p>
        <Link
          href="/nieruchomosci"
          className="mt-6 inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 uppercase text-sm md:text-base"
        >
          Zobacz oferty
        </Link>
      </div>
    </section>
  );
}
