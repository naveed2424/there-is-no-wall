import { ArrowUpRight, Check, X, Tablet, BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG, trackEvent } from "../config/siteConfig";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  if (!isOpen) return null;

  const handleAmazonClick = () => {
    trackEvent("amazon_click");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#121620] border border-white/15 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <img
              src={SITE_CONFIG.COVER_IMAGE}
              alt="There Is No Wall book cover"
              className="w-16 h-24 object-cover rounded-md border border-white/15 shadow-md shrink-0 hidden sm:block"
            />
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#e2c56a]/15 text-[#e2c56a] text-[11px] font-mono uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3" />
                <span>30-Day Launch Offer</span>
              </div>
              <h3 className="text-2xl font-serif-editorial text-[#f7f5f0]">
                {SITE_CONFIG.BOOK_TITLE}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                By {SITE_CONFIG.AUTHOR_NAME} · {SITE_CONFIG.FORMAT_LABEL}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition-colors cursor-pointer shrink-0"
            aria-label="Close checkout modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pricing & Deliverables Box */}
        <div className="p-4 bg-black/40 border border-[#e2c56a]/20 rounded-xl space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs font-mono text-[#e2c56a] block uppercase tracking-wider">
                Amazon Kindle Special Price
              </span>
              <span className="text-[11px] text-zinc-400">
                Promotional price valid for the next 30 days
              </span>
            </div>
            <div className="text-right">
              <span className="text-3xl font-serif-editorial text-[#f7f5f0] font-bold">
                {SITE_CONFIG.PRICE_TEXT}
              </span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-zinc-300 pt-2 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Full Digital Edition on Amazon Kindle</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Instant sync to Kindle, iPad, iPhone, Android & Web Reader</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>The No-Wall Method™ 5-Stage Framework Guide included</span>
            </div>
          </div>
        </div>

        {/* Exclusively Available on Amazon Kindle */}
        <div className="space-y-3">
          <a
            href={SITE_CONFIG.AMAZON_URL}
            onClick={handleAmazonClick}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 bg-[#f7f5f0] hover:bg-[#e2c56a] text-[#0c0e12] rounded-xl flex items-center justify-between group transition-all cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(226,197,106,0.35)] block"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-black text-[#f7f5f0] flex items-center justify-center font-bold font-serif text-lg">
                a
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold tracking-wide uppercase">
                  Order on Amazon Kindle ({SITE_CONFIG.PRICE_TEXT})
                </div>
                <div className="text-[11px] text-zinc-700">
                  Secure 1-Click Amazon Checkout · Read immediately
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-zinc-500 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400/80" />
          <span>Fulfilled & secured directly by Amazon</span>
        </div>

      </div>
    </div>
  );
}
