import { Link } from "react-router-dom";
import { Facebook, Instagram, Send, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-1.jpeg";
import { openSmartLink, getSocialUrl, getWhatsAppUrl } from "@/lib/smartLinks";

const socialIcons = [
  { icon: Facebook, platform: "facebook" as const, label: "Facebook" },
  { icon: Instagram, platform: "instagram" as const, label: "Instagram" },
  { icon: Send, platform: "telegram" as const, label: "Telegram" },
];

const Footer = () => {
  return (
    <footer className="gradient-footer text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container-custom py-12 md:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <img src={logo} alt="Tradigo" className="h-14 w-auto brightness-110" />
            <p className="text-white/70 text-sm leading-relaxed font-body">
              Premium MT5 Expert Advisor development company. We convert your trading ideas into powerful automated strategies with precision and scale.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={getSocialUrl(s.platform)}
                  onClick={(e) => {
                    e.preventDefault();
                    openSmartLink(s.platform);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300 border border-white/10 shadow-lg"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-8 text-accent">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Drop Your Idea", path: "/drop-your-idea" },
                { label: "Free Demo EA", path: "/free-demo-ea" },
                { label: "Our Strategies", path: "/strategies" },
                { label: "IB Account Benefits", path: "/ib-account" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 hover:text-accent text-sm font-body transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-8 text-accent">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-sm text-white/70">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone size={18} className="text-accent" />
                </div>
                <a href={getWhatsAppUrl()} onClick={(e) => { e.preventDefault(); openSmartLink("whatsapp"); }} className="hover:text-accent transition-colors">+91 90980 64667</a>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/70">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail size={18} className="text-accent" />
                </div>
                <a href="mailto:contact@tradigo.com" className="hover:text-accent transition-colors">contact@tradigo.com</a>
              </li>
              <li className="flex items-start gap-4 text-sm text-white/70">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin size={18} className="text-accent" />
                </div>
                <span className="mt-2">India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-8 text-accent">Newsletter</h4>
            <p className="text-white/70 text-sm mb-6 font-body leading-relaxed">
              Stay updated with our latest strategies and EA releases. Join our elite community.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <button className="w-full py-3 rounded-xl gradient-brand text-white font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-brand shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                JOIN NOW
              </button>
            </form>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-[#E5D0A1] text-xs leading-relaxed font-body text-center max-w-4xl mx-auto">
            <strong>Risk Disclaimer:</strong> Trading Forex and CFDs involves significant risk and can result in the loss of your invested capital. Past performance does not guarantee future results. No guarantee of profit is made. Market risk warning applies. Please ensure you fully understand the risks involved before trading.
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-[#E5D0A1] text-xs font-body">
            © {new Date().getFullYear()} Tradigo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
