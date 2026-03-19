import Link from "next/link";
import { CreditCard, RefreshCw, Home, Landmark, FileText, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Landmark,
    title: "Crédito Consignado",
    tag: "Mais procurado",
    rate: "A partir de 1,2% a.m.",
    desc: "Empréstimo com desconto em folha de pagamento, disponível para servidores públicos, aposentados e pensionistas do INSS.",
    features: ["Sem consulta ao SPC/Serasa", "Aprovação em até 24h", "Prazo de até 96 meses", "Processo 100% digital"],
  },
  {
    icon: CreditCard,
    title: "Cartão Consignado Premium",
    tag: "Exclusivo",
    rate: "Limite pré-aprovado",
    desc: "Cartão de crédito com desconto automático em folha, limite diferenciado e benefícios exclusivos para nossos clientes.",
    features: ["Programa de pontos Five", "Sem anuidade no 1º ano", "Aceito em todo o mundo", "App de controle"],
  },
  {
    icon: RefreshCw,
    title: "Portabilidade de Crédito",
    tag: "Economia garantida",
    rate: "Reduza suas parcelas",
    desc: "Transfira seu empréstimo de outro banco para o Five Bank e pague menos. Processo simples, rápido e sem custos.",
    features: ["Análise gratuita", "Sem burocracia", "Economia comprovada", "Suporte dedicado"],
  },
  {
    icon: Home,
    title: "Home Equity",
    tag: "Alta liquidez",
    rate: "Taxas especiais",
    desc: "Use seu imóvel quitado como garantia e acesse grandes volumes de crédito com taxas muito abaixo do mercado.",
    features: ["Até 60% do valor do imóvel", "Prazo de até 180 meses", "Taxas a partir de 0,8% a.m.", "Imóvel permanece com você"],
  },
  {
    icon: FileText,
    title: "Empréstimo FGTS",
    tag: "Antecipação",
    rate: "Use seu saque-aniversário",
    desc: "Antecipe seu FGTS pelo saque-aniversário e tenha dinheiro na conta de forma rápida com taxas competitivas.",
    features: ["Sem comprometer renda mensal", "Aprovação imediata", "FGTS como garantia", "Sem IOF inicial"],
  },
];

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">Portfólio</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream font-bold mb-6">
            Produtos feitos para <span className="text-gradient">você crescer.</span>
          </h1>
          <p className="text-cream/50 max-w-xl mx-auto text-sm leading-relaxed">
            Cada produto do Five Bank foi desenvolvido com foco em quem merece o melhor: condições transparentes, taxas justas e atendimento de excelência.
          </p>
        </div>

        <div className="space-y-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div key={i} className="glass glass-hover rounded-2xl p-8 md:p-10 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex items-start gap-5 md:w-1/2">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-serif text-xl text-cream font-bold">{product.title}</h3>
                        <span className="text-xs text-gold bg-gold/10 px-2.5 py-1 rounded-full">{product.tag}</span>
                      </div>
                      <p className="text-gold text-sm font-medium mb-3">{product.rate}</p>
                      <p className="text-cream/50 text-sm leading-relaxed">{product.desc}</p>
                    </div>
                  </div>

                  <div className="md:w-1/3">
                    <ul className="space-y-2">
                      {product.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-cream/60 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:ml-auto">
                    <Link
                      href="/contato"
                      className="gold-gradient text-navy font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all inline-flex items-center gap-2 group/btn"
                    >
                      Simular
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
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
