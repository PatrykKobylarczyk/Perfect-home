const benefits = [
  "Indywidualne podejście do klienta",
  "Szeroka baza ofert",
  "Wsparcie na każdym etapie zakupu",
  "Doświadczenie i lokalna znajomość rynku",
];

export default function Benefits() {
  return (
    <section data-scroll-section className="py-16 px-6 md:px-20 ">
      <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-10">
        Dlaczego warto
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg md:text-xl font-light">
        {benefits.map((item, index) => (
          <li
            key={index}
            className="bg-[#101015] p-6 rounded shadow text-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
