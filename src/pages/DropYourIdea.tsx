import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { openWhatsApp } from "@/lib/smartLinks";

const DropYourIdea = () => {
  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "", pair: "", timeframe: "", entry: "", sltp: "", risk: "", notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New EA Idea Submission*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*WhatsApp:* ${form.whatsapp}\n*Trading Pair:* ${form.pair}\n*Timeframe:* ${form.timeframe}\n*Entry Logic:* ${form.entry}\n*SL/TP Logic:* ${form.sltp}\n*Risk Management:* ${form.risk}\n*Extra Notes:* ${form.notes}`;
    openWhatsApp(message);
  };

  return (
    <Layout>
      <section className="pt-32 pb-8 md:pt-48 md:pb-16 gradient-gold-soft relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container-custom px-4 md:px-8 relative z-10">
          <SectionHeading badge="Share Your Vision" title="Drop Your Trading Idea" subtitle="Have a unique trading idea? Drop your concept below and our development team will convert it into a professional MT5 Expert Advisor." />
        </div>
      </section>

      <section className="section-padding bg-[#FDFBF7] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <div className="container-custom max-w-3xl">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card-elevated p-8 md:p-16 space-y-8 shadow-2xl relative glow-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
              <InputField label="WhatsApp Number" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+91 XXXXXXXXXX" required />
              <div>
                <label className="block text-sm font-body font-bold text-foreground mb-3">Trading Pair</label>
                <select name="pair" value={form.pair} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl bg-white/50 border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-md transition-all appearance-none cursor-pointer">
                  <option value="">Select pair</option>
                  <option value="XAUUSD">XAUUSD (Gold)</option>
                  <option value="EURUSD">EURUSD</option>
                  <option value="GBPUSD">GBPUSD</option>
                  <option value="BTCUSD">BTCUSD</option>
                  <option value="USDJPY">USDJPY</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-body font-bold text-foreground mb-3">Timeframe</label>
                <select name="timeframe" value={form.timeframe} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl bg-white/50 border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-md transition-all appearance-none cursor-pointer">
                  <option value="">Select timeframe</option>
                  <option value="M1">M1</option>
                  <option value="M5">M5</option>
                  <option value="M15">M15</option>
                  <option value="H1">H1</option>
                  <option value="H4">H4</option>
                  <option value="D1">D1</option>
                </select>
              </div>
            </div>

            <TextAreaField label="Entry Logic" name="entry" value={form.entry} onChange={handleChange} placeholder="Describe your entry conditions (e.g., Buy when RSI < 30 and price touches support...)" required />
            <TextAreaField label="SL / TP Logic" name="sltp" value={form.sltp} onChange={handleChange} placeholder="Describe stop loss and take profit rules..." required />
            <TextAreaField label="Risk Management" name="risk" value={form.risk} onChange={handleChange} placeholder="Lot size, max drawdown, position limits..." />
            <TextAreaField label="Extra Notes" name="notes" value={form.notes} onChange={handleChange} placeholder="Any additional details about your strategy..." />

            <Button type="submit" variant="hero" size="xl" className="w-full shadow-brand shadow-[0_0_30px_rgba(168,85,247,0.3)] animate-float">
              <Send size={20} className="mr-2" /> Submit Idea via WhatsApp
            </Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

const InputField = ({ label, name, type = "text", value, onChange, placeholder, required = false }: {
  label: string; name: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string; required?: boolean;
}) => (
  <div>
    <label className="block text-sm font-body font-bold text-foreground mb-3">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} className="w-full px-5 py-4 rounded-xl bg-white/50 border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground/50 backdrop-blur-md transition-all" />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder, required = false }: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; placeholder: string; required?: boolean;
}) => (
  <div>
    <label className="block text-sm font-body font-bold text-foreground mb-3">{label}</label>
    <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} rows={4} className="w-full px-5 py-4 rounded-xl bg-white/50 border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground/50 resize-none backdrop-blur-md transition-all" />
  </div>
);

export default DropYourIdea;
