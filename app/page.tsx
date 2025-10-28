import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import ContactCTA from "@/components/ContactCTA";
import Offers from "@/components/Offers";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Offers />
      <Benefits />
      <ContactCTA />
    </main>
  );
}
