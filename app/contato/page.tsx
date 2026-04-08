"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-orange text-xs tracking-[0.4em] uppercase mb-4 font-bold">Contato</p>
          <h1 className="font-serif text-5xl md:text-7xl text-dark font-bold mb-8">
            Estamos aqui para <br />
            <span className="text-orange">ouvir você.</span>
          </h1>
          <p className="text-gray max-w-xl mx-auto text-lg leading-relaxed">
            Escolha o canal que preferir ou envie uma mensagem através do formulário abaixo. Nossa equipe retornará em breve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white border border-gray/5 rounded-[40px] p-10 md:p-12 shadow-2xl shadow-orange/5">
            <h2 className="font-serif text-3xl text-dark font-bold mb-8 tracking-tight">Envie sua mensagem</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-dark font-bold text-xs uppercase tracking-widest block mb-1.5 ml-1">Nome</label>
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full bg-off-white border border-gray/10 rounded-2xl px-5 py-4 text-dark text-base placeholder:text-gray/40 focus:outline-none focus:border-orange/30 transition-all"
                  />
                </div>
                <div>
                  <label className="text-dark font-bold text-xs uppercase tracking-widest block mb-1.5 ml-1">Telefone</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full bg-off-white border border-gray/10 rounded-2xl px-5 py-4 text-dark text-base placeholder:text-gray/40 focus:outline-none focus:border-orange/30 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-dark font-bold text-xs uppercase tracking-widest block mb-1.5 ml-1">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com.br"
                  className="w-full bg-off-white border border-gray/10 rounded-2xl px-5 py-4 text-dark text-base placeholder:text-gray/40 focus:outline-none focus:border-orange/30 transition-all"
                />
              </div>
              <div>
                <label className="text-dark font-bold text-xs uppercase tracking-widest block mb-1.5 ml-1">Assunto</label>
                <div className="relative">
                  <select className="w-full bg-off-white border border-gray/10 rounded-2xl px-5 py-4 text-dark text-base focus:outline-none focus:border-orange/30 transition-all appearance-none">
                    <option value="">Selecione um assunto</option>
                    <option>Crédito Consignado</option>
                    <option>Cartão de Crédito</option>
                    <option>Portabilidade</option>
                    <option>Empréstimo FGTS</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-dark font-bold text-xs uppercase tracking-widest block mb-1.5 ml-1">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-off-white border border-gray/10 rounded-2xl px-5 py-4 text-dark text-base placeholder:text-gray/40 focus:outline-none focus:border-orange/30 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full orange-gradient text-white font-bold py-5 rounded-2xl text-base hover:shadow-2xl hover:shadow-orange/20 transition-all flex items-center justify-center gap-3 group"
              >
                <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Phone,
                  title: "Fone/WhatsApp",
                  info: "(11) 98995-6521",
                  sub: "Canais oficiais",
                },
                {
                  icon: Mail,
                  title: "E-mail Direto",
                  info: "contato@fivecred.com.br",
                  sub: "Suporte especializado",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white border border-gray/5 rounded-3xl p-8 flex flex-col gap-4 shadow-xl shadow-orange/5">
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-orange" />
                    </div>
                    <div>
                      <p className="text-dark font-bold text-xs uppercase tracking-widest mb-1.5">{item.title}</p>
                      <p className="text-dark font-bold text-lg">{item.info}</p>
                      <p className="text-gray text-xs font-medium">{item.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white border border-gray/5 rounded-3xl p-8 flex items-center gap-8 shadow-xl shadow-orange/5">
              <div className="w-14 h-14 rounded-2xl orange-gradient flex items-center justify-center shrink-0">
                <MapPin size={26} className="text-white" />
              </div>
              <div>
                <p className="text-dark font-bold text-xs uppercase tracking-widest mb-1.5">Nossa Sede</p>
                <p className="text-dark font-bold text-lg">Av. Brigadeiro Faria Lima, 2026</p>
                <p className="text-gray text-sm font-medium">São Paulo — SP, Brasil</p>
              </div>
            </div>

            <div className="bg-white border border-gray/5 rounded-3xl p-8 flex items-center gap-8 shadow-xl shadow-orange/5">
              <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center shrink-0">
                <Clock size={26} className="text-orange" />
              </div>
              <div>
                <p className="text-dark font-bold text-xs uppercase tracking-widest mb-1.5">Atendimento</p>
                <p className="text-dark font-bold text-lg">Segunda a Sexta: 08h — 18h</p>
                <p className="text-gray text-sm font-medium">Sábados: 09h — 13h</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-dark rounded-[40px] p-10 relative overflow-hidden shadow-2xl group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange/15 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-white font-serif text-2xl font-bold mb-4">Dúvidas rápidas?</p>
                <p className="text-gray-light text-base mb-8 opacity-80">
                  Fale com um especialista via WhatsApp agora mesmo e resolva suas pendências em minutos.
                </p>
                <a
                  href="https://wa.me/5511989956521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 orange-gradient text-white font-bold px-8 py-4 rounded-2xl text-base hover:shadow-orange/30 hover:shadow-2xl transition-all"
                >
                  <Phone size={20} />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
