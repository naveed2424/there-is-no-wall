/**
 * Site Configuration & Settings
 * 
 * Central configuration for book links, analytics IDs, A/B testing copy,
 * pricing, email provider integrations, and author information.
 */

export const SITE_CONFIG = {
  // Book Metadata
  BOOK_TITLE: "There Is No Wall",
  BOOK_SUBTITLE: "The Manifestation Effect — Why nothing moves until you change who's looking",
  AUTHOR_NAME: "Naveed Afzal",
  TAGLINE: "A practical 30-day journey from invisible limitations to conscious possibility.",
  MICRO_TRUST_LINE: "A practical 30-day journey through beliefs, identity, possibility and action.",

  // Official Amazon Kindle Store URL (Exclusively on Amazon)
  AMAZON_URL: "https://www.amazon.fr/There-No-Wall-Manifestation-Nothing-ebook/dp/B0HNHN8GSN/ref=sr_1_2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=N9DYFJT9HD1J&dib=eyJ2IjoiMSJ9.0H9K1p9UBc4qCf4gTCOqBIM7IOcjYWC6TPnO7n3JKMB20pOEnyBadvb4lUH63VXzuE2eKeYlg0V4YHDq9WuBzw.EvBUcE9dQxQ3f9_TyMnOkZlO9YSqeMQzBZgptUgp7c8&dib_tag=se&keywords=there+is+no+wall&qid=1792702804&s=books&sprefix=there+is+no+wall%2Cstripbooks%2C289&sr=1-2",
  IS_AMAZON_EXCLUSIVE: true,

  // Pricing (Special 30-day launch price: 3,99 €)
  PRICE_TEXT: "3,99 €",
  LAUNCH_PRICE_NOTICE: "Special 30-Day Launch Price: 3,99 € (Amazon Kindle)",
  FORMAT_LABEL: "Amazon Kindle Ebook Edition",

  // Real Image Assets from User
  COVER_IMAGE: "/assets/aistudio/There_Is_No_Wall_Cover_Thumbnail_4226b920.png",
  AUTHOR_PHOTO: "/assets/aistudio/naveed_afzal_portrait.png",
  AUTHOR_HEADSHOT: "/assets/aistudio/naveed_afzal_headshot.png",

  // Email Integration
  EMAIL_PROVIDER: "REPLACE_WITH_EMAIL_PROVIDER", // e.g., 'convertkit', 'mailchimp', 'beehiiv', 'klaviyo'

  // Analytics & Tracking IDs
  GA4_ID: "REPLACE_WITH_GA4_ID",
  META_PIXEL_ID: "REPLACE_WITH_META_PIXEL_ID",

  // A/B Testing Headlines & CTAs
  HERO_HEADLINE_A: "WHAT IF THE BIGGEST THING STANDING BETWEEN YOU AND THE LIFE YOU WANT... ISN'T ACTUALLY THERE?",
  HERO_HEADLINE_B: "YOU MAY NOT NEED TO MANIFEST HARDER. YOU MAY NEED TO SEE THE WALL.",
  
  CTA_TEXT_A: "GET THE BOOK",
  CTA_TEXT_B: "DISCOVER THE NO-WALL METHOD™",

  // Social Links
  SOCIAL_LINKS: {
    INSTAGRAM: "https://instagram.com/",
    TIKTOK: "https://tiktok.com/",
    YOUTUBE: "https://youtube.com/",
  },

  // Author Contact
  AUTHOR_EMAIL: "contact@nowall.com",
};

/**
 * Event analytics dispatcher.
 * If tracking IDs are configured, dispatches to window.gtag or window.fbq.
 * Otherwise logs safely to development console without errors.
 */
export type AnalyticsEventName =
  | "page_view"
  | "scroll_50"
  | "method_view"
  | "book_cta_click"
  | "amazon_click"
  | "gumroad_click"
  | "email_signup"
  | "interactive_exercise_start"
  | "interactive_exercise_complete";

export function trackEvent(name: AnalyticsEventName, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  const isGA4Configured = SITE_CONFIG.GA4_ID && SITE_CONFIG.GA4_ID !== "REPLACE_WITH_GA4_ID";
  const isMetaConfigured = SITE_CONFIG.META_PIXEL_ID && SITE_CONFIG.META_PIXEL_ID !== "REPLACE_WITH_META_PIXEL_ID";

  if (isGA4Configured && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", name, payload || {});
  }

  if (isMetaConfigured && typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === "function") {
    (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("trackCustom", name, payload || {});
  }

  // Developer logging for verification
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[Analytics Tracked] ${name}`, payload || {});
  }
}
