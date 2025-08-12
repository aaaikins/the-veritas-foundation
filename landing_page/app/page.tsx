import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { HeartHandshake } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Achievements from "@/components/achievements"
import UniversityLogos from "@/components/university-logos"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1">
        <section id="hero" className="w-full pt-24 md:pt-32 lg:pt-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#002366]">
                    Empowering Ideas,
                    <br />
                    Transforming Lives.
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl">
                    The Veritas Foundation is dedicated to fostering innovation and creating opportunities that lead to
                    lasting positive change in communities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90">
                    <Link href="#donate">
                      <HeartHandshake className="mr-2 h-5 w-5" />
                      Donate Now
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#mission">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/hero-image.jpg"
                  width="600"
                  height="400"
                  alt="Veritas Foundation Members"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002366]">
                    Our Mission & Vision
                  </h2>
                  <p className="max-w-[600px] text-slate-600 md:text-lg">
                    We believe in the power of ideas to change the world. Our goal is to provide the resources and
                    support necessary for individuals and communities to thrive.
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#002366]">Mission</h3>
                    <p className="mt-2 text-slate-600">
                      To empower individuals by providing access to education, mentorship, and resources, enabling them
                      to realize their full potential and contribute meaningfully to society.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#002366]">Vision</h3>
                    <p className="mt-2 text-slate-600">
                      A world where every person has the opportunity to pursue their dreams and create a better future
                      for themselves and their communities, free from systemic barriers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/logo.png"
                  width="400"
                  height="400"
                  alt="Veritas Foundation Logo"
                  className="rounded-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <Achievements />
        <UniversityLogos />
        <Gallery />

        <section id="donate" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#002366]">
                Support Our Cause
              </h2>
              <p className="mx-auto max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your generous donation helps us continue our work of empowering ideas and transforming lives. Every
                contribution makes a difference.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button size="lg" className="w-full bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90">
                <HeartHandshake className="mr-2 h-5 w-5" />
                Donate Securely
              </Button>
              <p className="text-xs text-slate-500">The Veritas Foundation is a registered non-profit organization.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-slate-600">&copy; 2025 The Veritas Foundation Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-700">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-700">
            Terms of Service
          </Link>
        </nav>
      </footer> */}
    </div>
  )
}
