"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/use-language"

const translations = {
  ko: {
    message: "베이스캠프 대추 농장 웹사이트가 새롭게 오픈했습니다! 🎉",
  },
  en: {
    message: "Basecamp Jujube Farm website just launched! 🎉",
  },
}

export default function LaunchBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const dismissed = localStorage.getItem("launch-banner-dismissed")
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("launch-banner-dismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="bg-[#FFF5E6] border-2 border-[#D2691E] rounded-3xl mb-8 shadow-sm animate-in slide-in-from-top duration-500">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[#8B4513] text-sm md:text-base font-medium flex-1">{t.message}</p>
          <button
            onClick={handleDismiss}
            className="p-1.5 hover:bg-[#D2691E]/10 rounded-full transition-colors flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="h-4 w-4 text-[#8B4513]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export { LaunchBanner }
