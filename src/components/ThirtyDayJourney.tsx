import { useState } from "react";
import { Calendar, CheckCircle2, ChevronRight, Compass, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

interface ThirtyDayJourneyProps {
  onOpenPurchase: () => void;
}

export function ThirtyDayJourney({ onOpenPurchase }: ThirtyDayJourneyProps) {
  const [selectedWeek, setSelectedWeek] = useState<number>(0);

  const weeks = [
    {
      weekNum: "Week 01",
      theme: "SEE",
      days: "Days 01–07",
      tagline: "Become aware of the beliefs and patterns influencing your decisions.",
      description:
        "You begin not by forcing change, but by developing ruthless, neutral awareness. During Week 1, you track the automatic thoughts that arise when you think of your goals, noting where hesitation, self-dismissal, or unworthiness silently intervene.",
      dailyPractices: [
        "Day 1: The Desire Inventory — Naming what you actually want without modesty",
        "Day 2: Mapping Internal Hesitation — Catching the first reflex of resistance",
        "Day 3: The 'Who Said That?' Audit — Identifying the origins of your hesitation",
        "Day 4: Somatic Wall Tracking — Where does limitation show up in the body?",
        "Day 5: The Permission Paradox — Why you feel you need approval to succeed",
        "Day 6: Safe vs. Possible — Why your brain defends familiar limitation",
        "Day 7: The First Unmasking — Reviewing Week 1's patterns with compassion",
      ],
      quote: "You cannot dismantle a structure you refuse to acknowledge exists.",
    },
    {
      weekNum: "Week 02",
      theme: "QUESTION",
      days: "Days 08–14",
      tagline: "Challenge assumptions and examine where they came from.",
      description:
        "Beliefs survive only because they are rarely put on trial. In Week 2, you cross-examine the stories you've inherited. You learn the distinction between an unalterable biological fact and a repetitive cognitive loop.",
      dailyPractices: [
        "Day 8: The Evidence Courtroom — What factual proof supports this limitation?",
        "Day 9: Untangling Invalidation — How childhood or peer scripts became internal laws",
        "Day 10: Inversion Inquiries — What if the exact opposite of this belief were true?",
        "Day 11: The Cost of Safety — What is staying small currently costing your life?",
        "Day 12: Dissolving the Sunk Cost Fallacy — Releasing identities you've outgrown",
        "Day 13: The Freedom of Failure — Re-defining what an imperfect attempt means",
        "Day 14: The Boundary Shift — Deciding what you will no longer tolerate internally",
      ],
      quote: "An assumption questioned loses half its weight in an afternoon.",
    },
    {
      weekNum: "Week 03",
      theme: "REBUILD",
      days: "Days 15–21",
      tagline: "Develop a more intentional self-concept and internal narrative.",
      description:
        "Manifestation is not begging the universe; it is stepping into congruence. Week 3 focuses on architecting your new self-concept: how you talk to yourself, how you carry your posture, and how you naturally expect events to unfold.",
      dailyPractices: [
        "Day 15: The Clean Slate Identity — Writing the baseline narrative of your future self",
        "Day 16: Sensory Visualization — Mental rehearsal without anxious attachment",
        "Day 17: Natural Expectancy — Shifting from 'hoping' to 'assuming inevitable progress'",
        "Day 18: Calibrating the Nervous System — Regulating when expanding feels scary",
        "Day 19: Congruent Language — Eliminating self-sabotaging speech patterns",
        "Day 20: The Silent Standard — How does someone with your goal behave at 9 AM?",
        "Day 21: Anchor Integration — Setting physical and environmental reminders",
      ],
      quote: "You don't get what you wish for. You embody what you believe you deserve.",
    },
    {
      weekNum: "Week 04",
      theme: "ACT",
      days: "Days 22–30",
      tagline: "Turn your new perspective into practical behavior.",
      description:
        "The journey culminates in real-world experimentation. No more hiding behind endless preparation or spiritual bypassing. You execute courageous, grounded micro-actions that prove to your nervous system that the wall is gone.",
      dailyPractices: [
        "Day 22: The First Micro-Risk — Taking the action you previously delayed",
        "Day 23: Holding Congruence in Public — Speaking your truth without apology",
        "Day 24: Meeting Resistance with Curiosity — What to do when old walls flare up",
        "Day 25: Closing Old Open Loops — Ending habits that tether you to the past",
        "Day 26: Generous Creation — Putting value into the world before being asked",
        "Day 27: Navigating Inevitable Setbacks — Keeping self-concept steady during turbulence",
        "Day 28: Compounding Momentum — Structuring daily habits for the next 6 months",
        "Day 29: The Sovereign Declaration — Solidifying your independent baseline",
        "Day 30: There Is No Wall — The final integration and lifelong posture",
      ],
      quote: "Action is not the cost of transformation; it is transformation made visible.",
    },
  ];

  return (
    <section id="thirty-day-journey" className="py-20 md:py-32 bg-[#090b0e] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
            Structured Daily Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#f7f5f0] font-normal leading-tight">
            30 Days. One Wall at a Time.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            A self-paced, step-by-step 30-day curriculum with daily morning prompts, midday mindfulness checks,
            and evening reflection questions.
          </p>
        </div>

        {/* 4 Weekly Stage Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {weeks.map((w, index) => (
            <button
              key={index}
              onClick={() => setSelectedWeek(index)}
              className={`p-5 rounded-xl text-left transition-all border cursor-pointer ${
                selectedWeek === index
                  ? "bg-[#141822] border-[#e2c56a]/40 shadow-lg"
                  : "bg-white/[0.02] border-white/5 hover:border-white/15 text-zinc-400"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
                <span className={selectedWeek === index ? "text-[#e2c56a]" : ""}>{w.weekNum}</span>
                <span>{w.days}</span>
              </div>
              <div className="text-2xl font-serif-editorial text-[#f7f5f0] tracking-wide mb-1">
                {w.theme}
              </div>
              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                {w.tagline}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Week Detailed Breakdown */}
        <div className="p-8 sm:p-10 bg-[#12161f] border border-white/10 rounded-2xl shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
                {weeks[selectedWeek].weekNum} ({weeks[selectedWeek].days})
              </span>
              <h3 className="text-3xl font-serif-editorial text-[#f7f5f0]">
                Stage: {weeks[selectedWeek].theme}
              </h3>
            </div>
            <p className="text-sm font-serif-editorial italic text-zinc-300 max-w-md border-l border-[#e2c56a]/30 pl-4">
              "{weeks[selectedWeek].quote}"
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            {weeks[selectedWeek].description}
          </p>

          {/* Daily Practices Grid */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Curriculum Breakdown ({weeks[selectedWeek].days})
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {weeks[selectedWeek].dailyPractices.map((day, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-black/30 border border-white/5 rounded-lg text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2c56a] shrink-0 mt-1.5" />
                  <span>{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Philosophy from Brief */}
          <div className="pt-6 border-t border-white/5 text-center space-y-2">
            <p className="font-serif-editorial text-lg sm:text-xl text-[#f7f5f0] italic">
              "The goal isn't to become a completely different person overnight.
              It's to become more conscious of the person you're already becoming."
            </p>
            <p className="text-xs text-zinc-500 font-mono">
              From There Is No Wall · Chapter 4: The 30-Day Arc
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
