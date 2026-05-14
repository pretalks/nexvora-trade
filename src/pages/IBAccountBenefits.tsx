import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/smartLinks";
import {
  GraduationCap, Radio, Bot, Network, Users, TrendingUp,
  Handshake, Zap, Clock, HeadphonesIcon, CheckCircle2,
  UserPlus, FileCheck, Wallet, Send, ShieldCheck,
  Youtube, MessageCircle, BookOpen, Store, Crown,
  DollarSign, ArrowRight, AlertTriangle
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import vantageLogo from "@/assets/broker-vantage.png";
import startraderLogo from "@/assets/broker-startrader.png";
import vtmarketsLogo from "@/assets/broker-vtmarkets.png";
import forex4youLogo from "@/assets/broker-forex4you.png";

/* ── Animated Counter ── */
const AnimatedCounter = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60, inc = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(cur));
    }, 2000 / steps);
    return () => clearInterval(t);
  }, [started, target]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

/* ── Data ── */
const whoCanJoin = [
  { icon: GraduationCap, label: "Forex Educator" },
  { icon: Radio, label: "Signal Provider" },
  { icon: Bot, label: "EA Developer / Seller" },
  { icon: Network, label: "MLM Networker" },
  { icon: Users, label: "Trading Community Owner" },
];

const whyJoin = [
  { icon: TrendingUp, title: "High Rebate Structure", desc: "Earn $10–$18 per lot on XAUUSD — among the highest in the industry." },
  { icon: Handshake, title: "Reliable Broker Partnerships", desc: "We work with regulated, reputable brokers you can trust." },
  { icon: Zap, title: "Fast IB Setup", desc: "Get your IB link and rebate tracking activated within 24 hours." },
  { icon: DollarSign, title: "Long-Term Passive Income", desc: "Earn continuously as long as your referred clients trade." },
  { icon: HeadphonesIcon, title: "Dedicated Partner Support", desc: "Priority WhatsApp support for all partner queries." },
];

const steps = [
  { icon: UserPlus, title: "Open Live Account", desc: "Open a live trading account using our partner broker link below." },
  { icon: FileCheck, title: "Complete KYC", desc: "Verify your identity with the broker's KYC process." },
  { icon: Wallet, title: "Deposit Minimum $100", desc: "Fund your account with a minimum deposit of $100." },
  { icon: Send, title: "Send Your Details", desc: "Share your Full Name, UID, and Registered Email with us." },
  { icon: ShieldCheck, title: "IB Activation", desc: "We activate your IB & rebate tracking — you're ready to earn." },
];

const brokers = [
  {
    name: "Vantage Markets",
    url: "https://www.vantagemarkets.com/open-live-account/?affid=MTQ1Mzg2&invitecode=aLMhn8QV",
    color: "from-[hsl(220,60%,25%)] to-[hsl(220,40%,45%)]",
    logo: vantageLogo,
  },
  {
    name: "Star Trader",
    url: "https://www.startrader.com/live-account/?affid=MjE2ODU0ODY=&ibpRebateCode=MjE2ODU0ODZTVDEwNTcy",
    color: "from-[hsl(40,70%,45%)] to-[hsl(40,70%,55%)]",
    logo: startraderLogo,
  },
  {
    name: "VT Markets",
    url: "https://www.vtmarkets.com/trade-now/?affid=22203732",
    color: "from-[hsl(0,80%,45%)] to-[hsl(0,70%,55%)]",
    logo: vtmarketsLogo,
  },
  {
    name: "Markets4You",
    url: "https://account.markets4you.online/en/user-registration/?affid=nztufqq",
    color: "from-[hsl(145,60%,35%)] to-[hsl(170,50%,40%)]",
    logo: forex4youLogo,
  },
];

const whoFor = [
  { icon: MessageCircle, label: "Telegram Signal Channel Owners" },
  { icon: Youtube, label: "YouTube Trading Educators" },
  { icon: BookOpen, label: "Paid Course Creators" },
  { icon: Store, label: "EA Sellers" },
  { icon: Crown, label: "Community Leaders" },
];

