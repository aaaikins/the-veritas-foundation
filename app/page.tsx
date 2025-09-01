import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { HeartHandshake } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Achievements from "@/components/achievements"
import UniversityLogos from "@/components/university-logos"
import Gallery from "@/components/gallery"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import About from "@/components/about"
import DonationForm from "@/components/donation-form"
import Testimonials from "@/components/testimonials"

// import ApplicationForm from "@/components/application-form"

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

        {/* Donation Section */}
        <section id="donate" className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#facc15]/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#002366]/5 rounded-full translate-y-32 -translate-x-32"></div>

          <div className="container mx-auto grid items-center justify-center gap-12 px-6 md:px-8 relative z-10">
            <div className="space-y-8 text-center">
              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <HeartHandshake className="h-4 w-4" />
                <span>Support Our Cause</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Your Support Makes
                <br />
                <span className="text-[#facc15]">a Difference</span>
              </h2>
              <p className="mx-auto max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                Your generous donation helps us continue our work of empowering ideas and transforming lives.
                Every contribution, no matter the size, creates lasting positive change in our communities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg space-y-6">
              <div className="flex flex-col justify-center">
                <DonationForm />
              </div>
              
              {/* <ApplicationForm /> */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Secure SSL Encryption</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Tax-Deductible</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#facc15] rounded-full"></div>
                  <span>501(c)(3) Non-Profit</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}