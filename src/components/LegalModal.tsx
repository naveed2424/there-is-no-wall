import { useState } from "react";
import { X, Shield, FileText, Cookie } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export type LegalTab = "privacy" | "terms" | "cookie" | "disclaimer";

interface LegalModalProps {
  initialTab?: LegalTab;
  isOpen: boolean;
  onClose: () => void;
}

export function LegalModal({ initialTab = "disclaimer", isOpen, onClose }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121620] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/30">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#e2c56a]" />
            <h3 className="font-serif-editorial text-lg text-[#f7f5f0]">
              Legal Notices & Disclaimers
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="flex items-center gap-1 px-6 py-2 bg-black/40 border-b border-white/5 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("disclaimer")}
            className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
              activeTab === "disclaimer"
                ? "bg-[#e2c56a] text-black font-semibold"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Educational Disclaimer
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
              activeTab === "privacy"
                ? "bg-[#e2c56a] text-black font-semibold"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
              activeTab === "terms"
                ? "bg-[#e2c56a] text-black font-semibold"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => setActiveTab("cookie")}
            className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
              activeTab === "cookie"
                ? "bg-[#e2c56a] text-black font-semibold"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Cookie Policy
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {activeTab === "disclaimer" && (
            <div className="space-y-4">
              <h4 className="text-base font-serif-editorial text-[#f7f5f0] font-semibold">
                Educational & Reflective Nature Disclaimer
              </h4>
              <p>
                The book <em>There Is No Wall</em> and the associated website materials, exercises, and frameworks
                are designed solely for educational, personal growth, and self-reflection purposes.
              </p>
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-2">
                <p className="font-semibold text-white">Important Mental Health Notice:</p>
                <p className="text-zinc-400">
                  This work does not constitute psychotherapy, medical advice, clinical psychiatric diagnosis, or
                  mental health treatment. It is not intended to replace or substitute consultation with qualified
                  psychologists, psychiatrists, therapists, or medical physicians. If you are currently experiencing
                  severe distress, clinical depression, trauma triggers, or psychiatric crises, please seek guidance
                  from licensed healthcare professionals.
                </p>
              </div>
              <p className="text-zinc-400">
                Author Naveed Afzal makes no guarantees regarding specific external financial, career, or relational
                outcomes. All self-reflection prompts are undertaken voluntarily at the reader's discretion.
              </p>
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="space-y-4">
              <h4 className="text-base font-serif-editorial text-[#f7f5f0] font-semibold">
                Privacy Policy Placeholder
              </h4>
              <div className="p-3 bg-amber-950/30 border border-amber-600/30 rounded text-[11px] text-amber-300 font-mono">
                Site Owner Notice: Replace this standard template with your attorney-approved or jurisdiction-specific Privacy Policy prior to launching high-volume campaigns.
              </div>
              <p>
                <strong>Information Collection:</strong> We respect your privacy. The interactive reflection tool on this website operates 100% locally within your client browser; responses to reflection questions are neither collected nor transmitted to our servers.
              </p>
              <p>
                <strong>Email Subscriptions:</strong> If you voluntarily submit your email to receive reflection worksheets, your address is retained strictly to provide the requested material and periodic editorial essays from Naveed Afzal. You may unsubscribe at any time via the one-click link in any correspondence.
              </p>
              <p>
                <strong>Analytics & Telemetry:</strong> Anonymized usage data (e.g., page views) may be monitored via Google Analytics or Meta Pixel strictly if configured by the site administrator. No personal identifying information is sold to third-party data brokers.
              </p>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="space-y-4">
              <h4 className="text-base font-serif-editorial text-[#f7f5f0] font-semibold">
                Terms of Service Placeholder
              </h4>
              <p>
                <strong>Digital Intellectual Property:</strong> All content, illustrations, the trademark <em>The No-Wall Method™</em>, and ebook files remain the sole intellectual property of Naveed Afzal. Purchasing grants a personal, non-transferable license to read and utilize the materials. Redistribution, resale, or unauthorized republication is strictly prohibited.
              </p>
              <p>
                <strong>Fulfillment & Delivery:</strong> Digital products are delivered immediately via Amazon Kindle directly to your Kindle device or the free Kindle reading application.
              </p>
            </div>
          )}

          {activeTab === "cookie" && (
            <div className="space-y-4">
              <h4 className="text-base font-serif-editorial text-[#f7f5f0] font-semibold">
                Cookie & Consent Policy Placeholder
              </h4>
              <p>
                This site utilizes minimal essential technical cookies to store interface preferences (such as remembering test state).
              </p>
              <p className="text-zinc-400">
                If third-party tracking scripts (GA4, Meta Pixel) are active, standard session measurement cookies will be managed in compliance with applicable European ePrivacy directives and GDPR guidance.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-black/40 border-t border-white/5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-white/5 rounded border border-white/10 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
