"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Oferty", href: "#oferty" },
    { label: "O nas", href: "#onas" },
    { label: "Galeria", href: "#galeria" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-80 shadow" : "bg-black bg-opacity-40"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-20 py-4">
        <div className="relative w-15 h-15 z-100">
          <Image
            src="/assets/images/logo-black.png"
            alt="Perfect Home Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase font-medium text-white text-opacity-80">
          {navLinks.slice(0, 3).map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="hidden md:inline-block px-6 py-2 border border-white text-white text-opacity-80 hover:text-opacity-100 hover:bg-white hover:text-black transition-colors duration-300 uppercase text-sm"
        >
          Kontakt
        </a>

        {/* Hamburger / Close icon */}
        <button
          className="md:hidden relative w-8 h-8 z-50 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Fullscreen menu sliding from right */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ rotateX: 90, y: 20, opacity: 0 }}
                animate={{ rotateX: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.2,
                  ease: "easeOut",
                }}
                className="text-xl uppercase font-medium text-white text-opacity-80 hover:text-opacity-100 transition-colors mb-4"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
