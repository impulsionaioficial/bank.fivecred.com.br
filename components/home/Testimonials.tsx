import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Clara S.",
    role: "Aposentada INSS",
    text: "O Five Bank mudou minha vida financeira. Consegui crédito com taxa excelente em menos de 24 horas. Atendimento impecável.",
  },
  {
    name: "Roberto Alves",
    role: "Servidor Público Federal",
    text: "Fiz portabilidade do meu consignado e economizei mais de R$ 400 por mês. Recomendo a todos os servidores.",
  },
  {
    name: "Ana Paula M.",
    role: "Pensionista",
    text: "Nunca imaginei ter acesso a um banco tão completo. O atendimento é humano, rápido e transparente. Nota 10.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            Depoimentos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-bold">
            O que dizem <span className="text-gradient">nossos clientes.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass glass-hover rounded-2xl p-8 transition-all duration-300">
              <Quote size={28} className="text-gold/30 mb-4" />
              <p className="text-cream/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-navy font-bold font-serif text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-cream text-sm font-semibold">{t.name}</p>
                  <p className="text-cream/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
