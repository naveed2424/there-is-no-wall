import { ArrowDown, ArrowRight, BookOpen, Check, Shield, Smartphone, Tablet } from "lucide-react";
import { SITE_CONFIG, trackEvent } from "../config/siteConfig";

interface PaidLandingStartProps {
  onOpenPurchase: () => void;
  onOpenPreview: () => void;
  onScrollToWallFinder: () => void;
  onViewFullSite: () => void;
}

export function PaidLandingStart({
  onOpenPurchase,
  onOpenPreview,
  onScrollToWallFinder,
  onViewFullSite,
}: PaidLandingStartProps) {
  const handlePurchase = () => {
    trackEvent("book_cta_click", { location: "ad_landing_hero" });
    onOpenPurchase();
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Cold Traffic Hero */}
      <section className="pt-8 pb-16 md:pt-14 md:pb-24 border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Subtle ad source match tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e2c56a] bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <span>Special Cold-Traffic Meta Ad Edition</span>
          </div>

          {/* Exact Ad Match Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-editorial text-[#f7f5f0] font-normal leading-[1.14] tracking-tight [text-wrap:balance]">
            What if the biggest wall between you and the life you want...{" "}
            <span className="italic text-[#e2c56a]">isn't actually there?</span>
          </h1>

          <div className="max-w-2xl mx-auto space-y-3 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              You've tried affirmations, forced visualization, and positive thinking. Yet whenever you
              try to leap toward what you desire, a quiet internal voice pulls you back.
            </p>
            <p className="text-zinc-400 font-serif-editorial italic text-lg sm:text-xl text-[#f7f5f0]">
              "The problem isn't that you don't want it badly enough. The problem is the invisible assumption sitting underneath the desire."
            </p>
          </div>

          {/* Above-the-fold CTA Cluster */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePurchase}
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] transition-all rounded-md shadow-lg hover:shadow-[0_0_25px_rgba(226,197,106,0.3)] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>GET ON AMAZON KINDLE · {SITE_CONFIG.PRICE_TEXT}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onScrollToWallFinder}
              className="w-full sm:w-auto px-6 py-4 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>60-Second Wall Finder</span>
              <ArrowDown className="w-4 h-4 text-[#e2c56a]" />
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
            <span>Special 30-Day Launch Price ({SITE_CONFIG.PRICE_TEXT})</span>
            <span aria-hidden="true">•</span>
            <span>Amazon Kindle Edition</span>
            <span aria-hidden="true">•</span>
            <span>Instant Delivery</span>
          </div>

          {/* Real Book Cover Showcase */}
          <div className="pt-6 max-w-sm mx-auto">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative group bg-[#0e1218] p-3">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-inner bg-black">
                <img
                  src={SITE_CONFIG.COVER_IMAGE}
                  alt="There Is No Wall: The Manifestation Effect by Naveed Afzal official cover"
                  className="w-full h-auto object-contain block"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-zinc-300">
                <span className="font-serif-editorial text-sm">There Is No Wall by {SITE_CONFIG.AUTHOR_NAME}</span>
                <a
                  href={SITE_CONFIG.AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#e2c56a] hover:underline cursor-pointer"
                >
                  Buy for {SITE_CONFIG.PRICE_TEXT} →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Core Questions Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif-editorial text-center text-[#f7f5f0]">
          What Makes This Book Different From Conventional Advice?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-[#121620] border border-white/5 rounded-xl space-y-2">
            <div className="text-xs font-mono text-[#e2c56a]">01 · NO MAGICAL PROMISES</div>
            <p className="text-sm text-zinc-300">
              No guarantees of overnight wealth or lottery tickets. Grounded in cognitive awareness, self-concept, and deliberate action.
            </p>
          </div>

          <div className="p-5 bg-[#121620] border border-white/5 rounded-xl space-y-2">
            <div className="text-xs font-mono text-[#e2c56a]">02 · THE 5-STEP METHOD</div>
            <p className="text-sm text-zinc-300">
              Learn The No-Wall Method™ (See, Question, Release, Rebuild, Act) to systematically dissolve recurring self-sabotage.
            </p>
          </div>

          <div className="p-5 bg-[#121620] border border-white/5 rounded-xl space-y-2">
            <div className="text-xs font-mono text-[#e2c56a]">03 · 30-DAY PRACTICE</div>
            <p className="text-sm text-zinc-300">
              A structured daily inquiry journal with 15-minute daily prompts that anchor new behavior into your real life.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={onViewFullSite}
            className="text-xs font-mono text-zinc-400 hover:text-[#e2c56a] underline underline-offset-4 cursor-pointer"
          >
            Looking for full editorial chapters and author details? Explore the complete website →
          </button>
        </div>
      </section>

    </div>
  );
}
