"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
          ? "bg-white/90 backdrop-blur-md border-b border-orange/10 py-3 shadow-lg shadow-black/5"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-32 h-10">
            <Image
              src="/logo.png"
              alt="FiveCred Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-orange relative group ${
                  pathname === link.href ? "text-orange" : "text-dark/70"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300 ${
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
            className="text-sm font-medium text-dark/70 hover:text-orange transition-colors"
          >
            Acesse sua conta
          </Link>
          <Link
            href="/contato"
            className="orange-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:shadow-orange/20 hover:shadow-lg transition-all duration-200"
          >
            Abrir Conta
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-dark/80 hover:text-orange transition-colors"
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
        <div className="bg-white border-t border-gray/10 px-6 py-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium py-2 transition-colors ${
                pathname === link.href ? "text-orange" : "text-dark/70 hover:text-orange"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setMobileOpen(false)}
            className="block orange-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center mt-4"
          >
            Abrir Conta
          </Link>
        </div>
      </div>
    </header>
  );
}
