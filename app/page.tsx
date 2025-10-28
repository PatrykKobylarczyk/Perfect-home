import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import ContactCTA from "@/components/ContactCTA";
import Offers from "@/components/Offers";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Offers />
      <About />
      <Benefits />
      <Gallery />
      <ContactCTA />
    </main>
  );
}
