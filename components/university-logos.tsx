"use client"

import Image from "next/image"
import { GraduationCap } from "lucide-react"

const universities = [
  { name: "California Institute of Technology", logoUrl: "/logos/caltech.png" },
  { name: "Colby College", logoUrl: "/logos/colby.png" },
  { name: "Dartmouth College", logoUrl: "/logos/dartmouth.png" },
  { name: "Grambling State University", logoUrl: "/logos/grambling-updated.png" },
  { name: "University of Pennsylvania", logoUrl: "/logos/penn.png" },
  { name: "University of Chicago", logoUrl: "/logos/uchicago.png" },
  { name: "Yale University", logoUrl: "/logos/yale.png" }
]

export default function UniversityLogos() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#facc15]/20 to-[#facc15]/10 text-[#002366] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-[#facc15]/20">
            <GraduationCap className="w-5 h-5" />
            <span>Prestigious Placements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6 leading-tight">
            Where Our <span className="text-[#facc15]">Scholars</span> Excel
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our scholars have gained admission to some of the world's most prestigious institutions, 
            demonstrating excellence across diverse academic fields.
          </p>
        </div>

        {/* University Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {universities.map((uni, index) => (
            <div 
              key={uni.name} 
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-200/60 hover:border-[#facc15]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-40 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#facc15]/5 to-[#002366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative w-full h-16 mb-4 z-10">
                  <Image
                    src={uni.logoUrl || "/placeholder.svg"}
                    alt={`${uni.name} Logo`}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-700 group-hover:text-[#002366] text-center leading-tight z-10 transition-colors duration-300">
                  {uni.name}
                </h3>
                
                {/* Hover indicator */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-[#facc15] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-8 bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#002366] mb-1">{universities.length}</div>
              <div className="text-sm text-slate-600 font-medium">Top Universities</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#facc15] mb-1">100%</div>
              <div className="text-sm text-slate-600 font-medium">Success Rate</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#002366] mb-1">50+</div>
              <div className="text-sm text-slate-600 font-medium">Scholars Placed</div>
            </div>
          </div>
        </div> */}

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-[#002366] via-[#002366] to-blue-800 text-white rounded-3xl p-10 max-w-4xl mx-auto overflow-hidden shadow-2xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#facc15]/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#facc15]/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Your Dream School Awaits
              </h3>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our community of exceptional scholars who are making their mark at the world's most prestigious institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/get-involved/apply" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#facc15] text-[#002366] font-bold text-lg rounded-xl hover:bg-[#facc15]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <GraduationCap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Apply Now
                </a>
                <a 
                  href="/scholars/undergraduate" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Meet Our Scholars
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
