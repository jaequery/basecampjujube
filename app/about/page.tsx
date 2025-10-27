"use client"

import { useLanguage } from "@/lib/use-language"
import Image from "next/image"
import { Heart } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function AboutPage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const section1Animation = useScrollAnimation()
  const section2Animation = useScrollAnimation()
  const section3Animation = useScrollAnimation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-white">
      <SiteHeader language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#8B4513] mb-4">{t.ourStoryTitle}</h1>
        <p className="text-xl text-[#D2691E] mb-8 flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 fill-[#DC143C]" />
          {t.ourStorySubtitle}
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">{t.ourStoryIntro}</p>
      </section>

      {/* Story Sections */}
      <section className="container mx-auto px-4 py-16">
        <div
          ref={section1Animation.ref}
          className={`grid md:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 ${
            section1Animation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="/korean-family-working-in-jujube-orchard-with-deser.jpg"
              alt="Family working in orchard"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">{t.ourStorySection1Title}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{t.ourStorySection1Text}</p>
          </div>
        </div>

        <div
          ref={section2Animation.ref}
          className={`grid md:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 ${
            section2Animation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">{t.ourStorySection2Title}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{t.ourStorySection2Text}</p>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden order-1 md:order-2">
            <Image
              src="/lush-jujube-orchard-with-ripe-red-fruits-on-trees-.jpg"
              alt="Jujube orchard"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div
          ref={section3Animation.ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            section3Animation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="/jujube-orchard-with-desert-mountains-and-clear-blu.jpg"
              alt="Desert orchard"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">{t.ourStorySection3Title}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{t.ourStorySection3Text}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <Image
                src="/basecamp-logo.png"
                alt="Basecamp Jujube Ranch"
                width={150}
                height={50}
                className="h-12 w-auto mx-auto md:mx-0 mb-3"
              />
              <p className="text-[#D2691E] font-medium">{t.footerTagline}</p>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-1">{t.footerAddress}</p>
              <p className="text-gray-600 text-sm">{t.footerCopyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
