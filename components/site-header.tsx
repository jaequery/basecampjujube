"use client"

import Link from "next/link"
import Image from "next/image"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations, type Language } from "@/lib/translations"

interface SiteHeaderProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export function SiteHeader({ language, setLanguage }: SiteHeaderProps) {
  const t = translations[language]

  return (
    <>
      <header className="py-6 px-6">
        <div className="container mx-auto">
          {/* Mobile: Logo and menu only */}
          <div className="flex flex-col items-center gap-4 md:hidden">
            <Link href="/" className="block">
              <Image
                src="/basecamp-logo.png"
                alt="Basecamp Jujube Farm"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex items-center justify-center gap-6">
              <Link href="/about" className="text-foreground font-medium hover:text-accent transition-colors text-base">
                {t.navOurStory}
              </Link>
              <Link href="/visit" className="text-foreground font-medium hover:text-accent transition-colors text-base">
                {t.navVisit}
              </Link>
              <Link
                href="/wholesale"
                className="text-foreground font-medium hover:text-accent transition-colors text-base"
              >
                {t.navBuyWholesale}
              </Link>
            </div>
          </div>

          {/* Desktop: Original layout with absolute positioning */}
          <div className="hidden md:block relative">
            <div className="absolute left-0 top-0">
              <Link href="/" className="block">
                <Image
                  src="/basecamp-logo.png"
                  alt="Basecamp Jujube Farm"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8">
              <Link href="/about" className="text-foreground font-medium hover:text-accent transition-colors text-lg">
                {t.navOurStory}
              </Link>
              <Link href="/visit" className="text-foreground font-medium hover:text-accent transition-colors text-lg">
                {t.navVisit}
              </Link>
              <Link
                href="/wholesale"
                className="text-foreground font-medium hover:text-accent transition-colors text-lg"
              >
                {t.navBuyWholesale}
              </Link>
            </div>

            <div className="absolute right-0 top-0">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            </div>
          </div>
        </div>
      </header>

      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
      </div>
    </>
  )
}
