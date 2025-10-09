"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, GraduationCap, Award } from "lucide-react"

const universities = [
  // Ivy League
  { name: "Harvard University", logoUrl: "/logos/harvard.png", category: "Ivy League", rank: "Top 5" },
  { name: "Yale University", logoUrl: "/logos/yale.png", category: "Ivy League", rank: "Top 5" },
  { name: "Princeton University", logoUrl: "/logos/princeton.png", category: "Ivy League", rank: "Top 5" },
  { name: "Columbia University", logoUrl: "/logos/columbia.png", category: "Ivy League", rank: "Top 10" },
  { name: "University of Pennsylvania", logoUrl: "/logos/penn.png", category: "Ivy League", rank: "Top 10" },
  { name: "Dartmouth College", logoUrl: "/logos/dartmouth.png", category: "Ivy League", rank: "Top 15" },
  { name: "Brown University", logoUrl: "/logos/brown.png", category: "Ivy League", rank: "Top 15" },
  { name: "Cornell University", logoUrl: "/logos/cornell.png", category: "Ivy League", rank: "Top 20" },

  // Top Research Universities
  { name: "Stanford University", logoUrl: "/logos/stanford.png", category: "Research", rank: "Top 5" },
  { name: "Massachusetts Institute of Technology", logoUrl: "/logos/mit.png", category: "Research", rank: "Top 5" },
  { name: "California Institute of Technology", logoUrl: "/logos/caltech.png", category: "Research", rank: "Top 10" },
  { name: "University of Chicago", logoUrl: "/logos/uchicago.png", category: "Research", rank: "Top 10" },
  { name: "Northwestern University", logoUrl: "/logos/northwestern.png", category: "Research", rank: "Top 15" },
  { name: "Johns Hopkins University", logoUrl: "/logos/johns-hopkins.png", category: "Research", rank: "Top 15" },
  { name: "Duke University", logoUrl: "/logos/duke.png", category: "Research", rank: "Top 15" },
  { name: "Vanderbilt University", logoUrl: "/logos/vanderbilt.png", category: "Research", rank: "Top 20" },

  // UC System
  { name: "UC Berkeley", logoUrl: "/logos/uc-berkeley.png", category: "Public Ivy", rank: "Top 25" },
  { name: "UCLA", logoUrl: "/logos/ucla.png", category: "Public Ivy", rank: "Top 25" },
  { name: "UC San Diego", logoUrl: "/logos/ucsd.png", category: "Public Ivy", rank: "Top 40" },
  { name: "UC Davis", logoUrl: "/logos/ucdavis.png", category: "Public Ivy", rank: "Top 40" },
  { name: "UC Irvine", logoUrl: "/logos/ucirvine.png", category: "Public Ivy", rank: "Top 40" },

  // Other Top Universities
  { name: "Carnegie Mellon University", logoUrl: "/logos/cmu.png", category: "Research", rank: "Top 25" },
  { name: "Georgetown University", logoUrl: "/logos/georgetown.png", category: "Liberal Arts", rank: "Top 25" },
  { name: "University of Michigan", logoUrl: "/logos/michigan.png", category: "Public Ivy", rank: "Top 25" },
  { name: "University of Virginia", logoUrl: "/logos/uva.png", category: "Public Ivy", rank: "Top 25" },
  { name: "University of North Carolina", logoUrl: "/logos/unc.png", category: "Public Ivy", rank: "Top 30" },
  { name: "Emory University", logoUrl: "/logos/emory.png", category: "Research", rank: "Top 25" },
  { name: "Rice University", logoUrl: "/logos/rice.png", category: "Research", rank: "Top 20" },
  { name: "Notre Dame", logoUrl: "/logos/notre-dame.png", category: "Liberal Arts", rank: "Top 20" },

  // Liberal Arts Colleges
  { name: "Williams College", logoUrl: "/logos/williams.png", category: "Liberal Arts", rank: "Top LAC" },
  { name: "Amherst College", logoUrl: "/logos/amherst.png", category: "Liberal Arts", rank: "Top LAC" },
  { name: "Swarthmore College", logoUrl: "/logos/swarthmore.png", category: "Liberal Arts", rank: "Top LAC" },
  { name: "Pomona College", logoUrl: "/logos/pomona.png", category: "Liberal Arts", rank: "Top LAC" },
  { name: "Bowdoin College", logoUrl: "/logos/bowdoin.png", category: "Liberal Arts", rank: "Top LAC" },
  { name: "Middlebury College", logoUrl: "/logos/middlebury.png", category: "Liberal Arts", rank: "Top LAC" },
  { name: "Wellesley College", logoUrl: "/logos/wellesley.png", category: "Liberal Arts", rank: "Top LAC" },
  { name: "Colby College", logoUrl: "/logos/colby.png", category: "Liberal Arts", rank: "Top LAC" },

  // Historically Black Colleges and Universities (HBCUs)
  { name: "Morehouse College", logoUrl: "/logos/morehouse.png", category: "HBCU", rank: "Top HBCU" },
  { name: "Spelman College", logoUrl: "/logos/spelman.png", category: "HBCU", rank: "Top HBCU" },
  { name: "Howard University", logoUrl: "/logos/howard.png", category: "HBCU", rank: "Top HBCU" },
  { name: "Hampton University", logoUrl: "/logos/hampton.png", category: "HBCU", rank: "Top HBCU" },
  { name: "Grambling State University", logoUrl: "/logos/grambling-updated.png", category: "HBCU", rank: "HBCU" },

  // International Universities
  { name: "University of Oxford", logoUrl: "/logos/oxford.png", category: "International", rank: "Top Global" },
  { name: "University of Cambridge", logoUrl: "/logos/cambridge.png", category: "International", rank: "Top Global" },
  { name: "London School of Economics", logoUrl: "/logos/lse.png", category: "International", rank: "Top Global" },
  { name: "University of Toronto", logoUrl: "/logos/toronto.png", category: "International", rank: "Top Global" },
  { name: "McGill University", logoUrl: "/logos/mcgill.png", category: "International", rank: "Top Global" },

  // Specialized Schools
  { name: "Wharton School", logoUrl: "/logos/wharton.png", category: "Business", rank: "Top Business" },
  { name: "Harvard Business School", logoUrl: "/logos/hbs.png", category: "Business", rank: "Top Business" },
  { name: "Harvard Medical School", logoUrl: "/logos/hms.png", category: "Medical", rank: "Top Medical" },
  { name: "Stanford Law School", logoUrl: "/logos/stanford-law.png", category: "Law", rank: "Top Law" },
  { name: "Harvard Kennedy School", logoUrl: "/logos/hks.png", category: "Public Policy", rank: "Top Policy" }
]

