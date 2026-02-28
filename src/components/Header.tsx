import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Drop Your Idea", path: "/drop-your-idea" },
  { label: "Free Demo EA", path: "/free-demo-ea" },
  { label: "Our Strategies", path: "/strategies" },
  { label: "IB Account", path: "/ib-account" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/xtrendedutech/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/1GEgkEY4fW/", label: "Facebook" },
  { icon: Send, href: "https://t.me/xtrendet", label: "Telegram" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Info Bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground"
      >
        <div className="container-custom flex items-center justify-between h-9 px-4 md:px-8 text-xs font-body">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:+918141517483" className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200">
              <Phone size={12} /> +91 8141517483
            </a>
            <a href="mailto:xtrendedutech@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors duration-200">
              <Mail size={12} /> xtrendedutech@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-6 h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300"
              >
                <s.icon size={12} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <header
        className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="X-Trend Edu Tech"
              className="h-12 md:h-14 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(40,70%,55%,0.6)] group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium font-body transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-accent bg-accent/10"
                    : isScrolled
                    ? "text-foreground hover:text-accent hover:bg-accent/5"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="gold" size="sm" asChild>
              <a href="https://wa.me/918141517483?text=Hi%2C%20I%20want%20to%20know%20more%20about%20X-Trend%20Edu%20Tech" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card/98 backdrop-blur-xl border-b border-border"
            >
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-sm font-medium font-body transition-all ${
                      location.pathname === link.path
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="gold" size="sm" className="mt-2" asChild>
                  <a href="https://wa.me/918141517483" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
