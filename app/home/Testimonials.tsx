import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Clara S.",
    role: "Aposentada INSS",
    text: "A FiveCred mudou minha vida financeira. Consegui crédito com taxa excelente em menos de 24 horas. Atendimento impecável e transparente.",
  },
  {
    name: "Roberto Alves",
    role: "Servidor Público Federal",
    text: "Fiz a portabilidade do meu consignado e economizei significativamente na minha parcela mensal. O processo digital é muito simples.",
  },
  {
    name: "Ana Paula M.",
    role: "Pensionista",
    text: "Nunca imaginei ter acesso a uma plataforma tão completa. O atendimento é humano, rápido e realmente preocupado com o cliente. Nota 10.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-orange text-xs tracking-[0.3em] uppercase mb-4 font-bold">
            Voz do Cliente
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark font-bold">
            Histórias que nos <span className="text-orange">motivam.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray/5 rounded-3xl p-10 hover:shadow-2xl hover:shadow-orange/5 transition-all duration-300 relative group">
              <Quote size={40} className="text-orange/10 absolute top-8 right-8 group-hover:text-orange/20 transition-colors" />
              <p className="text-gray text-base leading-relaxed mb-8 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full orange-gradient flex items-center justify-center text-white font-bold font-serif text-lg shadow-lg shadow-orange/20">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-dark text-sm font-bold tracking-tight">{t.name}</p>
                  <p className="text-gray/60 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
