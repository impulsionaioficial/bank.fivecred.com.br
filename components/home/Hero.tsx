"use client";

import Link from "next/link";
import { ArrowRight, Shield, Star, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.06),transparent_50%)]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-gold/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <Star size={12} className="text-gold fill-gold" />
          <span className="text-gold text-xs tracking-widest uppercase font-medium">
            Banco do Ecossistema FiveCred
          </span>
          <Star size={12} className="text-gold fill-gold" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <span className="text-cream">Finanças com</span>
          <br />
          <span className="text-gradient">elegância e</span>
          <br />
          <span className="text-cream">propósito.</span>
        </h1>

        <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          O Five Bank oferece soluções financeiras exclusivas para aposentados, servidores públicos e pensionistas que exigem mais do seu banco.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contato"
            className="gold-gradient text-navy font-semibold px-8 py-4 rounded-xl text-sm hover:opacity-90 transition-all duration-200 shadow-2xl shadow-gold/25 flex items-center gap-2 group"
          >
            Abrir minha conta
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/produtos"
            className="glass glass-hover text-cream text-sm font-medium px-8 py-4 rounded-xl transition-all duration-200"
          >
            Conhecer produtos
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-cream/40 text-xs">
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-gold" />
            <span>100% seguro e regulamentado</span>
          </div>
          <div className="w-px h-4 bg-gold/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-gold" />
            <span>A partir de 1,2% a.m.</span>
          </div>
          <div className="w-px h-4 bg-gold/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Star size={14} className="text-gold" />
            <span>Aprovação em até 24 horas</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
