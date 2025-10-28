const benefits = [
  "Indywidualne podejście do klienta",
  "Szeroka baza ofert",
  "Wsparcie na każdym etapie zakupu",
];

export default function Benefits() {
  return (
    <section data-scroll-section className="w-full py-16 px-6 md:px-[20vw]">
      <h2
        className="text-3xl md:text-4xl font-bold uppercase text-left
       mb-10"
      >
        Dlaczego warto
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[80vw]  mx-auto text-lg md:text-xl font-light ">
        {benefits.map((item, index) => (
          <li
            key={index}
            className="bg-white/5 py-6 px-20  rounded shadow flex justify-center items-center text-center border-1 border-white/20 "
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
