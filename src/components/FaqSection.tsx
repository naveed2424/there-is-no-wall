import { useState } from "react";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "What is There Is No Wall about?",
      answer:
        "There Is No Wall explores the beliefs, assumptions, identity patterns and internal narratives that can influence how people approach their goals and possibilities.",
    },
    {
      question: "Is this a manifestation book?",
      answer:
        "Manifestation is one of the concepts explored in the book, but the book takes a practical mindset-oriented approach focused on beliefs, self-concept, awareness, visualization and action rather than promising supernatural results.",
    },
    {
      question: "Is this a 30-day program?",
      answer:
        "The book includes a structured 30-day journey designed to help readers reflect on limiting beliefs, identity, possibility and action.",
    },
    {
      question: "Is this therapy?",
      answer:
        "No. This book is educational and reflective in nature. It is not psychotherapy, medical advice, mental-health treatment, or a substitute for professional care.",
    },
    {
      question: "Do I need previous experience with manifestation?",
      answer:
        "No. The concepts are designed to be approachable whether you are completely new to manifestation and mindset work or already familiar with the subject.",
    },
    {
      question: "Is the book available digitally?",
      answer:
        "Yes. The book is designed as a digital reading experience.",
    },
    {
      question: "Who is this book for?",
      answer:
        "It is intended for readers interested in personal development, manifestation, self-concept, limiting beliefs, visualization, mindset and practical self-reflection.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#090b0e] border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
            Clarity & Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#f7f5f0] font-normal leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal">
            Everything you need to know about the book, the methodology, and what to expect.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. manifestation, therapy, 30 days)..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#121620] border border-white/10 rounded-lg text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#e2c56a] transition-colors"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#121620] border border-white/5 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-editorial text-lg sm:text-xl text-[#f7f5f0]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#e2c56a] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-xs font-mono text-zinc-500">
              No questions matched your search query. Try clearing the filter.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
