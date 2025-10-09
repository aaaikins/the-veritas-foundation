"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, BookOpen, Award, Target, Heart, CheckCircle, Star, Search, Filter, MapPin, Calendar, Trophy, Building, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

interface UndergraduateScholar {
  id: number
  first_name: string
  last_name: string
  school: string
  graduation_year: number
  major: string
  profile_image: string
  bio: string
  achievements?: string[]
  home_country: string
}

const scholarsByYear = {
  2027: [
    {
      id: 1,
      first_name: "Amina",
      last_name: "Okafor",
      school: "MIT",
      graduation_year: 2027,
      major: "Electrical Engineering",
      profile_image: "/placeholder-user.jpg",
      bio: "Innovating in renewable energy systems, Amina is developing solar-powered solutions for rural communities in Ghana.",
      achievements: ["Outstanding Student Award", "IEEE Student Award", "First Year Excellence"],
      home_country: "Ghana"
    },
    {
      id: 2,
      first_name: "Kwame",
      last_name: "Asante",
      school: "California Institute of Technology",
      graduation_year: 2027,
      major: "Computer Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Passionate about AI for social good, Kwame is working on machine learning solutions for healthcare in underserved communities.",
      achievements: ["Dean's Honor List", "Programming Competition Winner"],
      home_country: "Ghana"
    },
    {
      id: 3,
      first_name: "Abena",
      last_name: "Mensah",
      school: "Harvard University",
      graduation_year: 2027,
      major: "Biomedical Engineering",
      profile_image: "/placeholder-user.jpg",
      bio: "Dedicated to creating affordable medical devices for low-resource settings, focusing on maternal health solutions.",
      achievements: ["Research Excellence Award", "Innovation Challenge Winner"],
      home_country: "Ghana"
    },
    {
      id: 4,
      first_name: "Emmanuel",
      last_name: "Boateng",
      school: "University of Pennsylvania",
      graduation_year: 2027,
      major: "Economics & Finance",
      profile_image: "/placeholder-user.jpg",
      bio: "Aspiring to work in development finance, Emmanuel studies sustainable economic growth models for emerging markets.",
      achievements: ["Economics Honor Society", "Financial Modeling Competition"],
      home_country: "Ghana"
    }
  ],
  2026: [
    {
      id: 5,
      first_name: "Sarah",
      last_name: "Johnson",
      school: "Harvard University",
      graduation_year: 2026,
      major: "Computer Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Passionate about AI and machine learning, Sarah is working on innovative solutions for healthcare accessibility.",
      achievements: ["Dean's List", "CS Research Award", "Hackathon Winner"],
      home_country: "Ghana"
    },
    {
      id: 6,
      first_name: "Fatima",
      last_name: "Al-Zahra",
      school: "Columbia University",
      graduation_year: 2026,
      major: "International Relations",
      profile_image: "/placeholder-user.jpg",
      bio: "Passionate about global diplomacy and conflict resolution, Fatima is preparing for a career in international development.",
      achievements: ["Model UN Award", "International Studies Excellence"],
      home_country: "Ghana"
    },
    {
      id: 7,
      first_name: "Kofi",
      last_name: "Twum",
      school: "Princeton University",
      graduation_year: 2026,
      major: "Public Policy",
      profile_image: "/placeholder-user.jpg",
      bio: "Committed to education reform in Ghana, Kofi researches policy solutions for improving rural school systems.",
      achievements: ["Public Policy Excellence", "Leadership Award", "Community Service Recognition"],
      home_country: "Ghana"
    },
    {
      id: 8,
      first_name: "Akosua",
      last_name: "Frimpong",
      school: "Yale University",
      graduation_year: 2026,
      major: "Environmental Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Environmental advocate working on climate change adaptation strategies for coastal communities in West Africa.",
      achievements: ["Environmental Leadership Award", "Research Publication"],
      home_country: "Ghana"
    }
  ],
  2025: [
    {
      id: 9,
      first_name: "Marcus",
      last_name: "Williams",
      school: "Stanford University",
      graduation_year: 2025,
      major: "Environmental Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Dedicated to sustainable development and climate change solutions, Marcus leads environmental initiatives on campus.",
      achievements: ["Environmental Leadership Award", "Research Publication"],
      home_country: "Ghana"
    },
    {
      id: 10,
      first_name: "Ama",
      last_name: "Sarpong",
      school: "University of Chicago",
      graduation_year: 2025,
      major: "Economics",
      profile_image: "/placeholder-user.jpg",
      bio: "Researching microfinance and its impact on rural communities, Ama aims to work in development economics.",
      achievements: ["Economics Excellence Award", "Research Grant Recipient"],
      home_country: "Ghana"
    },
    {
      id: 11,
      first_name: "Yaw",
      last_name: "Osei",
      school: "Duke University",
      graduation_year: 2025,
      major: "Biomedical Engineering",
      profile_image: "/placeholder-user.jpg",
      bio: "Developing low-cost diagnostic tools for tropical diseases, focusing on malaria prevention and treatment.",
      achievements: ["Innovation Award", "Biomedical Research Excellence"],
      home_country: "Ghana"
    },
    {
      id: 12,
      first_name: "Efua",
      last_name: "Appiah",
      school: "Brown University",
      graduation_year: 2025,
      major: "International Development",
      profile_image: "/placeholder-user.jpg",
      bio: "Passionate about education policy, Efua works on improving literacy rates in rural Ghanaian communities.",
      achievements: ["Development Studies Award", "Community Impact Recognition"],
      home_country: "Ghana"
    }
  ],
  2024: [
    {
      id: 13,
      first_name: "Kwaku",
      last_name: "Antwi",
      school: "Columbia University",
      graduation_year: 2024,
      major: "Civil Engineering",
      profile_image: "/placeholder-user.jpg",
      bio: "Specializing in sustainable infrastructure, Kwaku is completing his senior thesis on water management systems.",
      achievements: ["Engineering Excellence Award", "Senior Thesis Honors"],
      home_country: "Ghana"
    },
    {
      id: 14,
      first_name: "Adwoa",
      last_name: "Owusu",
      school: "Cornell University",
      graduation_year: 2024,
      major: "Agricultural Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Researching sustainable farming practices and food security solutions for smallholder farmers in Ghana.",
      achievements: ["Agricultural Innovation Award", "Research Excellence"],
      home_country: "Ghana"
    },
    {
      id: 15,
      first_name: "Kojo",
      last_name: "Asamoah",
      school: "Northwestern University",
      graduation_year: 2024,
      major: "Journalism & Media",
      profile_image: "/placeholder-user.jpg",
      bio: "Aspiring media professional committed to telling African stories and promoting positive narratives about the continent.",
      achievements: ["Media Excellence Award", "Documentary Competition Winner"],
      home_country: "Ghana"
    },
    {
      id: 16,
      first_name: "Nana",
      last_name: "Akoto",
      school: "Vanderbilt University",
      graduation_year: 2024,
      major: "Pre-Medicine",
      profile_image: "/placeholder-user.jpg",
      bio: "Future doctor dedicated to improving healthcare access in rural Ghana, with a focus on maternal and child health.",
      achievements: ["Pre-Med Excellence", "Volunteer Service Award"],
      home_country: "Ghana"
    }
  ]
}

