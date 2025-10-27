"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <button
        className="md:hidden flex flex-col gap-2 p-4 -mr-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-7 h-0.5 bg-black transition-all ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
        <span className={`w-7 h-0.5 bg-black transition-all ${isOpen ? "opacity-0" : ""}`} />
        <span className={`w-7 h-0.5 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 z-40 md:hidden top-20 sm:top-24" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-x-0 top-20 sm:top-24 bg-white z-50 md:hidden shadow-lg">
            <nav className="flex flex-col p-6 gap-2">
              <Link
                href="/about"
                className="text-xl sm:text-2xl text-black hover:text-gray-600 transition-colors py-5 px-4 -mx-4 border-b border-border active:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {t("소개", "About")}
              </Link>
              <Link
                href="/products"
                className="text-xl sm:text-2xl text-black hover:text-gray-600 transition-colors py-5 px-4 -mx-4 border-b border-border active:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {t("제품", "Products")}
              </Link>
              <Link
                href="/visit"
                className="text-xl sm:text-2xl text-black hover:text-gray-600 transition-colors py-5 px-4 -mx-4 border-b border-border active:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {t("방문", "Visit")}
              </Link>
              <Link
                href="/contact"
                className="text-xl sm:text-2xl text-black hover:text-gray-600 transition-colors py-5 px-4 -mx-4 border-b border-border active:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {t("연락처", "Contact")}
              </Link>
              <div className="py-5 px-4 -mx-4">
                <LanguageToggle />
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
