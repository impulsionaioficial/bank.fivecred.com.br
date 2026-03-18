"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">Contato</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream font-bold mb-6">
            Fale com o <span className="text-gradient">Five Bank.</span>
          </h1>
          <p className="text-cream/50 max-w-xl mx-auto text-sm leading-relaxed">
            Estamos prontos para atender você. Escolha o canal mais conveniente e nossa equipe responderá o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="glass rounded-2xl p-8">
            <h2 className="font-serif text-2xl text-cream font-bold mb-6">Envie uma mensagem</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-cream/60 text-xs uppercase tracking-wider block mb-2">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-cream/60 text-xs uppercase tracking-wider block mb-2">Telefone</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-cream/60 text-xs uppercase tracking-wider block mb-2">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com.br"
                  className="w-full bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-cream/60 text-xs uppercase tracking-wider block mb-2">Assunto</label>
                <select className="w-full bg-navy border border-gold/15 rounded-xl px-4 py-3 text-cream/70 text-sm focus:outline-none focus:border-gold/50 transition-colors">
                  <option value="">Selecione um assunto</option>
                  <option>Crédito Consignado</option>
                  <option>Cartão Premium</option>
                  <option>Portabilidade</option>
                  <option>Home Equity</option>
                  <option>Empréstimo FGTS</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="text-cream/60 text-xs uppercase tracking-wider block mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Como podemos ajudar você?"
                  className="w-full bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-navy font-semibold py-4 rounded-xl text-sm hover:opacity-90 transition-all shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: "Telefone",
                info: "(11) 98995-6521",
                sub: "Segunda a sexta, 8h às 18h",
              },
              {
                icon: Mail,
                title: "E-mail",
                info: "contato@fivebank.com.br",
                sub: "Resposta em até 24 horas",
              },
              {
                icon: MapPin,
                title: "Endereço",
                info: "Av. Brigadeiro Faria Lima",
                sub: "São Paulo — SP",
              },
              {
                icon: Clock,
                title: "Horário de atendimento",
                info: "Segunda a Sexta: 8h — 18h",
                sub: "Sábado: 9h — 13h",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="glass glass-hover rounded-xl p-6 flex items-center gap-5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0 shadow-md shadow-gold/20">
                    <Icon size={18} className="text-navy" />
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs uppercase tracking-wider mb-0.5">{item.title}</p>
                    <p className="text-cream font-semibold text-sm">{item.info}</p>
                    <p className="text-cream/40 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA */}
            <div className="glass rounded-xl p-6 border border-gold/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.06),transparent_70%)]" />
              <div className="relative">
                <p className="text-cream font-serif text-lg font-bold mb-2">Prefere o WhatsApp?</p>
                <p className="text-cream/50 text-sm mb-4">
                  Fale diretamente com um especialista agora mesmo. Atendimento rápido e humanizado.
                </p>
                <a
                  href="https://wa.me/5511989956521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gold-gradient text-navy font-semibold px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-all"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