const categories = ["All", "Ivy League", "Research", "Public Ivy", "Liberal Arts", "HBCU", "International", "Business", "Medical", "Law", "Public Policy"]

export default function UniversityLogos() {
  const [showAll, setShowAll] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredUniversities = selectedCategory === "All" 
    ? universities 
    : universities.filter(uni => uni.category === selectedCategory)

  const displayedUniversities = showAll ? filteredUniversities : filteredUniversities.slice(0, 12)

  return (
    <section id="placements" className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-10 text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
            <GraduationCap className="w-4 h-4" />
            <span>Prestigious Placements</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
              Where Our Scholars
              <br />
              <span className="text-[#facc15]">Excel</span>
            </h2>
            <p className="max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
              Our scholars gain admission to {universities.length}+ of the world's most prestigious institutions,
              from Ivy League universities to top liberal arts colleges and specialized programs.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto bg-gradient-to-r from-[#002366] to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#facc15] mb-1">{universities.filter(u => u.category === "Ivy League").length}</div>
              <div className="text-slate-200 text-sm">Ivy League</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#facc15] mb-1">{universities.filter(u => u.rank.includes("Top 5") || u.rank.includes("Top 10")).length}</div>
              <div className="text-slate-200 text-sm">Top 10 Schools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#facc15] mb-1">{universities.filter(u => u.category === "International").length}</div>
              <div className="text-slate-200 text-sm">International</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#facc15] mb-1">{universities.length}+</div>
              <div className="text-slate-200 text-sm">Total Schools</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category 
                ? "bg-[#002366] text-white hover:bg-[#002366]/90" 
                : "border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white"
              }
              size="sm"
            >
              {category}
              <span className="ml-2 text-xs bg-[#facc15] text-[#002366] px-2 py-1 rounded-full">
                {category === "All" ? universities.length : universities.filter(u => u.category === category).length}
              </span>
            </Button>
          ))}
        </div>

        {/* University Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {displayedUniversities.map((uni) => (
            <div key={uni.name} className="group relative">
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 border border-slate-100 h-40">
                <div className="relative w-full h-16 mb-3">
                  <Image
                    src={uni.logoUrl || "/placeholder.svg"}
                    alt={`${uni.name} Logo`}
                    fill
                    className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xs font-semibold text-slate-700 group-hover:text-[#002366] transition-colors duration-300 leading-tight">
                    {uni.name.length > 20 ? `${uni.name.substring(0, 20)}...` : uni.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Award className="w-3 h-3 text-[#facc15]" />
                    <span className="text-xs text-slate-500">{uni.rank}</span>
                  </div>
                </div>
              </div>
              
              {/* Hover tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#002366] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 pointer-events-none">
                {uni.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#002366]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredUniversities.length > 12 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white px-8 py-3"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Show All {filteredUniversities.length} {selectedCategory === "All" ? "Universities" : selectedCategory + " Schools"}
                </>
              )}
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#facc15]/10 to-[#facc15]/5 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#002366] mb-4">
              Your Dream School is Waiting
            </h3>
            <p className="text-slate-600 mb-6">
              Join our network of scholars who are making their mark at the world's most prestigious institutions. 
              With our comprehensive support, your academic dreams are within reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/applications" 
                className="inline-flex items-center justify-center px-8 py-3 bg-[#002366] text-white font-semibold rounded-lg hover:bg-[#002366]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Apply for Scholarship
              </a>
              <a 
                href="/scholars" 
                className="inline-flex items-center justify-center px-8 py-3 bg-[#facc15] text-[#002366] font-semibold rounded-lg hover:bg-[#facc15]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Award className="w-5 h-5 mr-2" />
                Meet Our Scholars
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
