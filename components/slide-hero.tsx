"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import DonationForm from "@/components/donation-form"
import Image from "next/image"
import { HOMEPAGE_CONFIG } from "@/lib/homepage-config"

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

function SlideHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = HOMEPAGE_CONFIG.slideshow.slides;
  const config = HOMEPAGE_CONFIG.slideshow;

  const handleJoinUsClick = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setShowCTA(false);
    setTimeout(() => setShowCTA(true), 1000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setShowCTA(false);
    setTimeout(() => setShowCTA(true), 1000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowCTA(false);
    setTimeout(() => setShowCTA(true), 1000);
  };

  // Auto-advance slides
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && !isPaused && config.autoAdvance) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, config.interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, config.autoAdvance, config.interval]);

  // Show CTA animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setShowCTA(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Pause auto-advance on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="bg-white" id="hero">
      <div 
        className="relative rounded-b-[4rem] md:rounded-b-[6rem] pt-24 md:pt-32 pb-24 px-6 md:px-12 text-center text-white overflow-hidden min-h-[600px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        
        {/* Slide Images */}
        <div className="absolute inset-0 rounded-b-[4rem] md:rounded-b-[6rem] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover rounded-b-[4rem] md:rounded-b-[6rem]"
                priority={index === 0}
                quality={85}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyydkLjvvGnbWfTtiTzTe8tBpNGfFWdaLFqh6xzpW3ijFunGBRQXKBQlRTlJbRPRQ3d1vQ3+rKNZXwCdZd7wDr6oLLNqTDLpcuPMgB7u7X4dJSLKVDrUQrMN1lm4VhOi+Nz+k8qLm8U4qbJf9k="
              />
            </div>
          ))}
        </div>

        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 rounded-b-[4rem] md:rounded-b-[6rem]"></div>

        {/* Navigation Arrows */}
        {config.showArrows && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {config.showIndicators && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#facc15] scale-110' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Content container */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-6 py-3 rounded-full text-sm font-semibold mb-8 hover:bg-white/20 transition-all duration-500 ease-out">
            <span>EMPOWERING IDEAS</span>
            <span className="text-[#facc15]">•</span>
            <span>TRANSFORMING LIVES</span>
          </div>

          {/* Dynamic slide content */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#facc15] transition-all duration-500">
              {slides[currentSlide].title}
            </h2>
            <h3 className="text-lg md:text-xl text-white/90 mb-4 transition-all duration-500">
              {slides[currentSlide].subtitle}
            </h3>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The Veritas
            <br />
            <span className="text-[#facc15]">Foundation Inc.</span>
          </h1>

          {/* Dynamic description */}
          <p className="max-w-4xl mx-auto mb-10 text-lg md:text-xl text-white/90 leading-relaxed font-medium transition-all duration-500">
            {slides[currentSlide].description}
          </p>

          {/* Animated CTA buttons */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 transition-all duration-700 ease-out ${
            showCTA ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className={`transition-all duration-500 delay-200 ${
              showCTA ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <DonationForm />
            </div>
            <div className={`transition-all duration-500 delay-300 ${
              showCTA ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <Link href="/get-involved/become-member">
                <Button
                  size="lg"
                  className="bg-[#002366] hover:bg-[#002366]/90 text-[#facc15] font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  onClick={handleJoinUsClick}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    'Join Us Now'
                  )}
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust indicators */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-white/70 font-normal transition-all duration-700 delay-500 ${
            showCTA ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>501(c)(3) Non-Profit</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>30+ Scholars Supported</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#facc15] rounded-full"></div>
              <span>$5M+ in Scholarships</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        {config.showProgressBar && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-[4rem] md:rounded-b-[6rem] overflow-hidden">
            <div 
              className="h-full bg-[#facc15] transition-all duration-300 ease-linear"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SlideHero;