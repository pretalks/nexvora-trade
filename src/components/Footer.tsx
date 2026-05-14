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
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Tradigo" className="h-12 w-auto" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed font-body">
              Premium MT5 Expert Advisor development company. We convert your trading ideas into powerful automated strategies.
            </p>
            <div className="flex gap-3">
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
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/80 hover:text-accent-foreground hover:scale-110 transition-all duration-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-accent text-sm font-body transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone size={16} className="text-accent shrink-0" />
                <a href={getWhatsAppUrl()} onClick={(e) => { e.preventDefault(); openSmartLink("whatsapp"); }} className="hover:text-accent transition-colors">+91 8141517483</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={16} className="text-accent shrink-0" />
                <a href="mailto:contact@tradigo.com" className="hover:text-accent transition-colors">contact@tradigo.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-primary-foreground/70 text-sm mb-4 font-body">
              Stay updated with our latest strategies and EA releases.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-body placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-4 py-2 rounded-lg gradient-gold text-primary font-semibold text-sm hover-glow transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/50 text-xs leading-relaxed font-body text-center max-w-4xl mx-auto">
            <strong>Risk Disclaimer:</strong> Trading Forex and CFDs involves significant risk and can result in the loss of your invested capital. Past performance does not guarantee future results. No guarantee of profit is made. Market risk warning applies. Please ensure you fully understand the risks involved before trading.
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-xs font-body">
            © {new Date().getFullYear()} Tradigo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
