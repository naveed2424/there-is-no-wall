import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { SITE_CONFIG, trackEvent } from "../config/siteConfig";

interface FinalCtaProps {
  onOpenPurchase: () => void;
  onScrollToMethod: () => void;
}

export function FinalCta({ onOpenPurchase, onScrollToMethod }: FinalCtaProps) {
  const handlePurchase = () => {
    trackEvent("book_cta_click", { location: "final_cta" });
    onOpenPurchase();
  };

  const handleMethod = () => {
    trackEvent("method_view", { source: "final_cta" });
    onScrollToMethod();
  };

  return (
    <section className="py-24 md:py-36 bg-[#0a0c0f] border-b border-white/5 relative overflow-hidden text-center">
      
      {/* Background Radial Light Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(226, 197, 106, 0.25) 0%, rgba(10, 12, 15, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
            The Final Realization
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-editorial text-[#f7f5f0] font-normal leading-[1.1] tracking-tight [text-wrap:balance]">
            What if there is no wall?
          </h2>
          <div className="max-w-xl mx-auto space-y-2 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed pt-2">
            <p>You don't have to have everything figured out.</p>
            <p className="text-zinc-400">
              You only have to become willing to question the walls you've stopped noticing.
            </p>
          </div>
        </div>

        {/* Dual Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE_CONFIG.AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePurchase}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] transition-all rounded-md shadow-lg hover:shadow-[0_0_30px_rgba(226,197,106,0.3)] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>GET ON AMAZON KINDLE</span>
            <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-black/10">({SITE_CONFIG.PRICE_TEXT})</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <button
            onClick={handleMethod}
            className="w-full sm:w-auto px-7 py-4 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Layers className="w-4 h-4 text-[#e2c56a]" />
            <span>DISCOVER THE NO-WALL METHOD™</span>
          </button>
        </div>

        {/* Unboxed Metadata Trust Line from brief */}
        <div className="pt-4 flex items-center justify-center gap-3 text-xs text-zinc-400 font-mono">
          <span>Digital book</span>
          <span aria-hidden="true" className="text-zinc-700">•</span>
          <span>Practical exercises</span>
          <span aria-hidden="true" className="text-zinc-700">•</span>
          <span>30-day journey</span>
        </div>

      </div>
    </section>
  );
}
