import Link from "next/link";
import { Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-mid border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center">
                <span className="text-navy font-bold text-lg font-serif">F</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-cream font-serif text-lg font-semibold">Five</span>
                <span className="text-gold text-xs tracking-[0.2em] uppercase">Bank</span>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              Banco exclusivo do ecossistema FiveCred. Crédito, elegância e inovação para quem merece o melhor.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:border-gold/50 transition-all">
                <Instagram size={15} className="text-gold" />
              </a>
              <a href="#" className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:border-gold/50 transition-all">
                <Linkedin size={15} className="text-gold" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cream text-sm font-semibold tracking-wider uppercase mb-4">Navegação</h4>
            <ul className="space-y-3">
              {["Início", "Sobre", "Produtos", "Soluções", "Contato"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-cream/50 text-sm hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-cream text-sm font-semibold tracking-wider uppercase mb-4">Produtos</h4>
            <ul className="space-y-3">
              {[
                "Crédito Consignado",
                "Cartão Premium",
                "Portabilidade",
                "Home Equity",
                "Empréstimo FGTS",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-cream/50 text-sm hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream text-sm font-semibold tracking-wider uppercase mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/50 text-sm">
                <Phone size={14} className="text-gold shrink-0" />
                (11) 98995-6521
              </li>
              <li className="flex items-center gap-3 text-cream/50 text-sm">
                <Mail size={14} className="text-gold shrink-0" />
                contato@fivebank.com.br
              </li>
              <li className="flex items-start gap-3 text-cream/50 text-sm">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                Av. Brigadeiro Faria Lima, São Paulo — SP
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-cream/30 text-xs">
          <p>© 2026 Five Bank — Banco do ecossistema FiveCred. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gold transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-gold transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-gold transition-colors">LGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}