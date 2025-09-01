import Header from "@/components/header"
import Achievements from "@/components/achievements"
import UniversityLogos from "@/components/university-logos"
import Gallery from "@/components/gallery"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import About from "@/components/about"
import Donation from "@/components/donation"
import Testimonials from "@/components/testimonials"


export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Achievements />
        <UniversityLogos />
        <Gallery />
        <BlogSection />
        <Testimonials />
        <Donation />
      </main>
      <Footer />
    </div>
  )
}