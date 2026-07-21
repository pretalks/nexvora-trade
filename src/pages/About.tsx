import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Target, Users, Award, Globe } from "lucide-react";
import teamDiscussion from "@/assets/team-discussion.png";

const values = [
  { icon: Target, title: "Precision", desc: "Every EA is crafted with meticulous attention to detail and rigorous testing." },
  { icon: Users, title: "Client First", desc: "Your trading success is our priority. We listen, understand, and deliver." },
  { icon: Award, title: "Excellence", desc: "7+ years of experience delivering world-class trading automation solutions." },
  { icon: Globe, title: "Global Reach", desc: "Serving traders across India and worldwide with premium EA development." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 gradient-gold-soft relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container-custom px-4 md:px-8 relative z-10">
          <SectionHeading badge="About Us" title="Your Trusted Partner in Trading Automation" subtitle="Tradigo is a premium MT5 Expert Advisor development company committed to transforming trading ideas into powerful automated strategies." />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#FDFBF7]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-3xl" />
                <img src={teamDiscussion} alt="Tradigo Team" className="relative rounded-3xl shadow-2xl w-full" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Story</h3>
              <div className="space-y-6">
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  Founded with a vision to democratize algorithmic trading, Tradigo has grown into a trusted name in forex automation. With over 500 Expert Advisors developed and 2000+ active traders using our solutions, we've built a reputation for quality, reliability, and innovation.
                </p>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  Our team of experienced developers and traders work together to convert your unique trading ideas into professional-grade automated systems. We believe every trader deserves access to institutional-quality tools.
                </p>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  From RSI-based strategies to complex grid systems, we've developed EAs across every major trading approach. Our commitment to backtesting, optimization, and risk management ensures your EA performs at its best.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding gradient-indigo relative">
        <div className="container-custom">
          <SectionHeading badge="Our Values" title="What Drives Us" subtitle="Core principles that guide everything we do." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card-elevated p-10 text-center group hover:shadow-brand transition-all duration-500 glow-border"
              >
                <div className="w-20 h-20 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-8 group-hover:rotate-[360deg] transition-transform duration-700 shadow-xl">
                  <v.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{v.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
