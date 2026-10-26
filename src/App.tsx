/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ImmediateProblem } from "./components/ImmediateProblem";
import { InteractiveWallFinder } from "./components/InteractiveWallFinder";
import { NoWallMethod } from "./components/NoWallMethod";
import { BookPresentation } from "./components/BookPresentation";
import { ThirtyDayJourney } from "./components/ThirtyDayJourney";
import { BookContentPreview, BookContentPreviewSection } from "./components/BookContentPreview";
import { AuthorSection } from "./components/AuthorSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCta } from "./components/FinalCta";
import { EmailCapture } from "./components/EmailCapture";
import { StickyMobileCta } from "./components/StickyMobileCta";
import { PurchaseModal } from "./components/PurchaseModal";
import { LegalModal, LegalTab } from "./components/LegalModal";
import { PaidLandingStart } from "./components/PaidLandingStart";
import { Footer } from "./components/Footer";
import { trackEvent } from "./config/siteConfig";

export default function App() {
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab | null>(null);
  const [isAdLandingRoute, setIsAdLandingRoute] = useState(false);

  // Check URL route or query param on mount
  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash;
      const search = window.location.search;
      const pathname = window.location.pathname;

      if (
        hash === "#start" ||
        hash === "#no-wall-method" ||
        search.includes("mode=start") ||
        pathname.endsWith("/start")
      ) {
        setIsAdLandingRoute(true);
      } else {
        setIsAdLandingRoute(false);
      }
    };

    checkRoute();
    window.addEventListener("hashchange", checkRoute);

    // Initial page_view event
    trackEvent("page_view", {
      path: window.location.pathname,
      hash: window.location.hash,
    });

    // 50% Scroll tracking listener
    let trackedScroll50 = false;
    const handleScroll = () => {
      if (trackedScroll50) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0 && window.scrollY / scrollHeight >= 0.5) {
        trackedScroll50 = true;
        trackEvent("scroll_50");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", checkRoute);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAdRoute = () => {
    if (isAdLandingRoute) {
      window.location.hash = "";
      setIsAdLandingRoute(false);
    } else {
      window.location.hash = "start";
      setIsAdLandingRoute(true);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0c0e12] text-[#eae7e1] flex flex-col selection:bg-[#e2c56a]/30 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        onOpenPurchase={() => setIsPurchaseOpen(true)}
        isAdLanding={isAdLandingRoute}
        onToggleAdLanding={toggleAdRoute}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {isAdLandingRoute ? (
          /* Dedicated Paid Ad Landing View (/start) */
          <>
            <PaidLandingStart
              onOpenPurchase={() => setIsPurchaseOpen(true)}
              onOpenPreview={() => setIsPreviewOpen(true)}
              onScrollToWallFinder={() => scrollToSection("interactive-wall-finder")}
              onViewFullSite={toggleAdRoute}
            />

            {/* Micro-Interactive Experience */}
            <InteractiveWallFinder
              onExploreMethod={() => {
                toggleAdRoute();
                setTimeout(() => scrollToSection("the-method"), 100);
              }}
            />

            {/* Excerpt Reader */}
            <BookContentPreviewSection
              onOpenPreview={() => setIsPreviewOpen(true)}
              onOpenPurchase={() => setIsPurchaseOpen(true)}
            />

            {/* Final CTA */}
            <FinalCta
              onOpenPurchase={() => setIsPurchaseOpen(true)}
              onScrollToMethod={() => {
                toggleAdRoute();
                setTimeout(() => scrollToSection("the-method"), 100);
              }}
            />

            {/* Email Companion */}
            <EmailCapture />

            {/* FAQ */}
            <FaqSection />
          </>
        ) : (
          /* Full Editorial & Psychological Experience */
          <>
            {/* 1. Hero Section */}
            <Hero
              onOpenPurchase={() => setIsPurchaseOpen(true)}
              onOpenPreview={() => setIsPreviewOpen(true)}
              onScrollToMethod={() => scrollToSection("the-method")}
              onScrollToWallFinder={() => scrollToSection("interactive-wall-finder")}
            />

            {/* 2. Immediate Problem Section */}
            <ImmediateProblem
              onScrollToWallFinder={() => scrollToSection("interactive-wall-finder")}
            />

            {/* 3. Micro-Interactive Experience: Find Your Invisible Wall */}
            <InteractiveWallFinder
              onExploreMethod={() => scrollToSection("the-method")}
            />

            {/* 4. The No-Wall Method™ 5-Step Framework */}
            <NoWallMethod
              onOpenPurchase={() => setIsPurchaseOpen(true)}
            />

            {/* 5. Book Presentation & 10 Exploration Pillars */}
            <BookPresentation
              onOpenPurchase={() => setIsPurchaseOpen(true)}
              onOpenPreview={() => setIsPreviewOpen(true)}
            />

            {/* 6. 30-Day Journey */}
            <ThirtyDayJourney
              onOpenPurchase={() => setIsPurchaseOpen(true)}
            />

            {/* 7. Book Content Preview & Sample Pages */}
            <BookContentPreviewSection
              onOpenPreview={() => setIsPreviewOpen(true)}
              onOpenPurchase={() => setIsPurchaseOpen(true)}
            />

            {/* 8. Objective Product Truth (Social Proof Replacement) */}
            <SocialProofSection />

            {/* 9. About Author Naveed Afzal */}
            <AuthorSection />

            {/* 10. Frequently Asked Questions */}
            <FaqSection />

            {/* 11. Free Reflection Exercise Email Capture */}
            <EmailCapture />

            {/* 12. Final Climax CTA */}
            <FinalCta
              onOpenPurchase={() => setIsPurchaseOpen(true)}
              onScrollToMethod={() => scrollToSection("the-method")}
            />
          </>
        )}
      </main>

      {/* Persistent Quiet Footer */}
      <Footer
        onOpenLegal={(tab: LegalTab) => setLegalModalTab(tab)}
        onOpenPurchase={() => setIsPurchaseOpen(true)}
      />

      {/* Mobile Sticky CTA Bar */}
      <StickyMobileCta onOpenPurchase={() => setIsPurchaseOpen(true)} />

      {/* Modals */}
      <PurchaseModal
        isOpen={isPurchaseOpen}
        onClose={() => setIsPurchaseOpen(false)}
      />

      <BookContentPreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onOpenPurchase={() => setIsPurchaseOpen(true)}
      />

      <LegalModal
        isOpen={legalModalTab !== null}
        initialTab={legalModalTab || "disclaimer"}
        onClose={() => setLegalModalTab(null)}
      />

    </div>
  );
}
