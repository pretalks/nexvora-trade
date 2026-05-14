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
      <section className="pt-32 pb-8 md:pt-40 bg-muted/30">
        <div className="container-custom px-4 md:px-8">
          <SectionHeading badge="Free Download" title="Free Demo Expert Advisors" subtitle="Experience the power of automated trading with our free demo EAs. Test on demo accounts before going live." />
        </div>
      </section>

      {/* Hero showcase */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Why Try Our Demo EA?</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our free demo EAs let you experience professional-grade automated trading without any cost. Test strategies, understand automation, and see real performance before committing.
              </p>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground font-body text-sm">
                    <CheckCircle size={18} className="text-success shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button variant="whatsapp" size="lg" onClick={() => openWhatsApp(whatsappMessage)}>
                <Download size={18} /> Get Free Demo EA
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={tradingDashboard} alt="Trading Dashboard" className="rounded-2xl shadow-lg w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo EA Cards */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <SectionHeading badge="Available Demos" title="Choose Your Demo EA" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoEAs.map((ea, i) => (
              <motion.div
                key={ea.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-elevated p-8 group hover:shadow-brand transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-5">
                  {i === 0 ? <BarChart3 size={22} className="text-primary" /> : i === 1 ? <Zap size={22} className="text-primary" /> : <Shield size={22} className="text-primary" />}
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{ea.name}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{ea.desc}</p>
                <ul className="space-y-2 mb-6">
                  {ea.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-foreground/70 font-body text-xs">
                      <CheckCircle size={14} className="text-success" /> {f}
                    </li>
                  ))}
                </ul>
                <Button variant="gold" size="sm" className="w-full" onClick={() => openWhatsApp(whatsappMessage)}>
                  <Download size={16} /> Download Demo
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original EA Access */}
      <section className="section-padding gradient-indigo">
        <div className="container-custom max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Unlock the Full Version
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8">
              To activate the full, original version of any EA:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "✔", text: "Open trading account under our IB" },
                { icon: "✔", text: "Maintain active trading" },
                { icon: "✔", text: "Profit sharing model applicable" },
              ].map((step) => (
                <div key={step.text} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center">
                  <span className="text-accent text-2xl block mb-3">{step.icon}</span>
                  <p className="text-primary-foreground/80 font-body text-sm">{step.text}</p>
                </div>
              ))}
            </div>
            <Button variant="hero" size="lg" onClick={() => openWhatsApp("Hi, I want to activate the full EA version")}>
              Activate Full Version
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="What Users Say" title="Demo EA Feedback" />
          <div className="space-y-4">
            {[
              { name: "Suresh M.", text: "The RSI demo EA gave me confidence in automated trading. Smooth setup, great support!" },
              { name: "Deepika R.", text: "I tested the grid demo for 2 months on demo account. Results were consistent. Now on the full version!" },
            ].map((t) => (
              <motion.div key={t.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="glass-card p-6">
                <p className="text-foreground/80 font-body text-sm italic mb-3">"{t.text}"</p>
                <p className="text-accent font-heading font-semibold text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeDemoEA;
