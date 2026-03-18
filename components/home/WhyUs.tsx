import { ShieldCheck, Zap, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Segurança total",
    desc: "Operações protegidas com criptografia avançada e total conformidade com a LGPD e regulamentações do Banco Central.",
  },
  {
    icon: Zap,
    title: "Agilidade real",
    desc: "Processo 100% digital com análise em até 24 horas e dinheiro disponível na conta rapidamente.",
  },
  {
    icon: Users,
    title: "Atendimento humano",
    desc: "Um time dedicado disponível via WhatsApp, telefone e e-mail para te acompanhar em toda a jornada.",
  },
  {
    icon: Award,
    title: "Melhores taxas",
    desc: "Taxas competitivas a partir de 1,2% a.m., transparência total e sem tarifas ocultas ou surpresas.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-navy-mid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">
              Por que nos escolher
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream font-bold leading-tight mb-6">
              Um banco feito para <span className="text-gradient">quem exige mais.</span>
            </h2>
            <p className="text-cream/50 leading-relaxed mb-8 text-sm">
              O Five Bank nasceu do ecossistema FiveCred com um propósito claro: democratizar o acesso ao crédito de qualidade. Combinamos tecnologia de ponta com atendimento humanizado para entregar uma experiência financeira verdadeiramente premium.
            </p>
            <div className="divider-gold mb-8" />
            <div className="flex items-center gap-6 text-sm text-cream/50">
              <div>
                <span className="font-serif text-3xl text-gold font-bold">5+</span>
                <p className="text-xs mt-1">Anos de mercado</p>
              </div>
              <div className="w-px h-10 bg-gold/20" />
              <div>
                <span className="font-serif text-3xl text-gold font-bold">A+</span>
                <p className="text-xs mt-1">Avaliação de crédito</p>
              </div>
              <div className="w-px h-10 bg-gold/20" />
              <div>
                <span className="font-serif text-3xl text-gold font-bold">SP</span>
                <p className="text-xs mt-1">Sede em São Paulo</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div key={i} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h4 className="font-serif text-cream font-semibold mb-2">{reason.title}</h4>
                  <p className="text-cream/45 text-xs leading-relaxed">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
