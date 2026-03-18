import { Target, Eye, Heart } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-20">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">Sobre nós</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream font-bold mb-6">
            O banco que <span className="text-gradient">conecta pessoas</span>
            <br />a oportunidades.
          </h1>
          <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
            O Five Bank nasceu com o propósito de democratizar o acesso ao crédito de qualidade, unindo tecnologia, inovação e atendimento humanizado para transformar vidas financeiras.
          </p>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            {
              icon: Target,
              title: "Missão",
              text: "Democratizar o acesso ao crédito premium, conectando pessoas às melhores condições financeiras do mercado com transparência, agilidade e respeito.",
            },
            {
              icon: Eye,
              title: "Visão",
              text: "Ser o banco de referência em crédito consignado e soluções financeiras exclusivas para o segmento público no Brasil até 2030.",
            },
            {
              icon: Heart,
              title: "Valores",
              text: "Ética, inovação, eficiência e atendimento humanizado são os pilares que guiam cada decisão do Five Bank e do ecossistema FiveCred.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="glass glass-hover rounded-2xl p-8 text-center transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-5 shadow-lg shadow-gold/20">
                  <Icon size={24} className="text-navy" />
                </div>
                <h3 className="font-serif text-xl text-cream font-bold mb-3">{item.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">Nossa história</p>
            <h2 className="font-serif text-4xl text-cream font-bold mb-6">
              Do crédito à <span className="text-gradient">transformação.</span>
            </h2>
            <p className="text-cream/50 text-sm leading-relaxed mb-4">
              Fundado como parte do ecossistema FiveCred, o Five Bank surgiu da necessidade de oferecer uma experiência bancária completa aos clientes que já confiavam nas soluções de crédito consignado da marca.
            </p>
            <p className="text-cream/50 text-sm leading-relaxed mb-4">
              Com sede na Avenida Brigadeiro Faria Lima, em São Paulo, o banco combina a solidez de uma instituição financeira regulamentada com a agilidade e inovação de uma fintech moderna.
            </p>
            <p className="text-cream/50 text-sm leading-relaxed">
              Hoje, atendemos aposentados, pensionistas e servidores públicos em todo o Brasil, com um portfólio crescente de produtos financeiros desenhados para quem exige o melhor.
            </p>
          </div>
          <div className="glass rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.08),transparent_60%)]" />
            <div className="relative grid grid-cols-2 gap-8">
              {[
                { v: "2019", l: "Fundação FiveCred" },
                { v: "2022", l: "Lançamento Five Bank" },
                { v: "50K+", l: "Clientes atendidos" },
                { v: "R$2Bi", l: "Em crédito concedido" },
              ].map((item, i) => (
                <div key={i} className="text-center py-4">
                  <div className="font-serif text-3xl text-gradient font-bold mb-1">{item.v}</div>
                  <div className="text-cream/40 text-xs">{item.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
