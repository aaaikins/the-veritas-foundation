"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, BookOpen, Award, Target, Heart, CheckCircle, Star, Search, Filter, MapPin, Calendar, Trophy, Building, ArrowLeft, Brain, Microscope, Scale } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

interface GraduateScholar {
  id: number
  first_name: string
  last_name: string
  school: string
  graduation_year: number
  degree_type: "PhD" | "Masters" | "JD" | "MD" | "MBA"
  field_of_study: string
  profile_image: string
  bio: string
  achievements?: string[]
  current_position?: string
  research_focus?: string
  home_country: string
}

const scholarsByProgram = {
  "PhD": [
    {
      id: 1,
      first_name: "Dr. David",
      last_name: "Chen",
      school: "Yale University",
      graduation_year: 2024,
      degree_type: "PhD" as const,
      field_of_study: "Public Policy",
      profile_image: "/placeholder-user.jpg",
      bio: "Advocating for educational equity and social justice, David works with local policymakers to improve school systems in Ghana and the broader West African region.",
      achievements: ["Dissertation Excellence Award", "Policy Research Grant", "Outstanding Teaching Assistant"],
      current_position: "PhD Candidate",
      research_focus: "Educational Policy and Social Equity",
      home_country: "Ghana"
    },
    {
      id: 2,
      first_name: "Dr. Michael",
      last_name: "Brown",
      school: "University of Chicago",
      graduation_year: 2024,
      degree_type: "PhD" as const,
      field_of_study: "Mathematics",
      profile_image: "/placeholder-user.jpg",
      bio: "Mathematics prodigy working on advanced algorithms for data analysis and machine learning applications with focus on applications for developing economies.",
      achievements: ["Outstanding Dissertation Award", "Mathematical Society Recognition", "Research Excellence Grant"],
      current_position: "PhD Candidate",
      research_focus: "Applied Mathematics and Data Science",
      home_country: "Ghana"
    },
    {
      id: 3,
      first_name: "Dr. Aisha",
      last_name: "Mohammed",
      school: "Stanford University",
      graduation_year: 2025,
      degree_type: "PhD" as const,
      field_of_study: "Computer Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Researching artificial intelligence applications for healthcare in low-resource settings, developing AI-powered diagnostic tools for rural clinics.",
      achievements: ["AI Research Fellowship", "Best Paper Award", "Innovation Grant"],
      current_position: "PhD Candidate",
      research_focus: "AI for Global Health",
      home_country: "Ghana"
    },
    {
      id: 4,
      first_name: "Dr. Emmanuel",
      last_name: "Gyasi",
      school: "MIT",
      graduation_year: 2025,
      degree_type: "PhD" as const,
      field_of_study: "Electrical Engineering",
      profile_image: "/placeholder-user.jpg",
      bio: "Developing sustainable energy solutions for rural electrification in Africa, focusing on solar microgrids and energy storage systems.",
      achievements: ["Engineering Excellence Award", "Sustainability Research Grant"],
      current_position: "PhD Candidate",
      research_focus: "Renewable Energy Systems",
      home_country: "Ghana"
    }
  ],
  "Masters": [
    {
      id: 5,
      first_name: "Ahmed",
      last_name: "Hassan",
      school: "Johns Hopkins University",
      graduation_year: 2025,
      degree_type: "Masters" as const,
      field_of_study: "Biomedical Engineering",
      profile_image: "/placeholder-user.jpg",
      bio: "Developing innovative medical devices for underserved communities, focusing on accessible healthcare technology and diagnostic tools.",
      achievements: ["Graduate Research Fellowship", "Biomedical Innovation Award", "Student Leadership Recognition"],
      current_position: "MS Student",
      research_focus: "Medical Device Innovation",
      home_country: "Ghana"
    },
    {
      id: 6,
      first_name: "Priscilla",
      last_name: "Osei",
      school: "Columbia University",
      graduation_year: 2024,
      degree_type: "Masters" as const,
      field_of_study: "Public Health",
      profile_image: "/placeholder-user.jpg",
      bio: "Specializing in global health policy and maternal health, working on improving healthcare access for women in rural Ghana.",
      achievements: ["Public Health Excellence Award", "Research Publication", "Field Work Recognition"],
      current_position: "MPH Student",
      research_focus: "Maternal and Child Health",
      home_country: "Ghana"
    },
    {
      id: 7,
      first_name: "Kwame",
      last_name: "Adjei",
      school: "University of California, Berkeley",
      graduation_year: 2024,
      degree_type: "Masters" as const,
      field_of_study: "Environmental Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Researching climate change adaptation strategies for West African agricultural systems, focusing on sustainable farming practices.",
      achievements: ["Environmental Research Award", "Climate Science Fellowship"],
      current_position: "MS Student",
      research_focus: "Climate Adaptation Agriculture",
      home_country: "Ghana"
    },
    {
      id: 8,
      first_name: "Grace",
      last_name: "Amankwah",
      school: "Harvard Kennedy School",
      graduation_year: 2025,
      degree_type: "Masters" as const,
      field_of_study: "Development Economics",
      profile_image: "/placeholder-user.jpg",
      bio: "Studying microfinance and economic development in emerging markets, with a focus on women's economic empowerment in rural communities.",
      achievements: ["Development Economics Fellowship", "Policy Analysis Award"],
      current_position: "MPA Student",
      research_focus: "Microfinance and Development",
      home_country: "Ghana"
    }
  ],
  "MBA": [
    {
      id: 9,
      first_name: "Maria",
      last_name: "Rodriguez",
      school: "UC Berkeley Haas",
      graduation_year: 2025,
      degree_type: "MBA" as const,
      field_of_study: "Business Administration",
      profile_image: "/placeholder-user.jpg",
      bio: "Entrepreneur focused on creating opportunities for underrepresented communities through innovative business models and social enterprises.",
      achievements: ["MBA Excellence Award", "Startup Competition Winner", "Leadership Recognition"],
      current_position: "MBA Student",
      research_focus: "Social Entrepreneurship",
      home_country: "Ghana"
    },
    {
      id: 10,
      first_name: "Kofi",
      last_name: "Mensah",
      school: "Wharton School, University of Pennsylvania",
      graduation_year: 2024,
      degree_type: "MBA" as const,
      field_of_study: "Finance & Strategy",
      profile_image: "/placeholder-user.jpg",
      bio: "Specializing in impact investing and sustainable finance, working on developing financial products for emerging market development.",
      achievements: ["Finance Excellence Award", "Impact Investing Competition"],
      current_position: "MBA Student",
      research_focus: "Impact Investing",
      home_country: "Ghana"
    }
  ],
  "Professional": [
    {
      id: 11,
      first_name: "Akosua",
      last_name: "Poku",
      school: "Harvard Medical School",
      graduation_year: 2026,
      degree_type: "MD" as const,
      field_of_study: "Medicine",
      profile_image: "/placeholder-user.jpg",
      bio: "Future physician committed to improving healthcare access in rural Ghana, with particular interest in tropical medicine and public health.",
      achievements: ["Medical Excellence Award", "Clinical Research Recognition"],
      current_position: "Medical Student",
      research_focus: "Tropical Medicine",
      home_country: "Ghana"
    },
    {
      id: 12,
      first_name: "Yaw",
      last_name: "Oppong",
      school: "Stanford Law School",
      graduation_year: 2025,
      degree_type: "JD" as const,
      field_of_study: "International Law",
      profile_image: "/placeholder-user.jpg",
      bio: "Aspiring lawyer focused on human rights and international development law, committed to advancing justice and legal reform in West Africa.",
      achievements: ["Legal Excellence Award", "Human Rights Fellowship", "Moot Court Champion"],
      current_position: "JD Student",
      research_focus: "Human Rights Law",
      home_country: "Ghana"
    }
  ]
}

