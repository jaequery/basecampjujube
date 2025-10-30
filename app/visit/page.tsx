"use client"

import { useLanguage } from "@/lib/use-language"
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function VisitPage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const experienceAnimation = useScrollAnimation()
  const detailsAnimation = useScrollAnimation()
  const galleryAnimation = useScrollAnimation()

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
            src="/farm-recreation-area.jpg"
            alt="Relaxing outdoor recreation area at the farm"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-12 text-center">{t.visitExperienceTitle}</h2>

          <div
            ref={experienceAnimation.ref}
            className={`grid md:grid-cols-2 gap-6 mb-16 transition-all duration-1000 ${
              experienceAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
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

          <div
            ref={detailsAnimation.ref}
            className={`bg-white rounded-3xl border-2 border-[#FFE4D6] p-8 md:p-12 transition-all duration-1000 ${
              detailsAnimation.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
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
                  href="https://cal.com/basecampjujube/farm-visit?overlayCalendar=true"
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

      {/* Map Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-4 text-center">{t.visitMapTitle}</h2>
          <p className="text-xl text-[#D2691E] mb-8 text-center">{t.visitMapSubtitle}</p>

          <div className="bg-white rounded-3xl border-2 border-[#FFE4D6] p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#8B4513] mb-6">{t.visitDirectionsTitle}</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#8B4513] mb-3 text-lg">{t.visitDirectionsFrom}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC143C] mt-1">🚗</span>
                    <span>{t.visitDirectionsLA}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC143C] mt-1">🚗</span>
                    <span>{t.visitDirectionsSanDiego}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC143C] mt-1">🚗</span>
                    <span>{t.visitDirectionsRiverside}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#8B4513] mb-3 text-lg">{t.visitDirectionsInstructions}</h4>
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>{t.visitDirectionsStep1}</li>
                  <li>{t.visitDirectionsStep2}</li>
                  <li>{t.visitDirectionsStep3}</li>
                  <li>{t.visitDirectionsStep4}</li>
                </ol>
              </div>

              <div className="bg-[#FFF8F0] rounded-2xl p-4 border border-[#FFE4D6]">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-[#8B4513]">🅿️</span> {t.visitDirectionsParking}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-[#DC143C]">⚠️</span> {t.visitDirectionsNote}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border-4 border-[#FFE4D6] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.234567890123!2d-116.9678!3d34.4456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI2JzQ0LjIiTiAxMTbCsDU4JzA0LjEiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Basecamp Jujube Ranch Location"
            />
          </div>
        </div>
      </section>

      <section
        ref={galleryAnimation.ref}
        className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
          galleryAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/farm-dining-experience.jpg"
              alt="Enjoying Korean food at the farm"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image src="/orchard-rows.jpg" alt="Beautiful orchard rows with ripe fruit" fill className="object-cover" />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image src="/jujube-tree-closeup.jpg" alt="Close-up of jujubes on tree" fill className="object-cover" />
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
