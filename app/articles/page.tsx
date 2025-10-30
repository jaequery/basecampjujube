"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/use-language"
import { SiteHeader } from "@/components/site-header"
import { translations } from "@/lib/translations"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export default function ArticlesPage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const articles = [
    {
      slug: "health-benefits-of-jujube",
      titleEn: "Health Benefits of Jujube: The Science-Backed Superfood",
      titleKo: "대추의 건강 효능: 과학이 입증한 슈퍼푸드의 힘",
      excerptEn:
        "Discover the remarkable health benefits of jujube fruit backed by scientific research. Learn about improved sleep, heart health, immune support, brain function, and more from this ancient superfood.",
      excerptKo:
        "과학적 연구로 뒷받침된 대추의 놀라운 건강 효능을 발견하세요. 수면 개선, 심장 건강, 면역 지원, 뇌 기능 향상 등 고대 슈퍼푸드의 효능을 알아보세요.",
      date: "2025-10-20",
      readTime: 10,
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=600&fit=crop",
    },
    {
      slug: "jujube-farm-experience",
      titleEn: "The Jujube Farm Experience: Why You Should Visit at Least Once",
      titleKo: "대추 농장 체험: 왜 한 번은 꼭 방문해야 하는가",
      excerptEn:
        "Discover the magic of organic jujube farming in California's Lucerne Valley. Learn what makes a farm visit unforgettable and why this experience should be on your bucket list.",
      excerptKo:
        "캘리포니아 루선 밸리의 유기농 대추 농장의 마법을 발견하세요. 농장 방문이 잊지 못할 경험이 되는 이유와 왜 이 체험이 버킷 리스트에 있어야 하는지 알아보세요.",
      date: "2025-10-15",
      readTime: 8,
      image: "/gallery/family-picking-jujubes.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader language={language} setLanguage={setLanguage} />

      <main className="flex-1 py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              {language === "ko" ? "농장 이야기" : "Farm Stories"}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === "ko"
                ? "대추 재배, 농장 생활, 그리고 유기농 농업에 대한 이야기"
                : "Stories about jujube cultivation, farm life, and organic farming"}
            </p>
          </div>

          <div className="grid gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-border hover:border-accent"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={language === "ko" ? article.titleKo : article.titleEn}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString(language === "ko" ? "ko-KR" : "en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <span className="text-border">•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>
                          {article.readTime} {language === "ko" ? "분" : "min read"}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {language === "ko" ? article.titleKo : article.titleEn}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {language === "ko" ? article.excerptKo : article.excerptEn}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all">
                      <span>{language === "ko" ? "더 읽기" : "Read More"}</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t-4 border-accent/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Base Camp Jujube Ranch. {t.footerCopyright}
          </p>
        </div>
      </footer>
    </div>
  )
}
