import { MessageCircle } from "lucide-react";
import { openWhatsApp, getWhatsAppUrl } from "@/lib/smartLinks";

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppUrl("Hi, I'm interested in Tradigo services")}
      onClick={(e) => {
        e.preventDefault();
        openWhatsApp("Hi, I'm interested in Tradigo services");
      }}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-success flex items-center justify-center text-success-foreground shadow-lg hover:scale-110 transition-transform duration-300 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
