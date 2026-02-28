import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { openWhatsApp, openSmartLink, getWhatsAppUrl } from "@/lib/smartLinks";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Contact Inquiry*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*WhatsApp:* ${form.whatsapp}\n*Message:* ${form.message}`;
    openWhatsApp(msg);
  };

  return (
    <Layout>
      <section className="pt-32 pb-8 md:pt-40 bg-muted/30">
        <div className="container-custom px-4 md:px-8">
          <SectionHeading badge="Get in Touch" title="Contact Us" subtitle="Have questions? We're here to help. Reach out via WhatsApp, email, or the contact form below." />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Let's Connect</h3>
                <div className="space-y-5">
                  <a
                    href={getWhatsAppUrl()}
                    onClick={(e) => { e.preventDefault(); openSmartLink("whatsapp"); }}
                    className="flex items-center gap-4 glass-card p-5 hover:shadow-gold transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                      <Phone size={22} className="text-success" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">WhatsApp</p>
                      <p className="text-muted-foreground font-body text-sm">+91 8141517483</p>
                    </div>
                  </a>
                  <a href="mailto:xtrendedutech@gmail.com" className="flex items-center gap-4 glass-card p-5 hover:shadow-gold transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Mail size={22} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">Email</p>
                      <p className="text-muted-foreground font-body text-sm">xtrendedutech@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 glass-card p-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">Location</p>
                      <p className="text-muted-foreground font-body text-sm">India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667978.755!2d76.0!3d23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="X-Trend Edu Tech Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-elevated p-8 md:p-10 space-y-5"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">Send Us a Message</h3>
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Your name" },
                { label: "Email", name: "email", type: "email", placeholder: "you@email.com" },
                { label: "WhatsApp Number", name: "whatsapp", type: "text", placeholder: "+91 XXXXXXXXXX" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(form as Record<string, string>)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground resize-none"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send size={18} /> Send via WhatsApp
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
