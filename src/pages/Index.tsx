import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Zap, Shield, BarChart3, Settings, TestTube, TrendingUp } from "lucide-react";
import { openWhatsApp } from "@/lib/smartLinks";
import Layout from "@/components/Layout";
import StatsCounter from "@/components/StatsCounter";
import SectionHeading from "@/components/SectionHeading";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroTrader from "@/assets/hero-trader.png";
import tradingDashboard from "@/assets/trading-dashboard.png";
import teamDiscussion from "@/assets/team-discussion.png";
import strategyRsi from "@/assets/strategy-rsi.jpg";
import strategyAtr from "@/assets/strategy-atr.jpg";
import strategyZone from "@/assets/strategy-zone.jpg";
import strategyGrid from "@/assets/strategy-grid.jpg";
import strategyVolume from "@/assets/strategy-volume.jpg";

const heroSlides = [
  {
    image: heroTrader,
    title: "Build Your Trading Idea Into a Powerful Expert Advisor",
    subtitle: "Share your strategy idea. We develop your EA. Test free demo version. Use original version under our IB & grow together.",
  },
  {
    image: tradingDashboard,
    title: "Automate Your Forex Trading with MT5 Expert Advisors",
    subtitle: "Professional EA development with advanced risk management, backtesting, and optimization for consistent performance.",
  },
  {
    image: teamDiscussion,
    title: "Join 2000+ Traders Who Trust Tradigo",
    subtitle: "From concept to execution — our team of experts transforms your trading vision into reality.",
  },
];

const features = [
  { icon: Zap, title: "Custom EA Development", desc: "Tailored Expert Advisors built to your exact trading specifications and strategy." },
  { icon: Settings, title: "MT5 Automation", desc: "Full MetaTrader 5 integration for seamless automated trading execution." },
  { icon: Shield, title: "Risk Management", desc: "Advanced risk control systems including SL, TP, trailing stops, and equity protection." },
  { icon: BarChart3, title: "Strategy Optimization", desc: "Data-driven optimization to maximize your EA's performance across market conditions." },
  { icon: TestTube, title: "Backtesting Support", desc: "Comprehensive historical backtesting with detailed performance analytics." },
  { icon: TrendingUp, title: "Live Monitoring", desc: "Real-time performance tracking and alerts for your automated strategies." },
];

const strategies = [
  { name: "RSI Trap Strategy", desc: "Captures oversold/overbought reversals with smart entry timing and dynamic exit logic.", image: strategyRsi },
  { name: "ATR Based Martingale", desc: "Volatility-adjusted position sizing with controlled recovery for consistent returns.", image: strategyAtr },
  { name: "Zone Recovery", desc: "Dual-direction hedging system that recovers from adverse moves with calculated entries.", image: strategyZone },
  { name: "Grid Cycle", desc: "Multi-level grid trading with cycle detection for range-bound and trending markets.", image: strategyGrid },
  { name: "Volume + Price Action", desc: "Combines volume analysis with price action patterns for high-probability trade entries.", image: strategyVolume },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Full-time Trader", text: "Tradigo converted my manual RSI strategy into an EA that runs 24/5. My consistency improved dramatically." },
  { name: "Priya Sharma", role: "Part-time Trader", text: "The free demo EA helped me understand automated trading. Now I use the full version and it's been amazing." },
  { name: "Amit Patel", role: "Forex Investor", text: "Professional team, excellent communication, and the EA performs exactly as discussed. Highly recommended!" },
  { name: "Suresh Menon", role: "Day Trader", text: "The risk management features are top-notch. My drawdowns have reduced significantly since using their custom EA." },
  { name: "Deepika Rao", role: "Algorithmic Trader", text: "Fast development turnaround and high-quality code. The backtesting results matched the live performance perfectly." },
  { name: "Vikram Singh", role: "Prop Firm Trader", text: "I needed a complex zone recovery system, and Tradigo delivered a masterpiece. Truly a premium service." },
  { name: "Ananya Iyer", role: "Financial Analyst", text: "Their team understands the nuances of price action. The volume-based EA they built for me is a game-changer." },
  { name: "Rahul Deshmukh", role: "Scalper", text: "Lowest latency execution I've seen. Their MT5 automation is rock solid even during high volatility news events." },
];

