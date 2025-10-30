"use client";

import { useLanguage } from "@/lib/use-language";
import Image from "next/image";
import { Check, Mail, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { translations } from "@/lib/translations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function WholesalePage() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const productsAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();

  const benefits = [
    t.wholesaleBenefit1,
    t.wholesaleBenefit2,
    t.wholesaleBenefit3,
    t.wholesaleBenefit4,
    t.wholesaleBenefit5,
    t.wholesaleBenefit6,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-white">
      <SiteHeader language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#8B4513] mb-4">
          {t.wholesaleTitle}
        </h1>
        <p className="text-xl text-[#D2691E] mb-8">{t.wholesaleSubtitle}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t.wholesaleIntro}
        </p>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-[#8B4513] mb-12 text-center">
          {t.wholesaleProductsTitle}
        </h2>

        <div
          ref={productsAnimation.ref}
          className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20 transition-all duration-1000 ${
            productsAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-3xl border-2 border-[#FFE4D6] overflow-hidden hover:border-[#DC143C] transition-colors">
            <div className="relative h-[300px]">
              <Image
                src="/fresh-drying-process.jpg"
                alt="Fresh jujubes with leaves on drying racks"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-3">
                {t.wholesaleFreshTitle}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t.wholesaleFreshDesc}
              </p>
              <p className="text-[#DC143C] font-semibold">
                {t.wholesaleFreshPrice}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border-2 border-[#FFE4D6] overflow-hidden hover:border-[#DC143C] transition-colors">
            <div className="relative h-[300px]">
              <Image
                src="/farm-drying-racks.jpg"
                alt="Traditional sun-drying on wooden racks"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-3">
                {t.wholesaleDriedTitle}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t.wholesaleDriedDesc}
              </p>
              <p className="text-[#DC143C] font-semibold">
                {t.wholesaleDriedPrice}
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-12 text-center">
            {t.wholesaleBenefitsTitle}
          </h2>

          <div
            ref={benefitsAnimation.ref}
            className={`grid md:grid-cols-2 gap-6 mb-16 transition-all duration-1000 ${
              benefitsAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl border-2 border-[#FFE4D6]"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC143C] flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={contactAnimation.ref}
        className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
          contactAnimation.isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
        }`}
      >
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border-2 border-[#FFE4D6] p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-6">
            {t.wholesaleContactTitle}
          </h2>
          <p className="text-lg text-gray-700 mb-8">{t.wholesaleContactText}</p>

          <div className="space-y-4">
            <a
              href="mailto:basecampjujubecom@gmail.com"
              className="flex items-center justify-center gap-3 text-lg text-[#8B4513] hover:text-[#DC143C] transition-colors"
            >
              <Mail className="w-6 h-6" />
              {t.wholesaleEmail}
            </a>
            <a
              href="tel:+12135769133"
              className="flex items-center justify-center gap-3 text-lg text-[#8B4513] hover:text-[#DC143C] transition-colors"
            >
              <Phone className="w-6 h-6" />
              {t.wholesalePhone}
            </a>
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
                alt="Base Camp Jujube Ranch"
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
  );
}
