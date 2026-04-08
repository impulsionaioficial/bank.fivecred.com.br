import { Cpu, Users, BarChart3, Globe } from "lucide-react";

const solucoes = [
  {
    icon: Cpu,
    title: "Tecnologia Financeira",
    desc: "Plataforma 100% digital com processos automatizados, análise de crédito inteligente e aprovação ágil. Infraestrutura robusta e segura para suas operações.",
  },
  {
    icon: Users,
    title: "Atendimento Especializado",
    desc: "Equipe dedicada disponível via múltiplos canais. Valorizamos o relacionamento próximo para entender e atender suas necessidades reais.",
  },
  {
    icon: BarChart3,
    title: "Gestão Transparente",
    desc: "Acesso claro a todas as informações dos seus contratos, parcelas e histórico. Transparência total em cada etapa do processo.",
  },
  {
    icon: Globe,
    title: "Ecossistema Integrado",
    desc: "Integração completa com as melhores soluções de crédito do mercado, garantindo as taxas mais competitivas para o seu perfil.",
  },
];

export default function SolucoesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-orange text-xs tracking-[0.4em] uppercase mb-4 font-bold">Soluções FiveCred</p>
          <h1 className="font-serif text-5xl md:text-7xl text-dark font-bold mb-8">
            Inovação desenhada <br />
            <span className="text-orange">para você.</span>
          </h1>
          <p className="text-gray max-w-xl mx-auto text-lg leading-relaxed">
            Combinamos inteligência tecnológica com sensibilidade humana para entregar soluções financeiras que simplificam sua vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solucoes.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white border border-gray/5 rounded-[40px] p-12 hover:shadow-2xl hover:shadow-orange/5 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl orange-gradient flex items-center justify-center mb-10 shadow-xl shadow-orange/20 group-hover:scale-110 transition-transform">
                  <Icon size={30} className="text-white" />
                </div>
                <h3 className="font-serif text-3xl text-dark font-bold mb-6">{s.title}</h3>
                <p className="text-gray text-base leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
