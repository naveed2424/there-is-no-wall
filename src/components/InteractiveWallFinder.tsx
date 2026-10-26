import { useState } from "react";
import { ArrowRight, Check, RotateCcw, Copy, Sparkles, ShieldCheck } from "lucide-react";
import { trackEvent } from "../config/siteConfig";

interface InteractiveWallFinderProps {
  onExploreMethod: () => void;
}

export function InteractiveWallFinder({ onExploreMethod }: InteractiveWallFinderProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const [answers, setAnswers] = useState({
    q1_want: "",
    q2_stopping: "",
    q3_attempt: "",
    q4_belief: "",
    q5_isFact: "story", // "fact" | "story"
  });

  // Helpful inspiration prompts to reduce cognitive friction
  const quickSuggestions = {
    q1: [
      "Transition into meaningful creative work",
      "Scale my business without burnout",
      "Step into a confident leadership role",
      "Achieve lasting financial autonomy",
    ],
    q2: [
      "I don't have enough time or capital",
      "I am afraid of being judged or exposed",
      "Other people are far more qualified",
      "It feels too risky to leave familiarity",
    ],
    q3: [
      "Launch the bold project I've kept hidden",
      "Have an honest conversation about what I need",
      "Commit fully without hedging my bets",
      "Allow myself to be seen as a beginner",
    ],
    q4: [
      "\"I have to be completely certain before moving.\"",
      "\"Success is only for naturally gifted people.\"",
      "\"If I fail publicly, my worth diminishes.\"",
      "\"I am someone who starts, not someone who finishes.\"",
    ],
  };

  const handleStart = () => {
    setCurrentStep(1);
    trackEvent("interactive_exercise_start");
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(6); // Completed state
      trackEvent("interactive_exercise_complete", {
        q5_classification: answers.q5_isFact,
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setAnswers({
      q1_want: "",
      q2_stopping: "",
      q3_attempt: "",
      q4_belief: "",
      q5_isFact: "story",
    });
    setCurrentStep(0);
  };

  const handleCopy = () => {
    const text = `THERE IS NO WALL — Self-Reflection Summary:
1. What I want: ${answers.q1_want || "Not specified"}
2. What I believe is stopping me: ${answers.q2_stopping || "Not specified"}
3. What I would attempt if failure couldn't define me: ${answers.q3_attempt || "Not specified"}
4. The underlying belief about myself: ${answers.q4_belief || "Not specified"}
5. Realized as: ${answers.q5_isFact === "fact" ? "Assumed to be a permanent fact" : "A story I have learned to repeat"}
— Completed on There Is No Wall (https://nowall.netlify.app)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="interactive-wall-finder" className="py-20 md:py-32 bg-[#0c0e12] border-b border-white/5 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Micro-Interactive Experience · 60 Seconds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#f7f5f0] font-normal">
            Find Your Invisible Wall
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Take 60 seconds. Think of one thing you genuinely want. Let's see what is actually sitting
            between you and that desire.
          </p>
        </div>

        {/* The Interactive Container */}
        <div className="bg-[#12161f] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Progress Indicator */}
          {currentStep >= 1 && currentStep <= 5 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                <span>QUESTION {currentStep} OF 5</span>
                <span>{Math.round((currentStep / 5) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-[#e2c56a] h-full transition-all duration-300"
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 0: Introduction Card */}
          {currentStep === 0 && (
            <div className="space-y-6 text-center py-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e2c56a] font-serif-editorial text-xl">
                01
              </div>
              <div className="space-y-3 max-w-md mx-auto">
                <h3 className="text-xl font-serif-editorial text-[#f7f5f0]">
                  Ready to examine the invisible barrier?
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Most people spend years pushing harder against a wall that exists only in their
                  unquestioned self-concept. Five questions will make it visible.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleStart}
                  className="px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] transition-all rounded-md shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>BEGIN 60-SECOND EXERCISE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-4 flex items-center justify-center gap-2 text-xs text-zinc-500 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-500/70" />
                <span>100% private. Processed locally in your browser.</span>
              </div>
            </div>
          )}

          {/* STEP 1: What do I want? */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#e2c56a]">Question 1</span>
                <h3 className="text-2xl font-serif-editorial text-[#f7f5f0]">
                  What do I genuinely want?
                </h3>
                <p className="text-xs text-zinc-400">
                  Name one specific ambition, life shift, or outcome you have been carrying inside.
                </p>
              </div>

              <input
                type="text"
                value={answers.q1_want}
                onChange={(e) => setAnswers({ ...answers, q1_want: e.target.value })}
                placeholder="e.g. Leave my corporate job to publish my writing full-time"
                className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-lg text-sm text-[#f7f5f0] placeholder:text-zinc-600 focus:outline-none focus:border-[#e2c56a] transition-colors"
                autoFocus
              />

              {/* Suggestions */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-zinc-500">Common Examples:</span>
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.q1.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setAnswers({ ...answers, q1_want: item })}
                      className="text-xs px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-zinc-300 rounded border border-white/5 text-left transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={handleNext}
                  disabled={!answers.q1_want.trim()}
                  className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] disabled:opacity-40 transition-all rounded-md flex items-center gap-2 cursor-pointer"
                >
                  <span>NEXT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: What do I believe is stopping me? */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#e2c56a]">Question 2</span>
                <h3 className="text-2xl font-serif-editorial text-[#f7f5f0]">
                  What do I believe is stopping me?
                </h3>
                <p className="text-xs text-zinc-400">
                  What is the primary external or practical obstacle your mind immediately points to?
                </p>
              </div>

              <input
                type="text"
                value={answers.q2_stopping}
                onChange={(e) => setAnswers({ ...answers, q2_stopping: e.target.value })}
                placeholder="e.g. Financial instability and lack of guaranteed safety"
                className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-lg text-sm text-[#f7f5f0] placeholder:text-zinc-600 focus:outline-none focus:border-[#e2c56a] transition-colors"
                autoFocus
              />

              <div className="space-y-2">
                <span className="text-[11px] font-mono text-zinc-500">Common Perceived Obstacles:</span>
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.q2.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setAnswers({ ...answers, q2_stopping: item })}
                      className="text-xs px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-zinc-300 rounded border border-white/5 text-left transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!answers.q2_stopping.trim()}
                  className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] disabled:opacity-40 transition-all rounded-md flex items-center gap-2 cursor-pointer"
                >
                  <span>NEXT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: What would I attempt if I knew failure could not define me? */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#e2c56a]">Question 3</span>
                <h3 className="text-2xl font-serif-editorial text-[#f7f5f0]">
                  What would I attempt if I knew failure could not define me?
                </h3>
                <p className="text-xs text-zinc-400">
                  Strip away the fear of reputational loss or self-judgment. What would you do tomorrow?
                </p>
              </div>

              <input
                type="text"
                value={answers.q3_attempt}
                onChange={(e) => setAnswers({ ...answers, q3_attempt: e.target.value })}
                placeholder="e.g. Put my manuscript directly in front of editors without apologizing"
                className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-lg text-sm text-[#f7f5f0] placeholder:text-zinc-600 focus:outline-none focus:border-[#e2c56a] transition-colors"
                autoFocus
              />

              <div className="space-y-2">
                <span className="text-[11px] font-mono text-zinc-500">Common Intentions:</span>
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.q3.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setAnswers({ ...answers, q3_attempt: item })}
                      className="text-xs px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-zinc-300 rounded border border-white/5 text-left transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!answers.q3_attempt.trim()}
                  className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] disabled:opacity-40 transition-all rounded-md flex items-center gap-2 cursor-pointer"
                >
                  <span>NEXT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: What belief about myself appears underneath my answer? */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#e2c56a]">Question 4</span>
                <h3 className="text-2xl font-serif-editorial text-[#f7f5f0]">
                  What belief about myself appears underneath my answer?
                </h3>
                <p className="text-xs text-zinc-400">
                  Notice the silent premise: What assumption must be active in your identity for you
                  to hesitate?
                </p>
              </div>

              <input
                type="text"
                value={answers.q4_belief}
                onChange={(e) => setAnswers({ ...answers, q4_belief: e.target.value })}
                placeholder="e.g. If I don't achieve immediate perfection, I am an imposter"
                className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-lg text-sm text-[#f7f5f0] placeholder:text-zinc-600 focus:outline-none focus:border-[#e2c56a] transition-colors"
                autoFocus
              />

              <div className="space-y-2">
                <span className="text-[11px] font-mono text-zinc-500">Common Hidden Beliefs:</span>
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.q4.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setAnswers({ ...answers, q4_belief: item })}
                      className="text-xs px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-zinc-300 rounded border border-white/5 text-left transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!answers.q4_belief.trim()}
                  className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] disabled:opacity-40 transition-all rounded-md flex items-center gap-2 cursor-pointer"
                >
                  <span>NEXT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Is this a fact... or a story I have repeated? */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#e2c56a]">Question 5 (The Pivot)</span>
                <h3 className="text-2xl font-serif-editorial text-[#f7f5f0]">
                  Is this a fact... or a story I have repeated?
                </h3>
                <p className="text-xs text-zinc-400">
                  Is that belief as permanent and unalterable as gravity, or is it an inherited narrative
                  reinforced by habit?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setAnswers({ ...answers, q5_isFact: "fact" })}
                  className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                    answers.q5_isFact === "fact"
                      ? "bg-white/10 border-[#e2c56a] text-white"
                      : "bg-black/30 border-white/10 text-zinc-400 hover:border-white/25"
                  }`}
                >
                  <div className="font-serif-editorial text-lg text-[#f7f5f0] mb-1">
                    An Immutable Fact
                  </div>
                  <p className="text-xs text-zinc-400">
                    A physical or external reality that cannot be altered by choice or awareness.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setAnswers({ ...answers, q5_isFact: "story" })}
                  className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                    answers.q5_isFact === "story"
                      ? "bg-[#e2c56a]/10 border-[#e2c56a] text-white shadow-[0_0_15px_rgba(226,197,106,0.15)]"
                      : "bg-black/30 border-white/10 text-zinc-400 hover:border-white/25"
                  }`}
                >
                  <div className="font-serif-editorial text-lg text-[#e2c56a] mb-1">
                    A Story I Have Repeated
                  </div>
                  <p className="text-xs text-zinc-300">
                    A conditioned self-concept, assumption, or fear I have rehearsed so often it feels real.
                  </p>
                </button>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="px-8 py-3 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#e2c56a] hover:bg-[#ebd58b] transition-all rounded-md flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>SEE MY RESULT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: COMPLETED STATE */}
          {currentStep === 6 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
                  Realization Complete
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#f7f5f0] font-normal tracking-wide">
                  YOU MAY HAVE JUST FOUND YOUR WALL.
                </h3>
              </div>

              {/* Reflection Synthesis Card */}
              <div className="p-6 bg-black/40 border border-white/10 rounded-xl space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 border-b border-white/5 pb-2">
                  Your Reflection Breakdown
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-xs text-zinc-500 block">What you want:</span>
                    <span className="text-zinc-200 font-medium">{answers.q1_want || "Your target aspiration"}</span>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block">The perceived obstacle:</span>
                    <span className="text-zinc-300">{answers.q2_stopping || "Initial perceived barrier"}</span>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block">The uncovered assumption underneath:</span>
                    <span className="text-[#e2c56a] font-serif-editorial text-lg italic">
                      {answers.q4_belief || "Underlying identity story"}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block">Nature of this barrier:</span>
                    <span className="text-xs font-mono text-zinc-300">
                      {answers.q5_isFact === "story"
                        ? "Conditioned narrative / Learned limitation (Changeable)"
                        : "Perceived fixed constraint requiring strategic navigation"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Philosophy Summary from Brief */}
              <div className="space-y-4 text-base text-zinc-300 font-normal leading-relaxed border-t border-white/5 pt-6">
                <p>
                  The goal isn't to pretend every obstacle is imaginary.
                </p>
                <p className="text-zinc-400">
                  The goal is to become better at recognizing which limitations are real, which are
                  changeable, and which may simply be inherited beliefs.
                </p>
                <p className="text-zinc-400">
                  When you stop treating internal stories as permanent walls, new pathways and actions
                  naturally reveal themselves.
                </p>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2.5 text-xs font-mono text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 rounded border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied to Clipboard" : "Save / Copy Reflection"}</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="p-2.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Start over"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={onExploreMethod}
                  className="w-full sm:w-auto px-7 py-3 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#e2c56a] hover:bg-[#ebd58b] transition-all rounded-md flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>EXPLORE THE NO-WALL METHOD™</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
