import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Check, Eye, X } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

interface BookContentPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPurchase: () => void;
}

export const SAMPLE_PAGES = [
  {
    pageNumber: "01",
    title: "The Wall",
    chapter: "Chapter 1",
    content: (
      <div className="space-y-4">
        <p className="font-serif-editorial text-xl italic text-[#e2c56a]">
          "The most enduring prisons are not built from stone or steel. They are constructed from unquestioned premises."
        </p>
        <p>
          Consider what happens when you stand before a goal that truly matters to you. Before your feet take a
          single step, an entire internal apparatus kicks into motion. It surveys the territory, calculates the
          likelihood of disappointment, and immediately begins constructing defenses.
        </p>
        <p>
          We call these defenses prudence. We call them realism. We tell ourselves we are merely being practical.
          Yet if you look closely at the boundary line, you will find no physical barricade. What exists is an invisible
          wall—an internal narrative that has convinced you that between who you are today and who you wish to become
          lies an insurmountable void.
        </p>
        <p className="text-zinc-400">
          The central purpose of this book is not to teach you how to batter down the wall. It is to help you see that
          the wall was never there to begin with.
        </p>
      </div>
    ),
  },
  {
    pageNumber: "02",
    title: "The Story Behind the Story",
    chapter: "Chapter 2",
    content: (
      <div className="space-y-4">
        <p className="font-serif-editorial text-xl italic text-[#e2c56a]">
          "You do not live inside reality. You live inside your interpretation of what is possible."
        </p>
        <p>
          Whenever someone says, "I can't afford to do that," or "People from my background don't achieve that," they
          believe they are reporting an objective news broadcast from the real world.
        </p>
        <p>
          In truth, they are reciting a story. A story that someone handed them years—sometimes decades—earlier. Perhaps
          a well-meaning parent wanted to protect them from disappointment. Perhaps a harsh teacher mistook an early
          struggle for a permanent lack of ability.
        </p>
        <p className="text-zinc-400">
          When a story is repeated often enough, the brain ceases to examine it. It converts the story into an assumed
          law. The question is never whether your past experiences were painful; the question is whether you are willing
          to allow an inherited script to dictate your future.
        </p>
      </div>
    ),
  },
  {
    pageNumber: "03",
    title: "The No-Wall Method™",
    chapter: "Chapter 3",
    content: (
      <div className="space-y-4">
        <p className="font-serif-editorial text-xl italic text-[#e2c56a]">
          "Manifestation without awareness is merely wishful thinking. Awareness paired with intentional action is sovereignty."
        </p>
        <p>
          The No-Wall Method™ is built on five sequential stages designed to dismantle internal inertia:
        </p>
        <div className="space-y-2 border-l border-[#e2c56a]/40 pl-4 py-2 font-mono text-xs text-zinc-300">
          <div><strong className="text-white">01. SEE</strong> — Detect the silent limiting belief before it steers your choices.</div>
          <div><strong className="text-white">02. QUESTION</strong> — Challenge the assumption's authority with objective inquiry.</div>
          <div><strong className="text-white">03. RELEASE</strong> — Detach identity from past narratives that no longer serve you.</div>
          <div><strong className="text-white">04. REBUILD</strong> — Anchor a congruent self-concept where progress feels natural.</div>
          <div><strong className="text-white">05. ACT</strong> — Execute courageously in the external world without hesitation.</div>
        </div>
        <p className="text-zinc-400">
          Each stage is not a theory to be memorized, but an experiment to be tested against your real day-to-day life.
        </p>
      </div>
    ),
  },
  {
    pageNumber: "04",
    title: "The 30-Day Journey",
    chapter: "Chapter 4",
    content: (
      <div className="space-y-4">
        <p className="font-serif-editorial text-xl italic text-[#e2c56a]">
          "Transformation does not occur through monumental crises. It occurs through small, conscious micro-shifts."
        </p>
        <p>
          Reading about mindset shifts creates intellectual understanding, but intellectual understanding rarely changes
          habits. For a new self-concept to take root, your nervous system requires consistent, safe repetition.
        </p>
        <p>
          That is why this book is structured as a 30-day laboratory. Thirty days is not an arbitrary marketing window;
          it is long enough to observe your recurring triggers, deconstruct them in real time, and replace them with
          grounded action.
        </p>
        <p className="text-zinc-400">
          Each morning provides a single guiding prompt. Each midday check-in brings you back to awareness. Each evening
          closes with a calm journal integration. You need only commit to fifteen minutes a day.
        </p>
      </div>
    ),
  },
  {
    pageNumber: "05",
    title: "Reflection Exercise",
    chapter: "Practical Protocol",
    content: (
      <div className="space-y-4">
        <p className="font-serif-editorial text-xl italic text-[#e2c56a]">
          "Exercise: The Five-Minute Wall Audit"
        </p>
        <p>
          Find a quiet space with a notebook. Turn off notifications. Read the following prompts slowly and record your
          first uncensored response:
        </p>
        <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-2 text-xs font-mono text-zinc-300">
          <p><strong>Prompt 1:</strong> If I could guarantee I would not be judged or shamed, what project would I announce tomorrow?</p>
          <p><strong>Prompt 2:</strong> What is the exact sentence my internal critic uses when I think about announcing it?</p>
          <p><strong>Prompt 3:</strong> Whose voice does that sentence sound like? (A teacher? A parent? An ex-partner? A peer?)</p>
          <p><strong>Prompt 4:</strong> What happens to my body when I sit with the possibility that this voice is simply mistaken?</p>
        </div>
        <p className="text-zinc-400">
          Notice the relief that arises when you stop defending the critic. That relief is the beginning of the open path.
        </p>
      </div>
    ),
  },
];

