"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Heart, HandHeart, Briefcase, GraduationCap, Target, CheckCircle, Star, Search, Filter, MapPin, Calendar, Trophy, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Member {
  id: number
  first_name: string
  last_name: string
  role: string
  organization: string
  location: string
  profile_image: string
  bio: string
  status: string
  type: "mentor" | "volunteer" | "partner"
  expertise?: string[]
  years_involved?: number
}

export default function BecomeMemberPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([])
  const [organizations, setOrganizations] = useState<string[]>([])
  const [locations, setLocations] = useState<string[]>([])
  const [selectedOrganization, setSelectedOrganization] = useState<string>("")
  const [selectedLocation, setSelectedLocation] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<string>("all")

  // Sample members data
  const dummyMembers: Member[] = [
    {
      id: 1,
      first_name: "Dr. Sarah",
      last_name: "Mitchell",
      role: "Senior Mentor",
      organization: "Harvard Medical School",
      location: "Boston, USA",
      profile_image: "/placeholder-user.jpg",
      bio: "Experienced physician and educator passionate about supporting the next generation of healthcare professionals from Ghana.",
      status: "active",
      type: "mentor",
      expertise: ["Medicine", "Research", "Leadership"],
      years_involved: 3
    },
    {
      id: 2,
      first_name: "Michael",
      last_name: "Chen",
      role: "Career Advisor",
      organization: "Goldman Sachs",
      location: "New York, USA",
      profile_image: "/placeholder-user.jpg",
      bio: "Investment banking professional dedicated to mentoring students interested in finance and business careers.",
      status: "active",
      type: "mentor",
      expertise: ["Finance", "Investment Banking", "Career Development"],
      years_involved: 2
    },
    {
      id: 3,
      first_name: "Prof. Amara",
      last_name: "Johnson",
      role: "Academic Mentor",
      organization: "MIT",
      location: "Cambridge, USA",
      profile_image: "/placeholder-user.jpg",
      bio: "Computer Science professor and researcher helping students navigate STEM fields and graduate school applications.",
      status: "active",
      type: "mentor",
      expertise: ["Computer Science", "Research", "Graduate School"],
      years_involved: 5
    },
    {
      id: 4,
      first_name: "Emma",
      last_name: "Wilson",
      role: "Community Volunteer",
      organization: "Local Community Center",
      location: "Accra, Ghana",
      profile_image: "/placeholder-user.jpg",
      bio: "Local volunteer coordinating community outreach programs and supporting scholars' families back home.",
      status: "active",
      type: "volunteer",
      expertise: ["Community Outreach", "Family Support", "Event Planning"],
      years_involved: 1
    },
    {
      id: 5,
      first_name: "Dr. Robert",
      last_name: "Kwame",
      role: "Partnership Director",
      organization: "African Development Bank",
      location: "Abidjan, Côte d'Ivoire",
      profile_image: "/placeholder-user.jpg",
      bio: "Development finance expert facilitating institutional partnerships and funding opportunities for educational initiatives.",
      status: "active",
      type: "partner",
      expertise: ["Development Finance", "Partnerships", "Education Policy"],
      years_involved: 4
    },
    {
      id: 6,
      first_name: "Lisa",
      last_name: "Thompson",
      role: "Skills Volunteer",
      organization: "Tech for Good",
      location: "San Francisco, USA",
      profile_image: "/placeholder-user.jpg",
      bio: "Technology professional volunteering technical skills to improve foundation operations and scholar support systems.",
      status: "active",
      type: "volunteer",
      expertise: ["Technology", "Web Development", "Data Analysis"],
      years_involved: 2
    },
    {
      id: 7,
      first_name: "Dr. Kofi",
      last_name: "Asante",
      role: "Research Partner",
      organization: "University of Ghana",
      location: "Legon, Ghana",
      profile_image: "/placeholder-user.jpg",
      bio: "University researcher partnering on educational impact studies and scholar success metrics analysis.",
      status: "active",
      type: "partner",
      expertise: ["Education Research", "Data Analysis", "Impact Assessment"],
      years_involved: 3
    },
    {
      id: 8,
      first_name: "Maria",
      last_name: "Rodriguez",
      role: "Alumni Mentor",
      organization: "Microsoft",
      location: "Seattle, USA",
      profile_image: "/placeholder-user.jpg",
      bio: "Former Veritas scholar now working in tech, giving back by mentoring current scholars in technology fields.",
      status: "active",
      type: "mentor",
      expertise: ["Technology", "Software Engineering", "Career Transition"],
      years_involved: 1
    }
  ]

  // Initialize with dummy data
  useEffect(() => {
    const initializeData = () => {
      setMembers(dummyMembers)
      setFilteredMembers(dummyMembers)
      
      // Extract unique organizations and locations
      const uniqueOrganizations = [...new Set(dummyMembers.map(member => member.organization))]
      const uniqueLocations = [...new Set(dummyMembers.map(member => member.location))]
      
      setOrganizations(uniqueOrganizations)
      setLocations(uniqueLocations)
      setLoading(false)
    }

    // Simulate loading delay
    setTimeout(initializeData, 1000)
  }, [])

  // Filter members based on selected filters, search term, and active tab
  useEffect(() => {
    let filtered = members

    // Filter by tab
    if (activeTab === "mentor") {
      filtered = filtered.filter(member => member.type === "mentor")
    } else if (activeTab === "volunteer") {
      filtered = filtered.filter(member => member.type === "volunteer")
    } else if (activeTab === "partner") {
      filtered = filtered.filter(member => member.type === "partner")
    }

    if (selectedOrganization) {
      filtered = filtered.filter(member => member.organization === selectedOrganization)
    }

    if (selectedLocation) {
      filtered = filtered.filter(member => member.location === selectedLocation)
    }

    if (searchTerm) {
      filtered = filtered.filter(member =>
        `${member.first_name} ${member.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.organization.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredMembers(filtered)
  }, [members, selectedOrganization, selectedLocation, searchTerm, activeTab])

  const clearFilters = () => {
    setSelectedOrganization("")
    setSelectedLocation("")
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
                <Heart className="w-4 h-4" />
                <span>Get Involved</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Make an Impact
                <br />
                <span className="text-[#facc15]">With Us</span>
              </h1>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Are you ready to make an impact? Join the Veritas Foundation as a mentor, volunteer, or partner 
                and help make a difference in people's lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/get-involved/apply">
                  <Button className="bg-[#002366] hover:bg-[#002366]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    Apply to Join
                  </Button>
                </Link>
                <Link href="#members-directory">
                  <Button variant="outline" className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105">
                    Meet Our Members
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Members Directory Section */}
        <section id="members-directory" className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Our Community
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Meet our dedicated mentors, volunteers, and partners who are making a difference 
                in the lives of our scholars and their communities.
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
                    All Members
                  </TabsTrigger>
                  <TabsTrigger 
                    value="mentor" 
                    className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#002366] data-[state=active]:shadow-sm rounded-lg"
                  >
                    Mentors
                  </TabsTrigger>
                  <TabsTrigger 
                    value="volunteer" 
                    className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#002366] data-[state=active]:shadow-sm rounded-lg"
                  >
                    Volunteers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="partner" 
                    className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#002366] data-[state=active]:shadow-sm rounded-lg"
                  >
                    Partners
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
                        placeholder="Search members..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
                      />
                    </div>

                    {/* Organization Filter */}
                    <div className="relative">
                      <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <select
                        value={selectedOrganization}
                        onChange={(e) => setSelectedOrganization(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent appearance-none"
                      >
                        <option value="">All Organizations</option>
                        {organizations.map((org) => (
                          <option key={org} value={org}>{org}</option>
                        ))}
                      </select>
                    </div>

                    {/* Location Filter */}
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent appearance-none"
                      >
                        <option value="">All Locations</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>{location}</option>
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
                      Showing {filteredMembers.length} of {members.filter(m => activeTab === "all" ? true : m.type === activeTab).length} members
                      {activeTab !== "all" && ` in ${activeTab} category`}
                    </p>
                  </div>
                </div>

                {/* Members Grid */}
                {loading ? (
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#002366]"></div>
                    <p className="mt-4 text-slate-600">Loading members...</p>
                  </div>
                ) : (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredMembers.map((member) => (
                      <Card key={member.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <CardContent className="p-0">
                          {/* Member Image and Type */}
                          <div className="relative p-6 pb-4">
                            <div className="relative mx-auto w-24 h-24 mb-4">
                              <Image
                                src={member.profile_image || "/placeholder-user.jpg"}
                                width={96}
                                height={96}
                                alt={`${member.first_name} ${member.last_name}`}
                                className="rounded-full object-cover w-full h-full border-4 border-slate-100 group-hover:border-[#facc15] transition-colors duration-300"
                              />
                              {/* Type Badge */}
                              <div className="absolute -top-2 -right-2">
                                <Badge 
                                  className={`text-xs font-semibold ${
                                    member.type === 'mentor' 
                                      ? 'bg-blue-100 text-blue-800 border-blue-200' 
                                      : member.type === 'partner'
                                      ? 'bg-green-100 text-green-800 border-green-200'
                                      : 'bg-purple-100 text-purple-800 border-purple-200'
                                  }`}
                                  variant="outline"
                                >
                                  {member.type === 'mentor' ? 'Mentor' : member.type === 'partner' ? 'Partner' : 'Volunteer'}
                                </Badge>
                              </div>
                            </div>

                            <div className="text-center">
                              <h3 className="text-lg font-bold text-[#002366] mb-1">
                                {member.first_name} {member.last_name}
                              </h3>
                              <p className="text-slate-600 text-sm mb-2 font-medium">{member.role}</p>

                              <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-2">
                                <Building className="w-3 h-3" />
                                <span>{member.organization}</span>
                              </div>

                              <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-3">
                                <MapPin className="w-3 h-3" />
                                <span>{member.location}</span>
                              </div>

                              {member.years_involved && (
                                <div className="mb-3">
                                  <Badge variant="secondary" className="text-xs bg-[#facc15]/10 text-[#002366] border-[#facc15]/20">
                                    {member.years_involved} years involved
                                  </Badge>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Bio and Expertise */}
                          <div className="px-6 pb-6">
                            {member.bio && (
                              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                {member.bio.length > 120 ? `${member.bio.substring(0, 120)}...` : member.bio}
                              </p>
                            )}

                            {member.expertise && member.expertise.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Star className="w-4 h-4 text-[#facc15]" />
                                  <span className="text-xs font-semibold text-slate-700">Expertise</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {member.expertise.slice(0, 2).map((skill, index) => (
                                    <Badge 
                                      key={index} 
                                      variant="outline" 
                                      className="text-xs bg-slate-50 text-slate-600 border-slate-200"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                  {member.expertise.length > 2 && (
                                    <Badge 
                                      variant="outline" 
                                      className="text-xs bg-slate-50 text-slate-600 border-slate-200"
                                    >
                                      +{member.expertise.length - 2} more
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

                {filteredMembers.length === 0 && !loading && (
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-600 mb-2">No members found</h3>
                    <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Ways to Get Involved
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Choose how you'd like to contribute to our mission of transforming lives through education.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {/* Mentor */}
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl mb-6 group-hover:from-[#facc15] group-hover:to-[#facc15]/80 transition-all duration-500 shadow-lg">
                    <GraduationCap className="w-12 h-12 text-white group-hover:text-[#002366] transition-colors duration-500 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#002366] mb-4">Become a Mentor</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Share your expertise and guide scholars through their academic and career journeys. 
                    Make a lasting impact through one-on-one mentorship.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Career guidance and advice</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Academic support and resources</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Professional networking opportunities</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Apply to Mentor
                  </Button>
                </CardContent>
              </Card>

              {/* Volunteer */}
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl mb-6 group-hover:from-[#facc15] group-hover:to-[#facc15]/80 transition-all duration-500 shadow-lg">
                    <HandHeart className="w-12 h-12 text-white group-hover:text-[#002366] transition-colors duration-500 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#002366] mb-4">Volunteer</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Contribute your time and skills to support foundation operations, events, and community outreach programs.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Event planning and coordination</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Community outreach programs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Administrative and technical support</span>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    Volunteer Today
                  </Button>
                </CardContent>
              </Card>

              {/* Partner */}
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl mb-6 group-hover:from-[#facc15] group-hover:to-[#facc15]/80 transition-all duration-500 shadow-lg">
                    <Briefcase className="w-12 h-12 text-white group-hover:text-[#002366] transition-colors duration-500 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#002366] mb-4">Become a Partner</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Form strategic partnerships with us to expand our reach and impact through institutional collaboration.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Institutional partnerships</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Funding and resource sharing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Joint program development</span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Partner with Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-[#002366] via-[#002366] to-blue-900">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to Make a Difference?
              </h2>
              <p className="text-slate-200 md:text-lg/relaxed leading-relaxed font-light">
                Join our community of dedicated individuals who are committed to transforming lives through education. 
                Every contribution, big or small, makes a meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved/apply">
                  <Button className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    <Heart className="mr-2 h-5 w-5" />
                    Apply to Join
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002366] px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105">
                    <Target className="mr-2 h-5 w-5" />
                    Support Our Mission
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