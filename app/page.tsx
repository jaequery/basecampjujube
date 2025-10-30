"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"
import { Heart, Facebook, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/use-language"
import { SiteHeader } from "@/components/site-header"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { LaunchBanner } from "@/components/launch-banner"

export default function Home() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const photoMenuAnimation = useScrollAnimation()
  const galleryAnimation = useScrollAnimation()
  const testimonialsAnimation = useScrollAnimation()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader language={language} setLanguage={setLanguage} />

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 mt-4">
        <div className="w-full max-w-4xl mb-8">
          <LaunchBanner />
        </div>

        <div className="mb-8 animate-bounce-in">
          <img
            src="/jujube-logo.png"
            alt="Basecamp Jujube Ranch Logo"
            className="w-32 h-32 object-contain drop-shadow-lg"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold text-center mb-4 tracking-tight text-foreground animate-fade-in">
          {t.heroTitle}
        </h1>

        <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
          <Heart className="w-5 h-5 text-accent fill-accent" />
          <p className="text-lg md:text-xl text-accent-foreground font-medium">{t.heroSubtitle}</p>
          <Heart className="w-5 h-5 text-accent fill-accent" />
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground text-center mb-12 max-w-2xl text-balance animate-fade-in-up">
          {t.heroDescription}
        </p>

        <a
          href="https://cal.com/jujufarm/farm-visit?overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in-up"
        >
          <Button
            size="lg"
            className="text-lg px-12 py-7 h-auto bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl"
          >
            {t.bookVisit}
          </Button>
        </a>
      </div>

      <section
        ref={photoMenuAnimation.ref}
        className={`py-16 px-6 bg-secondary/30 transition-all duration-1000 ${
          photoMenuAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/visit"
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src="/gallery/walking-through-orchard.webp"
                  alt="Visit our ranch"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl">
                    <h2 className="text-5xl md:text-6xl font-bold mb-2 text-balance text-primary">{t.visitTitle}</h2>
                    <p className="text-lg md:text-xl text-center text-foreground text-balance font-medium">
                      {t.visitDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/products"
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src="/gallery/sharing-harvest.webp"
                  alt="Purchase jujubes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl">
                    <h2 className="text-5xl md:text-6xl font-bold mb-2 text-balance text-primary">{t.purchaseTitle}</h2>
                    <p className="text-lg md:text-xl text-center text-foreground text-balance font-medium">
                      {t.purchaseDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={galleryAnimation.ref}
        className={`py-20 px-6 bg-background transition-all duration-1000 ${
          galleryAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{t.galleryTitle}</h2>
            <p className="text-lg text-muted-foreground">{t.gallerySubtitle}</p>
          </div>
          <div className="flex justify-center">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/gallery/family-picking-jujubes.webp"
                      alt="Family picking jujubes from trees"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/gallery/drying-tunnel-jujubes.webp"
                      alt="Jujubes drying in greenhouse tunnel"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/gallery/walking-through-orchard.webp"
                      alt="Visitors walking through jujube orchard"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/gallery/picking-from-tree.webp"
                      alt="Picking fresh jujubes from tree"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/gallery/sharing-harvest.webp"
                      alt="Sharing the jujube harvest"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/jujube-trees-in-orchard.jpg"
                      alt="Jujube orchard"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/fresh-red-jujubes-on-tree.jpg"
                      alt="Fresh jujubes on tree"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/jujube-farm-landscape-california.jpg"
                      alt="Ranch landscape"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/organic-jujube-harvest.jpg"
                      alt="Jujube harvest"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/jujube-fruit-close-up.jpg"
                      alt="Jujube close-up"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/family-farm-jujube-ranch.jpg"
                      alt="Family at ranch"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section
        ref={testimonialsAnimation.ref}
        className={`py-20 px-6 bg-secondary/30 transition-all duration-1000 ${
          testimonialsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{t.testimonialsTitle}</h2>
            <p className="text-lg text-muted-foreground">{t.testimonialsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-accent fill-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{t.testimonial1}</p>
              <p className="font-semibold text-foreground">{t.testimonial1Name}</p>
              <p className="text-sm text-muted-foreground">{t.testimonial1Location}</p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-accent fill-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{t.testimonial2}</p>
              <p className="font-semibold text-foreground">{t.testimonial2Name}</p>
              <p className="text-sm text-muted-foreground">{t.testimonial2Location}</p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-accent fill-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{t.testimonial3}</p>
              <p className="font-semibold text-foreground">{t.testimonial3Name}</p>
              <p className="text-sm text-muted-foreground">{t.testimonial3Location}</p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-accent fill-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{t.testimonial4}</p>
              <p className="font-semibold text-foreground">{t.testimonial4Name}</p>
              <p className="text-sm text-muted-foreground">{t.testimonial4Location}</p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-accent fill-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{t.testimonial5}</p>
              <p className="font-semibold text-foreground">{t.testimonial5Name}</p>
              <p className="text-sm text-muted-foreground">{t.testimonial5Location}</p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-accent fill-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{t.testimonial6}</p>
              <p className="font-semibold text-foreground">{t.testimonial6Name}</p>
              <p className="text-sm text-muted-foreground">{t.testimonial6Location}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[500px] border-t-4 border-border overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.8!2d-116.9!3d34.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c569c0c0c0c0c0%3A0x0!2s30651%20Planetary%20Ave%2C%20Lucerne%20Valley%2C%20CA%2092356!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Basecamp Jujube Ranch Location"
        />
      </div>

      <footer className="bg-white border-t-4 border-accent/20 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <img
                src="/jujube-logo.png"
                alt="Basecamp Jujube Ranch"
                className="w-20 h-20 mx-auto mb-4 drop-shadow-md"
              />
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-accent fill-accent" />
                <p className="text-xl font-semibold text-foreground">{t.heroTitle}</p>
                <Heart className="w-4 h-4 text-accent fill-accent" />
              </div>
              <p className="text-muted-foreground">{t.footerTagline}</p>
            </div>

            <div className="text-center mb-8 space-y-2">
              <p className="text-foreground font-medium">{t.footerAddress}</p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
                <a href="tel:213-576-9133" className="hover:text-accent transition-colors font-medium">
                  213-576-9133
                </a>
                <span className="text-border">•</span>
                <a href="mailto:hello@jujufarm.com" className="hover:text-accent transition-colors font-medium">
                  hello@jujufarm.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <a
                href="https://facebook.com/basecampjujube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Visit us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/basecampjujube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Follow us on X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://yelp.com/biz/basecamp-jujube-ranch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 font-bold text-lg"
                aria-label="Review us on Yelp"
              >
                Y
              </a>
            </div>

            <div className="text-center pt-6 border-t-2 border-border">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Basecamp Jujube Ranch. {t.footerCopyright}{" "}
                <Heart className="w-3 h-3 inline text-accent fill-accent" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
