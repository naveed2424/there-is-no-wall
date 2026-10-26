import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "../config/siteConfig";

interface NoWallMethodProps {
  onOpenPurchase: () => void;
}

export function NoWallMethod({ onOpenPurchase }: NoWallMethodProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "SEE",
      subtitle: "Awareness & Detection",
      summary:
        "Recognize the invisible belief, assumption, fear, or identity pattern influencing the way you see possibility.",
      detail:
        "Before any wall can be dissolved, it must be witnessed. Most mental barriers operate in complete invisibility—not because they are complex, but because they have been mistaken for objective reality. In this stage, you learn to spot the silent premises governing your choices.",
      prompt: "What am I assuming is a fixed law about myself that might merely be a rehearsed thought?",
    },
    {
      num: "02",
      title: "QUESTION",
      subtitle: "Inquiry & Investigation",
      summary:
        "Examine the belief instead of automatically treating it as truth.",
      detail:
        "Inquiry is the solvent of illusion. Here, we submit the limiting assumption to rigorous, compassionate cross-examination. Who handed you this story? What evidence actually supports it? What does holding this belief cost you on a daily basis?",
      prompt: "If this limitation were entirely false, what is the very next action I would take?",
    },
    {
      num: "03",
      title: "RELEASE",
      subtitle: "Detachment & Space",
      summary:
        "Create distance from old stories that no longer serve your goals.",
      detail:
        "You do not need to fight or violently destroy old mental models; you simply create space between the observing mind and the narrative. As you stop feeding emotional certainty to old fears, their gravitational pull rapidly dissolves.",
      prompt: "Can I allow this thought to exist in my awareness without letting it pilot my decisions?",
    },
    {
      num: "04",
      title: "REBUILD",
      subtitle: "Self-Concept Architecture",
      summary:
        "Develop a more intentional relationship with identity, possibility, and self-concept.",
      detail:
        "Manifestation in its most honest psychological form is self-concept alignment. You do not attract what you wish for; you act from who you believe you are. Here you architect a grounded, calm self-identity that makes your aspiration feel natural rather than unattainable.",
      prompt: "Who am I when I no longer need to defend my old limitations?",
    },
    {
      num: "05",
      title: "ACT",
      subtitle: "Behavioral Grounding",
      summary:
        "Translate insight into real-world behavior.",
      detail:
        "Insight without behavior is merely intellectual entertainment. The final step bridges internal liberation with tangible physical movement: disciplined, calm, non-frantic steps that register with both the nervous system and external reality.",
      prompt: "What is the single most honest, courageous micro-action available to me in the next 24 hours?",
    },
  ];

  return (
    <section id="the-method" className="py-20 md:py-32 bg-[#090b0e] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
            <span>The Framework</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>5 Progressive Stages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#f7f5f0] font-normal leading-tight">
            The No-Wall Method™
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            A five-step framework for moving from unconscious limitation to conscious action.
            Rooted in cognitive clarity, intentional self-concept, and real-world behavior.
          </p>
        </div>

        {/* Desktop Horizontal Step Navigation Bar */}
        <div className="hidden lg:grid grid-cols-5 gap-3 border-b border-white/10 pb-4">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl text-left transition-all cursor-pointer ${
                activeStep === idx
                  ? "bg-[#141822] border border-[#e2c56a]/40 shadow-lg"
                  : "bg-white/[0.02] border border-white/5 hover:border-white/15 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#e2c56a]">{step.num}</span>
                {activeStep === idx && <span className="w-1.5 h-1.5 rounded-full bg-[#e2c56a]" />}
              </div>
              <div className="font-serif-editorial text-xl text-[#f7f5f0] tracking-wide mb-1">
                {step.title}
              </div>
              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                {step.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Breakdown with Visual Metaphor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Stage Detail */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 bg-[#12161f] border border-white/10 rounded-2xl shadow-xl space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#e2c56a] px-2.5 py-1 bg-white/5 rounded border border-white/10">
                    STAGE {steps[activeStep].num}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {steps[activeStep].subtitle}
                  </span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">Step {activeStep + 1} of 5</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif-editorial text-[#f7f5f0] tracking-wide">
                {steps[activeStep].title}
              </h3>

              <p className="text-lg text-zinc-200 font-serif-editorial leading-relaxed border-l-2 border-[#e2c56a]/60 pl-4 py-1 italic">
                "{steps[activeStep].summary}"
              </p>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                {steps[activeStep].detail}
              </p>

              {/* Inquiry Prompt Box */}
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#e2c56a]">
                  Core Inquiry Prompt
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-mono italic">
                  {steps[activeStep].prompt}
                </p>
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      aria-label={`Jump to stage ${i + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeStep === i ? "w-8 bg-[#e2c56a]" : "w-2 bg-white/15 hover:bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {activeStep > 0 && (
                    <button
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="px-3 py-1.5 text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
                    >
                      Previous
                    </button>
                  )}
                  {activeStep < steps.length - 1 ? (
                    <button
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#f7f5f0] hover:bg-[#e2c56a] rounded transition-colors cursor-pointer"
                    >
                      Next Stage
                    </button>
                  ) : (
                    <button
                      onClick={onOpenPurchase}
                      className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#e2c56a] hover:bg-[#ebd58b] rounded transition-colors cursor-pointer"
                    >
                      Get the Full Guide
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Architectural Visual Metaphor */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group bg-[#11141b]">
              <img
                src="/src/assets/images/invisible_wall_concept_light_1793048075187.jpg"
                alt="A person walking through a modern minimalist concrete corridor toward expansive sunlight streaming through glass opening, symbolizing breakthrough"
                className="w-full h-80 lg:h-[420px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-mono text-[#e2c56a] uppercase tracking-wider">
                  The Metaphor
                </span>
                <p className="font-serif-editorial text-lg text-white">
                  Confinement → Awareness → Possibility → Action
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  The barrier is invisible only until you stop assuming it has the power to hold you.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile View: Stacked Cards Accordion Fallback */}
        <div className="lg:hidden space-y-4 pt-6">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            All 5 Stages at a Glance
          </div>
          <div className="grid grid-cols-1 gap-3">
            {steps.map((st, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === i
                    ? "bg-[#141822] border-[#e2c56a]/40"
                    : "bg-white/[0.02] border-white/5"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs text-[#e2c56a]">{st.num}. {st.title}</span>
                  <span className="text-[11px] text-zinc-500 font-mono">{st.subtitle}</span>
                </div>
                <p className="text-xs text-zinc-300">{st.summary}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
