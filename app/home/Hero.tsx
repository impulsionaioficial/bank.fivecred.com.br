import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Star, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange/5 rounded-l-[100px] transform translate-x-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#E8603D 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left animate-in fade-in slide-in-from-left duration-1000">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-2 mb-8">
            <Star size={14} className="text-orange fill-orange" />
            <span className="text-orange text-xs tracking-widest uppercase font-bold">
              Crédito com Credibilidade
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-dark">
            Soluções financeiras <br />
            <span className="text-orange">sob medida</span> para <br />
            o seu futuro.
          </h1>

          <p className="text-gray text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            A FiveCred une tecnologia e atendimento humanizado para oferecer crédito consignado com as melhores taxas do mercado. Simples, seguro e transparente.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Link
              href="/contato"
              className="orange-gradient text-white font-semibold px-8 py-4 rounded-xl text-sm hover:shadow-orange/20 hover:shadow-xl transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Simular meu crédito
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/produtos"
              className="bg-off-white border border-gray/10 text-dark text-sm font-semibold px-8 py-4 rounded-xl hover:bg-white hover:border-orange/30 transition-all duration-300 w-full sm:w-auto justify-center text-center"
            >
              Nossas Soluções
            </Link>
          </div>

          {/* Trust points */}
          <div className="space-y-3">
            {[
              "Taxas a partir de 1,2% ao mês",
              "Análise e aprovação em até 24 horas",
              "Processo 100% digital e seguro"
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-3 text-gray text-sm">
                <CheckCircle2 size={16} className="text-orange" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/advisor.png"
              alt="Consultor Financeiro FiveCred"
              width={600}
              height={700}
              className="object-cover w-full h-[600px]"
            />
          </div>
          {/* Floating cards */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                <Shield className="text-orange" size={24} />
              </div>
              <div>
                <p className="text-dark font-bold text-lg">100% Seguro</p>
                <p className="text-gray text-xs">Regulamentado pelo BACEN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
