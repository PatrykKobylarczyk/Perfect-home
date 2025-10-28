import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      data-scroll-section
      id="kontakt"
      className="py-16 px-6 md:px-20 bg-black text-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
        Skontaktuj się z nami
      </h2>
      <p className="text-lg md:text-xl font-light mb-6">
        Masz pytania? Chcesz umówić się na prezentację?
      </p>
      <Link
        href="/kontakt"
        className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 uppercase text-sm md:text-base"
      >
        Przejdź do kontaktu
      </Link>
    </section>
  );
}
