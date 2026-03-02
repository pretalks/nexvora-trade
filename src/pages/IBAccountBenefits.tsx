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
  },
  {
    name: "Star Trader",
    url: "https://www.startrader.com/live-account/?affid=MjE2ODU0ODY=&ibpRebateCode=MjE2ODU0ODZTVDEwMzM0",
    color: "from-[hsl(40,70%,45%)] to-[hsl(40,70%,55%)]",
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
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(40 70% 55% / 0.3) 0%, transparent 50%)" }} />
        <div className="container-custom px-4 md:px-8 relative z-10 text-center">
          <motion.span {...fadeUp} className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase gradient-gold text-primary mb-6">
            Partner Program
          </motion.span>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4">
            Earn $10–$18 Per Lot Rebate<br className="hidden md:block" /> on XAUUSD
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-primary-foreground/70 font-body text-base md:text-lg max-w-2xl mx-auto mb-2">
            Partner Program for Educators, Signal Providers & EA Developers
          </motion.p>
          <motion.p {...fadeUp} transition={{ delay: 0.3 }} className="text-lg md:text-xl font-heading font-semibold text-accent mt-4">
            🚀 Turn Your Trading Network Into Passive Income
          </motion.p>
        </div>
      </section>

      {/* ── Who Can Join ── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Who Can Join" title="Are You One of These?" subtitle="Now you can monetize your network with high XAUUSD rebates." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {whoCanJoin.map((item, i) => (
              <motion.div key={item.label} {...fadeUp} transition={{ delay: i * 0.08 }} className={`${card} text-center group hover:shadow-gold transition-all duration-300`}>
                <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-heading font-semibold text-foreground text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rebate Highlight ── */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom max-w-3xl">
          <motion.div {...fadeUp} className="glass-card-elevated p-8 md:p-12 text-center border-2 border-accent/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 gradient-gold" />
            <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-2">
              Earn <span className="text-gradient-gold">$<AnimatedCounter target={10} />–$<AnimatedCounter target={18} /></span> Per Lot
            </h2>
            <p className="text-muted-foreground font-body text-lg">Traded by Your Clients on XAUUSD</p>
          </motion.div>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Why Join" title="Why Join Our Partner Program" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoin.map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.1 }} className={`${card} group hover:shadow-gold transition-all duration-300`}>
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="How It Works" title="5 Simple Steps to Start Earning" />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-6">
              {steps.map((s, i) => (
                <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.12 }} className="flex items-start gap-6 relative">
                  <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center shrink-0 relative z-10 shadow-gold">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="glass-card-elevated p-6 flex-1">
                    <span className="text-xs font-semibold text-accent font-body uppercase tracking-wider">Step {i + 1}</span>
                    <h3 className="text-lg font-heading font-semibold text-foreground mt-1 mb-1">{s.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.p {...fadeUp} className="text-center text-muted-foreground font-body mt-8 text-sm">
            Your earnings start as soon as trading volume begins.
          </motion.p>
        </div>
      </section>

      {/* ── Choose Your Broker ── */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="Get Started" title="Choose Your Broker" subtitle="Open a live account using one of our partner links below." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brokers.map((b, i) => (
              <motion.div key={b.name} {...fadeUp} transition={{ delay: i * 0.15 }} className="glass-card-elevated overflow-hidden group hover:shadow-gold transition-all duration-300">
                <div className={`h-3 bg-gradient-to-r ${b.color}`} />
                <div className="p-8 text-center">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">{b.name}</h3>
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href={b.url} target="_blank" rel="noopener noreferrer">
                      Open Account <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Earning Example ── */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="Earning Potential" title="What You Can Earn" />
          <motion.div {...fadeUp} className="glass-card-elevated p-8 md:p-12 text-center">
            <p className="text-muted-foreground font-body text-lg mb-4">If your network trades <span className="font-semibold text-foreground">100 lots</span> per month:</p>
            <div className="text-4xl md:text-6xl font-heading font-bold text-gradient-gold mb-2">
              $<AnimatedCounter target={1800} />
            </div>
            <p className="text-muted-foreground font-body text-base mb-1">Monthly Rebate</p>
            <p className="text-xs text-muted-foreground font-body mt-2">100 lots × $18 per lot</p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-heading font-semibold text-foreground text-lg">Scale your team. Scale your income.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Perfect For" title="Who This Is For" subtitle="If you already have traders, this is your extra income stream." />
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {whoFor.map((item, i) => (
              <motion.div key={item.label} {...fadeUp} transition={{ delay: i * 0.08 }} className="flex items-center gap-3 glass-card-elevated px-5 py-3 hover:shadow-gold transition-all duration-300">
                <item.icon className="w-5 h-5 text-accent shrink-0" />
                <span className="font-body text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply Now ── */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom max-w-2xl">
          <SectionHeading badge="Apply" title="Apply Now" subtitle="We will activate your IB and confirm within 24 hours." />
          <motion.div {...fadeUp} className="glass-card-elevated p-8 md:p-10">
            <div className="space-y-3 mb-8">
              {["Full Name", "UID", "Registered Email"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" className="flex-1" onClick={() => openWhatsApp(whatsappMsg)}>
                Apply via WhatsApp
              </Button>
              <Button variant="hero-outline" size="lg" className="flex-1" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Important Note ── */}
      <section className="py-8 px-4 md:px-8 bg-background">
        <div className="container-custom max-w-3xl">
          <motion.div {...fadeUp} className="flex items-start gap-4 glass-card p-6 border-l-4 border-accent">
            <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Important:</span> Rebates apply only when accounts are opened using our official links and properly verified.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding gradient-navy text-center">
        <div className="container-custom">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Start Building Your Passive Income Today
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8">Serious partners only.</p>
            <Button variant="hero" size="lg" onClick={() => openWhatsApp(whatsappMsg)}>
              Join Now
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default IBAccountBenefits;
