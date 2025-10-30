"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/use-language"
import { SiteHeader } from "@/components/site-header"
import { translations } from "@/lib/translations"
import { Calendar, Clock, ArrowLeft, MapPin, CheckCircle } from "lucide-react"
import { jsonLd } from "./metadata"

export default function JujubeFarmExperiencePage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader language={language} setLanguage={setLanguage} />

      <article className="flex-1 py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "ko" ? "모든 글 보기" : "Back to Articles"}</span>
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime="2025-10-15">
                  {new Date("2025-10-15").toLocaleDateString(language === "ko" ? "ko-KR" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 {language === "ko" ? "분" : "min read"}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {language === "ko"
                ? "대추 농장 체험: 왜 한 번은 꼭 방문해야 하는가"
                : "The Jujube Farm Experience: Why You Should Visit at Least Once"}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === "ko"
                ? "캘리포니아 루선 밸리의 유기농 대추 농장을 방문하면서 얻을 수 있는 특별한 경험과 그것이 당신의 삶에 어떤 의미를 줄 수 있는지 알아보세요."
                : "Discover the unique experience of visiting an organic jujube farm in California's Lucerne Valley and how it can enrich your life in unexpected ways."}
            </p>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-xl">
            <img
              src="/gallery/walking-through-orchard.webp"
              alt={
                language === "ko"
                  ? "방문객들이 대추 과수원을 걷고 있는 모습"
                  : "Visitors walking through jujube orchard"
              }
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {language === "ko" ? (
              <>
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">도시를 벗어나 자연과 만나다</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  현대 생활의 소음과 스트레스에서 벗어나 고요한 사막 과수원에서 하루를 보내는 것만큼 치유적인 경험은
                  드뭅니다. 베이스캠프 대추 농장은 캘리포니아 루선 밸리의 중심부에 위치해 있으며, 도시의 번잡함에서
                  벗어나 자연과 다시 연결될 수 있는 완벽한 장소입니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=800&fit=crop"
                    alt="평화로운 농장 풍경"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  농장에 도착하는 순간부터 시간이 느리게 흐르는 듯한 느낌을 받게 됩니다. 맑은 공기, 광활한 하늘, 그리고
                  나무에서 익어가는 신선한 과일의 향기가 여러분을 맞이합니다. 이곳은 단순히 과일을 수확하는 곳이
                  아니라, 자연과의 깊은 유대감을 경험하는 곳입니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">손으로 직접 수확하는 진정한 경험</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  나무에서 직접 신선한 대추를 따는 경험은 특별합니다. 대부분의 사람들은 슈퍼마켓 선반에서 과일을 보지만,
                  자신의 손으로 나무에서 과일을 수확하는 것은 음식에 대한 새로운 관점을 제공합니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/gallery/picking-from-tree.webp"
                    alt="나무에서 대추를 따는 모습"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  우리 농장에서는 어떤 대추가 수확하기 완벽한지 배우고, 전통적인 수확 기술을 직접 체험할 수 있습니다.
                  각 과일은 정성스럽게 손으로 따여지며, 이 과정에서 유기농 농업의 노력과 헌신을 직접 느낄 수 있습니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">가족과 함께하는 교육적인 모험</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추 농장 방문은 모든 연령대의 가족 구성원에게 완벽한 활동입니다. 어린이들은 음식이 어디서 오는지
                  배우고, 자연에서 시간을 보내며, 신체 활동에 참여할 수 있습니다. 부모님들은 아이들이 화면에서 벗어나
                  야외에서 의미 있는 경험을 하는 모습을 보실 수 있습니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/gallery/family-picking-jujubes.webp"
                    alt="가족이 함께 대추를 따는 모습"
                    className="w-full h-auto"
                  />
                </div>

                <div className="bg-secondary/30 rounded-2xl p-8 my-8 border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">방문 시 배우게 될 것들:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        유기농 농업이 환경과 건강에 미치는 긍정적인 영향
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        대추의 놀라운 건강 효능과 영양가 (비타민 C, 항산화제 풍부)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        전통적인 대추 건조 과정과 보존 방법
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        사막 기후에서 과일 재배의 독특한 도전과 해결책
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        지속 가능한 농업 실천과 물 보존 기술
                      </span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">건강하고 맛있는 대추의 발견</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추는 수천 년 동안 아시아에서 재배되어 온 과일로, "대추(jujube)" 또는 "중국 대추"로 알려져
                  있습니다. 이 작은 과일은 놀라운 영양 프로필을 가지고 있으며, 많은 건강상의 이점을 제공합니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&h=800&fit=crop"
                    alt="신선한 유기농 과일"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  신선한 대추는 사과와 비슷한 바삭한 식감을 가지고 있으며, 달콤하고 약간 톡 쏘는 맛이 납니다. 건조된
                  대추는 대추야자와 비슷하지만 더 복잡한 풍미를 가지고 있습니다. 우리 농장에서는 두 가지 형태를 모두
                  시식할 수 있으며, 어떻게 과일이 건조 과정을 통해 변화하는지 볼 수 있습니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">전통적인 농업 방법 이해하기</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  베이스캠프 대추 농장에서는 한국에서 대대로 전해 내려오는 전통적인 농업 방법을 사용합니다. 우리의 농업
                  실천은 화학 물질을 사용하지 않으며, 대신 자연적인 해충 방제와 토양 관리 기술에 의존합니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/gallery/drying-tunnel-jujubes.webp"
                    alt="전통적인 대추 건조 시설"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  농장 투어 중에는 우리의 전통적인 건조 시설을 방문하게 됩니다. 여기서 대추가 캘리포니아의 따뜻한 햇빛
                  아래에서 천천히 건조되는 모습을 볼 수 있습니다. 이 과정은 시간이 걸리지만 과일의 자연스러운 단맛과
                  영양소를 보존합니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">사막 풍경의 아름다움</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  루선 밸리는 숨막히는 사막 풍경으로 유명합니다. 우리 농장은 산으로 둘러싸여 있으며, 특히 일출과
                  일몰 시간에 절경을 자랑합니다. 많은 방문객들이 농장의 평화로운 분위기와 탁 트인 전망에 깊은 인상을
                  받습니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=800&fit=crop"
                    alt="사막 풍경과 산"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  과수원을 걷는 동안 사진을 찍고 자연을 즐기고 단순히 현재에 존재할 시간이 충분합니다. 이것은 단순히
                  과일을 따는 것이 아니라 자연과의 전체적인 연결에 관한 것입니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">지역 농업 지원의 중요성</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  우리 농장을 방문함으로써 여러분은 지역 농업과 소규모 가족 농장을 지원하게 됩니다. 오늘날 대부분의
                  음식이 대규모 산업 농장에서 생산되는 시대에, 지역 농부들을 지원하는 것은 그 어느 때보다 중요합니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=1200&h=800&fit=crop"
                    alt="가족 농장 풍경"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  우리는 우리의 땅, 작물, 그리고 지역 사회에 깊은 자부심을 가지고 있습니다. 방문객 한 분 한 분이 우리가
                  하는 일을 계속할 수 있도록 도와주며, 미래 세대를 위해 이러한 전통적인 농업 방법을 보존할 수 있게
                  해줍니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">방문 시 무엇을 기대할 수 있나요</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  일반적인 농장 방문은 약 6시간 동안 진행되며, 다음과 같은 내용이 포함됩니다:
                </p>

                <div className="bg-card rounded-2xl p-8 my-8 shadow-lg border-2 border-border">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        1
                      </span>
                      <div>
                        <strong className="text-foreground">환영 및 소개</strong>
                        <p className="text-muted-foreground mt-1">
                          우리 농장, 역사, 그리고 대추 재배에 대한 소개
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        2
                      </span>
                      <div>
                        <strong className="text-foreground">과수원 투어</strong>
                        <p className="text-muted-foreground mt-1">
                          나무들 사이를 걸으며 대추가 어떻게 자라는지 배우기
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        3
                      </span>
                      <div>
                        <strong className="text-foreground">직접 수확 체험</strong>
                        <p className="text-muted-foreground mt-1">나무에서 직접 신선한 대추 따기</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        4
                      </span>
                      <div>
                        <strong className="text-foreground">건조 시설 견학</strong>
                        <p className="text-muted-foreground mt-1">대추가 어떻게 건조되고 보존되는지 보기</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        5
                      </span>
                      <div>
                        <strong className="text-foreground">시식 세션</strong>
                        <p className="text-muted-foreground mt-1">신선한 대추와 건조 대추 모두 맛보기</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        6
                      </span>
                      <div>
                        <strong className="text-foreground">대추 가져가기</strong>
                        <p className="text-muted-foreground mt-1">직접 수확한 신선한 대추 1파운드 포장해 가기</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">방문 계획하기</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  우리 농장은 8월부터 10월까지, 대추가 익는 시즌에 방문객을 맞이합니다. 이 시기는 과일이 가장 맛있고
                  날씨가 농장 활동에 완벽할 때입니다.
                </p>

                <div className="bg-accent/10 rounded-2xl p-8 my-8 border-2 border-accent">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">방문 정보</h3>
                      <p className="text-muted-foreground mb-4">
                        <strong>주소:</strong> 30651 Planetary Ave, Lucerne Valley, CA 92356
                      </p>
                      <p className="text-muted-foreground mb-4">
                        <strong>시즌:</strong> 8월 - 10월
                      </p>
                      <p className="text-muted-foreground mb-4">
                        <strong>체험 시간:</strong> 6시간
                      </p>
                      <p className="text-muted-foreground mb-4">
                        <strong>가격:</strong> 1인당 $50
                      </p>
                      <p className="text-muted-foreground mb-6">
                        <strong>참고:</strong> 예약이 필요합니다. 편안한 신발과 모자를 착용하세요. 자외선 차단제와 물을
                        충분히 가져오세요.
                      </p>
                      <a
                        href="https://cal.com/basecampjujube/farm-visit?overlayCalendar=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="lg"
                          className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white font-semibold"
                        >
                          지금 방문 예약하기
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">평생 간직할 추억 만들기</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  우리 농장을 방문하는 것은 단순히 하루의 활동이 아니라 오래 지속되는 추억을 만드는 것입니다. 많은
                  가족들이 매년 돌아와 자신들의 연례 전통으로 만듭니다. 아이들은 자신들이 먹는 음식이 어디서 오는지
                  배우고, 부모님들은 함께 보내는 소중한 시간을 즐기며, 모두가 자연과 다시 연결되는 기회를 얻습니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop"
                    alt="행복한 가족이 농장에서 시간을 보내는 모습"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  디지털 기기가 우리의 삶을 지배하는 세상에서, 농장 방문은 속도를 늦추고 단순한 것들을 감상할 수 있는
                  귀중한 기회를 제공합니다. 흙을 만지고, 신선한 과일의 향기를 맡고, 자연의 소리를 듣는 것 - 이런
                  경험들은 우리를 진정으로 살아있게 만듭니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                  왜 적어도 한 번은 방문해야 할까요?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추 농장 방문은 단순한 관광이 아닙니다. 이것은 다음과 같은 것들에 대한 투자입니다:
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">교육:</strong> 농업, 영양, 지속 가능성에 대해 직접 배우기
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">건강:</strong> 신선한 공기, 신체 활동, 영양가 있는 음식
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">가족 유대:</strong> 함께 의미 있는 시간을 보내고 추억 만들기
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">문화적 연결:</strong> 전통적인 농업 방법과 유산 이해하기
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">정신적 웰빙:</strong> 스트레스 감소와 자연과의 재연결
                    </span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  우리의 빠르게 움직이는 디지털 세상에서, 대추 농장 방문과 같은 경험은 점점 더 귀중해지고 있습니다.
                  이것은 우리의 음식이 어디서 오는지, 농부들의 노력을 감사하며, 자연과 다시 연결될 수 있는 기회입니다.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-12">
                  그러니 가족, 친구들과 함께 오셔서 베이스캠프 대추 농장의 마법을 직접 경험해보세요. 여러분이 딴
                  대추뿐만 아니라 평생 간직할 추억과 새로운 관점을 가지고 떠나실 것을 약속합니다. 우리는 여러분을
                  가족처럼 환영하며, 우리가 사랑하는 것을 여러분과 공유하기를 기대합니다.
                </p>

                <div className="text-center py-12 border-t-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">방문할 준비가 되셨나요?</h3>
                  <p className="text-muted-foreground mb-6">지금 예약하고 잊지 못할 농장 체험을 시작하세요</p>
                  <a
                    href="https://cal.com/basecampjujube/farm-visit?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-12">
                      방문 예약하기
                    </Button>
                  </a>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                  Escape the City and Connect with Nature
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In our fast-paced modern lives, there are few experiences as therapeutic as spending a day in a quiet
                  desert orchard, away from the noise and stress of city living. Base Camp Jujube Ranch, nestled in the
                  heart of California's Lucerne Valley, offers the perfect escape to reconnect with nature and discover
                  what really matters.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=800&fit=crop"
                    alt="Peaceful farm landscape"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  From the moment you arrive at our ranch, you'll feel time slow down. The crisp air, wide-open skies,
                  and the sweet scent of ripening fruit on the trees greet you. This isn't just a place to pick
                  fruit—it's a place to experience a deeper connection with where your food comes from and the land that
                  nurtures it.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                  The Authentic Experience of Hand-Picking Your Own Fruit
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  There's something special about picking fresh jujubes directly from the tree. Most people only see
                  fruit on supermarket shelves, but harvesting it with your own hands gives you a new perspective on
                  food. You begin to appreciate the seasonality, the care required, and the satisfaction of eating
                  something you've personally harvested.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/gallery/picking-from-tree.webp"
                    alt="Picking jujubes from the tree"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  At our ranch, you'll learn which jujubes are perfect for picking, experience traditional harvesting
                  techniques, and understand the patience required in organic farming. Each fruit is carefully
                  hand-picked, and through this process, you'll gain a real appreciation for the work and dedication
                  that goes into organic agriculture.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                  An Educational Adventure for the Whole Family
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A jujube farm visit is the perfect activity for family members of all ages. Children learn where their
                  food comes from, spend time in nature, and engage in physical activity. Parents get to see their kids
                  away from screens, participating in meaningful outdoor experiences.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/gallery/family-picking-jujubes.webp"
                    alt="Family picking jujubes together"
                    className="w-full h-auto"
                  />
                </div>

                <div className="bg-secondary/30 rounded-2xl p-8 my-8 border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">What You'll Learn During Your Visit:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        How organic farming benefits both the environment and your health
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        The incredible health benefits of jujubes (high in Vitamin C, antioxidants, and fiber)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Traditional drying and preservation methods passed down through generations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        The unique challenges and solutions of growing fruit in a desert climate
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Sustainable farming practices and water conservation techniques
                      </span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                  Discover the Delicious and Healthy Jujube
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Jujubes, also known as "Chinese dates" or "red dates," have been cultivated in Asia for thousands of
                  years. This small fruit packs an impressive nutritional profile and offers numerous health benefits
                  that are only now being discovered by Western health enthusiasts.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&h=800&fit=crop"
                    alt="Fresh organic fruit"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Fresh jujubes have a crisp, apple-like texture when ripe, with a sweet and slightly tangy flavor.
                  Dried jujubes are similar to dates but with a more complex flavor profile. At our ranch, you'll get to
                  taste both forms and see how the fruit transforms through the drying process.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                  Understanding Traditional Farming Methods
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Base Camp Jujube Ranch, we use traditional farming methods passed down through generations in Korea.
                  Our practices are chemical-free, instead relying on natural pest control, soil management, and
                  time-honored techniques that work with nature rather than against it.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/gallery/drying-tunnel-jujubes.webp"
                    alt="Traditional jujube drying facility"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  During your farm tour, you'll visit our traditional drying facilities where jujubes are slowly dried
                  under California's warm sun. This process takes time but preserves the fruit's natural sweetness and
                  nutritional value. You'll see firsthand how patience and traditional knowledge create a superior
                  product.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The Beauty of the Desert Landscape</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Lucerne Valley is known for its breathtaking desert landscapes. Our ranch is surrounded by mountains
                  and offers stunning views, especially during sunrise and sunset. Many visitors are surprised by how
                  peaceful and beautiful the desert can be, and the wide-open spaces provide a sense of freedom that's
                  hard to find elsewhere.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=800&fit=crop"
                    alt="Desert landscape with mountains"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  As you walk through the orchard, you'll have plenty of time to take photos, enjoy the scenery, and
                  simply be present in the moment. This isn't just about picking fruit—it's about the holistic
                  experience of connecting with nature.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                  Supporting Local Agriculture and Family Farms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When you visit our ranch, you're supporting local agriculture and small family farms. In an era where
                  most food comes from large industrial operations, supporting local farmers is more important than
                  ever. Your visit helps keep traditional farming alive and ensures that future generations can
                  experience the same connection to the land.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=1200&h=800&fit=crop"
                    alt="Family farm landscape"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  We take great pride in our land, our crops, and our community. Every visitor helps us continue doing
                  what we love and preserves these traditional farming methods for future generations. Plus, you'll get
                  to meet the people who grow your food and hear their stories firsthand.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">What to Expect During Your Visit</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A typical farm visit lasts about 6 hours and includes a comprehensive experience:
                </p>

                <div className="bg-card rounded-2xl p-8 my-8 shadow-lg border-2 border-border">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        1
                      </span>
                      <div>
                        <strong className="text-foreground">Welcome and Introduction</strong>
                        <p className="text-muted-foreground mt-1">
                          Learn about our ranch, its history, and jujube cultivation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        2
                      </span>
                      <div>
                        <strong className="text-foreground">Orchard Tour</strong>
                        <p className="text-muted-foreground mt-1">Walk among the trees and learn how jujubes grow</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        3
                      </span>
                      <div>
                        <strong className="text-foreground">Hands-On Picking</strong>
                        <p className="text-muted-foreground mt-1">Pick fresh jujubes directly from the trees</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        4
                      </span>
                      <div>
                        <strong className="text-foreground">Drying Facility Tour</strong>
                        <p className="text-muted-foreground mt-1">See how jujubes are dried and preserved</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        5
                      </span>
                      <div>
                        <strong className="text-foreground">Tasting Session</strong>
                        <p className="text-muted-foreground mt-1">Sample both fresh and dried jujubes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        6
                      </span>
                      <div>
                        <strong className="text-foreground">Take Home Your Harvest</strong>
                        <p className="text-muted-foreground mt-1">
                          Package up 1 lb of fresh jujubes you've picked yourself
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Planning Your Visit</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our ranch welcomes visitors from August through October, when the jujubes are ripe and ready for
                  harvest. This is when the fruit is at its most delicious and the weather is perfect for outdoor farm
                  activities.
                </p>

                <div className="bg-accent/10 rounded-2xl p-8 my-8 border-2 border-accent">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Visit Information</h3>
                      <p className="text-muted-foreground mb-4">
                        <strong>Address:</strong> 30651 Planetary Ave, Lucerne Valley, CA 92356
                      </p>
                      <p className="text-muted-foreground mb-4">
                        <strong>Season:</strong> August - October
                      </p>
                      <p className="text-muted-foreground mb-4">
                        <strong>Duration:</strong> 6 hours
                      </p>
                      <p className="text-muted-foreground mb-4">
                        <strong>Price:</strong> $50 per person
                      </p>
                      <p className="text-muted-foreground mb-6">
                        <strong>Note:</strong> Reservations required. Please wear comfortable shoes and a hat. Bring
                        sunscreen and plenty of water.
                      </p>
                      <a
                        href="https://cal.com/basecampjujube/farm-visit?overlayCalendar=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="lg"
                          className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white font-semibold"
                        >
                          Book Your Visit Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Creating Memories That Last a Lifetime</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Visiting our ranch isn't just a day's activity—it's about creating lasting memories. Many families
                  return year after year, making it their annual tradition. Children learn where their food comes from,
                  parents enjoy quality time together, and everyone gets a chance to reconnect with nature.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop"
                    alt="Happy family spending time at the farm"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  In a world dominated by digital devices, a farm visit offers a precious opportunity to slow down and
                  appreciate the simple things. The feel of soil in your hands, the scent of fresh fruit, the sound of
                  nature—these experiences remind us what it means to be truly alive.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Visit at Least Once?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A jujube farm visit is more than just tourism. It's an investment in:
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Education:</strong> First-hand learning about farming,
                      nutrition, and sustainability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Health:</strong> Fresh air, physical activity, and nutritious
                      food
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Family Bonding:</strong> Quality time together and shared
                      memories
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Cultural Connection:</strong> Understanding traditional farming
                      methods and heritage
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Mental Wellbeing:</strong> Stress reduction and reconnection
                      with nature
                    </span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  In our fast-moving digital world, experiences like visiting a jujube farm are becoming increasingly
                  valuable. It's a chance to step back, appreciate where our food comes from, understand the work of
                  farmers, and reconnect with nature in a meaningful way.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-12">
                  So come visit us at Base Camp Jujube Ranch with your family and friends, and experience the magic for
                  yourself. We promise you'll leave with not just the jujubes you picked, but also memories that last a
                  lifetime and a new perspective on food, farming, and family. We welcome you as family and look forward
                  to sharing what we love with you.
                </p>

                <div className="text-center py-12 border-t-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Visit?</h3>
                  <p className="text-muted-foreground mb-6">Book now and start your unforgettable farm experience</p>
                  <a
                    href="https://cal.com/basecampjujube/farm-visit?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-12">
                      Book Your Visit
                    </Button>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </article>

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
