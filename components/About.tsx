import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
            O nas
          </h2>
          <p className="text-lg md:text-xl font-light">
            Jesteśmy agencją nieruchomości z wieloletnim doświadczeniem.
            Pomagamy klientom znaleźć wymarzone mieszkania, domy i działki.
            Naszym celem jest profesjonalizm, zaufanie i skuteczność.
          </p>
        </div>
        <div className="flex-1 relative w-full h-64 md:h-96">
          <Image
            src="/assets/images/about.jpg"
            alt="O nas"
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
