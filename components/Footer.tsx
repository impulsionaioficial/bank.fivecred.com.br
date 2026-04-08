import Image from "next/image";
import { Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-off-white border-t border-orange/10">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-32 h-10">
                <Image
                  src="/logo.png"
                  alt="FiveCred Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray text-sm leading-relaxed">
              Consolidando sonhos com crédito inteligente e atendimento premium. O parceiro ideal para sua jornada financeira.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-9 h-9 border border-gray/10 rounded-lg flex items-center justify-center hover:border-orange/50 transition-all">
                <Instagram size={15} className="text-orange" />
              </a>
              <a href="#" className="w-9 h-9 border border-gray/10 rounded-lg flex items-center justify-center hover:border-orange/50 transition-all">
                <Linkedin size={15} className="text-orange" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-dark text-sm font-semibold tracking-wider uppercase mb-4">Navegação</h4>
            <ul className="space-y-3">
              {["Início", "Sobre", "Produtos", "Soluções", "Contato"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray text-sm hover:text-orange transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-dark text-sm font-semibold tracking-wider uppercase mb-4">Produtos</h4>
            <ul className="space-y-3">
              {[
                "Crédito Consignado",
                "Cartão Consignado",
                "Portabilidade",
                "Home Equity",
                "Empréstimo FGTS",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray text-sm hover:text-orange transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dark text-sm font-semibold tracking-wider uppercase mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray text-sm">
                <Phone size={14} className="text-orange shrink-0" />
                (11) 98995-6521
              </li>
              <li className="flex items-center gap-3 text-gray text-sm">
                <Mail size={14} className="text-orange shrink-0" />
                contato@fivecred.com.br
              </li>
              <li className="flex items-start gap-3 text-gray text-sm">
                <MapPin size={14} className="text-orange shrink-0 mt-0.5" />
                Av. Brigadeiro Faria Lima, São Paulo — SP
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-orange mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray text-xs">
          <p>© 2026 FiveCred. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-orange transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-orange transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-orange transition-colors">LGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}