export function BookContentPreview({ isOpen, onClose, onOpenPurchase }: BookContentPreviewProps) {
  const [activePageIndex, setActivePageIndex] = useState<number>(0);

  if (!isOpen) return null;

  const currentPage = SAMPLE_PAGES[activePageIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121620] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/30">
          <div className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-[#e2c56a]" />
            <span className="font-serif-editorial text-base text-[#f7f5f0] tracking-wide">
              Book Preview · {SITE_CONFIG.BOOK_TITLE}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close preview modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Page Tab Selector */}
        <div className="flex items-center gap-1 px-6 py-2.5 bg-black/40 border-b border-white/5 overflow-x-auto text-xs font-mono">
          {SAMPLE_PAGES.map((page, idx) => (
            <button
              key={idx}
              onClick={() => setActivePageIndex(idx)}
              className={`px-3 py-1.5 rounded whitespace-nowrap transition-colors cursor-pointer ${
                activePageIndex === idx
                  ? "bg-[#e2c56a] text-black font-semibold"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
              }`}
            >
              Page {page.pageNumber}: {page.title}
            </button>
          ))}
        </div>

        {/* Reading Page Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm sm:text-base leading-relaxed text-zinc-200">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-2 border-b border-white/5">
            <span>{currentPage.chapter}</span>
            <span>PAGE {currentPage.pageNumber} OF 05</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#f7f5f0]">
            {currentPage.title}
          </h3>

          <div className="text-zinc-300 font-normal space-y-4">
            {currentPage.content}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-black/40 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePageIndex(Math.max(0, activePageIndex - 1))}
              disabled={activePageIndex === 0}
              className="px-3 py-1.5 text-xs font-mono text-zinc-400 hover:text-white disabled:opacity-30 border border-white/10 rounded cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>
            <button
              onClick={() => setActivePageIndex(Math.min(SAMPLE_PAGES.length - 1, activePageIndex + 1))}
              disabled={activePageIndex === SAMPLE_PAGES.length - 1}
              className="px-3 py-1.5 text-xs font-mono text-zinc-400 hover:text-white disabled:opacity-30 border border-white/10 rounded cursor-pointer flex items-center gap-1"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenPurchase();
            }}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#e2c56a] hover:bg-[#ebd58b] rounded transition-colors shadow-md cursor-pointer"
          >
            Get Full Book ({SITE_CONFIG.PRICE_TEXT})
          </button>
        </div>

      </div>
    </div>
  );
}

/**
 * Inline Preview Section on the Landing Page
 */
export function BookContentPreviewSection({ onOpenPreview, onOpenPurchase }: { onOpenPreview: () => void; onOpenPurchase: () => void }) {
  return (
    <section className="py-20 bg-[#0c0e12] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
            Look Inside the Book
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#f7f5f0]">
            Sample Chapters & Reflections
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Read five authentic excerpts exploring the core philosophy, the 5-step framework, and the daily 30-day practice.
          </p>
        </div>

        {/* 5 Page Cards Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-left">
          {SAMPLE_PAGES.map((page, idx) => (
            <div
              key={idx}
              onClick={onOpenPreview}
              className="p-4 bg-[#121620] border border-white/5 hover:border-[#e2c56a]/40 rounded-xl transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                <span className="text-[#e2c56a]">PAGE {page.pageNumber}</span>
                <Eye className="w-3.5 h-3.5 group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-serif-editorial text-base text-[#f7f5f0] group-hover:text-[#e2c56a] transition-colors mb-1 line-clamp-1">
                {page.title}
              </h4>
              <p className="text-[11px] font-mono text-zinc-500">{page.chapter}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenPreview}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] rounded-md transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>PREVIEW THE BOOK</span>
          </button>
          
          <a
            href={SITE_CONFIG.AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 rounded-md transition-colors cursor-pointer text-center"
          >
            ORDER ON AMAZON ({SITE_CONFIG.PRICE_TEXT})
          </a>
        </div>

      </div>
    </section>
  );
}
