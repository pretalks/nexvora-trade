import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const DropYourIdea = () => {
  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "", pair: "", timeframe: "", entry: "", sltp: "", risk: "", notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New EA Idea Submission*%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*WhatsApp:* ${form.whatsapp}%0A*Trading Pair:* ${form.pair}%0A*Timeframe:* ${form.timeframe}%0A*Entry Logic:* ${form.entry}%0A*SL/TP Logic:* ${form.sltp}%0A*Risk Management:* ${form.risk}%0A*Extra Notes:* ${form.notes}`;
    window.open(`https://wa.me/918141517483?text=${message}`, "_blank");
  };

  return (
    <Layout>
      <section className="pt-32 pb-8 md:pt-40 bg-muted/30">
        <div className="container-custom px-4 md:px-8">
          <SectionHeading badge="Share Your Vision" title="Drop Your Trading Idea" subtitle="Have a unique trading idea? Drop your concept below and our development team will convert it into a professional MT5 Expert Advisor." />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card-elevated p-8 md:p-12 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
              <InputField label="WhatsApp Number" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+91 XXXXXXXXXX" required />
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">Trading Pair</label>
                <select name="pair" value={form.pair} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent">
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
                <label className="block text-sm font-body font-medium text-foreground mb-2">Timeframe</label>
                <select name="timeframe" value={form.timeframe} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent">
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

            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send size={18} /> Submit Idea via WhatsApp
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
    <label className="block text-sm font-body font-medium text-foreground mb-2">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground" />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder, required = false }: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; placeholder: string; required?: boolean;
}) => (
  <div>
    <label className="block text-sm font-body font-medium text-foreground mb-2">{label}</label>
    <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} rows={3} className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground resize-none" />
  </div>
);

export default DropYourIdea;
