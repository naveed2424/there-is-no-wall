import { useState } from "react";
import { Check, Mail, AlertCircle, ArrowRight, Download, ShieldCheck } from "lucide-react";
import { SITE_CONFIG, trackEvent } from "../config/siteConfig";

interface EmailCaptureProps {
  onOpenWallFinder?: () => void;
}

export function EmailCapture({ onOpenWallFinder }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isEmailConfigured =
    SITE_CONFIG.EMAIL_PROVIDER &&
    SITE_CONFIG.EMAIL_PROVIDER !== "REPLACE_WITH_EMAIL_PROVIDER";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    trackEvent("email_signup", { emailDomain: email.split("@")[1] });
  };

  const downloadExercisePdf = () => {
    // Generate text-based reflection exercise sheet for offline use
    const exerciseContent = `THERE IS NO WALL: 5-MINUTE INVISIBLE WALL AUDIT
By Naveed Afzal (https://nowall.netlify.app)
-----------------------------------------------------------

EXERCISE INSTRUCTIONS:
Set a timer for 5 minutes. Silence notifications. Answer these 5 prompts with complete honesty.

PROMPT 1: WHAT DO I TRULY WANT?
Write the specific outcome, career shift, creative ambition, or standard you desire:
[                                                                 ]

PROMPT 2: WHAT REASON DOES MY MIND GIVE FOR HESITATING?
What is the primary obstacle or defense mechanism that immediately surfaces?
[                                                                 ]

PROMPT 3: WHAT WOULD I ATTEMPT IF REJECTION WAS IMPOSSIBLE TO DEFINE ME?
If failure had zero power over your fundamental human worth, what step would you take by Friday?
[                                                                 ]

PROMPT 4: WHAT ASSUMPTION ABOUT MYSELF SITS UNDERNEATH MY HESITATION?
Is there a belief that "I am not qualified", "I will be exposed", or "It's too late for me"?
[                                                                 ]

PROMPT 5: IS THIS A PHYSICAL FACT, OR AN INHERITED STORY?
Has this belief been scientifically proven, or is it a conditioned thought loop?
[                                                                 ]

CORE REALIZATION:
"The goal isn't to pretend every obstacle is imaginary. The goal is to become better at recognizing which limitations are real, which are changeable, and which may simply be inherited beliefs."

For the complete 30-day curriculum and methodology:
Read "There Is No Wall" by Naveed Afzal.
`;

    const blob = new Blob([exerciseContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "There_Is_No_Wall_5Min_Reflection_Exercise.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 md:py-24 bg-[#0e1117] border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 bg-[#121620] border border-white/10 rounded-2xl shadow-xl text-center space-y-6 relative overflow-hidden">
          
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
              Free Self-Reflection Companion
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-editorial text-[#f7f5f0] font-normal">
              Find Your Invisible Wall
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-normal">
              Get the free 5-minute reflection exercise and daily inquiry prompts to uncover the silent
              assumptions governing your decisions.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative w-full">
                  <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/15 rounded-md text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#e2c56a] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                >
                  SEND ME THE EXERCISE
                </button>
              </div>

              {error && (
                <p className="text-xs text-rose-400 font-mono text-left">{error}</p>
              )}

              <p className="text-[11px] text-zinc-500 font-mono">
                No spam. Unsubscribe anytime. Processed with zero trackers.
              </p>
            </form>
          ) : (
            <div className="space-y-4 max-w-md mx-auto p-6 bg-black/40 border border-white/10 rounded-xl animate-fadeIn">
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-semibold">
                <Check className="w-5 h-5" />
                <span>Reflection Exercise Ready</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Thank you for taking a step toward clarity. You can download the 5-minute reflection
                sheet immediately below:
              </p>

              <button
                onClick={downloadExercisePdf}
                className="w-full py-2.5 px-4 text-xs font-semibold tracking-wider uppercase bg-[#e2c56a] hover:bg-[#ebd58b] text-black rounded flex items-center justify-center gap-2 transition-colors cursor-pointer shadow"
              >
                <Download className="w-4 h-4" />
                <span>Download Exercise Sheet (.txt)</span>
              </button>

              {/* Informative message regarding email provider integration */}
              {!isEmailConfigured && (
                <div className="p-3 bg-amber-950/30 border border-amber-600/30 rounded text-[11px] text-amber-200/90 text-left space-y-1">
                  <div className="flex items-center gap-1.5 font-mono font-semibold text-amber-300">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Developer / Owner Notice</span>
                  </div>
                  <p>
                    <code className="bg-black/40 px-1 py-0.5 rounded font-mono text-[10px]">
                      EMAIL_PROVIDER = "{SITE_CONFIG.EMAIL_PROVIDER}"
                    </code>
                    . To automatically dispatch emails to subscribers, configure your email service
                    (ConvertKit, Mailchimp, Beehiiv) in{" "}
                    <code className="text-white">src/config/siteConfig.ts</code>.
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
