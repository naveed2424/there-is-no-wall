import { Check, X } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export function SocialProofSection() {
  const objectiveFeatures = [
    {
      title: "Practical Exercises",
      desc: "Zero vague spiritual platitudes. Every chapter features grounded cognitive exercises you complete in minutes.",
    },
    {
      title: "30-Day Structure",
      desc: "A progressive 4-week roadmap ensuring steady emotional regulation, self-concept rebuilding, and action.",
    },
    {
      title: "Instant Amazon Kindle Delivery",
      desc: "Delivered immediately to your Kindle device, iPad, tablet, iPhone, Android phone, or Kindle Cloud Reader with 1-click.",
    },
    {
      title: "Reflection Prompts",
      desc: "Specific inquiry questions designed to pinpoint the exact origin of inherited personal limitations.",
    },
    {
      title: "The No-Wall Method™",
      desc: "A proprietary 5-step framework (See, Question, Release, Rebuild, Act) tested across real creative and career transitions.",
    },
    {
      title: "Designed for Self-Guided Exploration",
      desc: "No expensive masterminds or high-pressure coaching funnels required. You work at your own honest pace.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0c0e12] border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
            Objective Product Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#f7f5f0] font-normal leading-tight">
            Why Read This Book?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            We do not manufacture reviews or invent fake customer praise. Here are the concrete facts and
            architectural principles of what you receive inside.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectiveFeatures.map((feat, i) => (
            <div
              key={i}
              className="p-6 bg-[#121620] border border-white/5 rounded-xl space-y-3"
            >
              <div className="flex items-center gap-2 text-[#e2c56a]">
                <Check className="w-4 h-4 text-emerald-400" />
                <h3 className="font-serif-editorial text-lg text-[#f7f5f0]">
                  {feat.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Honest Comparison Table */}
        <div className="bg-[#10141d] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-serif-editorial text-[#f7f5f0]">
              The Core Difference in Approach
            </h3>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Comparing Superficial Trends vs. Grounded Self-Inquiry
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400 font-mono text-xs uppercase">
                  <th className="py-3 px-4">Approach Dimension</th>
                  <th className="py-3 px-4 text-zinc-500">Typical Manifestation Advice</th>
                  <th className="py-3 px-4 text-[#e2c56a]">There Is No Wall Framework</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Core Premise</td>
                  <td className="py-3.5 px-4 text-zinc-400">Thoughts magically alter external atoms</td>
                  <td className="py-3.5 px-4 text-zinc-200">Thoughts govern self-concept, which pilots behavior</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Negative Emotions</td>
                  <td className="py-3.5 px-4 text-zinc-400">Repress them ("low vibration")</td>
                  <td className="py-3.5 px-4 text-zinc-200">Examine them neutrally as valuable cognitive data</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Role of Action</td>
                  <td className="py-3.5 px-4 text-zinc-400">Secondary or optional ("just surrender")</td>
                  <td className="py-3.5 px-4 text-zinc-200">Essential; intentional action grounds new self-concepts</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Promises Made</td>
                  <td className="py-3.5 px-4 text-zinc-400">Instant wealth, soulmates, lottery wins</td>
                  <td className="py-3.5 px-4 text-zinc-200">Honest self-awareness, clarity, and daily progress</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