export default function GraduateScholarsPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const programs = Object.keys(scholarsByProgram)
  const allScholars = Object.values(scholarsByProgram).flat()

  const filteredScholars = selectedProgram 
    ? (scholarsByProgram[selectedProgram as keyof typeof scholarsByProgram] || [])
    : allScholars

  const finalFilteredScholars = searchTerm
    ? filteredScholars.filter(scholar =>
        `${scholar.first_name} ${scholar.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholar.field_of_study.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholar.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholar.research_focus?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredScholars

  const getProgramIcon = (program: string) => {
    switch (program) {
      case 'PhD': return <Brain className="w-5 h-5" />
      case 'Masters': return <Microscope className="w-5 h-5" />
      case 'MBA': return <Target className="w-5 h-5" />
      case 'Professional': return <Scale className="w-5 h-5" />
      default: return <GraduationCap className="w-5 h-5" />
    }
  }

  const getProgramDescription = (program: string) => {
    switch (program) {
      case 'PhD': return 'Doctoral students conducting groundbreaking research'
      case 'Masters': return 'Master\'s students specializing in their fields'
      case 'MBA': return 'Business leaders developing entrepreneurial skills'
      case 'Professional': return 'Students in medical, law, and professional programs'
      default: return ''
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-purple-200 text-sm">
                <Link href="/scholars" className="hover:text-white transition-colors">
                  Scholars
                </Link>
                <span>/</span>
                <span className="text-[#facc15]">Graduate</span>
              </div>

              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#facc15] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <GraduationCap className="w-4 h-4" />
                <span>Graduate Scholars</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Meet the Graduate
                <br />
                <span className="text-[#facc15]">Scholars</span>
              </h1>

              <p className="text-purple-100 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Our graduate scholars are pursuing advanced degrees and conducting cutting-edge research 
                that will drive innovation and positive change in Ghana and across Africa.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#facc15] mb-2">{allScholars.length}</div>
                  <div className="text-purple-200 text-sm">Total Scholars</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#facc15] mb-2">{new Set(allScholars.map(s => s.school)).size}</div>
                  <div className="text-purple-200 text-sm">Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#facc15] mb-2">{new Set(allScholars.map(s => s.field_of_study)).size}</div>
                  <div className="text-purple-200 text-sm">Fields</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#facc15] mb-2">{programs.length}</div>
                  <div className="text-purple-200 text-sm">Program Types</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Categories */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#002366] mb-4">
                Graduate Programs
              </h2>
              <p className="text-slate-600 md:text-lg max-w-2xl mx-auto">
                Our scholars are pursuing advanced degrees across multiple disciplines
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              {programs.map((program) => {
                const programScholars = scholarsByProgram[program as keyof typeof scholarsByProgram] || []
                return (
                  <Card 
                    key={program} 
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                      selectedProgram === program 
                        ? 'border-[#facc15] bg-[#facc15]/5' 
                        : 'border-transparent hover:border-slate-200'
                    }`}
                    onClick={() => setSelectedProgram(selectedProgram === program ? null : program)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center mb-3 text-[#002366]">
                        {getProgramIcon(program)}
                      </div>
                      <h3 className="text-lg font-bold text-[#002366] mb-2">
                        {program === 'Professional' ? 'Professional Degrees' : program}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3">
                        {getProgramDescription(program)}
                      </p>
                      <div className="text-2xl font-bold text-[#facc15]">
                        {programScholars.length}
                      </div>
                      <div className="text-slate-500 text-xs">scholars</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {selectedProgram && (
              <div className="text-center">
                <Button
                  onClick={() => setSelectedProgram(null)}
                  variant="outline"
                  className="border-slate-300 text-slate-600 hover:bg-slate-100"
                >
                  View All Programs
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Scholars by Program Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            {/* Search Filter */}
            <div className="bg-white rounded-2xl p-8 mb-16 shadow-sm">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search scholars by name, field, university, or research focus..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-slate-600">
                    Showing {finalFilteredScholars.length} of {allScholars.length} graduate scholars
                    {selectedProgram && ` in ${selectedProgram === 'Professional' ? 'Professional Programs' : selectedProgram} programs`}
                  </p>
                </div>
              </div>
            </div>

            {/* Scholars Display */}
            {selectedProgram ? (
              // Single Program View
              <div>
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="text-[#002366]">
                      {getProgramIcon(selectedProgram)}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#002366]">
                      {selectedProgram === 'Professional' ? 'Professional Degree' : selectedProgram} Scholars
                    </h2>
                  </div>
                  <p className="text-slate-600 md:text-lg max-w-2xl mx-auto">
                    {getProgramDescription(selectedProgram)}
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {finalFilteredScholars.map((scholar) => (
                    <GraduateScholarCard key={scholar.id} scholar={scholar} />
                  ))}
                </div>
              </div>
            ) : (
              // All Programs View
              <div className="space-y-16">
                {programs.map((program) => {
                  const programScholars = scholarsByProgram[program as keyof typeof scholarsByProgram] || []
                  const filteredProgramScholars = searchTerm
                    ? programScholars.filter(scholar =>
                        `${scholar.first_name} ${scholar.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        scholar.field_of_study.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        scholar.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        scholar.research_focus?.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                    : programScholars

                  if (filteredProgramScholars.length === 0 && searchTerm) return null

                  return (
                    <div key={program}>
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className="text-[#002366]">
                            {getProgramIcon(program)}
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#002366] mb-2">
                              {program === 'Professional' ? 'Professional Degrees' : program}
                            </h2>
                            <p className="text-slate-600">
                              {filteredProgramScholars.length} scholar{filteredProgramScholars.length !== 1 ? 's' : ''} • {getProgramDescription(program)}
                            </p>
                          </div>
                        </div>
                        <Button
                          onClick={() => setSelectedProgram(program)}
                          variant="outline"
                          className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white"
                        >
                          View All {program}
                        </Button>
                      </div>

                      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProgramScholars.map((scholar) => (
                          <GraduateScholarCard key={scholar.id} scholar={scholar} />
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
                Support Graduate Education
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                Graduate education is key to developing the research leaders and innovators Africa needs. 
                Your support helps fund advanced degrees that drive breakthrough discoveries and solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/applications">
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    <Brain className="mr-2 h-5 w-5" />
                    Apply for Graduate Support
                  </Button>
                </Link>
                <Link href="/scholars/undergraduate">
                  <Button variant="outline" className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105">
                    View Undergraduate Scholars
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

interface GraduateScholarCardProps {
  scholar: GraduateScholar
}

function GraduateScholarCard({ scholar }: GraduateScholarCardProps) {
  const getDegreeColor = (degree: string) => {
    switch (degree) {
      case 'PhD': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Masters': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'MBA': return 'bg-green-100 text-green-800 border-green-200'
      case 'MD': return 'bg-red-100 text-red-800 border-red-200'
      case 'JD': return 'bg-orange-100 text-orange-800 border-orange-200'
      default: return 'bg-slate-100 text-slate-800 border-slate-200'
    }
  }

  return (
    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden h-full">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Scholar Image and Degree */}
        <div className="relative p-6 pb-4">
          <div className="relative mx-auto w-24 h-24 mb-4">
            <Image
              src={scholar.profile_image || "/placeholder-user.jpg"}
              width={96}
              height={96}
              alt={`${scholar.first_name} ${scholar.last_name}`}
              className="rounded-full object-cover w-full h-full border-4 border-slate-100 group-hover:border-[#facc15] transition-colors duration-300"
            />
            {/* Degree Type Badge */}
            <div className="absolute -top-2 -right-2">
              <Badge 
                className={`text-xs font-semibold ${getDegreeColor(scholar.degree_type)}`}
                variant="outline"
              >
                {scholar.degree_type}
              </Badge>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold text-[#002366] mb-1">
              {scholar.first_name} {scholar.last_name}
            </h3>
            <p className="text-slate-600 text-sm mb-2 font-medium">{scholar.field_of_study}</p>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-2">
              <Building className="w-3 h-3" />
              <span>{scholar.school}</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-3">
              <Calendar className="w-3 h-3" />
              <span>Expected {scholar.graduation_year}</span>
            </div>

            {scholar.current_position && (
              <div className="mb-3">
                <Badge variant="secondary" className="text-xs bg-[#facc15]/10 text-[#002366] border-[#facc15]/20">
                  {scholar.current_position}
                </Badge>
              </div>
            )}
          </div>
        </div>

        {/* Bio, Research Focus, and Achievements */}
        <div className="px-6 pb-6 flex-1 flex flex-col">
          {scholar.bio && (
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {scholar.bio.length > 120 ? `${scholar.bio.substring(0, 120)}...` : scholar.bio}
            </p>
          )}

          {scholar.research_focus && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Microscope className="w-4 h-4 text-[#002366]" />
                <span className="text-xs font-semibold text-slate-700">Research Focus</span>
              </div>
              <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                {scholar.research_focus}
              </Badge>
            </div>
          )}

          {scholar.achievements && scholar.achievements.length > 0 && (
            <div className="mt-auto">
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