import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, Shield, BarChart3, Zap } from "lucide-react";
import mobileTradingImg from "@/assets/mobile-trading.png";
import tradingDashboard from "@/assets/trading-dashboard.png";
import { openWhatsApp, getWhatsAppUrl } from "@/lib/smartLinks";

const benefits = [
  "Full-featured demo EA for MT5",
  "Works on demo accounts instantly",
  "Multiple strategy options available",
  "No time limit on demo usage",
  "Detailed user guide included",
  "WhatsApp support for setup",
];

const demoEAs = [
  { name: "RSI Reversal Demo", desc: "Captures RSI oversold/overbought levels with smart money management.", features: ["Auto lot sizing", "Built-in SL/TP", "Multi-pair support"] },
  { name: "Trend Follower Demo", desc: "Follows strong trends using moving average crossovers and momentum.", features: ["Trend detection", "Trailing stop", "News filter"] },
  { name: "Grid Recovery Demo", desc: "Grid-based system with intelligent recovery for range markets.", features: ["Zone detection", "Risk limiter", "Equity guard"] },
];

const FreeDemoEA = () => {
  const whatsappMessage = "Hi, I want to download the Free Demo EA";
  const whatsappLink = getWhatsAppUrl(whatsappMessage);

  return (
    <Layout>
      <section className="pt-32 pb-8 md:pt-48 md:pb-16 gradient-gold-soft relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container-custom px-4 md:px-8 relative z-10">
          <SectionHeading badge="Free Download" title="Free Demo Expert Advisors" subtitle="Experience the power of automated trading with our free demo EAs. Test on demo accounts before going live." />
        </div>
      </section>

      {/* Hero showcase */}
      <section className="section-padding bg-[#FDFBF7]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Why Try Our Demo EA?</h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Our free demo EAs let you experience professional-grade automated trading without any cost. Test strategies, understand automation, and see real performance before committing.
              </p>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-4 text-foreground font-body text-base font-semibold group">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle size={18} className="text-success shrink-0" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
              <Button variant="whatsapp" size="xl" className="shadow-lg animate-float" onClick={() => openWhatsApp(whatsappMessage)}>
                <Download size={20} className="mr-2" /> Get Free Demo EA
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
                <img src={tradingDashboard} alt="Trading Dashboard" className="relative rounded-3xl shadow-2xl w-full border border-white/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo EA Cards */}
      <section className="section-padding gradient-indigo relative">
        <div className="container-custom">
          <SectionHeading badge="Available Demos" title="Choose Your Demo EA" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoEAs.map((ea, i) => (
              <motion.div
                key={ea.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card-elevated p-10 group hover:shadow-brand transition-all duration-500 glow-border"
              >
                <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  {i === 0 ? <BarChart3 size={28} className="text-white" /> : i === 1 ? <Zap size={28} className="text-white" /> : <Shield size={28} className="text-white" />}
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{ea.name}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 h-12">{ea.desc}</p>
                <ul className="space-y-3 mb-8">
                  {ea.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-foreground/80 font-body text-sm font-medium">
                      <CheckCircle size={16} className="text-success" /> {f}
                    </li>
                  ))}
                </ul>
                <Button variant="gold" size="lg" className="w-full shadow-gold" onClick={() => openWhatsApp(whatsappMessage)}>
                  <Download size={18} className="mr-2" /> Download Demo
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original EA Access */}
      <section className="section-padding gradient-gold-soft text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container-custom max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-8">
              Unlock the Full Version
            </h2>
            <p className="text-muted-foreground font-body text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
              Ready to take your trading to the next level? Activate the professional version today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: "🏦", title: "Partner IB", text: "Open trading account under our IB" },
                { icon: "📈", title: "Active Trade", text: "Maintain active trading volume" },
                { icon: "🤝", title: "Profit Share", text: "Fair profit sharing model applicable" },
              ].map((step, i) => (
                <div key={i} className="glass-card-elevated p-10 text-center shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <span className="text-5xl block mb-6 drop-shadow-lg">{step.icon}</span>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
            <Button variant="hero" size="xl" className="shadow-brand px-12 animate-float" onClick={() => openWhatsApp("Hi, I want to activate the full EA version")}>
              ACTIVATE FULL VERSION NOW
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#FDFBF7] relative">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="What Users Say" title="Demo EA Feedback" />
          <div className="space-y-6">
            {[
              { name: "Suresh M.", text: "The RSI demo EA gave me confidence in automated trading. Smooth setup, great support! Truly professional team at Tradigo." },
              { name: "Deepika R.", text: "I tested the grid demo for 2 months on demo account. Results were consistent. Now on the full version and it's been a game-changer!" },
            ].map((t, i) => (
              <motion.div 
                key={t.name} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
                className="glass-card-elevated p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                <p className="text-foreground/90 font-body text-lg leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white font-bold text-xs shadow-brand">
                    {t.name.charAt(0)}
                  </div>
                  <p className="text-foreground font-heading font-bold text-base">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeDemoEA;