const card = "glass-card-elevated p-6 md:p-8";
const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const IBAccountBenefits = () => {
  const whatsappMsg = "Hi, I want to join the IB Partner Program. Here are my details:\n\nFull Name: \nUID: \nRegistered Email: ";

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 md:pt-56 md:pb-32 gradient-gold-soft relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(183 100% 50% / 0.3) 0%, transparent 50%)" }} />
        <div className="container-custom px-4 md:px-8 relative z-10 text-center">
          <motion.span {...fadeUp} className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-wider uppercase gradient-brand text-white mb-8 shadow-brand">
            Partner Program
          </motion.span>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-[#4C1D95] leading-[1.1] mb-8 drop-shadow-md">
            Earn $10–$18 Per Lot <br className="hidden md:block" /> Rebate on XAUUSD
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-[#5B21B6] font-body text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-semibold">
            Monetize your network with our premium partner program designed for Educators, Signal Providers & EA Developers.
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="inline-block px-8 py-4 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/20">
            <p className="text-xl md:text-2xl font-heading font-bold text-[#4C1D95]">
              🚀 Turn Your Trading Network Into Passive Income
            </p>
          </motion.div>
        </div>
      </section>

       {/* ── Choose Your Broker ── */}
        <section className="section-padding bg-[#FDFBF7] relative">
          <div className="container-custom">
            <SectionHeading badge="Partners" title="Choose Your Trusted Broker" subtitle="We partner with globally regulated brokers to ensure the best trading conditions for your clients." />
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]}
              className="w-full mt-12"
            >
              <CarouselContent className="-ml-4 md:-ml-8">
                {brokers.map((b) => (
                  <CarouselItem key={b.name} className="pl-4 md:pl-8 basis-full sm:basis-1/2 lg:basis-1/4">
                    <div className="glass-card-elevated overflow-hidden group hover:shadow-brand transition-all duration-500 h-full flex flex-col glow-border">
                      <div className={`h-2 bg-gradient-to-r ${b.color} transition-all duration-500 group-hover:h-3`} />
                      <div className="p-8 text-center flex flex-col items-center gap-6 flex-1">
                        <div className="relative w-full h-32 flex items-center justify-center">
                          <div className="absolute inset-0 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                          <img src={b.logo} alt={b.name} className="relative h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-foreground">{b.name}</h3>
                        <Button variant="gold" size="lg" className="w-full shadow-gold mt-auto" asChild>
                          <a href={b.url} target="_blank" rel="noopener noreferrer">
                            Open Account <ArrowRight className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

       {/* ── Who Can Join ── */}
       <section className="section-padding gradient-gold-soft relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
         <div className="container-custom">
           <SectionHeading badge="Join Us" title="Who Can Join?" subtitle="Ideal for trading community leaders looking for extra revenue streams." />
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
             {whoCanJoin.map((item, i) => (
               <motion.div key={item.label} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card-elevated p-8 text-center group hover:shadow-brand transition-all duration-500 glow-border">
                 <div className="w-20 h-20 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-6 group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg">
                   <item.icon className="w-10 h-10 text-white" />
                 </div>
                 <p className="font-heading font-bold text-foreground text-sm md:text-base leading-tight">{item.label}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

       {/* ── Rebate Highlight ── */}
       <section className="section-padding bg-[#FDFBF7]">
         <div className="container-custom max-w-4xl">
           <motion.div {...fadeUp} className="glass-card-elevated p-12 md:p-20 text-center border-2 border-accent/30 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-2 gradient-brand" />
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
             <DollarSign className="w-20 h-20 text-accent mx-auto mb-8 animate-bounce-slow" />
             <h2 className="text-4xl md:text-7xl font-heading font-bold text-foreground mb-4 leading-tight">
               Earn <span className="text-gradient-brand">$<AnimatedCounter target={10} />–$<AnimatedCounter target={18} /></span> Per Lot
             </h2>
             <p className="text-muted-foreground font-body text-xl md:text-2xl max-w-2xl mx-auto">
               Highest industry rebates for every lot traded by your clients on XAUUSD.
             </p>
           </motion.div>
         </div>
       </section>

       {/* ── Why Join ── */}
       <section className="section-padding gradient-indigo relative">
         <div className="container-custom">
           <SectionHeading badge="Benefits" title="Why Join Our Partner Program?" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
             {whyJoin.map((item, i) => (
               <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card-elevated p-10 group hover:shadow-brand transition-all duration-500 glow-border">
                 <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                   <item.icon className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{item.title}</h3>
                 <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

       {/* ── How It Works ── */}
       <section className="section-padding bg-[#FDFBF7] relative">
         <div className="container-custom max-w-5xl">
           <SectionHeading badge="Process" title="5 Simple Steps to Start Earning" />
           <div className="relative mt-16">
             <div className="absolute left-[31px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block opacity-30" />
             <div className="space-y-10">
               {steps.map((s, i) => (
                 <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex items-start gap-10 relative">
                   <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center shrink-0 relative z-10 shadow-brand border-2 border-white/20">
                     <s.icon className="w-8 h-8 text-white" />
                   </div>
                   <div className="glass-card-elevated p-8 md:p-10 flex-1 hover:shadow-brand transition-all duration-500">
                     <span className="text-sm font-bold text-accent font-body uppercase tracking-widest mb-2 block">Step {i + 1}</span>
                     <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{s.title}</h3>
                     <p className="text-muted-foreground font-body text-base leading-relaxed">{s.desc}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
           <motion.div {...fadeUp} className="text-center mt-16 p-6 bg-accent/5 rounded-2xl border border-accent/20">
              <p className="text-muted-foreground font-body text-lg font-semibold">
                Your earnings start as soon as trading volume begins. No hidden delays.
              </p>
           </motion.div>
         </div>
       </section>

       {/* ── Earning Example ── */}
       <section className="section-padding gradient-gold-soft relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
         <div className="container-custom max-w-4xl">
           <SectionHeading badge="Calculator" title="Earning Potential" subtitle="Scale your community, scale your passive income." />
           <motion.div {...fadeUp} className="glass-card-elevated p-12 md:p-20 text-center shadow-2xl relative overflow-hidden bg-white/40">
             <div className="absolute top-0 left-0 w-full h-1 gradient-brand" />
             <p className="text-muted-foreground font-body text-xl mb-6">If your network trades <span className="font-bold text-foreground">100 lots</span> per month:</p>
             <div className="text-6xl md:text-9xl font-heading font-bold text-gradient-brand mb-6 drop-shadow-xl">
               $<AnimatedCounter target={1800} />
             </div>
             <p className="text-muted-foreground font-body text-2xl mb-2 font-semibold">Monthly Passive Rebate</p>
             <p className="text-sm text-muted-foreground/60 font-body uppercase tracking-widest">Calculated at $18 per lot</p>
             <div className="mt-12 pt-10 border-t border-border">
               <p className="font-heading font-bold text-foreground text-2xl">Start your empire today.</p>
             </div>
           </motion.div>
         </div>
       </section>

       {/* ── Who This Is For ── */}
       <section className="section-padding bg-[#FDFBF7]">
         <div className="container-custom">
           <SectionHeading badge="Audience" title="Who This Is For" subtitle="If you already have active traders, this is your next logical step." />
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
             {whoFor.map((item, i) => (
               <motion.div key={item.label} {...fadeUp} transition={{ delay: i * 0.08 }} className="flex items-center gap-4 glass-card-elevated px-8 py-5 hover:shadow-brand transition-all duration-500 glow-border">
                 <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                   <item.icon className="w-6 h-6 text-accent shrink-0" />
                 </div>
                 <span className="font-heading text-base md:text-lg font-bold text-foreground">{item.label}</span>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

       {/* ── Apply Now ── */}
       <section className="section-padding gradient-indigo relative">
         <div className="container-custom max-w-4xl">
           <SectionHeading badge="Get Started" title="Apply for Partner Program" subtitle="We will activate your IB and confirm your tracking within 24 hours." />
           <motion.div {...fadeUp} className="glass-card-elevated p-10 md:p-16 shadow-2xl relative glow-border">
             <div className="space-y-6 mb-12">
               {["Full Name", "UID", "Registered Email"].map((item) => (
                 <div key={item} className="flex items-center gap-4 group">
                   <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                   </div>
                   <span className="font-heading text-xl font-bold text-foreground">{item}</span>
                 </div>
               ))}
             </div>
             <div className="flex flex-col sm:flex-row gap-6">
               <Button variant="hero" size="xl" className="flex-1 shadow-brand animate-float" onClick={() => openWhatsApp(whatsappMsg)}>
                 APPLY VIA WHATSAPP
               </Button>
               <Button variant="hero-outline" size="xl" className="flex-1 border-white/20 text-white hover:bg-white/10" asChild>
                 <a href="/contact">TALK TO EXPERT</a>
               </Button>
             </div>
           </motion.div>
         </div>
       </section>

       {/* ── Important Note ── */}
       <section className="py-12 bg-[#FDFBF7]">
         <div className="container-custom max-w-3xl">
           <motion.div {...fadeUp} className="flex items-start gap-6 glass-card-elevated p-8 border-l-8 border-accent shadow-xl bg-white/60">
             <AlertTriangle className="w-10 h-10 text-accent shrink-0 mt-1" />
             <div>
               <p className="text-lg font-heading font-bold text-foreground mb-1">Important Legal Note</p>
               <p className="text-base font-body text-muted-foreground leading-relaxed">
                 Rebates apply only when accounts are opened using our official partner links and properly verified by the broker. Terms and conditions apply.
               </p>
             </div>
           </motion.div>
         </div>
       </section>

       {/* ── Final CTA ── */}
       <section className="section-padding gradient-gold-soft text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
         <div className="container-custom relative z-10">
           <motion.div {...fadeUp}>
             <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-8 leading-tight">
               Start Building Your <br className="hidden md:block" /> Passive Income Empire Today
             </h2>
             <p className="text-muted-foreground font-body text-xl md:text-2xl mb-12 max-w-2xl mx-auto">Serious partners only. Let's grow together.</p>
             <Button variant="hero" size="xl" className="shadow-brand px-16 animate-float" onClick={() => openWhatsApp(whatsappMsg)}>
               JOIN THE PROGRAM NOW
             </Button>
           </motion.div>
         </div>
       </section>
    </Layout>
  );
};

export default IBAccountBenefits;
