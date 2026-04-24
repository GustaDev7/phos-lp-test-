/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  ArrowUpRight, 
  Menu, 
  X, 
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  AlertTriangle,
  Building2,
  HardHat,
  Monitor,
  Search,
  Check,
  Instagram,
  Linkedin,
  MessageCircle,
  Phone,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PhosConsult, PhosProject, PhosAcademy, PhosTest } from './pages/ServicePages';

import { LOGOS } from './constants';

const WHATSAPP_LINK = "https://wa.me/5561996972911?text=Olá!%20Gostaria%20de%20uma%20consultoria%20regulatória%20para%20minha%20empresa.";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/phos-consult" element={<PhosConsult />} />
        <Route path="/servicos/phos-project" element={<PhosProject />} />
        <Route path="/servicos/phos-academy" element={<PhosAcademy />} />
        <Route path="/servicos/phos-test" element={<PhosTest />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Planos', href: '#consult' },
    { name: 'Cases', href: '#cases' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Liderança', href: '#leader' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-phos-accent/40 selection:text-phos-primary">
      {/* Navigation - High Contrast & Fixed Visibility */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-phos-primary/95 backdrop-blur-md py-4 border-b border-phos-accent/20 shadow-xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <a href="#home" className="flex items-center gap-3">
                <img 
                  src={LOGOS.AMARELA_NOME_BRANCO} 
                  alt="Phos Energia" 
                  className="h-10 md:h-14 w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails (likely due to gallery link vs direct link)
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                  }}
                />
                <div className="fallback-text hidden flex items-center gap-3">
                  <div className="bg-phos-accent p-1.5 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-phos-primary fill-current" />
                  </div>
                  <span className="text-2xl font-black tracking-tighter uppercase text-white">
                    Phos <span className="text-phos-accent">Energia</span>
                  </span>
                </div>
             </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="group relative text-[10px] font-bold uppercase tracking-[0.3em] transition-colors text-white/70 hover:text-phos-accent"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-phos-accent transition-all group-hover:w-full" />
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-phos-accent text-phos-primary px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all">
              Consultoria
            </a>
          </div>

          <button className="lg:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu - Improved Styling */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-phos-primary border-b border-phos-accent/20 overflow-hidden lg:hidden shadow-2xl"
            >
              <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] hover:text-phos-accent transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-phos-accent text-phos-primary py-4 text-center text-xs font-black uppercase tracking-[0.2em]">
                  Iniciar Consultoria
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - Cinematic Premium */}
      <section id="home" className="relative min-h-screen flex items-center bg-phos-primary overflow-hidden pt-32 pb-20">
        {/* Cinematic Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          {/* Base Grain Texture for Premium Look */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
          
          {/* Soft Dramatic Lighting (Amber/Yellow Glows) */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-phos-accent/10 rounded-full blur-[120px] animate-pulse duration-700" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-phos-accent/5 rounded-full blur-[100px]" />
          
          {/* Subtle Vertical Architectural Beam */}
          <div className="absolute left-[15%] inset-y-0 w-px bg-gradient-to-b from-transparent via-phos-accent/10 to-transparent hidden lg:block" />
          <div className="absolute right-[15%] inset-y-0 w-px bg-gradient-to-b from-transparent via-phos-accent/10 to-transparent hidden lg:block" />
          
          {/* Edge Vignette for Focus */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(19,50,44,0.4)_100%)]" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-phos-accent text-phos-primary text-[10px] font-black px-3 py-1 uppercase tracking-widest">Consultoria 01</span>
                <div className="h-px w-24 bg-phos-accent/30" />
              </div>
              <h1 className="text-[12vw] lg:text-[7.5vw] font-black text-white leading-[0.85] uppercase tracking-tighter mb-8">
                Destrave seu <br className="hidden md:block" /> 
                <span className="text-phos-accent">resultado.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-2xl font-medium leading-relaxed mb-12 border-l-2 border-phos-accent pl-8">
                Engenharia regulatória estratégica para eliminar a burocracia das distribuidoras e garantir a performance real do seu investimento em energia.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-highlight">
                  Falar com especialista
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <div className="flex items-center gap-4 group cursor-pointer py-4" onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}>
                   <img src={LOGOS.AMARELA_CONCENTRICA} alt="" className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                   <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-phos-accent transition-colors">Portfólio Técnico</span>
                   <div className="w-12 h-px bg-white/20 group-hover:bg-phos-accent transition-all group-hover:w-20" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square border border-phos-accent/20 p-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1000" 
                alt="Infrastructure" 
                className="w-full h-full object-cover filter grayscale"
              />
              <div className="absolute -bottom-8 -left-8 bg-phos-accent p-8 w-48 shadow-2xl flex flex-col gap-2">
                 <span className="text-phos-primary font-black text-4xl leading-none">15Y</span>
                 <span className="text-phos-primary/60 text-[10px] font-bold uppercase tracking-widest leading-tight">Experiência Setorial</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrolling Strip */}
        <div className="absolute bottom-0 left-0 right-0 py-6 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden flex whitespace-nowrap lg:block hidden">
          <div className="flex gap-20 animate-infinite-scroll opacity-20 hover:opacity-100 transition-opacity">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="text-white font-mono text-sm tracking-[0.5em] uppercase">Engenharia de Performance</span>
                <Zap className="text-phos-accent w-4 h-4" />
                <span className="text-white font-mono text-sm tracking-[0.5em] uppercase">Consultoria Regulatória</span>
                <ShieldCheck className="text-phos-accent w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - The 4 Pillars */}
      <section id="services" className="py-24 lg:py-40 bg-zinc-50 border-t border-phos-primary/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 lg:mb-32"
          >
             <span className="section-label">02. Nossas Soluções</span>
             <h2 className="text-5xl lg:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
               Engenharia de <br className="hidden lg:block" /> 
               <span className="text-phos-accent bg-phos-primary px-4">Ponta a Ponta.</span>
             </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
             {[
               { id: '01', title: 'Phos Consult', desc: 'Gestão regulatória contínua e suporte estratégico nas distribuidoras e órgãos reguladores.', icon: Building2 },
               { id: '02', title: 'Phos Project', desc: 'Engenharia de precisão para dimensionamento, projetos elétricos e homologação de ativos.', icon: HardHat },
               { id: '03', title: 'Phos Academy', desc: 'Treinamento técnico de alto nível para equipes de instalação, operação e comercial.', icon: Monitor },
               { id: '04', title: 'Phos Test', desc: 'Ensaios técnicos, comissionamento e auditorias de performance em sistemas de energia.', icon: Zap }
             ].map((service, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.1 }}
                 className="group relative bg-white p-10 border border-phos-primary/10 hover:border-phos-accent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
               >
                  <div className="font-mono text-[9px] font-bold text-phos-primary/30 mb-12 group-hover:text-phos-accent transition-colors">
                     ENGINEERING_PILLAR // {service.id}
                  </div>
                  <service.icon className="w-12 h-12 text-phos-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">{service.title}</h3>
                  <p className="text-phos-primary/60 text-sm font-medium leading-relaxed mb-10">
                    {service.desc}
                  </p>
                  <Link 
                    to={`/servicos/${service.title.toLowerCase().replace(' ', '-')}`} 
                    className="inline-flex items-center gap-2 text-phos-primary/40 group-hover:text-phos-accent transition-all text-[9px] font-black uppercase tracking-[0.2em]"
                  >
                     Explorar {service.title}
                     <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="h-1 w-0 bg-phos-accent transition-all group-hover:w-full mt-12" />
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Phos Methodology - Precision Engineering */}
      <section id="method" className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-phos-primary/5" />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
             <span className="section-label">03. O Diferencial</span>
             <h2 className="text-5xl lg:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
               Segurança <span className="text-phos-accent">Técnica.</span> <br />
               Performance <span className="text-phos-primary underline decoration-phos-accent decoration-8 underline-offset-4">Real.</span>
             </h2>
             <p className="text-xl text-phos-primary/60 font-medium leading-relaxed mb-16 max-w-xl">
               Não somos apenas consultores; somos engenheiros regulatórios que operam na fronteira entre a norma técnica e a máxima eficiência financeira.
             </p>

             <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Compliance Total", desc: "100% de alinhamento com as resoluções da ANEEL, eliminando riscos de TOIs e multas retroativas." },
                  { title: "Zero Burocracia", desc: "Interface direta com as distribuidoras. Seu projeto não fica parado em gavetas administrativas." },
                  { title: "ROI Blindado", desc: "Nossas auditorias identificam perdas de geração que o monitoramento comum não detecta." },
                  { title: "Expertise Senior", desc: "Equipe com mais de 15 anos de atuação no centro do poder regulatório em Brasília." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 border-l-2 border-phos-accent bg-zinc-50 group hover:bg-phos-primary hover:text-white transition-all duration-500">
                     <h4 className="font-black uppercase tracking-tight text-lg">{item.title}</h4>
                     <p className="text-sm opacity-60 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="lg:col-span-5 relative">
             <div className="relative aspect-[4/5] bg-phos-primary p-4 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                  alt="High Tech Engineering" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-phos-primary to-transparent">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-px bg-phos-accent" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Precision Control</span>
                   </div>
                   <div className="text-3xl font-black text-white uppercase tracking-tighter">Engenharia de Elite</div>
                </div>
             </div>
             {/* Decorative Data Float */}
             <div className="absolute -top-10 -right-10 bg-phos-accent p-6 shadow-2xl hidden md:block">
                <div className="text-[10px] font-black uppercase tracking-widest text-phos-primary mb-2">System Status</div>
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-phos-primary animate-ping" />
                   <div className="text-2xl font-black text-phos-primary">ACTIVE</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Phos Consult - Brutalist/Technical */}
      <section id="consult" className="py-24 lg:py-40 bg-phos-primary text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-px bg-phos-accent/20" />
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-phos-accent/20" />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
             <div className="max-w-2xl">
                <span className="section-label !text-white/40">02. Nossos Planos</span>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                  Escalas de <span className="text-phos-accent underline decoration-4 underline-offset-8">Solução</span>
                </h2>
             </div>
             <p className="text-white/40 max-w-sm text-sm font-medium uppercase tracking-[0.1em]">
                Uma jornada de evolução desenhada para acompanhar o crescimento e a complexidade da sua operação.
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
            {[
              { 
                id: '01', 
                name: 'Bronze', 
                subtitle: 'Entrada com Organização Básica',
                price: '1.999',
                items: [
                  'Até 4 demandas/mês',
                  'Acesso à Plataforma',
                  '1 Reunião mensal',
                  'Escalonamento Ouvidoria'
                ]
              },
              { 
                id: '02', 
                name: 'Prata', 
                subtitle: 'Acompanhamento Estruturado',
                price: '2.999',
                items: [
                  'Até 8 demandas/mês',
                  'Acesso à Plataforma',
                  '1 Reunião mensal',
                  'Ouvidoria + ANEEL'
                ]
              },
              { 
                id: '03', 
                name: 'Ouro', 
                subtitle: 'Gestão Técnica-Regulatória Contínua',
                price: '4.499',
                featured: true,
                badge: 'Recommended // High Performance',
                items: [
                  'Até 10 demandas/mês',
                  'Acesso VIP Plataforma',
                  '2 Reuniões estratégicas/mês',
                  'Full Escalonamento (ANEEL)',
                  'Suporte Técnico 24h',
                  'Capacitação In-Company'
                ]
              },
              { 
                id: '04', 
                name: 'Diamante', 
                subtitle: 'Gestão Estratégica com Suporte Jurídico',
                price: '7.499',
                items: [
                  '12 Dem. Técnicas + 2 Jurídicas',
                  'Prioridade Total de Fluxo',
                  '4 Reuniões Board Level',
                  'Blindagem Regulatória Full',
                  'Suporte VIP ilimitado',
                  'Consultoria Tributária'
                ]
              }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -12, transition: { duration: 0.2 } }}
                className={`group relative p-6 md:p-8 flex flex-col justify-between h-full min-h-[580px] lg:min-h-[620px] transition-all duration-300 ${
                  plan.featured 
                    ? 'bg-phos-accent text-phos-primary shadow-[0_30px_60px_-15px_rgba(255,205,0,0.3)] z-10 scale-100 sm:scale-[1.02] lg:scale-105' 
                    : 'bg-white/5 backdrop-blur-md border border-white/10 hover:border-phos-accent/50 hover:bg-white/[0.08]'
                } ${plan.featured ? 'my-6 lg:my-0' : 'my-0'}`}
              >
                {/* Technical Corner Accents */}
                <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 transition-colors ${plan.featured ? 'border-phos-primary/20' : 'border-phos-accent/20 group-hover:border-phos-accent'}`} />
                <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 transition-colors ${plan.featured ? 'border-phos-primary/20' : 'border-phos-accent/20 group-hover:border-phos-accent'}`} />
                
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-phos-primary text-[7px] md:text-[8px] font-black px-4 py-1.5 uppercase tracking-[0.3em] shadow-xl whitespace-nowrap z-20">
                     {plan.badge}
                  </div>
                )}

                <div>
                   <div className={`font-mono text-[8px] md:text-[9px] font-bold mb-8 md:mb-10 flex justify-between items-center opacity-40`}>
                      <span className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full animate-pulse ${plan.featured ? 'bg-phos-primary' : 'bg-phos-accent'}`} />
                        SYS-SPEC // {plan.id}
                      </span>
                      <Zap className={`w-4 h-4 ${plan.featured ? 'fill-phos-primary' : 'fill-phos-accent'}`} />
                   </div>

                   <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 tracking-tighter leading-none group-hover:translate-x-1 transition-transform">{plan.name}</h3>
                   <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-8 md:mb-10 leading-tight min-h-[2rem] ${plan.featured ? 'text-phos-primary/60' : 'text-phos-accent'}`}>
                      {plan.subtitle}
                   </p>
                   
                   <div className="mb-8 md:mb-12 relative">
                      <span className={`text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] block mb-2 ${plan.featured ? 'text-phos-primary/40' : 'text-white/30'}`}>Budget Mensal</span>
                      <div className="flex items-baseline gap-2">
                         <span className="text-lg md:text-xl font-black">R$</span>
                         <span className="text-4xl xs:text-5xl md:text-6xl font-black tracking-tightest leading-none">{plan.price}</span>
                      </div>
                      <div className={`mt-4 h-0.5 w-12 transition-all group-hover:w-full ${plan.featured ? 'bg-phos-primary/10' : 'bg-phos-accent/20'}`} />
                   </div>

                   <ul className="space-y-3 md:space-y-4 mb-4">
                      {plan.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                           <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${plan.featured ? 'bg-phos-primary/10 text-phos-primary' : 'bg-phos-accent/10 text-phos-accent'}`}>
                              <Check className="w-2 md:w-2.5 h-2 md:h-2.5 stroke-[4]" />
                           </div>
                           <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] leading-tight ${plan.featured ? 'text-phos-primary/80' : 'text-white/60 group-hover/item:text-white transition-colors'}`}>
                              {item}
                           </span>
                        </li>
                      ))}
                   </ul>
                </div>

                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`group/btn relative py-4 md:py-5 mt-8 md:mt-10 overflow-hidden transition-all transform active:scale-95 text-center ${
                    plan.featured 
                      ? 'bg-phos-primary text-white hover:bg-white hover:text-phos-primary' 
                      : 'bg-white text-phos-primary border-2 border-white hover:bg-transparent hover:text-white'
                  }`}
                >
                   <span className="relative z-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">Habilitar Escala</span>
                   <div className={`absolute inset-0 translate-y-full transition-transform duration-300 group-hover/btn:translate-y-0 ${plan.featured ? 'bg-white' : 'bg-phos-accent'}`} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section - Technical Portfolio */}
      <section id="cases" className="py-24 lg:py-40 bg-phos-primary text-white overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="flex-1">
              <span className="section-label !text-white/40">04. Portfólio Técnico</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                Ativos sob <br className="hidden lg:block" /> 
                <span className="text-phos-accent">Gestão.</span>
              </h2>
           </div>
           
           {/* Navigation Buttons for Desktop */}
           <div className="flex gap-4">
              <button 
                onClick={scrollPrev}
                className="w-16 h-16 border border-white/10 flex items-center justify-center hover:bg-phos-accent hover:text-phos-primary transition-all active:scale-95 bg-white/5"
              >
                 <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={scrollNext}
                className="w-16 h-16 border border-white/10 flex items-center justify-center hover:bg-phos-accent hover:text-phos-primary transition-all active:scale-95 bg-white/5"
              >
                 <ChevronRight className="w-8 h-8" />
              </button>
           </div>
        </div>

        <div className="relative group">
          {/* Navigation Buttons - More prominent and integrated */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 hidden xl:block">
            <button 
              onClick={scrollPrev}
              className="w-16 h-16 bg-phos-primary border border-white/10 flex items-center justify-center hover:bg-phos-accent hover:text-phos-primary transition-all active:scale-95 shadow-2xl"
            >
               <ChevronLeft className="w-8 h-8" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden xl:block">
            <button 
              onClick={scrollNext}
              className="w-16 h-16 bg-phos-primary border border-white/10 flex items-center justify-center hover:bg-phos-accent hover:text-phos-primary transition-all active:scale-95 shadow-2xl"
            >
               <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="overflow-hidden cursor-grab active:cursor-grabbing px-6 md:px-12 lg:px-20" ref={carouselRef}>
            <motion.div 
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
              className="flex gap-8 pb-20"
            >
               {[
                 { 
                   client: "Estádio Mané Garrincha", 
                   location: "Brasília/DF", 
                   size: "2.7MWp", 
                   result: "Maior da AL",
                   image: "https://images.unsplash.com/photo-1541532713592-23a4b220167f?auto=format&fit=crop&q=80&w=1000",
                   tag: "ESTRUTURAL // ESTÁDIO"
                 },
                 { 
                   client: "Santa Maria Comercial", 
                   location: "Santa Maria/DF", 
                   size: "3.7MWp", 
                   result: "5358 Módulos",
                   image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1000",
                   tag: "ALTA ESCALA"
                 },
                 { 
                   client: "Brazlândia Turn Key", 
                   location: "Brazlândia/DF", 
                   size: "2.5MWp", 
                   result: "Tecnologia Tracker",
                   image: "https://images.unsplash.com/photo-1621293954908-d3bc31067584?auto=format&fit=crop&q=80&w=1000",
                   tag: "TURN KEY // TRACKER"
                 },
                 { 
                   client: "Agro CAUB", 
                   location: "CAUB/DF", 
                   size: "1.3MWp", 
                   result: "1926 Módulos",
                   image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=1000",
                   tag: "AGRIBUSINESS"
                 },
                 { 
                   client: "Volvo BSB - DC Charger", 
                   location: "SIA/DF", 
                   size: "30kW DC", 
                   result: "Carga Rápida",
                   image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
                   tag: "ELETROMOBILIDADE"
                 },
                 { 
                   client: "Sede INCRA", 
                   location: "Asa Norte/DF", 
                   size: "Modernização", 
                   result: "Retrofit Elétrico",
                   image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
                   tag: "PROJETOS ELÉTRICOS"
                 },
                 { 
                   client: "Mirante Club Residence", 
                   location: "Águas Claras/DF", 
                   size: "Auditoria", 
                   result: "Laudo Técnico",
                   image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
                   tag: "INSPEÇÃO // COMPLIANCE"
                 }
               ].map((caseItem, i) => (
                 <motion.div 
                   key={i} 
                   className="min-w-[320px] md:min-w-[450px] group relative aspect-[4/5] bg-zinc-900 overflow-hidden select-none"
                 >
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.client} 
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 pointer-events-none" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-phos-primary via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute top-8 left-8">
                       <span className="bg-phos-accent text-phos-primary text-[8px] font-black px-3 py-1 uppercase tracking-widest">{caseItem.tag}</span>
                    </div>

                    <div className="absolute bottom-10 left-10 p-2">
                       <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-2">{caseItem.location}</div>
                       <h4 className="text-3xl font-black uppercase mb-6 tracking-tighter">{caseItem.client}</h4>
                       <div className="flex gap-10">
                          <div>
                             <div className="text-2xl font-black text-phos-accent">{caseItem.size}</div>
                             <div className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Capacidade</div>
                          </div>
                          <div>
                             <div className="text-2xl font-black text-white">{caseItem.result}</div>
                             <div className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Impacto</div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Industry Authority */}
      <section id="testimonials" className="py-24 lg:py-40 bg-zinc-50 border-y border-phos-primary/5">
         <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
               <div className="max-w-2xl">
                  <span className="section-label">05. Reconhecimento</span>
                  <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                    Vozes da <span className="text-phos-accent">Autoridade.</span>
                  </h2>
               </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-1 grid-cols-1">
               {[
                 { 
                   name: "Carlos Eduardo", 
                   role: "Diretor de Operações // SolarCorp", 
                   quote: "A Phos Energia não é apenas uma consultoria, é um braço estratégico. Eles resolveram um impasse regulatório de 8 meses em apenas 15 dias." 
                 },
                 { 
                   name: "Juliana Mendes", 
                   role: "Engenheira Chefe // AgriInvest", 
                   quote: "Nossa usina no Mato Grosso só atingiu a performance financeira esperada após a auditoria técnica da equipe do Luidi." 
                 },
                 { 
                   name: "Roberto Silva", 
                   role: "Presidente // GreenGrid Brasil ", 
                   quote: "Blindagem regulatória de primeiro mundo. O suporte 24h e o conhecimento das normas da ANEEL são diferenciais imbatíveis." 
                 }
               ].map((test, i) => (
                 <div key={i} className="bg-white p-12 lg:p-16 border border-phos-primary/5 flex flex-col justify-between">
                    <div>
                       <div className="flex gap-1 mb-10">
                          {[1,2,3,4,5].map(s => <Zap key={s} className="w-3 h-3 text-phos-accent fill-current" />)}
                       </div>
                       <p className="text-xl lg:text-2xl font-bold text-phos-primary italic leading-relaxed mb-12">
                          "{test.quote}"
                       </p>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-px bg-phos-accent" />
                       <div>
                          <div className="text-sm font-black uppercase tracking-tight">{test.name}</div>
                          <div className="text-[10px] font-bold text-phos-primary/40 uppercase tracking-widest">{test.role}</div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Leadership Section - Vertical Sophistication */}
      <section id="leader" className="py-24 lg:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-24 items-center">
          <div className="w-full lg:w-2/5">
             <div className="relative group overflow-hidden">
                <div className="absolute inset-0 bg-phos-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out mix-blend-multiply z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1519085185603-3a1b1a620614?auto=format&fit=crop&q=80&w=1000" 
                  alt="CEO Luidi Filipe" 
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 border-2 border-phos-primary outline-offset-8 outline-2 outline-phos-accent outline hidden md:block" 
                />
                <div className="absolute top-8 right-8 z-20 hidden lg:block">
                   <div className="bg-phos-primary text-white p-6 shadow-2xl">
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-2">Since 2010</span>
                      <div className="h-px w-20 bg-phos-accent" />
                   </div>
                </div>
             </div>
          </div>

          <div className="w-full lg:w-3/5">
            <span className="section-label">03. Liderança</span>
            <h2 className="text-5xl lg:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.9] text-display">
              Engenharia de <br /> <span className="text-phos-accent bg-phos-primary px-4">Performance</span>
            </h2>
            <div className="space-y-8 text-xl font-medium text-phos-primary/70 leading-relaxed max-w-2xl">
               <p>
                 Idealizada por <span className="text-phos-primary font-bold">Eng. Luidi Filipe</span>, profissional com 15 anos de atuação em obras estratégicas de alta complexidade.
               </p>
               <p className="border-l-4 border-phos-accent pl-12 py-4 italic text-phos-primary font-medium">
                 "A Phos não é apenas um escritório de projetos. Somos um braço estratégico focado no destravamento de processos e proteção de ativos elétricos de grande escala."
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-phos-primary/10">
                  {[
                    { icon: HardHat, label: "Project" },
                    { icon: Monitor, label: "Academy" },
                    { icon: TrendingUp, label: "Test" },
                    { icon: ShieldCheck, label: "Safety" }
                  ].map((v, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group cursor-help">
                       <v.icon className="w-8 h-8 text-phos-primary group-hover:text-phos-accent transition-colors" />
                       <span className="text-[9px] font-bold uppercase tracking-widest">{v.label}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Ultra-Clean High-Performance CTA */}
      <section className="bg-phos-primary py-24 lg:py-48 relative overflow-hidden">
        {/* Subtle Architectural Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-10 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
            >
              <div className="w-2 h-2 rounded-full bg-phos-accent animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Operação Certificada</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-12">
              Segurança Máxima. <br />
              <span className="text-phos-accent">Blindagem Real.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/50 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Pronto para elevar o patamar técnico da sua usina? Conecte-se agora com a engenharia que define os padrões do setor elétrico.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-highlight w-full sm:w-auto px-12 py-6 text-xl">
                Acessar Consultoria
                <ArrowUpRight className="w-6 h-6" />
              </a>
              <div className="flex flex-col items-start text-left border-l border-white/10 pl-8 hidden md:block">
                 <div className="text-white font-black text-xl tracking-tight">61 99697-2911</div>
                 <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Brasília // Digital Global</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal/Industrial */}
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

      {/* Tech Indicator */}
      <div className="fixed bottom-10 left-10 z-[100] hidden xl:flex flex-col gap-1 pointer-events-none select-none">
         <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-phos-accent animate-pulse" />
            <span className="text-[8px] font-mono text-phos-primary/40 uppercase tracking-[0.4em]">Grid Active // 61-9.9697-2911</span>
         </div>
      </div>
      {/* Floating CTA */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group lg:hidden"
      >
        <Phone className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
