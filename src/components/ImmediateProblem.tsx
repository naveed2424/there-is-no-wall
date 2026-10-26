import { ArrowDown, HelpCircle, ShieldAlert } from "lucide-react";

interface ImmediateProblemProps {
  onScrollToWallFinder: () => void;
}

export function ImmediateProblem({ onScrollToWallFinder }: ImmediateProblemProps) {
  const recurringDoubts = [
    "\"I'm not ready.\"",
    "\"That's not for people like me.\"",
    "\"I'll probably fail.\"",
    "\"Maybe I'm asking for too much.\"",
    "\"What if it doesn't happen?\"",
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0a0c0f] border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Section Kicker */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
            The Cognitive Gap
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-editorial text-[#f7f5f0] font-normal leading-tight [text-wrap:balance]">
            Maybe you don't need another manifestation technique.
          </h2>
        </div>

        {/* Narrative Flow */}
        <div className="space-y-8 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
          <p className="text-zinc-400">
            You've probably heard it before:
          </p>

          {/* Conventional Advice List */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {["Think positive.", "Visualize your future.", "Repeat affirmations.", "Believe harder."].map(
              (phrase, i) => (
                <div
                  key={i}
                  className="py-3 px-2 bg-white/[0.02] border border-white/5 rounded text-xs sm:text-sm font-mono text-zinc-400"
                >
                  {phrase}
                </div>
              )
            )}
          </div>

          <p className="pt-2">
            But what happens when the affirmations finish, and in the quiet of your mind, another voice
            whispers something very different?
          </p>

          {/* Internal Doubts Callout Grid */}
          <div className="p-6 sm:p-8 bg-[#12151c] border border-white/10 rounded-xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              The Five Invisible Whispers
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {recurringDoubts.map((doubt, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-black/30 border border-white/5 rounded-lg text-zinc-300 font-serif-editorial text-lg italic flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                  <span>{doubt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Core Epiphany */}
          <div className="space-y-4 pt-2">
            <p className="text-lg sm:text-xl text-[#f7f5f0] font-serif-editorial leading-relaxed">
              The problem may not be that you don't want something badly enough.
            </p>
            <p className="text-zinc-400">
              The real problem is almost always the invisible assumptions, inherited narratives, and
              unconscious self-concepts sitting directly underneath the desire.
            </p>
            <p className="text-zinc-400">
              That is where the idea of the wall begins.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 text-center">
          <button
            onClick={onScrollToWallFinder}
            className="px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] transition-all rounded-md shadow-md hover:shadow-[0_0_25px_rgba(226,197,106,0.2)] inline-flex items-center gap-2 cursor-pointer"
          >
            <span>FIND YOUR WALL</span>
            <ArrowDown className="w-4 h-4" />
          </button>
          <span className="block mt-3 text-xs text-zinc-500 font-mono">
            60-second interactive reflection · No sign-up required
          </span>
        </div>

      </div>
    </section>
  );
}
