import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-dark rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,96,61,0.15),transparent_50%)]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <p className="text-orange text-xs tracking-[0.4em] uppercase mb-6 font-bold">
              Seu Próximo Passo
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-bold mb-8 leading-tight">
              Pronto para transformar <br />
              <span className="text-orange">sua vida financeira?</span>
            </h2>
            <p className="text-gray-light text-lg max-w-xl mx-auto mb-12 leading-relaxed opacity-80">
              Junte-se a milhares de clientes que escolheram a FiveCred para simplificar sua jornada financeira com segurança e as melhores taxas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contato"
                className="orange-gradient text-white font-bold px-10 py-5 rounded-2xl text-base hover:shadow-orange/40 hover:shadow-2xl transition-all flex items-center gap-3 group"
              >
                Solicitar simulação agora
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/produtos"
                className="text-white font-semibold text-base hover:text-orange transition-colors flex items-center gap-2 group border-b border-white/20 hover:border-orange pb-1"
              >
                Descobrir produtos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
