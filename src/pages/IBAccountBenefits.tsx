import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import ibSpreads from "@/assets/ib-spreads.jpg";
import ibCashback from "@/assets/ib-cashback.jpg";
import ibSupport from "@/assets/ib-support.jpg";
import ibEa from "@/assets/ib-ea.jpg";
import ibSignals from "@/assets/ib-signals.jpg";
import ibTraining from "@/assets/ib-training.jpg";

const benefits = [
  { image: ibSpreads, title: "Lower Spreads", desc: "Get access to tighter spreads on major forex pairs, reducing your overall trading costs." },
  { image: ibCashback, title: "Cashback Rewards", desc: "Earn cashback on every trade you execute. The more you trade, the more you earn." },
  { image: ibSupport, title: "Priority Support", desc: "Get dedicated WhatsApp support with priority response times for all trading queries." },
  { image: ibEa, title: "Premium EA Access", desc: "Unlock full, original versions of all our Expert Advisors at no additional cost." },
  { image: ibSignals, title: "Free Trading Signals", desc: "Receive daily trading signals and market analysis directly on WhatsApp." },
  { image: ibTraining, title: "Exclusive Training", desc: "Access to exclusive webinars, tutorials, and trading education resources." },
];

const steps = [
  { step: "01", title: "Contact Us", desc: "Reach out via WhatsApp to express your interest in our IB program." },
  { step: "02", title: "Open Account", desc: "We'll guide you through opening a trading account with our partner broker." },
  { step: "03", title: "Start Trading", desc: "Begin trading with lower spreads, cashback, and access to our premium EAs." },
  { step: "04", title: "Grow Together", desc: "As your trading volume grows, unlock more benefits and higher cashback rates." },
];

const IBAccountBenefits = () => {
  const whatsappLink = "https://wa.me/918141517483?text=Hi%2C%20I%27m%20interested%20in%20the%20IB%20Account%20program";

  return (
    <Layout>
      <section className="pt-32 pb-8 md:pt-40 bg-muted/30">
        <div className="container-custom px-4 md:px-8">
          <SectionHeading badge="IB Program" title="IB Account Benefits" subtitle="Trade smarter with our Introducing Broker partnership. Get exclusive benefits, lower costs, and premium tools." />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-elevated overflow-hidden group hover:shadow-gold transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="How It Works" title="Getting Started is Easy" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-6 glass-card-elevated p-6"
              >
                <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center shrink-0">
                  <span className="text-primary font-heading font-bold text-xl">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-center">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Ready to Unlock Premium Benefits?</h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8 max-w-xl mx-auto">Join our IB program today and start trading with exclusive advantages.</p>
            <Button variant="hero" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Join IB Program via WhatsApp</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default IBAccountBenefits;
