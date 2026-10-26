import { ArrowRight, Check, BookOpen, Compass, Sparkles, Brain, Target, Shield } from "lucide-react";
import { SITE_CONFIG, trackEvent } from "../config/siteConfig";

interface BookPresentationProps {
  onOpenPurchase: () => void;
  onOpenPreview: () => void;
}

export function BookPresentation({ onOpenPurchase, onOpenPreview }: BookPresentationProps) {
  const explorationTopics = [
    {
      title: "Invisible Limiting Beliefs",
      desc: "Spot the silent scripts governing your expectations before they dictate your behavior.",
    },
    {
      title: "Self-Concept & Identity",
      desc: "Discover why human beings never act consistently against who they fundamentally believe they are.",
    },
    {
      title: "The Psychology of Possibility",
      desc: "How expanding cognitive aperture shifts what your brain flags as actionable opportunities.",
    },
    {
      title: "Desire vs. Self-Permission",
      desc: "Why wanting an outcome and believing you have permission to pursue it are two entirely distinct mental states.",
    },
    {
      title: "Recognizing Internal Resistance",
      desc: "Read somatic and mental friction as information rather than a sign to abandon course.",
    },
    {
      title: "Questioning Inherited Assumptions",
      desc: "Untangle cultural, familial, and peer limitations from your genuine sovereign aspirations.",
    },
    {
      title: "Visualization with Intention",
      desc: "Replace daydreaming with precise mental rehearsal that primes action and calms nervous tension.",
    },
    {
      title: "Reframing Personal Narratives",
      desc: "Shift your internal autobiography from past-defined inertia to forward-oriented self-trust.",
    },
    {
      title: "Moving from Awareness into Action",
      desc: "Close the execution gap with concrete behavioral experiments in the real world.",
    },
    {
      title: "A Structured 30-Day Practice",
      desc: "A progressive day-by-day companion journal with reflective prompts and milestone check-ins.",
    },
  ];

  const handleCta = () => {
    trackEvent("book_cta_click", { location: "book_presentation" });
    onOpenPurchase();
  };

  return (
    <section id="the-book" className="py-20 md:py-32 bg-[#0c0e12] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Core Book Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
              <span>The Digital Ebook</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Available Immediately</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#f7f5f0] font-normal leading-tight">
              There Is No Wall
            </h2>

            <p className="text-lg sm:text-xl text-[#e2c56a] font-serif-editorial italic">
              A practical journey from invisible limitations to conscious possibility.
            </p>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <p>
                <em className="text-white font-medium not-italic">There Is No Wall</em> explores the invisible beliefs, identities,
                assumptions, and internal narratives that can influence the way we approach the life we want.
              </p>
              <p className="text-zinc-400">
                Instead of asking you to simply "think positive" or expect supernatural intervention, the book
                invites you to look underneath the desire:
              </p>
            </div>

            {/* The 5 Deep Reflective Inquiries from brief */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "What do you believe about yourself?",
                "What do you assume is possible?",
                "Which stories are actually yours?",
                "Which ones did you inherit?",
                "What changes when you stop treating internal limitations as permanent truths?",
              ].map((question, i) => (
                <div
                  key={i}
                  className={`p-3.5 bg-[#12151d] border border-white/5 rounded-lg text-zinc-300 font-serif-editorial text-base italic flex items-start gap-2.5 ${
                    i === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="text-[#e2c56a] font-mono text-xs not-italic shrink-0 pt-0.5">0{i + 1}.</span>
                  <span>{question}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-400 pt-2 leading-relaxed">
              The book seamlessly combines honest self-reflection, practical cognitive exercises, mindset work,
              grounded visualization, journaling prompts, and a structured 30-day process.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={SITE_CONFIG.AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("book_cta_click", { location: "book_presentation_primary" })}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] transition-all rounded-md shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>GET ON AMAZON KINDLE</span>
                <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-black/10">({SITE_CONFIG.PRICE_TEXT})</span>
              </a>

              <button
                onClick={onOpenPreview}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#e2c56a]" />
                <span>Read Sample Pages</span>
              </button>
            </div>
          </div>

          {/* Right Column: Book Cover Showcase & Pricing Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#121620] border border-white/10 rounded-2xl shadow-xl space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#e2c56a]">
                  <Sparkles className="w-4 h-4" />
                  <span>30-Day Launch Price</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  Exclusive on Amazon
                </span>
              </div>

              {/* Cover & Title Lockup */}
              <div className="flex items-center gap-5">
                <img
                  src={SITE_CONFIG.COVER_IMAGE}
                  alt="There Is No Wall by Naveed Afzal official cover"
                  className="w-24 h-36 object-contain rounded-lg border border-white/15 shadow-xl bg-black shrink-0"
                />
                <div className="space-y-1">
                  <h3 className="text-2xl font-serif-editorial text-[#f7f5f0]">
                    There Is No Wall
                  </h3>
                  <p className="text-xs text-[#e2c56a] font-serif-editorial italic">
                    {SITE_CONFIG.BOOK_SUBTITLE}
                  </p>
                  <div className="pt-2">
                    <span className="text-2xl font-serif-editorial text-white font-bold">
                      {SITE_CONFIG.PRICE_TEXT}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 block">Amazon Kindle Price</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 text-xs font-mono text-zinc-300 border-t border-white/5">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Available on Amazon Kindle & free Kindle app (iOS/Android/Web)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Grounded in self-concept, belief inquiry, and deliberate action</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Full 30-Day step-by-step reflection protocol included</span>
                </div>
              </div>

              <a
                href={SITE_CONFIG.AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("book_cta_click", { location: "book_presentation_card" })}
                className="w-full py-3 px-4 bg-[#e2c56a] hover:bg-[#ebd58b] text-[#0c0e12] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow cursor-pointer block text-center"
              >
                <span>Order on Amazon Kindle ({SITE_CONFIG.PRICE_TEXT})</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>
          </div>

        </div>

        {/* Section 11: What the Reader Will Explore (10-Card Premium Grid) */}
        <div className="space-y-10 pt-10 border-t border-white/5">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
              Comprehensive Curriculum
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-editorial text-[#f7f5f0] font-normal">
              What You Will Actually Explore
            </h3>
            <p className="text-sm text-zinc-400">
              Ten structured pillars bridging subconscious self-concepts with conscious, practical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {explorationTopics.map((topic, index) => (
              <div
                key={index}
                className="p-6 bg-[#11141b] border border-white/5 hover:border-white/15 rounded-xl transition-all duration-300 space-y-3 group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span className="text-[#e2c56a]">PILLAR {index < 9 ? `0${index + 1}` : index + 1}</span>
                  <Check className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#e2c56a] transition-colors" />
                </div>
                <h4 className="text-lg font-serif-editorial text-[#f7f5f0] group-hover:text-[#e2c56a] transition-colors">
                  {topic.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <button
              onClick={handleCta}
              className="px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] transition-all rounded-md shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>BEGIN YOUR JOURNEY · {SITE_CONFIG.PRICE_TEXT}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
