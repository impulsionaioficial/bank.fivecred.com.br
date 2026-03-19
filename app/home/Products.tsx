import Link from "next/link";
import { CreditCard, RefreshCw, Home, Landmark, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Landmark,
    title: "Crédito Consignado",
    desc: "Taxas a partir de 1,2% a.m. com desconto direto em folha. Aprovação rápida para servidores, aposentados e pensionistas.",
    tag: "Mais Popular",
  },
  {
    icon: CreditCard,
    title: "Cartão Premium",
    desc: "Cartão consignado com limite pré-aprovado, programa de pontos exclusivo e benefícios premium para nossos clientes.",
    tag: "Exclusivo",
  },
  {
    icon: RefreshCw,
    title: "Portabilidade",
    desc: "Transfira seu empréstimo para o Five Bank e reduza suas taxas com condições mais vantajosas e sem burocracia.",
    tag: "Economia",
  },
  {
    icon: Home,
    title: "Home Equity",
    desc: "Use seu imóvel como garantia e acesse crédito com as melhores taxas do mercado para realizar seus projetos.",
    tag: "Alta liquidez",
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            Portfólio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-bold mb-4">
            Produtos desenhados <br />
            <span className="text-gradient">para você.</span>
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto text-sm leading-relaxed">
            Soluções financeiras sob medida para quem busca qualidade, transparência e as melhores condições do mercado.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={i}
                className="glass glass-hover rounded-2xl p-8 group cursor-pointer transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full font-medium">
                    {product.tag}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-cream font-semibold mb-3">
                  {product.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed mb-6">
                  {product.desc}
                </p>
                <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/produtos"
            className="gold-gradient text-navy font-semibold px-8 py-4 rounded-xl text-sm hover:opacity-90 transition-all inline-flex items-center gap-2"
          >
            Ver todos os produtos <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
