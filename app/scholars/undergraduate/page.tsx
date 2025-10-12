"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { 
  scholarsByYear, 
  getAllScholars, 
  getAvailableYears, 
  getScholarStats, 
  filterScholars,
  UndergraduateScholar
} from "@/lib/undergraduate-scholars-data"
import { ScholarFilters } from "@/components/scholar-filters"
import { ScholarStats } from "@/components/scholar-stats"
import { ScholarGrid } from "@/components/scholar-grid"

export default function UndergraduateScholarsPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const allScholars = getAllScholars()
  const availableYears = getAvailableYears()
  const stats = getScholarStats()

  // Get scholars based on year filter
  const baseScholars = selectedYear 
    ? scholarsByYear[selectedYear] || []
    : allScholars

  // Apply search filter
  const filteredScholars = filterScholars(baseScholars, searchTerm)

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-[#002366] via-[#002366] to-blue-900">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
                <Link href="/scholars" className="hover:text-white transition-colors">
                  Scholars
                </Link>
                <span>/</span>
                <span className="text-[#facc15]">Undergraduate</span>
              </div>

              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#facc15] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Scholars</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Meet the Undergraduate
                <br />
                <span className="text-[#facc15]">Scholars</span>
              </h1>

              <p className="text-slate-200 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Our undergraduate scholars are pursuing their bachelor's degrees at some of the world's most prestigious universities, 
                preparing to become the next generation of leaders, innovators, and changemakers.
              </p>

              <ScholarStats 
                totalScholars={stats.totalScholars}
                totalUniversities={stats.totalUniversities}
                totalMajors={stats.totalMajors}
                totalYears={stats.totalYears}
              />
            </div>
          </div>
        </section>

        {/* Scholars Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <ScholarFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
              availableYears={availableYears}
              totalScholars={allScholars.length}
              filteredCount={filteredScholars.length}
              onClearYear={() => setSelectedYear(null)}
            />

            <ScholarGrid
              scholars={filteredScholars}
              yearFilter={selectedYear}
              onYearSelect={setSelectedYear}
              showYearHeaders={!selectedYear}
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Join Our Undergraduate Program
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                Are you a talented student from Ghana ready to pursue higher education? 
                Apply for our undergraduate scholarship program and join this amazing community of scholars.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/applications">
                  <Button className="bg-[#002366] hover:bg-[#002366]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Apply for Scholarship
                  </Button>
                </Link>
                <Link href="/scholars/graduate">
                  <Button variant="outline" className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105">
                    View Graduate Scholars
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
