"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Produtos", href: "/produtos" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-gold/10 py-3 shadow-xl shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center shadow-lg shadow-gold/20">
            <span className="text-navy font-bold text-lg font-serif">F</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-cream font-serif text-lg font-semibold tracking-wide">
              Five
            </span>
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
              Bank
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 hover:text-gold-light relative group ${
                  pathname === link.href ? "text-gold" : "text-cream/70"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contato"
            className="text-sm text-cream/70 hover:text-gold transition-colors"
          >
            Acesse sua conta
          </Link>
          <Link
            href="/contato"
            className="gold-gradient text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg shadow-gold/20"
          >
            Abrir Conta
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cream/80 hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-light border-t border-gold/10 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm py-2 transition-colors ${
                pathname === link.href ? "text-gold" : "text-cream/70 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setMobileOpen(false)}
            className="block gold-gradient text-navy text-sm font-semibold px-5 py-2.5 rounded-lg text-center mt-4"
          >
            Abrir Conta
          </Link>
        </div>
      </div>
    </header>
  );
}
