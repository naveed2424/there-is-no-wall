import { useState } from "react";
import { ArrowUpRight, Menu, X, BookOpen, Layers, Calendar, User, HelpCircle } from "lucide-react";
import { SITE_CONFIG, trackEvent } from "../config/siteConfig";

interface NavbarProps {
  onOpenPurchase: () => void;
  isAdLanding?: boolean;
  onToggleAdLanding?: () => void;
}

export function Navbar({ onOpenPurchase, isAdLanding, onToggleAdLanding }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = () => {
    trackEvent("book_cta_click", { location: "navbar" });
    onOpenPurchase();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0e12]/85 backdrop-blur-md border-b border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-wider font-serif-editorial text-[#f7f5f0] hover:text-[#e2c56a] transition-colors whitespace-nowrap"
          >
            THERE IS NO WALL
          </a>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-500 uppercase tracking-widest pl-2 border-l border-white/10">
            By {SITE_CONFIG.AUTHOR_NAME}
          </span>
        </div>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        {!isAdLanding ? (
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <button
              onClick={() => handleNavClick("the-book")}
              className="hover:text-[#f7f5f0] transition-colors whitespace-nowrap cursor-pointer"
            >
              The Book
            </button>
            <button
              onClick={() => handleNavClick("the-method")}
              className="hover:text-[#f7f5f0] transition-colors whitespace-nowrap cursor-pointer"
            >
              The Method
            </button>
            <button
              onClick={() => handleNavClick("thirty-day-journey")}
              className="hover:text-[#f7f5f0] transition-colors whitespace-nowrap cursor-pointer"
            >
              30-Day Journey
            </button>
            <button
              onClick={() => handleNavClick("about-author")}
              className="hover:text-[#f7f5f0] transition-colors whitespace-nowrap cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("faq")}
              className="hover:text-[#f7f5f0] transition-colors whitespace-nowrap cursor-pointer"
            >
              FAQ
            </button>
          </nav>
        ) : (
          <div className="hidden lg:flex items-center gap-2 text-xs text-zinc-400">
            <span className="text-[#e2c56a]">● Dedicated Paid Campaign Preview</span>
            {onToggleAdLanding && (
              <button
                onClick={onToggleAdLanding}
                className="text-xs text-zinc-300 underline underline-offset-4 hover:text-white ml-2 cursor-pointer"
              >
                Switch to Full Editorial Site
              </button>
            )}
          </div>
        )}

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {onToggleAdLanding && !isAdLanding && (
            <button
              onClick={onToggleAdLanding}
              title="Preview the cold-traffic Meta Ad landing page (/start)"
              className="hidden md:inline-flex text-xs text-zinc-400 hover:text-zinc-200 border border-white/10 rounded-md px-2.5 py-1.5 transition-colors cursor-pointer"
            >
              Meta Ad View (/start)
            </button>
          )}

          <button
            onClick={handleCtaClick}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] transition-all rounded-md shadow-sm hover:shadow-[0_0_20px_rgba(226,197,106,0.3)] whitespace-nowrap cursor-pointer"
          >
            {SITE_CONFIG.CTA_TEXT_A}
          </button>

          {/* Mobile hamburger button */}
          {!isAdLanding && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e12] border-b border-white/10 px-6 py-6 space-y-4">
          <button
            onClick={() => handleNavClick("the-book")}
            className="flex items-center gap-3 w-full text-left text-base text-zinc-200 hover:text-[#e2c56a] py-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-zinc-500" />
            The Book
          </button>
          <button
            onClick={() => handleNavClick("the-method")}
            className="flex items-center gap-3 w-full text-left text-base text-zinc-200 hover:text-[#e2c56a] py-2 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-zinc-500" />
            The Method
          </button>
          <button
            onClick={() => handleNavClick("thirty-day-journey")}
            className="flex items-center gap-3 w-full text-left text-base text-zinc-200 hover:text-[#e2c56a] py-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-zinc-500" />
            30-Day Journey
          </button>
          <button
            onClick={() => handleNavClick("about-author")}
            className="flex items-center gap-3 w-full text-left text-base text-zinc-200 hover:text-[#e2c56a] py-2 cursor-pointer"
          >
            <User className="w-4 h-4 text-zinc-500" />
            About the Author
          </button>
          <button
            onClick={() => handleNavClick("faq")}
            className="flex items-center gap-3 w-full text-left text-base text-zinc-200 hover:text-[#e2c56a] py-2 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-zinc-500" />
            Frequently Asked Questions
          </button>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            {onToggleAdLanding && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleAdLanding();
                }}
                className="text-left text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer"
              >
                Switch to /start Meta Ad route
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#0c0e12] bg-[#f7f5f0] hover:bg-[#e2c56a] rounded-md transition-colors cursor-pointer"
            >
              {SITE_CONFIG.CTA_TEXT_A}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