export default function UndergraduateScholarsPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const years = Object.keys(scholarsByYear).map(Number).sort((a, b) => b - a)
  const allScholars = Object.values(scholarsByYear).flat()

  const filteredScholars = selectedYear 
    ? (scholarsByYear[selectedYear as keyof typeof scholarsByYear] || [])
    : allScholars

  const finalFilteredScholars = searchTerm
    ? filteredScholars.filter(scholar =>
        `${scholar.first_name} ${scholar.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholar.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholar.school.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredScholars

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
                Building Tomorrow's
                <br />
                <span className="text-[#facc15]">Leaders</span>
              </h1>

              <p className="text-slate-200 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Our undergraduate scholars are pursuing their bachelor's degrees at some of the world's most prestigious universities, 
                preparing to become the next generation of leaders, innovators, and changemakers.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#facc15] mb-2">{allScholars.length}</div>
                  <div className="text-slate-300 text-sm">Total Scholars</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#facc15] mb-2">{new Set(allScholars.map(s => s.school)).size}</div>
                  <div className="text-slate-300 text-sm">Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#facc15] mb-2">{new Set(allScholars.map(s => s.major)).size}</div>
                  <div className="text-slate-300 text-sm">Majors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#facc15] mb-2">4</div>
                  <div className="text-slate-300 text-sm">Class Years</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholars by Year Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            {/* Search and Year Filter */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Search */}
                  <div className="relative lg:col-span-2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search scholars by name, major, or university..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
                    />
                  </div>

                  {/* Year Filter */}
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <select
                      value={selectedYear || ""}
                      onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : null)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent appearance-none"
                    >
                      <option value="">All Years</option>
                      {years.map((year) => (
                        <option key={year} value={year}>Class of {year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-slate-600">
                    Showing {finalFilteredScholars.length} of {allScholars.length} undergraduate scholars
                    {selectedYear && ` from Class of ${selectedYear}`}
                  </p>
                </div>

                {selectedYear && (
                  <div className="mt-4 text-center">
                    <Button
                      onClick={() => setSelectedYear(null)}
                      variant="outline"
                      className="border-slate-300 text-slate-600 hover:bg-slate-100"
                    >
                      View All Years
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Scholars Display */}
            {selectedYear ? (
              // Single Year View
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#002366] mb-4">
                    Class of {selectedYear}
                  </h2>
                  <p className="text-slate-600 md:text-lg max-w-2xl mx-auto">
                    {scholarsByYear[selectedYear as keyof typeof scholarsByYear]?.length || 0} undergraduate scholars graduating in {selectedYear}
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {finalFilteredScholars.map((scholar) => (
                    <ScholarCard key={scholar.id} scholar={scholar} />
                  ))}
                </div>
              </div>
            ) : (
              // All Years View
              <div className="space-y-16">
                {years.map((year) => {
                  const yearScholars = scholarsByYear[year as keyof typeof scholarsByYear] || []
                  const filteredYearScholars = searchTerm
                    ? yearScholars.filter(scholar =>
                        `${scholar.first_name} ${scholar.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        scholar.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        scholar.school.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                    : yearScholars

                  if (filteredYearScholars.length === 0 && searchTerm) return null

                  return (
                    <div key={year}>
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#002366] mb-2">
                            Class of {year}
                          </h2>
                          <p className="text-slate-600">
                            {filteredYearScholars.length} scholar{filteredYearScholars.length !== 1 ? 's' : ''} graduating in {year}
                          </p>
                        </div>
                        <Button
                          onClick={() => setSelectedYear(year)}
                          variant="outline"
                          className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white"
                        >
                          View All {year}
                        </Button>
                      </div>

                      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredYearScholars.map((scholar) => (
                          <ScholarCard key={scholar.id} scholar={scholar} />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {finalFilteredScholars.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">No scholars found</h3>
                <p className="text-slate-500">Try adjusting your search criteria.</p>
              </div>
            )}
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

interface ScholarCardProps {
  scholar: UndergraduateScholar
}

function ScholarCard({ scholar }: ScholarCardProps) {
  return (
    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
      <CardContent className="p-0">
        {/* Scholar Image and Flag */}
        <div className="relative p-6 pb-4">
          <div className="relative mx-auto w-24 h-24 mb-4">
            <Image
              src={scholar.profile_image || "/placeholder-user.jpg"}
              width={96}
              height={96}
              alt={`${scholar.first_name} ${scholar.last_name}`}
              className="rounded-full object-cover w-full h-full border-4 border-slate-100 group-hover:border-[#facc15] transition-colors duration-300"
            />
            {/* Graduation Year Badge */}
            <div className="absolute -top-2 -right-2">
              <Badge 
                className="text-xs font-semibold bg-[#002366] text-white border-[#002366]"
                variant="outline"
              >
                '{scholar.graduation_year.toString().slice(-2)}
              </Badge>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold text-[#002366] mb-1">
              {scholar.first_name} {scholar.last_name}
            </h3>
            <p className="text-slate-600 text-sm mb-2 font-medium">{scholar.major}</p>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-2">
              <Building className="w-3 h-3" />
              <span>{scholar.school}</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-3">
              <MapPin className="w-3 h-3" />
              <span>{scholar.home_country}</span>
            </div>
          </div>
        </div>

        {/* Bio and Achievements */}
        <div className="px-6 pb-6">
          {scholar.bio && (
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {scholar.bio.length > 120 ? `${scholar.bio.substring(0, 120)}...` : scholar.bio}
            </p>
          )}

          {scholar.achievements && scholar.achievements.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-[#facc15]" />
                <span className="text-xs font-semibold text-slate-700">Achievements</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {scholar.achievements.slice(0, 2).map((achievement, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs bg-slate-50 text-slate-600 border-slate-200"
                  >
                    {achievement}
                  </Badge>
                ))}
                {scholar.achievements.length > 2 && (
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-slate-50 text-slate-600 border-slate-200"
                  >
                    +{scholar.achievements.length - 2} more
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}