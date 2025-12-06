import Header from "@/components/header"
import Achievements from "@/components/achievements"
import UniversityLogos from "@/components/university-logos"
import Gallery from "@/components/gallery"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import VideoHero from "@/components/video-hero"
import SlideHero from "@/components/slide-hero"
import FeaturedStories from "@/components/featured-stories"
import DonationBanner from "@/components/donation-banner"
import SuccessStories from "@/components/success-stories"
import About from "@/components/about"
import Donation from "@/components/donation"
import Testimonials from "@/components/testimonials"
import { HOMEPAGE_CONFIG } from "@/lib/homepage-config"

// Hero component selector based on configuration
function HeroBanner() {
  switch (HOMEPAGE_CONFIG.bannerType) {
    case 'video':
      return <VideoHero />
    case 'slideshow':
      return <SlideHero />
    case 'original':
    default:
      return <Hero />
  }
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        <HeroBanner />
        <About />
        {/* <FeaturedStories /> */}
        <Achievements />
        <UniversityLogos />
        {/* <SuccessStories /> */}
        <Gallery />
        {/* <BlogSection /> */}
        <Testimonials />
        <DonationBanner />
        {/* <Donation /> */}
      </main>
      <Footer />
    </div>
  )
}