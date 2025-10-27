"use client"

import { useLanguage } from "@/lib/use-language"
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { translations } from "@/lib/translations"

export default function VisitPage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const experiences = [
    t.visitExperience1,
    t.visitExperience2,
    t.visitExperience3,
    t.visitExperience4,
    t.visitExperience5,
    t.visitExperience6,
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-white">
      <SiteHeader language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#8B4513] mb-4">{t.visitPageTitle}</h1>
        <p className="text-xl text-[#D2691E] mb-12">{t.visitPageSubtitle}</p>

        <div className="relative h-[500px] rounded-3xl overflow-hidden mb-16">
          <Image
            src="/gallery/family-picking-jujubes.webp"
            alt="Family picking jujubes"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-12 text-center">{t.visitExperienceTitle}</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl border-2 border-[#FFE4D6] hover:border-[#DC143C] transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC143C] flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 text-lg">{experience}</p>
              </div>
            ))}
          </div>

          {/* Visit Details */}
          <div className="bg-white rounded-3xl border-2 border-[#FFE4D6] p-8 md:p-12">
            <h3 className="text-3xl font-bold text-[#8B4513] mb-8 text-center">{t.visitDetailsTitle}</h3>

            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-[#8B4513]">📅</span> {t.visitSeason}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-[#8B4513]">⏰</span> {t.visitDuration}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-[#8B4513]">💰</span> {t.visitPrice}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-[#8B4513]">✨</span> {t.visitIncluded}
              </p>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-[#DC143C] hover:bg-[#B8102E] text-white rounded-full px-8 py-6 text-lg font-semibold"
              >
                <a
                  href="https://cal.com/jujufarm/farm-visit?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.visitBookButton}
                </a>
              </Button>
              <p className="text-sm text-gray-600 mt-4">{t.visitNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/gallery/walking-through-orchard.webp"
              alt="Walking through orchard"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image src="/gallery/picking-from-tree.webp" alt="Picking from tree" fill className="object-cover" />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image src="/gallery/sharing-harvest.webp" alt="Sharing harvest" fill className="object-cover" />
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
