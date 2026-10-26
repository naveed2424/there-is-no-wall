import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { SITE_CONFIG, trackEvent } from "../config/siteConfig";

interface StickyMobileCtaProps {
  onOpenPurchase: () => void;
}

export function StickyMobileCta({ onOpenPurchase }: StickyMobileCtaProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past 300px
      if (window.scrollY > 300 && !dismissed) {
        setVisible(true);
      } else if (window.scrollY <= 300) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  const handleClick = () => {
    trackEvent("book_cta_click", { location: "sticky_mobile_bottom" });
    onOpenPurchase();
  };

  return (
    <aside
      aria-label="Quick mobile book purchase"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-[#0c0e12]/95 border-t border-white/10 backdrop-blur-lg shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-sm mx-auto">
        <div className="min-w-0 flex-1">
          <div className="text-xs font-serif-editorial text-[#f7f5f0] truncate">
            {SITE_CONFIG.BOOK_TITLE}
          </div>
          <div className="text-[10px] font-mono text-zinc-400">
            {SITE_CONFIG.PRICE_TEXT} · Digital Edition
          </div>
        </div>

        <a
          href={SITE_CONFIG.AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] rounded transition-colors whitespace-nowrap cursor-pointer shadow flex items-center gap-1.5"
        >
          <span>AMAZON ({SITE_CONFIG.PRICE_TEXT})</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        <button
          onClick={() => setDismissed(true)}
          className="p-1 text-zinc-500 hover:text-zinc-300 cursor-pointer"
          aria-label="Dismiss quick bar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
