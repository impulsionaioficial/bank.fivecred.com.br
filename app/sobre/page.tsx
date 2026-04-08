import { Target, Eye, Heart } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-24">
          <p className="text-orange text-xs tracking-[0.4em] uppercase mb-4 font-bold">Nossa Essência</p>
          <h1 className="font-serif text-5xl md:text-7xl text-dark font-bold mb-8">
            Compromisso com o seu <br />
            <span className="text-orange">sucesso financeiro.</span>
          </h1>
          <p className="text-gray max-w-2xl mx-auto text-lg leading-relaxed">
            A FiveCred nasceu com o propósito de transformar o acesso ao crédito, unindo tecnologia de ponta, transparência e um atendimento genuinamente humano.
          </p>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: Target,
              title: "Missão",
              text: "Prover soluções de crédito acessíveis e inteligentes, impulsionando os sonhos de nossos clientes com ética e agilidade.",
            },
            {
              icon: Eye,
              title: "Visão",
              text: "Ser a principal referência em soluções financeiras para servidores e aposentados, reconhecida pela inovação e confiança.",
            },
            {
              icon: Heart,
              title: "Valores",
              text: "Transparência absoluta, foco total no cliente, excelência operacional e impacto social positivo em cada operação.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white border border-gray/5 rounded-3xl p-10 text-center hover:shadow-2xl hover:shadow-orange/5 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl orange-gradient flex items-center justify-center mx-auto mb-8 shadow-xl shadow-orange/20">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl text-dark font-bold mb-4">{item.title}</h3>
                <p className="text-gray text-base leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-orange text-xs tracking-[0.4em] uppercase mb-4 font-bold">Nossa Jornada</p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark font-bold mb-8 leading-tight">
              Inovação que gera <br />
              <span className="text-orange">oportunidades.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray text-lg leading-relaxed">
                Como parte central do ecossistema financeiro contemporâneo, a FiveCred surgiu para preencher a lacuna entre as necessidades reais dos clientes e as ofertas tradicionais do mercado.
              </p>
              <p className="text-gray text-lg leading-relaxed">
                Com sede estratégica em São Paulo, operamos em todo o território nacional, removendo barreiras burocráticas e entregando crédito onde ele é mais necessário, de forma rápida e segura.
              </p>
            </div>
          </div>
          <div className="bg-off-white rounded-[40px] p-12 relative overflow-hidden border border-orange/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative grid grid-cols-2 gap-12">
              {[
                { v: "2019", l: "Início das operações" },
                { v: "2024", l: "Nova Identidade" },
                { v: "50K+", l: "Vidas impactadas" },
                { v: "R$2Bi", l: "Crédito viabilizado" },
              ].map((item, i) => (
                <div key={i} className="text-left">
                  <div className="font-serif text-4xl text-orange font-bold mb-2">{item.v}</div>
                  <div className="text-dark font-medium text-xs uppercase tracking-widest">{item.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
