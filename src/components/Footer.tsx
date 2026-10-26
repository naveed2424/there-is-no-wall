import { SITE_CONFIG } from "../config/siteConfig";
import { LegalTab } from "./LegalModal";

interface FooterProps {
  onOpenLegal: (tab: LegalTab) => void;
  onOpenPurchase: () => void;
}

export function Footer({ onOpenLegal, onOpenPurchase }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08090c] border-t border-white/5 py-16 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif-editorial text-lg text-[#f7f5f0] tracking-wide block">
              THERE IS NO WALL
            </span>
            <p className="text-zinc-500 max-w-sm text-xs leading-relaxed">
              A practical 30-day journey exploring beliefs, identity, possibility and action by {SITE_CONFIG.AUTHOR_NAME}.
              Manifestation as a cognitive framework without supernatural promises.
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-4 space-y-2 font-mono text-xs">
            <span className="text-zinc-300 uppercase tracking-wider block mb-1">Navigation</span>
            <div className="grid grid-cols-2 gap-y-1.5">
              <a href="#the-book" className="hover:text-white transition-colors">The Book</a>
              <a href="#the-method" className="hover:text-white transition-colors">The Method</a>
              <a href="#thirty-day-journey" className="hover:text-white transition-colors">30-Day Journey</a>
              <a href="#about-author" className="hover:text-white transition-colors">About Author</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <button
                onClick={onOpenPurchase}
                className="text-left text-[#e2c56a] hover:underline cursor-pointer"
              >
                Get Book ({SITE_CONFIG.PRICE_TEXT})
              </button>
            </div>
          </div>

          {/* Legal Col */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <span className="text-zinc-300 uppercase tracking-wider block mb-1">Legal & Disclaimers</span>
            <div className="flex flex-col space-y-1.5">
              <button
                onClick={() => onOpenLegal("disclaimer")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Educational Disclaimer
              </button>
              <button
                onClick={() => onOpenLegal("privacy")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onOpenLegal("terms")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={() => onOpenLegal("cookie")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Cookie Policy
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600 font-mono">
          <p>
            © {currentYear} {SITE_CONFIG.AUTHOR_NAME}. All rights reserved. The No-Wall Method™ is a trademark of {SITE_CONFIG.AUTHOR_NAME}.
          </p>
          <p>
            Educational and reflective in nature · Not psychotherapy or medical treatment
          </p>
        </div>

      </div>
    </footer>
  );
}
