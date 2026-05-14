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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted/30">
        <div className="container-custom px-4 md:px-8">
          <SectionHeading badge="About Us" title="Your Trusted Partner in Trading Automation" subtitle="Tradigo is a premium MT5 Expert Advisor development company committed to transforming trading ideas into powerful automated strategies." />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={teamDiscussion} alt="Tradigo Team" className="rounded-2xl shadow-lg w-full" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Our Story</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Founded with a vision to democratize algorithmic trading, Tradigo has grown into a trusted name in forex automation. With over 500 Expert Advisors developed and 2000+ active traders using our solutions, we've built a reputation for quality, reliability, and innovation.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our team of experienced developers and traders work together to convert your unique trading ideas into professional-grade automated systems. We believe every trader deserves access to institutional-quality tools.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                From RSI-based strategies to complex grid systems, we've developed EAs across every major trading approach. Our commitment to backtesting, optimization, and risk management ensures your EA performs at its best.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <SectionHeading badge="Our Values" title="What Drives Us" subtitle="Core principles that guide everything we do." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-elevated p-8 text-center group hover:shadow-brand transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <v.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{v.title}</h3>
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
