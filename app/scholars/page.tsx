"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award, Heart } from "lucide-react"
import Link from "next/link"

export default function ScholarsPage() {
  // Simple stats for the landing page
  const stats = {
    undergraduate: 16,
    graduate: 12,
    schools: 8,
    years: 4
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <GraduationCap className="w-4 h-4" />
                <span>Our Scholars</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Empowering Tomorrow's
                <br />
                <span className="text-[#facc15]">Leaders Today</span>
              </h1>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Our scholars program provides comprehensive support to exceptional students from underserved
                communities, offering scholarships, mentorship, and resources to help them achieve their
                academic and professional goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/scholars/undergraduate">
                  <Button className="bg-[#002366] hover:bg-[#002366]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Undergraduate Scholars
                  </Button>
                </Link>
                <Link href="/scholars/graduate">
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    <Award className="mr-2 h-5 w-5" />
                    Graduate Scholars
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Scholar Programs Overview */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Our Scholar Programs
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                We support talented students at both undergraduate and graduate levels, 
                helping them achieve their academic dreams and become future leaders.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              {/* Undergraduate Program */}
              <Card className="bg-gradient-to-br from-[#002366] to-blue-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#facc15] text-[#002366] p-3 rounded-xl">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Undergraduate Scholars</h3>
                      <p className="text-blue-100">Building Tomorrow's Leaders</p>
                    </div>
                  </div>
                  
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Our undergraduate program supports talented students pursuing bachelor's degrees 
                    at top universities worldwide. Scholars are grouped by their year of entry and 
                    receive comprehensive support throughout their academic journey.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#facc15] mb-1">{stats.undergraduate}</div>
                      <div className="text-blue-200 text-sm">Active Scholars</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#facc15] mb-1">{stats.years}</div>
                      <div className="text-blue-200 text-sm">Class Years</div>
                    </div>
                  </div>
                  
                  <Link href="/scholars/undergraduate">
                    <Button className="w-full bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 font-semibold py-3 group-hover:scale-105 transition-all duration-300">
                      Meet Undergraduate Scholars
                      <Users className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Graduate Program */}
              <Card className="bg-gradient-to-br from-purple-700 to-purple-900 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#facc15] text-purple-900 p-3 rounded-xl">
                      <Award className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Graduate Scholars</h3>
                      <p className="text-purple-100">Advancing Knowledge & Innovation</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-100 mb-6 leading-relaxed">
                    Our graduate program supports students pursuing advanced degrees including 
                    Master's, PhD, MBA, MD, and JD programs. Scholars are organized by program type 
                    and conduct cutting-edge research in their fields.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#facc15] mb-1">{stats.graduate}</div>
                      <div className="text-purple-200 text-sm">Active Scholars</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#facc15] mb-1">{stats.schools}</div>
                      <div className="text-purple-200 text-sm">Universities</div>
                    </div>
                  </div>
                  
                  <Link href="/scholars/graduate">
                    <Button className="w-full bg-[#facc15] text-purple-900 hover:bg-[#facc15]/90 font-semibold py-3 group-hover:scale-105 transition-all duration-300">
                      Meet Graduate Scholars
                      <BookOpen className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Support Our Scholars
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                Your generosity makes it possible for talented students to pursue their dreams and become
                the leaders our communities need. Every donation directly supports our scholars' success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate">
                  <Button className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Today
                  </Button>
                </Link>
                <Link href="/get-involved/become-member">
                  <Button variant="outline" className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105">
                    Become a Mentor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
