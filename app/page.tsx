"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import ContactCTA from "@/components/ContactCTA";
import Offers from "@/components/Offers";
import Gallery from "@/components/Gallery";
import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function HomePage() {
  return (
    <main data-scroll-container className="flex flex-col w-full ">
      <Hero />
      <Offers />
      <About />
      <Benefits />
      <Gallery />
      <ContactCTA />
    </main>
  );
}
