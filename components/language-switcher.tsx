"use client"

import { Button } from "@/components/ui/button"

interface LanguageSwitcherProps {
  currentLanguage: "ko" | "en"
  onLanguageChange: (lang: "ko" | "en") => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 bg-white/95 backdrop-blur-sm rounded-full p-1 shadow-lg border-2 border-border">
      <Button
        variant={currentLanguage === "ko" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("ko")}
        className={`rounded-full px-4 font-semibold transition-all ${
          currentLanguage === "ko"
            ? "bg-primary text-white hover:bg-primary/90"
            : "hover:bg-secondary text-muted-foreground"
        }`}
      >
        KO
      </Button>
      <Button
        variant={currentLanguage === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("en")}
        className={`rounded-full px-4 font-semibold transition-all ${
          currentLanguage === "en"
            ? "bg-primary text-white hover:bg-primary/90"
            : "hover:bg-secondary text-muted-foreground"
        }`}
      >
        EN
      </Button>
    </div>
  )
}
