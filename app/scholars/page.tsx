"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Users, BookOpen, Award, Target, Heart, CheckCircle, Star, Search, Filter, MapPin, Calendar, Trophy, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Scholar {
  id: number
  first_name: string
  last_name: string
  school: string
  graduation_year: number
  major: string
  profile_image: string
  bio: string
  status: string
  level: "undergraduate" | "graduate" | "alumni"
  achievements?: string[]
  current_position?: string
}

export default function ScholarsPage() {
  const [scholars, setScholars] = useState<Scholar[]>([])
  const [filteredScholars, setFilteredScholars] = useState<Scholar[]>([])
  const [schools, setSchools] = useState<string[]>([])
  const [graduationYears, setGraduationYears] = useState<number[]>([])
  const [selectedSchool, setSelectedSchool] = useState<string>("")
  const [selectedYear, setSelectedYear] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<string>("all")

  // Dummy scholars data
  const dummyScholars: Scholar[] = [
    {
      id: 1,
      first_name: "Sarah",
      last_name: "Johnson",
      school: "Harvard University",
      graduation_year: 2026,
      major: "Computer Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Passionate about AI and machine learning, Sarah is working on innovative solutions for healthcare accessibility.",
      status: "active",
      level: "undergraduate",
      achievements: ["Dean's List", "CS Research Award", "Hackathon Winner"]
    },
    {
      id: 2,
      first_name: "Marcus",
      last_name: "Williams",
      school: "Stanford University",
      graduation_year: 2025,
      major: "Environmental Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Dedicated to sustainable development and climate change solutions, Marcus leads environmental initiatives on campus.",
      status: "active",
      level: "undergraduate",
      achievements: ["Environmental Leadership Award", "Research Publication"]
    },
    {
      id: 3,
      first_name: "Amina",
      last_name: "Okafor",
      school: "MIT",
      graduation_year: 2027,
      major: "Electrical Engineering",
      profile_image: "/placeholder-user.jpg",
      bio: "Innovating in renewable energy systems, Amina is developing solar-powered solutions for rural communities.",
      status: "active",
      level: "undergraduate",
      achievements: ["Outstanding Student Award", "IEEE Student Award"]
    },
    {
      id: 4,
      first_name: "Dr. David",
      last_name: "Chen",
      school: "Yale University",
      graduation_year: 2024,
      major: "Public Policy (PhD)",
      profile_image: "/placeholder-user.jpg",
      bio: "Advocating for educational equity and social justice, David works with local policymakers to improve school systems.",
      status: "active",
      level: "graduate",
      achievements: ["Dissertation Excellence Award", "Policy Research Grant"],
      current_position: "PhD Candidate"
    },
    {
      id: 5,
      first_name: "Maria",
      last_name: "Rodriguez",
      school: "UC Berkeley",
      graduation_year: 2025,
      major: "Business Administration (MBA)",
      profile_image: "/placeholder-user.jpg",
      bio: "Entrepreneur focused on creating opportunities for underrepresented communities through innovative business models.",
      status: "active",
      level: "graduate",
      achievements: ["MBA Excellence Award", "Startup Competition Winner"],
      current_position: "MBA Student"
    },
    {
      id: 6,
      first_name: "James",
      last_name: "Thompson",
      school: "Princeton University",
      graduation_year: 2023,
      major: "Economics",
      profile_image: "/placeholder-user.jpg",
      bio: "Graduated with honors and now working at a leading financial institution, giving back through mentorship programs.",
      status: "alumni",
      level: "alumni",
      achievements: ["Summa Cum Laude", "Economics Honor Society"],
      current_position: "Financial Analyst at Goldman Sachs"
    },
    {
      id: 7,
      first_name: "Fatima",
      last_name: "Al-Zahra",
      school: "Columbia University",
      graduation_year: 2026,
      major: "International Relations",
      profile_image: "/placeholder-user.jpg",
      bio: "Passionate about global diplomacy and conflict resolution, Fatima is preparing for a career in international development.",
      status: "active",
      level: "undergraduate",
      achievements: ["Model UN Award", "International Studies Excellence"]
    },
    {
      id: 8,
      first_name: "Dr. Michael",
      last_name: "Brown",
      school: "University of Chicago",
      graduation_year: 2024,
      major: "Mathematics (PhD)",
      profile_image: "/placeholder-user.jpg",
      bio: "Mathematics prodigy working on advanced algorithms for data analysis and machine learning applications.",
      status: "active",
      level: "graduate",
      achievements: ["Outstanding Dissertation Award", "Mathematical Society Recognition"],
      current_position: "PhD Candidate"
    },
    {
      id: 9,
      first_name: "Lisa",
      last_name: "Wang",
      school: "Carnegie Mellon University",
      graduation_year: 2022,
      major: "Computer Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Software engineer at a leading tech company, specializing in artificial intelligence and machine learning.",
      status: "alumni",
      level: "alumni",
      achievements: ["Magna Cum Laude", "Best Senior Thesis Award"],
      current_position: "Senior Software Engineer at Google"
    },
    {
      id: 10,
      first_name: "Ahmed",
      last_name: "Hassan",
      school: "Johns Hopkins University",
      graduation_year: 2025,
      major: "Biomedical Engineering (MS)",
      profile_image: "/placeholder-user.jpg",
      bio: "Developing innovative medical devices for underserved communities, focusing on accessible healthcare technology.",
      status: "active",
      level: "graduate",
      achievements: ["Graduate Research Fellowship", "Biomedical Innovation Award"],
      current_position: "MS Student"
    }
  ]

  // Initialize with dummy data
  useEffect(() => {
    const initializeData = () => {
      setScholars(dummyScholars)
      setFilteredScholars(dummyScholars)
      
      // Extract unique schools and years
      const uniqueSchools = [...new Set(dummyScholars.map(scholar => scholar.school))]
      const uniqueYears = [...new Set(dummyScholars.map(scholar => scholar.graduation_year))].sort((a, b) => b - a)
      
      setSchools(uniqueSchools)
      setGraduationYears(uniqueYears)
      setLoading(false)
    }

    // Simulate loading delay
    setTimeout(initializeData, 1000)
  }, [])

  // Filter scholars based on selected filters, search term, and active tab
  useEffect(() => {
    let filtered = scholars

    // Filter by tab
    if (activeTab === "undergraduate") {
      filtered = filtered.filter(scholar => scholar.level === "undergraduate")
    } else if (activeTab === "graduate") {
      filtered = filtered.filter(scholar => scholar.level === "graduate")
    } else if (activeTab === "alumni") {
      filtered = filtered.filter(scholar => scholar.level === "alumni")
    }

    if (selectedSchool) {
      filtered = filtered.filter(scholar => scholar.school === selectedSchool)
    }

    if (selectedYear) {
      filtered = filtered.filter(scholar => scholar.graduation_year.toString() === selectedYear)
    }

    if (searchTerm) {
      filtered = filtered.filter(scholar =>
        `${scholar.first_name} ${scholar.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholar.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholar.school.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredScholars(filtered)
  }, [scholars, selectedSchool, selectedYear, searchTerm, activeTab])

  const clearFilters = () => {
    setSelectedSchool("")
    setSelectedYear("")
    setSearchTerm("")
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
                <Link href="/applications">
                  <Button className="bg-[#002366] hover:bg-[#002366]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    Apply for Scholarship
                  </Button>
                </Link>
                <Link href="#scholars-directory">
                  <Button variant="outline" className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105">
                    Meet Our Scholars
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Scholars Directory Section */}
        <section id="scholars-directory" className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Our Scholars
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Meet our remarkable scholars who are making a difference in their communities
                and pursuing their dreams with our support.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-slate-100 p-1 rounded-xl">
                  <TabsTrigger 
                    value="all" 
                    className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#002366] data-[state=active]:shadow-sm rounded-lg"
                  >
                    All Scholars
                  </TabsTrigger>
                  <TabsTrigger 
                    value="undergraduate" 
                    className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#002366] data-[state=active]:shadow-sm rounded-lg"
                  >
                    Undergraduate
                  </TabsTrigger>
                  <TabsTrigger 
                    value="graduate" 
                    className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#002366] data-[state=active]:shadow-sm rounded-lg"
                  >
                    Graduate
                  </TabsTrigger>
                  <TabsTrigger 
                    value="alumni" 
                    className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#002366] data-[state=active]:shadow-sm rounded-lg"
                  >
                    Alumni
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tab Content */}
              <TabsContent value={activeTab} className="mt-0">
                {/* Search and Filter Section */}
                <div className="bg-slate-50 rounded-2xl p-8 mb-12">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search scholars..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
                      />
                    </div>

                    {/* School Filter */}
                    <div className="relative">
                      <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <select
                        value={selectedSchool}
                        onChange={(e) => setSelectedSchool(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent appearance-none"
                      >
                        <option value="">All Schools</option>
                        {schools.map((school) => (
                          <option key={school} value={school}>{school}</option>
                        ))}
                      </select>
                    </div>

                    {/* Year Filter */}
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent appearance-none"
                      >
                        <option value="">All Years</option>
                        {graduationYears.map((year) => (
                          <option key={year} value={year.toString()}>{year}</option>
                        ))}
                      </select>
                    </div>

                    {/* Clear Filters */}
                    <Button
                      onClick={clearFilters}
                      variant="outline"
                      className="border-slate-300 text-slate-600 hover:bg-slate-100"
                    >
                      Clear Filters
                    </Button>
                  </div>

                  {/* Results Count */}
                  <div className="mt-6 text-center">
                    <p className="text-slate-600">
                      Showing {filteredScholars.length} of {scholars.filter(s => activeTab === "all" ? true : s.level === activeTab).length} scholars
                      {activeTab !== "all" && ` in ${activeTab} category`}
                    </p>
                  </div>
                </div>

                {/* Scholars Grid */}
                {loading ? (
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#002366]"></div>
                    <p className="mt-4 text-slate-600">Loading scholars...</p>
                  </div>
                ) : (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredScholars.map((scholar) => (
                      <Card key={scholar.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <CardContent className="p-0">
                          {/* Scholar Image and Status */}
                          <div className="relative p-6 pb-4">
                            <div className="relative mx-auto w-24 h-24 mb-4">
                              <Image
                                src={scholar.profile_image || "/placeholder-user.jpg"}
                                width={96}
                                height={96}
                                alt={`${scholar.first_name} ${scholar.last_name}`}
                                className="rounded-full object-cover w-full h-full border-4 border-slate-100 group-hover:border-[#facc15] transition-colors duration-300"
                              />
                              {/* Level Badge */}
                              <div className="absolute -top-2 -right-2">
                                <Badge 
                                  className={`text-xs font-semibold ${
                                    scholar.level === 'graduate' 
                                      ? 'bg-purple-100 text-purple-800 border-purple-200' 
                                      : scholar.level === 'alumni'
                                      ? 'bg-blue-100 text-blue-800 border-blue-200'
                                      : 'bg-green-100 text-green-800 border-green-200'
                                  }`}
                                  variant="outline"
                                >
                                  {scholar.level === 'graduate' ? 'Grad' : scholar.level === 'alumni' ? 'Alumni' : 'Undergrad'}
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
                                <Calendar className="w-3 h-3" />
                                <span>Class of {scholar.graduation_year}</span>
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

                          {/* Bio and Achievements */}
                          <div className="px-6 pb-6">
                            {scholar.bio && (
                              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                {scholar.bio}
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
                    ))}
                  </div>
                )}

                {filteredScholars.length === 0 && !loading && (
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-600 mb-2">No scholars found</h3>
                    <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
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
                <Link href="/join-us">
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
