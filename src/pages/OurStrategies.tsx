import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, BarChart3, Shield, Layers, Activity } from "lucide-react";

const strategies = [
  {
    icon: TrendingUp,
    name: "RSI Trap Strategy",
    desc: "Captures oversold/overbought reversals using RSI divergence patterns with smart entry timing and dynamic multi-level exit logic.",
    performance: "Win Rate: 72% | Avg Monthly: 8-15%",
    pairs: "XAUUSD, EURUSD, GBPUSD",
  },
  {
    icon: BarChart3,
    name: "ATR Based Martingale",
    desc: "Volatility-adjusted position sizing with controlled martingale recovery. Uses ATR for dynamic lot sizing and entry spacing.",
    performance: "Win Rate: 85% | Avg Monthly: 10-20%",
    pairs: "XAUUSD, BTCUSD",
  },
  {
    icon: Shield,
    name: "Zone Recovery",
    desc: "Dual-direction hedging system that recovers from adverse moves. Calculates zone widths and recovery lots mathematically.",
    performance: "Recovery Rate: 94% | Avg Monthly: 12-18%",
    pairs: "EURUSD, USDJPY, GBPUSD",
  },
  {
    icon: Layers,
    name: "Grid Cycle",
    desc: "Multi-level grid trading with intelligent cycle detection. Adapts grid spacing based on market volatility and trend strength.",
    performance: "Win Rate: 80% | Avg Monthly: 8-14%",
    pairs: "XAUUSD, EURUSD",
  },
  {
    icon: Activity,
    name: "Volume + Price Action",
    desc: "Combines institutional volume analysis with price action patterns for high-probability entries at key market structure points.",
    performance: "Win Rate: 68% | Avg Monthly: 6-12%",
    pairs: "All Major Pairs",
  },
];

const OurStrategies = () => {
  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 bg-muted/30">
        <div className="container-custom px-4 md:px-8">
          <SectionHeading badge="Our Strategies" title="Battle-Tested Trading Strategies" subtitle="Each strategy is developed, backtested, and optimized by our team of expert traders and developers." />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-elevated p-8 group hover:shadow-gold transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{s.name}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                <div className="space-y-2 mb-5">
                  <p className="text-xs font-body font-semibold text-success">{s.performance}</p>
                  <p className="text-xs font-body text-muted-foreground">Pairs: {s.pairs}</p>
                </div>
                <Button variant="gold" size="sm" className="w-full" asChild>
                  <Link to="/drop-your-idea">Get This Strategy as EA</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-center">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Have a Custom Strategy?</h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8 max-w-xl mx-auto">We can build any trading strategy into a professional Expert Advisor. Share your idea today.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/drop-your-idea">Submit Your Custom Strategy</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStrategies;
