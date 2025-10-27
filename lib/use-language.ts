"use client"

import { useState } from "react"

type Language = "ko" | "en"

// Cookie helper functions
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null
  return null
}

function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = getCookie("language")
    return savedLanguage === "ko" || savedLanguage === "en" ? savedLanguage : "ko"
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setCookie("language", lang)
  }

  return { language, setLanguage }
}
