import { 
  Zap, 
  ShieldCheck, 
  ArrowUpRight, 
  ChevronLeft,
  Building2,
  HardHat,
  Monitor,
  Check,
  Instagram,
  Linkedin,
  MessageCircle,
  Clock,
  MapPin,
  Mail,
  Phone,
  Search,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { LOGOS } from '../constants';

const WHATSAPP_LINK = "https://wa.me/5561996972911?text=Olá!%20Gostaria%20de%20uma%20consultoria%20regulatória%20para%20minha%20empresa.";

const Footer = () => (
  <footer className="py-20 bg-white border-t-2 border-phos-primary">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-4 max-w-xs">
        <div className="mb-8">
           <img 
             src={LOGOS.VERDE_ESCURO} 
             alt="Phos Energia" 
             className="h-14 w-auto object-contain"
             onError={(e) => {
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement?.querySelector('.footer-fallback-text')?.classList.remove('hidden');
             }}
           />
           <div className="footer-fallback-text hidden flex items-center gap-2">
              <div className="bg-phos-primary p-1">
                 <Zap className="w-5 h-5 text-phos-accent fill-current" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Phos Energia</span>
           </div>
        </div>
        <p className="text-sm font-medium text-phos-primary/40 leading-relaxed mb-8">
           Escritório técnico especializado em consultoria regulatória e engenharia de performance para o setor elétrico.
        </p>
        <div className="flex gap-4">
          {[Instagram, Linkedin, MessageCircle].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 border border-phos-primary/10 flex items-center justify-center hover:bg-phos-primary hover:text-white transition-all">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:col-span-8 grid md:grid-cols-3 gap-12">
        {[
          { title: "Escritório", items: ["Brasília / DF", "Centro de Comercialização", "Segunda a Sexta", "09:00 - 18:00"] },
          { title: "Serviços", items: ["Phos Consult", "Phos Project", "Phos Academy", "Phos Test"] },
          { title: "Contato", items: ["(61) 99697-2911", "contato@phosenergia.com.br", "Solicitar Orcamento", "Suporte Tecnico"] }
        ].map((section, i) => (
          <div key={i}>
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-phos-primary/40">{section.title}</h5>
            <ul className="space-y-4">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-xs font-bold uppercase tracking-widest text-phos-primary/70">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    
    <div className="max-w-[1440px] mx-auto px-6 mt-20 pt-10 border-t border-phos-primary/5 flex flex-col md:flex-row justify-between gap-6">
       <span className="text-[10px] font-bold text-phos-primary/30 uppercase tracking-[0.5em]">© {new Date().getFullYear()} Phos Energia // Precision Engineering</span>
       <span className="text-[10px] font-bold text-phos-primary/30 uppercase tracking-[0.5em]">Setor de Engenharia // Regulatória Brasileira</span>
    </div>
  </footer>
);

export const PhosConsult = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Minimal */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-phos-primary/5">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
           <Link to="/" className="flex items-center gap-2 group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Início</span>
           </Link>
           <img src={LOGOS.VERDE_ESCURO} alt="Phos Energia" className="h-8 w-auto" />
           <div className="w-20 hidden md:block" />
        </div>
      </nav>

      <section className="pt-40 pb-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8 p-3 bg-phos-primary/5 border border-phos-primary/10 inline-flex items-center gap-4"
              >
                 <Building2 className="text-phos-accent w-6 h-6" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em]">Solução Estrutural</span>
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-black text-phos-primary uppercase tracking-tighter leading-[0.85] mb-12">
                Phos <span className="text-phos-accent">Consult.</span>
              </h1>
              <p className="text-xl md:text-2xl text-phos-primary/60 font-medium leading-relaxed max-w-2xl mb-12">
                Gestão regulatória contínua e estratégica. Eliminamos a burocracia técnica junto às distribuidoras para proteger seus ativos e destravar resultados.
              </p>
           </div>
           <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-phos-accent/10 -rotate-3 transform -z-10 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1000" 
                alt="Solar Architecture" 
                className="w-full h-auto grayscale border border-phos-primary/10"
              />
           </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-40 border-y border-phos-primary/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-24">
             <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-phos-accent mb-12">O QUE FAZEMOS</h2>
                <div className="space-y-12">
                   {[
                     { title: "Protocolos Técnicos", desc: "Gestão completa de solicitações de acesso e pareceres técnicos nas distribuidoras de energia." },
                     { title: "Compliance Normativo", desc: "Adequação constante às normas da ANEEL para evitar multas e perdas de tarifas." },
                     { title: "Auditoria de Contas", desc: "Análise minuciosa de faturamento para recuperar valores cobrados indevidamente." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-8 group">
                        <span className="text-4xl font-black text-phos-primary/10 group-hover:text-phos-accent transition-colors">0{i+1}</span>
                        <div>
                           <h4 className="text-xl font-black uppercase mb-3 tracking-tight">{item.title}</h4>
                           <p className="text-phos-primary/60 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-phos-accent mb-12">COMO FUNCIONA</h2>
                <div className="bg-phos-primary p-12 text-white">
                   <div className="space-y-8">
                      {[
                        "Diagnóstico Geral do Ativo e Unidades Consumidoras.",
                        "Identificação de Gargalos e Oportunidades de Economia.",
                        "Protocolação e Acompanhamento Diário via Phos Portal.",
                        "Emissão de Relatórios Mensais de Performance Regulatória."
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-4">
                           <div className="w-6 h-6 bg-phos-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-phos-primary font-black text-[10px]">{i+1}</span>
                           </div>
                           <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">{step}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section className="py-24 lg:py-40 bg-zinc-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
           <div className="text-center mb-24">
              <h2 className="text-[12vw] md:text-[6vw] font-black text-phos-primary uppercase leading-none tracking-tighter mb-4">Planos de <span className="text-phos-accent">Escala.</span></h2>
              <p className="text-phos-primary/40 font-bold uppercase tracking-widest text-xs">Selecione o nível de blindagem para sua operação</p>
           </div>

           <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {[
                { title: "Standard", price: "Sob Consulta", color: "bg-white", features: ["Gestão de 1 Unidade", "Relatório Trimestral", "Suporte Comercial"] },
                { title: "Plus", price: "Fale com Consultor", color: "bg-white", features: ["Até 5 Unidades", "Relatório Mensal", "Auditoria de Faturas"] },
                { title: "Premium", price: "Customizado", color: "bg-phos-primary text-white", featured: true, features: ["Unidades Ilimitadas", "Suporte Prioritário", "Defesa Jurídica Técnica"] },
                { title: "Enterprise", price: "Proposta", color: "bg-white", features: ["Gestão de Portfólio", "Operação Dedicada", "Compliance ANEEL Total"] }
              ].map((plan, i) => (
                <div key={i} className={`${plan.color} p-10 border border-phos-primary/10 flex flex-col h-full`}>
                   <h3 className="text-2xl font-black uppercase mb-2">{plan.title}</h3>
                   <div className="h-px w-12 bg-phos-accent mb-10" />
                   <div className="flex-1 space-y-6 mb-12">
                      {plan.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                           <Check className={`w-4 h-4 ${plan.featured ? 'text-phos-accent' : 'text-phos-primary'}`} />
                           <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">{f}</span>
                        </div>
                      ))}
                   </div>
                   <div className="text-xl font-black mb-8">{plan.price}</div>
                   <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`py-4 text-center text-[10px] font-black uppercase tracking-[0.3em] ${plan.featured ? 'bg-phos-accent text-phos-primary' : 'bg-phos-primary text-white'}`}>
                      Habilitar
                   </a>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const PhosProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-phos-primary/5">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
           <Link to="/" className="flex items-center gap-2 group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Início</span>
           </Link>
           <img src={LOGOS.VERDE_ESCURO} alt="Phos Energia" className="h-8 w-auto" />
           <div className="w-20 hidden md:block" />
        </div>
      </nav>

      <section className="pt-40 pb-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8 p-3 bg-phos-primary/5 border border-phos-primary/10 inline-flex items-center gap-4"
              >
                 <HardHat className="text-phos-accent w-6 h-6" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em]">Engenharia de Precisão</span>
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-black text-phos-primary uppercase tracking-tighter leading-[0.85] mb-12">
                Phos <span className="text-phos-accent">Project.</span>
              </h1>
              <p className="text-xl md:text-2xl text-phos-primary/60 font-medium leading-relaxed max-w-2xl mb-12">
                Projetos elétricos de alta complexidade e dimensionamento técnico rigoroso para garantir a viabilidade e a segurança do seu ativo de energia.
              </p>
           </div>
           <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-phos-accent/10 rotate-3 transform -z-10 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1503387762-592be5a52680?auto=format&fit=crop&q=80&w=1000" 
                alt="Engineering Drawing" 
                className="w-full h-auto grayscale border border-phos-primary/10"
              />
           </div>
        </div>
      </section>

      <section className="py-24 lg:py-40 border-y border-phos-primary/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-24">
             <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-phos-accent mb-12">ENTREGÁVEIS TÉCNICOS</h2>
                <div className="space-y-12">
                   {[
                     { title: "Projetos de Médio/Alta Tensão", desc: "Desenvolvimento de subestações e infraestrutura para conexão em níveis elevados de tensão." },
                     { title: "Dimensionamento Fotovoltaico", desc: "Simulações de performance e estudos de sombreamento com precisão milimétrica." },
                     { title: "Homologação de Ativos", desc: "Gestão completa do fluxo de aprovação junto às concessionárias de energia." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-8 group">
                        <span className="text-4xl font-black text-phos-primary/10 group-hover:text-phos-accent transition-colors">0{i+1}</span>
                        <div>
                           <h4 className="text-xl font-black uppercase mb-3 tracking-tight">{item.title}</h4>
                           <p className="text-phos-primary/60 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-phos-accent mb-12">NOSSO PROCESSO</h2>
                <div className="bg-phos-primary p-12 text-white font-mono">
                   <div className="space-y-6">
                      <div className="text-phos-accent">// INITIAL_SURVEY</div>
                      <p className="text-xs uppercase leading-relaxed text-white/60">Levantamento de campo e análise de carga.</p>
                      <div className="text-phos-accent">// CORE_DESIGN</div>
                      <p className="text-xs uppercase leading-relaxed text-white/60">Cálculos estruturais e diagramas unifilares.</p>
                      <div className="text-phos-accent">// APPROVAL_FLUX</div>
                      <p className="text-xs uppercase leading-relaxed text-white/60">Submissão e acompanhamento regulatório.</p>
                      <div className="text-phos-accent">// FINAL_AS_BUILT</div>
                      <p className="text-xs uppercase leading-relaxed text-white/60">Documentação técnica final entregue.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const PhosAcademy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-phos-primary/5">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
           <Link to="/" className="flex items-center gap-2 group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Início</span>
           </Link>
           <img src={LOGOS.VERDE_ESCURO} alt="Phos Energia" className="h-8 w-auto" />
           <div className="w-20 hidden md:block" />
        </div>
      </nav>

      <section className="pt-40 pb-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8 p-3 bg-phos-primary/5 border border-phos-primary/10 inline-flex items-center gap-4"
              >
                 <Monitor className="text-phos-accent w-6 h-6" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em]">Transferência de Conhecimento</span>
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-black text-phos-primary uppercase tracking-tighter leading-[0.85] mb-12">
                Phos <span className="text-phos-accent">Academy.</span>
              </h1>
              <p className="text-xl md:text-2xl text-phos-primary/60 font-medium leading-relaxed max-w-2xl mb-12">
                Formação técnica de elite para profissionais que buscam o domínio das regulamentações e da engenharia solar brasileira.
              </p>
           </div>
           <div className="lg:col-span-5 relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" 
                alt="Technical Training" 
                className="w-full h-auto grayscale border border-phos-primary/10 rounded-br-[100px]"
              />
           </div>
        </div>
      </section>

      <section className="py-24 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
           <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 underline decoration-phos-accent underline-offset-8">Módulos Estratégicos</h2>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Expertise Regulatória", list: ["Marco Legal da GD", "Processos ANEEL", "Relacionamento com Distribuidoras"] },
                { title: "Engenharia Aplicada", list: ["Dimensionamento de Sistemas", "Proteção e Seletividade", "Normas Técnicas NBR"] },
                { title: "Comercial Técnico", list: ["Viabilidade Econômica", "Venda de Valor em Engenharia", "Gestão de Portfólio"] }
              ].map((mod, i) => (
                <div key={i} className="p-10 bg-white border-2 border-phos-primary/5 hover:border-phos-accent transition-colors">
                   <h3 className="text-xl font-black uppercase mb-8">{mod.title}</h3>
                   <ul className="space-y-4">
                      {mod.list.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-phos-accent" />
                           <span className="text-[10px] font-bold uppercase tracking-widest text-phos-primary/60">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const PhosTest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-phos-primary/5">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
           <Link to="/" className="flex items-center gap-2 group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Início</span>
           </Link>
           <img src={LOGOS.VERDE_ESCURO} alt="Phos Energia" className="h-8 w-auto" />
           <div className="w-20 hidden md:block" />
        </div>
      </nav>

      <section className="pt-40 pb-24 bg-phos-primary text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-3 bg-white/5 border border-white/10 inline-flex items-center gap-4"
              >
                 <Zap className="text-phos-accent w-6 h-6" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em]">Certificação de Performance</span>
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                Phos <span className="text-phos-accent">Test.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed max-w-2xl mb-12">
                Auditorias técnicas, comissionamento e ensaios de performance para garantir que sua usina entregue cada kWh prometido no projeto.
              </p>
           </div>
        </div>
      </section>

      <section className="py-24 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
           <div className="grid lg:grid-cols-2 gap-20">
              <div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-phos-accent block mb-8">LABORATÓRIO DE CAMPO</span>
                 <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">Diagnóstico <br /> de Alta Precisão.</h2>
                 <p className="text-phos-primary/60 text-lg leading-relaxed mb-12">
                   Utilizamos tecnologia de ponta para identificar perdas invisíveis, falhas de isolamento e gargalos térmicos que drenam a lucratividade do seu ativo solar.
                 </p>
                 <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-6 group">
                   <div className="w-16 h-16 bg-phos-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-8 h-8 text-phos-primary" />
                   </div>
                   <span className="text-sm font-black uppercase tracking-widest underline underline-offset-4 decoration-phos-accent">Agendar Auditoria Técnica</span>
                 </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "Termografia", icon: Search },
                   { label: "Curva I-V", icon: TrendingUp },
                   { label: "Aterramento", icon: ShieldCheck },
                   { label: "Energia (kWh)", icon: Zap }
                 ].map((item, i) => (
                   <div key={i} className="p-8 border border-phos-primary/10 flex flex-col items-center justify-center text-center gap-4 hover:bg-zinc-50 transition-colors">
                      <item.icon className="w-8 h-8 text-phos-accent" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
