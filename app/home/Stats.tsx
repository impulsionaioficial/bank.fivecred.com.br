const stats = [
  { value: "50K+", label: "Clientes ativos" },
  { value: "R$ 2Bi+", label: "Em crédito concedido" },
  { value: "98%", label: "Satisfação dos clientes" },
  { value: "24h", label: "Aprovação garantida" },
];

export default function Stats() {
  return (
    <section className="py-16 border-y border-gold/10 bg-navy-mid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-cream/50 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
