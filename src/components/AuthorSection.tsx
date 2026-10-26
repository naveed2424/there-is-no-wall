import { Feather } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export function AuthorSection() {
  return (
    <section id="about-author" className="py-20 md:py-28 bg-[#090b0e] border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Author Portrait from Portfolio */}
          <div className="md:col-span-5 relative">
            <div className="max-w-xs mx-auto md:max-w-none rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#11141b] group">
              <img
                src={SITE_CONFIG.AUTHOR_PHOTO}
                alt="Naveed Afzal, author of There Is No Wall"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-black/60 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="text-zinc-200">{SITE_CONFIG.AUTHOR_NAME}</span>
                <span className="text-[#e2c56a]">Based in France</span>
              </div>
            </div>
          </div>

          {/* Bio Copy */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e2c56a]">
                About the Author
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#f7f5f0] font-normal leading-tight">
                Naveed Afzal
              </h2>
              <p className="text-xs font-mono text-zinc-400">
                Technologist · Mindful Practitioner · Creator of The No-Wall Method™
              </p>
            </div>

            {/* Quote from Portfolio */}
            <div className="p-4 bg-[#121620] border-l-2 border-[#e2c56a] rounded-r-xl text-zinc-200 font-serif-editorial text-lg italic">
              "Technology is my profession. Mindfulness is my path. Together, they create purpose."
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <p>
                Naveed Afzal explores ideas around mindset, self-awareness, personal growth, intuition,
                possibility and the stories people carry about themselves.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                With over 20 years of digital engineering experience and two decades of dedicated mindfulness practice,
                his work focuses on turning abstract mental models into practical reflection and grounded exercises
                readers can actually use in everyday life.
              </p>
            </div>

            <div className="pt-2 border-t border-white/5 text-xs text-zinc-500 font-mono space-y-1">
              <p>Creator of <strong className="text-zinc-300 font-normal">The No-Wall Method™</strong></p>
              <p>Author of <strong className="text-zinc-300 font-normal">There Is No Wall: The Manifestation Effect</strong> (Amazon Kindle)</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
