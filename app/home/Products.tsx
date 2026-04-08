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
    title: "Cartão Consignado",
    desc: "Cartão com limite pré-aprovado e desconto em folha, ideal para organizar suas finanças com taxas reduzidas.",
    tag: "Praticidade",
  },
  {
    icon: RefreshCw,
    title: "Portabilidade",
    desc: "Traga sua dívida para a FiveCred e reduza suas parcelas mensais com taxas de juros mais competitivas.",
    tag: "Economia",
  },
  {
    icon: Home,
    title: "Home Equity",
    desc: "Use seu imóvel como garantia e acesse as menores taxas do mercado para grandes projetos ou quitação de dívidas.",
    tag: "Investimento",
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange text-xs tracking-[0.3em] uppercase mb-4 font-bold">
            Excelência em Crédito
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark font-bold mb-6">
            Soluções completas <br />
            <span className="text-orange">para sua vida.</span>
          </h2>
          <p className="text-gray max-w-xl mx-auto text-lg leading-relaxed">
            Desenvolvemos produtos financeiros transparentes e eficazes para que você tenha total controle do seu futuro.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray/5 rounded-3xl p-10 group cursor-pointer hover:shadow-2xl hover:shadow-orange/5 hover:border-orange/20 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon size={26} className="text-orange" />
                  </div>
                  <span className="text-xs text-orange bg-orange/10 px-4 py-1.5 rounded-full font-bold">
                    {product.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-dark font-bold mb-4">
                  {product.title}
                </h3>
                <p className="text-gray text-base leading-relaxed mb-8">
                  {product.desc}
                </p>
                <div className="flex items-center gap-2 text-orange text-sm font-bold group-hover:gap-4 transition-all">
                  Saiba mais <ArrowRight size={16} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/produtos"
            className="orange-gradient text-white font-bold px-10 py-5 rounded-2xl text-sm hover:shadow-orange/30 hover:shadow-2xl transition-all inline-flex items-center gap-2 group"
          >
            Ver todos os produtos 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
