import Image from "next/image";

export default function Hero() {
  return (
    <section
      data-scroll-section
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video/video.mov" type="video/mp4" />
        Twoja przeglądarka nie obsługuje wideo.
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white/80 px-6">
        <div className="relative w-32 h-32">
          <Image
            src="/assets/images/logo-black.png"
            alt="Perfect Home Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold">
          Architektura luksusu. Prostota formy.
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light">
          Biuro nieruchomości, które łączy estetykę, precyzję i skuteczność.
        </p>
        <a
          href="#oferty"
          className="mt-6 inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 uppercase text-sm md:text-base"
        >
          Zobacz oferty
        </a>
      </div>
    </section>
  );
}
