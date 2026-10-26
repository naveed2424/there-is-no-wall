import { useState } from "react";
import { ArrowDown, Sparkles, BookOpen, Smartphone, Tablet, Check } from "lucide-react";
import { SITE_CONFIG, trackEvent } from "../config/siteConfig";

interface HeroProps {
  onOpenPurchase: () => void;
  onOpenPreview: () => void;
  onScrollToMethod: () => void;
  onScrollToWallFinder: () => void;
}

export function Hero({
  onOpenPurchase,
  onOpenPreview,
  onScrollToMethod,
  onScrollToWallFinder,
}: HeroProps) {
  // Support easy A/B Headline toggle for optimization testing
  const [activeHeadlineVariant, setActiveHeadlineVariant] = useState<"A" | "B">("A");

  const currentHeadline =
    activeHeadlineVariant === "A" ? SITE_CONFIG.HERO_HEADLINE_A : SITE_CONFIG.HERO_HEADLINE_B;

  const handlePurchaseClick = () => {
    trackEvent("book_cta_click", { location: "hero_primary", variant: activeHeadlineVariant });
    onOpenPurchase();
  };

  const handleMethodClick = () => {
    trackEvent("method_view", { source: "hero_secondary" });
    onScrollToMethod();
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-white/5">
      {/* Subtle radial atmosphere glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(226, 197, 106, 0.15) 0%, rgba(14, 16, 19, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle architectural hairline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unboxed editorial kicker with subtle A/B toggle affordance */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 font-mono">
            <span>Mindset & Limiting Beliefs</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Digital Ebook & Framework</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-[#e2c56a]">By {SITE_CONFIG.AUTHOR_NAME}</span>
          </div>

          {/* Quick Headline A/B switcher for testing cold traffic variants */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 bg-white/5 px-2.5 py-1 rounded border border-white/5">
            <span>Headline Variant:</span>
            <button
              onClick={() => setActiveHeadlineVariant("A")}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                activeHeadlineVariant === "A" ? "bg-[#e2c56a] text-black font-semibold" : "hover:text-white"
              }`}
            >
              A (Core)
            </button>
            <button
              onClick={() => setActiveHeadlineVariant("B")}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                activeHeadlineVariant === "B" ? "bg-[#e2c56a] text-black font-semibold" : "hover:text-white"
              }`}
            >
              B (Curiosity)
            </button>
          </div>
        </div>

        {/* 2-Column Desktop Grid with balanced spatial alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif-editorial leading-[1.12] text-[#f7f5f0] font-normal tracking-tight [text-wrap:balance]">
              {activeHeadlineVariant === "A" ? (
                <>
                  What if the biggest thing standing between you and the life you want...{" "}
                  <span className="italic text-[#e2c56a] font-normal">isn't actually there?</span>
                </>
              ) : (
                <>
                  You may not need to manifest harder.{" "}
                  <span className="italic text-[#e2c56a] font-normal">You may need to see the wall.</span>
                </>
              )}
            </h1>

            {/* Core subheadline copy */}
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
              <p className="text-zinc-400">
                You've tried affirmations. You've visualized. You've set intentions.
              </p>
              <p>
                But sometimes the hardest barrier to change isn't outside you. It's the invisible
                story you have learned to believe about yourself and what is actually possible.
              </p>
            </div>

            {/* Micro-trust line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e2c56a]" />
              <p className="italic font-serif-editorial text-base text-zinc-300">
                {SITE_CONFIG.MICRO_TRUST_LINE}
              </p>
            </div>

            {/* 30-Day Launch Price Callout */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#e2c56a]/10 border border-[#e2c56a]/25 text-xs text-[#e2c56a] font-mono">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Launch Offer: Only <strong>{SITE_CONFIG.PRICE_TEXT}</strong> on Amazon Kindle for 30 days</span>
            </div>

            {/* Primary Action Button Cluster */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={SITE_CONFIG.AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("book_cta_click", { location: "hero_primary" })}
                className="px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] transition-all rounded-md shadow-[0_0_25px_rgba(226,197,106,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>GET ON AMAZON KINDLE</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/10 font-bold">{SITE_CONFIG.PRICE_TEXT}</span>
              </a>

              <button
                onClick={handleMethodClick}
                className="px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#f7f5f0] hover:text-[#0c0e12] bg-white/5 hover:bg-[#f7f5f0] border border-white/15 hover:border-white transition-all rounded-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{SITE_CONFIG.CTA_TEXT_B}</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Format assurance markers (Unboxed metadata) */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Tablet className="w-3.5 h-3.5 text-[#e2c56a]" />
                Kindle & Free Kindle App (iOS, Android, Mac, PC)
              </span>
              <span aria-hidden="true" className="text-zinc-700">/</span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#e2c56a]" />
                Instant 1-Click Amazon Delivery
              </span>
            </div>
          </div>

          {/* Right Column: Real Book Cover in Digital Reading Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none group flex flex-col items-center">
              
              {/* Subtle back illumination glow matching book's emerald-gold light */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-[#d4af37]/20 to-transparent rounded-2xl blur-2xl opacity-60 group-hover:opacity-85 transition duration-700" />
              
              {/* Digital E-Reader / Tablet Showcase with Real Book Cover */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0e1218] p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.01] max-w-[340px]">
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-inner bg-black">
                  <img
                    src={SITE_CONFIG.COVER_IMAGE}
                    alt="There Is No Wall: The Manifestation Effect by Naveed Afzal official cover"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle glass reflection sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 pointer-events-none" />
                </div>

                {/* Digital Edition Ribbon */}
                <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-serif-editorial text-sm font-semibold tracking-wide text-[#f7f5f0] block">
                      Kindle Edition
                    </span>
                    <span className="text-[11px] font-mono text-[#e2c56a]">{SITE_CONFIG.PRICE_TEXT} on Amazon.fr</span>
                  </div>
                  <a
                    href={SITE_CONFIG.AMAZON_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider bg-white/15 hover:bg-[#e2c56a] hover:text-black text-[#f7f5f0] border border-white/20 rounded transition-colors cursor-pointer"
                  >
                    View on Amazon
                  </a>
                </div>
              </div>

              {/* Quick teaser button to micro-experience */}
              <div className="mt-4 text-center">
                <button
                  onClick={onScrollToWallFinder}
                  className="text-xs text-zinc-400 hover:text-[#e2c56a] transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Unsure what your invisible wall is? Take the 60-second reflection →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
