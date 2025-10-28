"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-20 py-4">
        <div className="text-xl font-bold uppercase">Perfect Home</div>
        <ul className="hidden md:flex gap-8 text-sm uppercase font-medium">
          <li>
            <a href="#oferty" className="hover:text-gray-500 transition-colors">
              Oferty
            </a>
          </li>
          <li>
            <a href="#onas" className="hover:text-gray-500 transition-colors">
              O nas
            </a>
          </li>
          <li>
            <a
              href="#galeria"
              className="hover:text-gray-500 transition-colors"
            >
              Galeria
            </a>
          </li>
        </ul>
        <a
          href="#kontakt"
          className="hidden md:inline-block px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 uppercase text-sm"
        >
          Kontakt
        </a>
      </nav>
    </header>
  );
}
