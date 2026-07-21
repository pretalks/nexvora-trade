import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import strategyRsi from "@/assets/strategy-rsi.jpg";
import strategyAtr from "@/assets/strategy-atr.jpg";
import strategyZone from "@/assets/strategy-zone.jpg";
import strategyGrid from "@/assets/strategy-grid.jpg";
import strategyVolume from "@/assets/strategy-volume.jpg";

const strategies = [
  {
    image: strategyRsi,
    name: "RSI Trap Strategy",
    desc: "Captures oversold/overbought reversals using RSI divergence patterns with smart entry timing and dynamic multi-level exit logic.",
    performance: "Win Rate: 72% | Avg Monthly: 8-15%",
    pairs: "XAUUSD, EURUSD, GBPUSD",
  },
  {
    image: strategyAtr,
    name: "ATR Based Martingale",
    desc: "Volatility-adjusted position sizing with controlled martingale recovery. Uses ATR for dynamic lot sizing and entry spacing.",
    performance: "Win Rate: 85% | Avg Monthly: 10-20%",
    pairs: "XAUUSD, BTCUSD",
  },
  {
    image: strategyZone,
    name: "Zone Recovery",
    desc: "Dual-direction hedging system that recovers from adverse moves. Calculates zone widths and recovery lots mathematically.",
    performance: "Recovery Rate: 94% | Avg Monthly: 12-18%",
    pairs: "EURUSD, USDJPY, GBPUSD",
  },
  {
    image: strategyGrid,
    name: "Grid Cycle",
    desc: "Multi-level grid trading with intelligent cycle detection. Adapts grid spacing based on market volatility and trend strength.",
    performance: "Win Rate: 80% | Avg Monthly: 8-14%",
    pairs: "XAUUSD, EURUSD",
  },
  {
    image: strategyVolume,
    name: "Volume + Price Action",
    desc: "Combines institutional volume analysis with price action patterns for high-probability entries at key market structure points.",
    performance: "Win Rate: 68% | Avg Monthly: 6-12%",
    pairs: "All Major Pairs",
  },
];

const OurStrategies = () => {
  return (
    <Layout>
      <section className="pt-32 pb-8 md:pt-48 md:pb-16 gradient-gold-soft relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container-custom px-4 md:px-8 relative z-10">
          <SectionHeading badge="Our Strategies" title="Battle-Tested Trading Strategies" subtitle="Each strategy is developed, backtested, and optimized by our team of expert traders and developers." />
        </div>
      </section>

      <section className="section-padding bg-[#FDFBF7] relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {strategies.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card-elevated overflow-hidden group hover:shadow-brand transition-all duration-500 flex flex-col glow-border"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{s.name}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <div className="space-y-3 mb-8 p-4 bg-accent/5 rounded-xl border border-accent/10">
                    <p className="text-sm font-body font-bold text-success flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      {s.performance}
                    </p>
                    <p className="text-xs font-body text-muted-foreground font-medium uppercase tracking-wider">Pairs: {s.pairs}</p>
                  </div>
                  <Button variant="gold" size="lg" className="w-full shadow-gold" asChild>
                    <Link to="/drop-your-idea">Get This Strategy as EA</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-indigo text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">Have a Custom Strategy?</h2>
            <p className="text-muted-foreground font-body text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
              We can build any trading strategy into a professional Expert Advisor. Share your vision today.
            </p>
            <Button variant="hero" size="xl" className="shadow-brand animate-float" asChild>
              <Link to="/drop-your-idea">Submit Your Custom Strategy</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStrategies;
