"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/use-language"
import { SiteHeader } from "@/components/site-header"
import { translations } from "@/lib/translations"
import { Calendar, Clock, ArrowLeft, Heart, Brain, Leaf, Moon, Shield, Zap } from "lucide-react"
import { jsonLd } from "./metadata"

export default function HealthBenefitsJujubePage() {
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
                <time dateTime="2025-10-20">
                  {new Date("2025-10-20").toLocaleDateString(language === "ko" ? "ko-KR" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>10 {language === "ko" ? "분" : "min read"}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {language === "ko"
                ? "대추의 건강 효능: 과학이 입증한 슈퍼푸드의 힘"
                : "Health Benefits of Jujube: The Science-Backed Superfood"}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === "ko"
                ? "수천 년 동안 전통 의학에서 사용되어 온 대추의 놀라운 건강 효능을 과학적 근거와 함께 알아보세요."
                : "Discover the remarkable health benefits of jujube fruit, backed by scientific research and thousands of years of traditional medicine use."}
            </p>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-xl">
            <img
              src="/photos/IMG_1032.JPG"
              alt={
                language === "ko"
                  ? "신선한 유기농 대추 수확"
                  : "Fresh organic jujube harvest"
              }
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {language === "ko" ? (
              <>
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">대추란 무엇인가?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추(Ziziphus jujuba)는 수천 년 동안 아시아에서 재배되어 온 과일로, "중국 대추" 또는 "붉은 대추"로도
                  알려져 있습니다. 이 작은 과일은 단순한 간식 그 이상입니다 - 전통 한의학에서 중요한 약재로 사용되어
                  왔으며, 현대 과학은 이제 그 효능을 뒷받침하는 증거를 발견하고 있습니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/photos/IMG_9855.JPG"
                    alt="신선한 유기농 대추 나무"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  신선한 대추는 아삭한 사과와 비슷한 식감을 가지고 있으며, 달콤하고 약간 톡 쏘는 맛이 납니다. 건조된
                  대추는 대추야자와 비슷하지만 독특한 풍미를 가지고 있습니다. 두 형태 모두 영양가가 높고 인상적인 건강
                  효능을 제공합니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">풍부한 영양 프로필</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추가 슈퍼푸드로 간주되는 것은 당연합니다. 이 작은 과일은 다음과 같은 필수 영양소로 가득 차
                  있습니다:
                </p>

                <div className="bg-secondary/30 rounded-2xl p-8 my-8 border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">주요 영양소 (100g당)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3">비타민</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 비타민 C: 69mg (일일 권장량의 77%)</li>
                        <li>• 비타민 A: 소량</li>
                        <li>• 비타민 B군 (티아민, 리보플라빈, 나이아신)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">미네랄</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 칼륨: 250mg</li>
                        <li>• 인: 23mg</li>
                        <li>• 칼슘, 마그네슘, 철분</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">기타 영양소</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 식이섬유: 풍부</li>
                        <li>• 항산화제: 플라보노이드, 폴리페놀</li>
                        <li>• 천연 당분: 과당, 포도당</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">칼로리</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 신선한 대추: 약 79칼로리</li>
                        <li>• 건조 대추: 약 287칼로리</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-accent" />
                  심혈관 건강 개선
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  연구에 따르면 대추는 심장 건강을 여러 방면으로 지원할 수 있습니다. 대추의 높은 칼륨 함량은 혈압을
                  조절하는 데 도움이 되며, 항산화제는 나쁜 콜레스테롤(LDL)의 산화를 방지하여 동맥경화증의 위험을
                  줄입니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=800&fit=crop"
                    alt="건강한 심장을 상징하는 이미지"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추에 포함된 사포닌과 플라보노이드는 혈액 순환을 개선하고 혈액 응고를 조절하는 데 도움을 줍니다. 매일
                  대추를 섭취하면 심혈관 질환의 위험을 낮추는 데 기여할 수 있습니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Moon className="w-8 h-8 text-accent" />
                  수면의 질 향상
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추의 가장 잘 알려진 효능 중 하나는 수면 개선입니다. 전통 한의학에서는 오랫동안 불면증 치료에 대추를
                  사용해왔으며, 현대 연구는 이를 뒷받침합니다.
                </p>

                <div className="bg-card rounded-2xl p-8 my-8 shadow-lg border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">대추가 수면에 도움이 되는 이유:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Moon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">천연 진정제:</strong> 대추 씨앗 추출물에는 신경계를 진정시키는
                        화합물이 포함되어 있습니다
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Moon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">불안 감소:</strong> 대추의 플라보노이드는 불안을 줄이고 이완을
                        촉진합니다
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Moon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">GABA 조절:</strong> 연구에 따르면 대추는 뇌의 GABA 수용체에 작용하여
                        수면을 유도합니다
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  많은 사람들이 잠자리에 들기 전 대추차를 마시거나 건조 대추를 간식으로 먹으면 더 빠르게 잠들고 더 깊은
                  수면을 경험한다고 보고합니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-accent" />
                  강력한 면역 체계 지원
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추의 높은 비타민 C 함량은 면역 체계를 강화하는 데 중요한 역할을 합니다. 비타민 C는 백혈구 생성을
                  촉진하고 항산화제로 작용하여 자유 라디칼로부터 세포를 보호합니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1200&h=800&fit=crop"
                    alt="건강한 면역 체계를 상징하는 이미지"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  또한 대추에는 면역 조절 특성을 가진 다당류가 포함되어 있어, 신체의 자연 방어 메커니즘을 강화하는 데
                  도움을 줍니다. 규칙적인 대추 섭취는 감기와 독감의 빈도를 줄이는 데 기여할 수 있습니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-accent" />
                  뇌 건강과 인지 기능
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추의 항산화제는 뇌 세포를 산화 스트레스로부터 보호하여 인지 기능 저하와 신경 퇴행성 질환의 위험을
                  줄이는 데 도움이 됩니다.
                </p>

                <div className="bg-secondary/30 rounded-2xl p-8 my-8 border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">뇌 건강에 대한 연구 결과:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        동물 연구에서 대추 추출물이 기억력과 학습 능력을 개선하는 것으로 나타났습니다
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        대추의 사포닌은 신경 보호 효과가 있어 알츠하이머 및 파킨슨병 예방에 도움이 될 수 있습니다
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        항염증 특성이 뇌의 염증을 줄여 전반적인 뇌 건강을 지원합니다
                      </span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-accent" />
                  소화 건강 개선
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추의 높은 섬유질 함량은 소화 건강을 지원합니다. 섬유질은 장운동을 촉진하고 변비를 예방하며 건강한
                  장내 미생물 환경을 유지하는 데 도움을 줍니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=800&fit=crop"
                    alt="건강한 식품"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  전통 의학에서 대추는 위장 문제를 치료하는 데 사용되어 왔습니다. 현대 연구는 대추가 위 점막을 보호하고
                  궤양 형성을 예방하는 데 도움이 될 수 있음을 시사합니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-accent" />
                  에너지 증진과 피로 회복
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추의 천연 당분(과당과 포도당)은 빠른 에너지원을 제공하면서도 혈당 지수가 낮아 혈당 수치를 급격하게
                  올리지 않습니다. 이는 지속적인 에너지가 필요한 운동선수나 활동적인 사람들에게 이상적입니다.
                </p>

                <div className="bg-card rounded-2xl p-8 my-8 shadow-lg border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">에너지와 피로 회복을 위한 대추:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">자연 에너지 부스터:</strong> 건강한 탄수화물과 당분으로 즉각적인
                        에너지 제공
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">철분 함유:</strong> 빈혈 예방과 산소 운반 개선으로 피로 감소
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">적응 효과:</strong> 스트레스에 대한 신체의 저항력을 높여 만성 피로
                        감소
                      </span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">항암 특성</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  초기 연구에서는 대추가 잠재적인 항암 특성을 가지고 있을 수 있음을 시사합니다. 대추의 다양한 식물
                  화학물질은 시험관 연구에서 암세포의 성장을 억제하고 세포 자멸사(apoptosis)를 유도하는 것으로
                  나타났습니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&h=800&fit=crop"
                    alt="건강한 세포를 상징하는 이미지"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  특히 베툴린산과 베툴리닌산과 같은 트리테르페노이드 화합물이 항암 효과를 나타냅니다. 그러나 이러한
                  연구는 아직 초기 단계이며, 인체에 대한 더 많은 임상 연구가 필요합니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">피부 건강 개선</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추의 높은 비타민 C와 항산화제 함량은 피부 건강에도 유익합니다. 비타민 C는 콜라겐 생성에 필수적이며,
                  콜라겐은 피부의 탄력과 젊음을 유지하는 데 중요합니다.
                </p>

                <div className="bg-secondary/30 rounded-2xl p-8 my-8 border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">피부를 위한 대추의 효능:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• 자유 라디칼로부터 피부 세포 보호</li>
                    <li>• 콜라겐 생성 촉진으로 주름 감소</li>
                    <li>• 피부 염증과 발적 감소</li>
                    <li>• 상처 치유 촉진</li>
                    <li>• 피부 톤 개선과 밝은 안색 유지</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">혈당 조절</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추는 당분을 함유하고 있지만, 혈당 지수가 낮아 혈당 수치를 급격하게 올리지 않습니다. 연구에 따르면
                  대추 추출물이 혈당 수치를 조절하고 인슐린 감수성을 개선하는 데 도움이 될 수 있습니다.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추의 섬유질은 탄수화물의 흡수를 늦춰 혈당 급증을 방지합니다. 이는 당뇨병 환자나 혈당 관리가 필요한
                  사람들에게 유익한 간식이 될 수 있습니다.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">대추를 식단에 포함시키는 방법</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추의 건강 효능을 누리는 것은 쉽습니다. 다음은 대추를 일상 식단에 포함시키는 몇 가지 방법입니다:
                </p>

                <div className="bg-card rounded-2xl p-8 my-8 shadow-lg border-2 border-border">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3">신선한 대추</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 간식으로 그냥 먹기</li>
                        <li>• 샐러드에 추가하기</li>
                        <li>• 스무디에 넣기</li>
                        <li>• 요거트와 함께 먹기</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">건조 대추</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 대추차 만들기</li>
                        <li>• 베이킹에 사용하기</li>
                        <li>• 죽이나 수프에 넣기</li>
                        <li>• 트레일 믹스에 추가하기</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">주의사항 및 부작용</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추는 대부분의 사람들에게 안전하고 부작용이 거의 없지만, 다음 사항에 유의해야 합니다:
                </p>

                <div className="bg-accent/10 rounded-2xl p-8 my-8 border-2 border-accent">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• <strong className="text-foreground">알레르기:</strong> 드물지만 대추에 알레르기 반응을 보이는 사람들이 있습니다</li>
                    <li>• <strong className="text-foreground">약물 상호작용:</strong> 진정제나 항우울제를 복용 중이라면 의사와 상담하세요</li>
                    <li>• <strong className="text-foreground">당뇨병:</strong> 대추는 혈당에 영향을 줄 수 있으므로 당뇨병 환자는 섭취량을 모니터링해야 합니다</li>
                    <li>• <strong className="text-foreground">과다 섭취:</strong> 너무 많이 먹으면 소화 불편을 유발할 수 있습니다</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">결론: 자연이 준 완벽한 선물</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  대추는 진정한 슈퍼푸드로, 수천 년 동안 전통 의학에서 사용되어 온 이유가 있습니다. 심혈관 건강부터
                  수면 개선, 면역 체계 강화, 뇌 건강 지원에 이르기까지 대추의 건강 효능은 과학적으로 뒷받침되고
                  있습니다.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/gallery/family-picking-jujubes.webp"
                    alt="가족이 함께 대추를 따는 모습"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  베이스캠프 대추 농장에서는 최고 품질의 유기농 대추를 재배하여 여러분이 이 놀라운 과일의 모든 건강
                  효능을 누릴 수 있도록 합니다. 우리의 화학 물질 없는 전통적인 농법은 대추가 자연의 영양소를 최대한
                  유지하도록 보장합니다.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-12">
                  건강한 간식을 찾고 있든, 수면을 개선하고 싶든, 단순히 전반적인 웰빙을 향상시키고 싶든, 대추는 완벽한
                  선택입니다. 우리 농장을 방문하여 이 놀라운 과일에 대해 더 배우고 직접 수확한 신선한 대추의 맛을 경험해
                  보세요.
                </p>

                <div className="text-center py-12 border-t-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">유기농 대추를 직접 경험해보세요</h3>
                  <p className="text-muted-foreground mb-6">
                    우리 농장을 방문하여 건강한 대추를 직접 수확하고 시식해보세요
                  </p>
                  <a
                    href="https://cal.com/basecampjujube/farm-visit?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-12">
                      농장 방문 예약하기
                    </Button>
                  </a>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">What is a Jujube?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Jujube (Ziziphus jujuba), also known as "Chinese date" or "red date," is a fruit that has been
                  cultivated in Asia for thousands of years. This small fruit is more than just a snack—it has been a
                  cornerstone of traditional Chinese medicine, and modern science is now discovering evidence to support
                  its remarkable health benefits.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=1200&h=800&fit=crop"
                    alt="Fresh organic fruit"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Fresh jujubes have a crisp, apple-like texture with a sweet and slightly tart flavor. Dried jujubes
                  are similar to dates but with a unique flavor profile. Both forms are nutritionally dense and offer
                  impressive health benefits.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Rich Nutritional Profile</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  It's no wonder jujubes are considered a superfood. These small fruits are packed with essential
                  nutrients:
                </p>

                <div className="bg-secondary/30 rounded-2xl p-8 my-8 border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Key Nutrients (per 100g)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Vitamins</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Vitamin C: 69mg (77% DV)</li>
                        <li>• Vitamin A: Small amounts</li>
                        <li>• B-complex vitamins (thiamine, riboflavin, niacin)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Minerals</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Potassium: 250mg</li>
                        <li>• Phosphorus: 23mg</li>
                        <li>• Calcium, magnesium, iron</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Other Nutrients</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Dietary fiber: Rich</li>
                        <li>• Antioxidants: Flavonoids, polyphenols</li>
                        <li>• Natural sugars: Fructose, glucose</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Calories</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Fresh jujubes: ~79 calories</li>
                        <li>• Dried jujubes: ~287 calories</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-accent" />
                  Cardiovascular Health Benefits
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Research suggests that jujubes can support heart health in multiple ways. The high potassium content
                  helps regulate blood pressure, while antioxidants prevent the oxidation of bad cholesterol (LDL),
                  reducing the risk of atherosclerosis.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=800&fit=crop"
                    alt="Healthy heart symbolism"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The saponins and flavonoids in jujubes help improve blood circulation and regulate blood clotting.
                  Regular consumption of jujubes may contribute to lowering the risk of cardiovascular diseases.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Moon className="w-8 h-8 text-accent" />
                  Improved Sleep Quality
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  One of the most celebrated benefits of jujube is its ability to improve sleep. Traditional Chinese
                  medicine has long used jujube to treat insomnia, and modern research supports this practice.
                </p>

                <div className="bg-card rounded-2xl p-8 my-8 shadow-lg border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">How Jujube Helps Sleep:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Moon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Natural Sedative:</strong> Jujube seed extract contains
                        compounds that calm the nervous system
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Moon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Anxiety Reduction:</strong> Flavonoids in jujube reduce
                        anxiety and promote relaxation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Moon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">GABA Modulation:</strong> Studies show jujube acts on GABA
                        receptors in the brain to induce sleep
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Many people report falling asleep faster and experiencing deeper sleep when drinking jujube tea before
                  bed or eating dried jujubes as an evening snack.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-accent" />
                  Powerful Immune System Support
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The high vitamin C content in jujubes plays a crucial role in strengthening the immune system. Vitamin
                  C promotes white blood cell production and acts as an antioxidant, protecting cells from free radical
                  damage.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1200&h=800&fit=crop"
                    alt="Healthy immune system symbolism"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Additionally, jujubes contain polysaccharides with immune-modulating properties, helping strengthen
                  the body's natural defense mechanisms. Regular jujube consumption may contribute to reducing the
                  frequency of colds and flu.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-accent" />
                  Brain Health and Cognitive Function
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The antioxidants in jujubes protect brain cells from oxidative stress, helping reduce the risk of
                  cognitive decline and neurodegenerative diseases.
                </p>

                <div className="bg-secondary/30 rounded-2xl p-8 my-8 border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Research on Brain Health:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Animal studies show jujube extract improves memory and learning ability
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Saponins in jujube have neuroprotective effects that may help prevent Alzheimer's and Parkinson's
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Anti-inflammatory properties reduce brain inflammation, supporting overall brain health
                      </span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-accent" />
                  Digestive Health Improvement
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The high fiber content in jujubes supports digestive health. Fiber promotes bowel movements, prevents
                  constipation, and helps maintain a healthy gut microbiome.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=800&fit=crop"
                    alt="Healthy food"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  In traditional medicine, jujube has been used to treat gastrointestinal problems. Modern research
                  suggests that jujube may help protect the stomach lining and prevent ulcer formation.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-accent" />
                  Energy Boost and Fatigue Recovery
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The natural sugars in jujubes (fructose and glucose) provide a quick energy source while maintaining a
                  low glycemic index, preventing blood sugar spikes. This makes them ideal for athletes or active
                  individuals needing sustained energy.
                </p>

                <div className="bg-card rounded-2xl p-8 my-8 shadow-lg border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Jujube for Energy and Fatigue:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Natural Energy Booster:</strong> Provides immediate energy
                        with healthy carbohydrates and sugars
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Iron Content:</strong> Prevents anemia and improves oxygen
                        transport, reducing fatigue
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Adaptogenic Effect:</strong> Increases body's resistance to
                        stress, reducing chronic fatigue
                      </span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Anti-Cancer Properties</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Early research suggests that jujubes may have potential anti-cancer properties. Various phytochemicals
                  in jujubes have been shown in test-tube studies to inhibit cancer cell growth and induce apoptosis
                  (cell death).
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&h=800&fit=crop"
                    alt="Healthy cells symbolism"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Triterpenoid compounds such as betulinic acid and betulin show particular anti-cancer effects.
                  However, these studies are still in early stages, and more clinical research on humans is needed.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Skin Health Enhancement</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The high vitamin C and antioxidant content in jujubes also benefits skin health. Vitamin C is
                  essential for collagen production, which is crucial for maintaining skin elasticity and youthfulness.
                </p>

                <div className="bg-secondary/30 rounded-2xl p-8 my-8 border-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Jujube Benefits for Skin:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Protects skin cells from free radical damage</li>
                    <li>• Promotes collagen production to reduce wrinkles</li>
                    <li>• Reduces skin inflammation and redness</li>
                    <li>• Accelerates wound healing</li>
                    <li>• Improves skin tone and maintains bright complexion</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Blood Sugar Regulation</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Although jujubes contain sugars, they have a low glycemic index and don't cause rapid blood sugar
                  spikes. Research suggests that jujube extract may help regulate blood sugar levels and improve insulin
                  sensitivity.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The fiber in jujubes slows carbohydrate absorption, preventing blood sugar surges. This makes them a
                  beneficial snack for diabetics or anyone managing blood sugar levels.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">How to Include Jujube in Your Diet</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Enjoying the health benefits of jujube is easy. Here are some ways to incorporate jujubes into your
                  daily diet:
                </p>

                <div className="bg-card rounded-2xl p-8 my-8 shadow-lg border-2 border-border">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Fresh Jujubes</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Eat as a healthy snack</li>
                        <li>• Add to salads</li>
                        <li>• Blend into smoothies</li>
                        <li>• Pair with yogurt</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Dried Jujubes</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Make jujube tea</li>
                        <li>• Use in baking</li>
                        <li>• Add to porridge or soup</li>
                        <li>• Mix into trail mix</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Precautions and Side Effects</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  While jujubes are safe for most people with minimal side effects, consider the following:
                </p>

                <div className="bg-accent/10 rounded-2xl p-8 my-8 border-2 border-accent">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• <strong className="text-foreground">Allergies:</strong> Though rare, some people may have allergic reactions to jujube</li>
                    <li>• <strong className="text-foreground">Drug Interactions:</strong> Consult your doctor if taking sedatives or antidepressants</li>
                    <li>• <strong className="text-foreground">Diabetes:</strong> Jujubes can affect blood sugar, so diabetics should monitor intake</li>
                    <li>• <strong className="text-foreground">Overconsumption:</strong> Eating too many may cause digestive discomfort</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Conclusion: Nature's Perfect Gift</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Jujube is truly a superfood, and there's a reason it has been used in traditional medicine for
                  thousands of years. From cardiovascular health to improved sleep, immune system support, and brain
                  health, the health benefits of jujube are backed by science.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/gallery/family-picking-jujubes.webp"
                    alt="Family picking jujubes together"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  At Base Camp Jujube Ranch, we grow the highest quality organic jujubes so you can enjoy all the
                  remarkable health benefits of this amazing fruit. Our chemical-free, traditional farming methods
                  ensure that our jujubes retain nature's nutrients at their maximum potential.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-12">
                  Whether you're looking for a healthy snack, want to improve your sleep, or simply want to enhance your
                  overall wellbeing, jujube is the perfect choice. Visit our ranch to learn more about this incredible
                  fruit and experience the taste of freshly picked organic jujubes.
                </p>

                <div className="text-center py-12 border-t-2 border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Experience Organic Jujubes Yourself</h3>
                  <p className="text-muted-foreground mb-6">
                    Visit our ranch to pick and taste healthy jujubes firsthand
                  </p>
                  <a
                    href="https://cal.com/basecampjujube/farm-visit?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-12">
                      Book Farm Visit
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
