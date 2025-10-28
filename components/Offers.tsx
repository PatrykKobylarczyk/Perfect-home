import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    id: "apartments",
    title: "Mieszkania",
    image: "/assets/images/1.jpg",
  },
  {
    id: "houses",
    title: "Domy",
    image: "/assets/images/2.jpg",
  },
  {
    id: "lands",
    title: "Działki",
    image: "/assets/images/3.jpg",
  },
];

export default function Offers() {
  return (
    <section id="oferty" className="py-16 px-6 md:px-[20vw]">
      <h2 className="text-3xl md:text-4xl font-bold uppercase text-left mb-2">
        Wybrane oferty
      </h2>
      <p className="text-white/80 font-extralight mb-10">
        Kuracja przestrzeni mieszkalnych i inwestycyjnych w najlepszych
        lokalizacjach.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative group h-64 overflow-hidden rounded shadow"
          >
            <Image
              src={offer.image}
              alt={offer.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
            <div className="absolute z-20 bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold uppercase">{offer.title}</h3>
              <Link
                href={`/nieruchomosci/${offer.id}/sprzedaz`}
                className="mt-2 inline-block px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm uppercase"
              >
                Zobacz więcej
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
