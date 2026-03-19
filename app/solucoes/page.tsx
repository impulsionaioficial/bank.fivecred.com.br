import { Cpu, Users, BarChart3, Globe } from "lucide-react";

const solucoes = [
  {
    icon: Cpu,
    title: "Tecnologia Bancária",
    desc: "Plataforma 100% digital com processos automatizados, análise de crédito por IA e aprovação em tempo real. Infraestrutura robusta com 99,9% de uptime.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    desc: "Equipe dedicada disponível por WhatsApp, telefone e e-mail. Cada cliente tem um gerente de relacionamento para acompanhar toda a jornada financeira.",
  },
  {
    icon: BarChart3,
    title: "Gestão Financeira",
    desc: "Dashboard completo para acompanhar contratos, parcelas e histórico financeiro. Relatórios personalizados e alertas inteligentes via app.",
  },
  {
    icon: Globe,
    title: "Ecossistema FiveCred",
    desc: "Integração completa com o ecossistema FiveCred: portabilidade, refinanciamento e novos produtos disponíveis sem sair da plataforma.",
  },
];

export default function SolucoesPage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">Soluções</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream font-bold mb-6">
            Inovação a serviço <span className="text-gradient">do cliente.</span>
          </h1>
          <p className="text-cream/50 max-w-xl mx-auto text-sm leading-relaxed">
            O Five Bank combina tecnologia de ponta com atendimento humano para entregar soluções financeiras que realmente funcionam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solucoes.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="glass glass-hover rounded-2xl p-10 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mb-6 shadow-lg shadow-gold/20">
                  <Icon size={26} className="text-navy" />
                </div>
                <h3 className="font-serif text-2xl text-cream font-bold mb-4">{s.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
