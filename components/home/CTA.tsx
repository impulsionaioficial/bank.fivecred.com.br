import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-navy-mid">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08),transparent_70%)]" />
          <div className="relative">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Comece agora
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream font-bold mb-6 leading-tight">
              Seu futuro financeiro <br />
              <span className="text-gradient">começa aqui.</span>
            </h2>
            <p className="text-cream/50 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
              Abra sua conta no Five Bank hoje mesmo e tenha acesso ao crédito mais elegante do Brasil, com as melhores taxas e atendimento exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contato"
                className="gold-gradient text-navy font-semibold px-8 py-4 rounded-xl text-sm hover:opacity-90 transition-all shadow-2xl shadow-gold/25 flex items-center gap-2 group"
              >
                Abrir minha conta gratuitamente
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/produtos"
                className="text-gold text-sm hover:text-gold-light transition-colors underline underline-offset-4"
              >
                Simular empréstimo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
