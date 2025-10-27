"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
      className="text-base sm:text-lg font-medium min-w-[60px] h-[52px] px-6"
    >
      {language === "ko" ? "EN" : "KO"}
    </Button>
  )
}
