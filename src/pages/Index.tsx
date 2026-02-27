import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Zap, Shield, BarChart3, Settings, TestTube, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import StatsCounter from "@/components/StatsCounter";
import SectionHeading from "@/components/SectionHeading";
import heroTrader from "@/assets/hero-trader.png";
import tradingDashboard from "@/assets/trading-dashboard.png";
import teamDiscussion from "@/assets/team-discussion.png";

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
    title: "Join 2000+ Traders Who Trust X-Trend Edu Tech",
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
  { name: "RSI Trap Strategy", desc: "Captures oversold/overbought reversals with smart entry timing and dynamic exit logic." },
  { name: "ATR Based Martingale", desc: "Volatility-adjusted position sizing with controlled recovery for consistent returns." },
  { name: "Zone Recovery", desc: "Dual-direction hedging system that recovers from adverse moves with calculated entries." },
  { name: "Grid Cycle", desc: "Multi-level grid trading with cycle detection for range-bound and trending markets." },
  { name: "Volume + Price Action", desc: "Combines volume analysis with price action patterns for high-probability trade entries." },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Full-time Trader", text: "X-Trend converted my manual RSI strategy into an EA that runs 24/5. My consistency improved dramatically." },
  { name: "Priya Sharma", role: "Part-time Trader", text: "The free demo EA helped me understand automated trading. Now I use the full version and it's been amazing." },
  { name: "Amit Patel", role: "Forex Investor", text: "Professional team, excellent communication, and the EA performs exactly as discussed. Highly recommended!" },
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
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={heroSlides[current].image} alt="Trading" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                {heroSlides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-8 max-w-2xl leading-relaxed">
                {heroSlides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/drop-your-idea">🔵 Submit Your Idea</Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/free-demo-ea" className="text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10">🟢 Download Free Demo EA</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button onClick={() => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length)} className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-all">
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-8" : "bg-primary-foreground/40"}`} />
          ))}
        </div>
        <button onClick={() => setCurrent((c) => (c + 1) % heroSlides.length)} className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-all">
          <ChevronRight size={20} />
        </button>
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
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="What We Offer" title="Premium EA Development Services" subtitle="From concept to execution, we provide end-to-end automated trading solutions." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card-elevated p-8 group hover:shadow-gold transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <f.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Preview */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <SectionHeading badge="Our Strategies" title="Proven Trading Strategies" subtitle="Explore our battle-tested strategies powering hundreds of Expert Advisors." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card-elevated p-6 hover:shadow-gold transition-all duration-300 group"
              >
                <div className="w-full h-2 rounded-full gradient-gold mb-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{s.name}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{s.desc}</p>
                <Button variant="gold" size="sm" asChild>
                  <Link to="/strategies">Learn More</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Testimonials" title="Trusted by Traders Worldwide" subtitle="Hear from our satisfied clients who have transformed their trading." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card-elevated p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground font-body text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
      <section className="section-padding gradient-navy text-center">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Start Your Trading Automation Journey Today
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8 max-w-2xl mx-auto">
              Share your idea, get a free demo, and experience the power of automated trading with X-Trend Edu Tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/drop-your-idea">Submit Your Idea</Link>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/919584463536?text=Hi%2C%20I%20want%20to%20start%20my%20trading%20automation%20journey" target="_blank" rel="noopener noreferrer">
                  💬 Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-card-elevated overflow-hidden"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-heading font-semibold text-foreground text-sm md:text-base">{question}</span>
        <ChevronRight size={18} className={`text-accent shrink-0 ml-4 transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 text-muted-foreground font-body text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Index;
