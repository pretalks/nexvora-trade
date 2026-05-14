/**
 * Smart Link Redirect System
 * Handles fallback URLs for social/messaging platforms
 * with timeout-based failure detection.
 */

const LINK_CONFIG = {
  whatsapp: {
    primary: "https://wa.me/919098064667",
    fallback: "https://web.whatsapp.com/send?phone=919098064667",
  },
  facebook: {
    primary: "https://www.facebook.com/share/1GEgkEY4fW/",
    fallback: "https://m.facebook.com/share/1GEgkEY4fW/",
  },
  instagram: {
    primary: "https://www.instagram.com/tradigo/",
    fallback: "https://m.instagram.com/tradigo/",
  },
  telegram: {
    primary: "https://t.me/tradigo",
    fallback: "https://t.me/tradigo",
  },
} as const;

type Platform = keyof typeof LINK_CONFIG;

/**
 * Opens a social link with automatic fallback.
 * If the primary link doesn't navigate away within 2s, tries the fallback.
 */
export const openSmartLink = (platform: Platform, queryParams?: string) => {
  const config = LINK_CONFIG[platform];
  const primaryUrl = queryParams ? `${config.primary}?${queryParams}` : config.primary;
  const fallbackUrl = queryParams ? `${config.fallback}?${queryParams}` : config.fallback;

  const newWindow = window.open(primaryUrl, "_blank");

  // If popup was blocked, try direct navigation to fallback
  if (!newWindow || newWindow.closed) {
    window.location.href = fallbackUrl;
    return;
  }

  // Set a timeout: if the user is still on our page after 2.5s,
  // the link likely failed — open fallback
  const checkTimer = setTimeout(() => {
    try {
      // Try fallback in same window that was opened
      newWindow.location.href = fallbackUrl;
    } catch {
      // Cross-origin — window navigated successfully, do nothing
    }
  }, 2500);

  // Clean up on page unload (means primary link worked)
  const cleanup = () => clearTimeout(checkTimer);
  window.addEventListener("beforeunload", cleanup, { once: true });

  // Also clear after 3s regardless
  setTimeout(() => {
    clearTimeout(checkTimer);
    window.removeEventListener("beforeunload", cleanup);
  }, 3000);
};

/**
 * Build a WhatsApp message URL with smart fallback.
 */
export const openWhatsApp = (message?: string) => {
  const params = message ? `text=${encodeURIComponent(message)}` : "";
  openSmartLink("whatsapp", params);
};

/**
 * Get the primary WhatsApp URL (for href attributes as progressive enhancement).
 */
export const getWhatsAppUrl = (message?: string) => {
  const base = LINK_CONFIG.whatsapp.primary;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const getSocialUrl = (platform: Platform) => LINK_CONFIG[platform].primary;

export { LINK_CONFIG };
export type { Platform };