const faqs = [
  { q: "What is an Expert Advisor (EA)?", a: "An Expert Advisor is an automated trading program that runs on MetaTrader 5. It executes trades based on predefined rules and strategies without manual intervention." },
  { q: "How do I get my trading idea converted into an EA?", a: "Simply visit our 'Drop Your Idea' page, fill in your strategy details, and our team will analyze and develop it into a professional EA." },
  { q: "Is the Free Demo EA fully functional?", a: "Yes, the demo EA is fully functional but runs on demo accounts. To use it on live accounts, you need to open a trading account under our IB partnership." },
  { q: "What is the IB Account program?", a: "Our Introducing Broker program gives you access to original EAs, lower spreads, cashback, and priority support when you trade through our partner broker." },
  { q: "How long does EA development take?", a: "Typical development takes 1-3 weeks depending on strategy complexity. We provide regular updates throughout the process." },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#1A1230]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img src={heroSlides[current].image} alt="Trading" className="w-full h-full object-cover brightness-75 contrast-125" />
          <div className="absolute inset-0 gradient-hero" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-40"
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={{
              y: [null, "-20%", "20%"],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 backdrop-blur-md border border-accent/30"
              >
                Premium Trading Solutions
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-8 drop-shadow-2xl">
                {heroSlides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-body mb-12 max-w-2xl leading-relaxed drop-shadow-lg">
                {heroSlides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-6">
                <Button variant="hero" size="xl" className="shadow-brand group" asChild>
                  <Link to="/drop-your-idea">
                    🚀 Submit Your Idea
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/strategies">Our Strategies</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>



      {/* Slide Controls */}
      <div className="absolute bottom-12 right-8 md:right-16 z-20 flex flex-col items-center gap-6">
        <div className="flex flex-col gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1 transition-all duration-500 ${i === current ? "h-12 bg-accent shadow-[0_0_15px_rgba(255,191,0,0.8)]" : "h-6 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsCounter />

      {/* Features */}
      <section className="section-padding bg-[#FDFBF7]">
        <div className="container-custom">
          <SectionHeading badge="What We Offer" title="Premium EA Development Services" subtitle="From concept to execution, we provide end-to-end automated trading solutions." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card-elevated p-8 group hover:shadow-brand transition-all duration-500 glow-border"
              >
                <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <f.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{f.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Preview */}
      <section className="section-padding gradient-gold-soft">
        <div className="container-custom">
          <SectionHeading badge="Our Strategies" title="Proven Trading Strategies" subtitle="Explore our battle-tested strategies powering hundreds of Expert Advisors." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card-elevated overflow-hidden hover:shadow-brand transition-all duration-500 group flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{s.name}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <Button variant="gold" size="lg" className="w-full shadow-gold" asChild>
                    <Link to="/strategies">Explore Strategy</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F0EAF5]">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-accent/5 to-transparent blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeading badge="Testimonials" title="Trusted by Traders Worldwide" subtitle="Hear from our satisfied clients who have transformed their trading." />
          
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="glass-card-elevated p-10 h-full flex flex-col shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                  >
                    <div className="flex gap-1.5 mb-6 text-accent">
                      {[...Array(5)].map((_, j) => (
                        <motion.span
                          key={j}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: j * 0.1 }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                    <p className="text-foreground/90 font-body text-lg leading-relaxed mb-8 italic flex-1">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center text-white font-bold shadow-brand">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-foreground text-lg">{t.name}</p>
                        <p className="text-muted-foreground font-body text-sm uppercase tracking-wider">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know about our EA development services." />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-gold-soft text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 gradient-brand" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground mb-8 leading-tight">
              Start Your Trading <br className="hidden md:block" /> Automation Journey Today
            </h2>
            <p className="text-muted-foreground font-body text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Share your idea, get a free demo, and experience the power of automated trading with Tradigo.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button variant="hero" size="xl" className="shadow-brand animate-float" asChild>
                <Link to="/drop-your-idea">🚀 Submit Your Idea</Link>
              </Button>
              <Button variant="whatsapp" size="xl" className="shadow-lg" onClick={() => openWhatsApp("Hi, I want to start my trading automation journey")}>
                💬 Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Abstract shapes for CTA */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </section>
    </Layout>
  );
};

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`rounded-2xl p-[1px] bg-gradient-to-r from-primary to-accent transition-all duration-500 group ${open ? "shadow-2xl shadow-primary/20" : "hover:shadow-lg hover:shadow-primary/10"}`}
    >
      <div className="bg-white/90 backdrop-blur-2xl rounded-[15px] overflow-hidden h-full">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 md:p-8 text-left">
          <span className={`font-heading font-bold text-base md:text-xl transition-colors duration-300 ${open ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
            {question}
          </span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${open ? "bg-primary text-white rotate-90" : "bg-muted text-accent group-hover:bg-primary group-hover:text-white"}`}>
            <ChevronRight size={20} />
          </div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="px-6 pb-8 md:px-8 md:pb-10">
                <div className="w-full h-[1px] bg-gradient-to-r from-accent/50 to-transparent mb-6" />
                <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Index;
