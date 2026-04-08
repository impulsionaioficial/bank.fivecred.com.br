import Link from "next/link";
import { CreditCard, RefreshCw, Home, Landmark, FileText, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Landmark,
    title: "Crédito Consignado",
    tag: "Destaque",
    rate: "Taxas a partir de 1,2% a.m.",
    desc: "Empréstimo com desconto em folha, disponível para servidores públicos, aposentados e pensionistas do INSS com total segurança.",
    features: ["Aprovação rápida", "Sem consulta ao SPC", "Prazos flexíveis", "Processo 100% digital"],
  },
  {
    icon: CreditCard,
    title: "Cartão de Crédito",
    tag: "Exclusivo",
    rate: "Limite Diferenciado",
    desc: "Benefícios exclusivos e taxas reduzidas. Um cartão desenhado para quem busca praticidade no dia a dia.",
    features: ["Sem anuidade", "Aceito internacionalmente", "Controle via app", "Saques em dinheiro"],
  },
  {
    icon: RefreshCw,
    title: "Portabilidade",
    tag: "Economia",
    rate: "Reduza seus juros",
    desc: "Traga seu contrato para a FiveCred e diminua o valor das parcelas. Economia real para o seu bolso.",
    features: ["Análise imediata", "Zero custo operacional", "Suporte especializado", "Quitação rápida"],
  },
  {
    icon: Home,
    title: "Crédito com Garantia",
    tag: "Baixos Juros",
    rate: "Oportunidade Real",
    desc: "Use seu patrimônio para acessar as menores taxas do mercado, sem precisar se desfazer de nada.",
    features: ["Carencia estendida", "Prazos longos", "Baixo custo mensal", "Liquidez imediata"],
  },
  {
    icon: FileText,
    title: "Antecipação FGTS",
    tag: "Praticidade",
    rate: "Saque-Aniversário",
    desc: "Acesse o seu saldo do FGTS sem comprometer sua renda mensal. Dinheiro na conta em poucas horas.",
    features: ["Sem parcelas mensais", "Taxas reduzidas", "Mínima burocracia", "100% seguro"],
  },
];

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-orange text-xs tracking-[0.4em] uppercase mb-4 font-bold">Nosso Portfólio</p>
          <h1 className="font-serif text-5xl md:text-7xl text-dark font-bold mb-8">
            Soluções para cada <br />
            <span className="text-orange">etapa da vida.</span>
          </h1>
          <p className="text-gray max-w-xl mx-auto text-lg leading-relaxed">
            Descubra as condições exclusivas que a FiveCred preparou para você conquistar seus objetivos com inteligência financeira.
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div key={i} className="bg-white border border-gray/5 rounded-[40px] p-8 md:p-12 hover:shadow-2xl hover:shadow-orange/5 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex flex-col md:flex-row md:items-center gap-10 relative z-10">
                  <div className="flex items-start gap-6 md:w-1/2">
                    <div className="w-16 h-16 rounded-2xl orange-gradient flex items-center justify-center shrink-0 shadow-lg shadow-orange/20">
                      <Icon size={30} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="font-serif text-2xl text-dark font-bold tracking-tight">{product.title}</h3>
                        <span className="text-[10px] items-center py-1 px-3 bg-orange/10 text-orange font-bold rounded-full uppercase tracking-wider">{product.tag}</span>
                      </div>
                      <p className="text-orange font-bold text-sm mb-4">{product.rate}</p>
                      <p className="text-gray text-base leading-relaxed">{product.desc}</p>
                    </div>
                  </div>

                  <div className="md:w-1/3">
                    <ul className="grid grid-cols-1 gap-3">
                      {product.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-dark text-sm font-medium">
                          <div className="w-2 h-2 rounded-full bg-orange shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:ml-auto">
                    <Link
                      href="/contato"
                      className="bg-dark text-white font-bold px-10 py-4 rounded-2xl text-base hover:bg-orange transition-all inline-flex items-center gap-3 group/btn hover:shadow-xl hover:shadow-orange/20"
                    >
                      Simular
                      <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
