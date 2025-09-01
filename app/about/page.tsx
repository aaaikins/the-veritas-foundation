import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BookOpen, Heart, Target, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TeamMembers from "@/components/team-members"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <span>About Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Our Story of
                <br />
                <span className="text-[#facc15]">Impact & Transformation</span>
              </h1>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Founded with a vision to break down barriers to education, The Veritas Foundation has been
                empowering individuals and communities for over a decade, creating pathways to opportunity
                and fostering lasting positive change.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-slate-600 md:text-lg leading-relaxed">
                    <p>
                      The Veritas Foundation was born from a simple yet powerful belief: that every individual,
                      regardless of their background or circumstances, deserves the opportunity to pursue their
                      dreams through education.
                    </p>
                    <p>
                      Founded in 2013 by a group of educators, community leaders, and philanthropists who witnessed
                      firsthand the systemic barriers preventing talented individuals from accessing higher education,
                      our organization has grown from a small grassroots initiative to a nationally recognized force
                      for educational equity.
                    </p>
                    <p>
                      What started as a single scholarship program has evolved into a comprehensive ecosystem of
                      support, including mentorship, career development, community outreach, and advocacy for
                      systemic change in educational access.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <Image
                    src="/logo.png"
                    width={400}
                    height={400}
                    alt="Veritas Foundation Logo"
                    className="rounded-2xl object-contain shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#facc15] w-24 h-24 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Our Mission & Vision
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                The guiding principles that drive everything we do and the future we envision for educational equity.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-l-4 border-[#facc15] shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#002366] mb-4">Mission</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To empower individuals by providing access to education, mentorship, and resources, enabling them
                  to realize their full potential and contribute meaningfully to society.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-l-4 border-[#002366] shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#002366] mb-4">Vision</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  A world where every person has the opportunity to pursue their dreams and create a better future
                  for themselves and their communities, free from systemic barriers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Programs Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Our Programs
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                We offer comprehensive support through multiple interconnected programs designed to address
                the various barriers to educational success.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#facc15]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                    <Award className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Scholarship Programs</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Comprehensive financial aid packages covering tuition, books, housing, and living expenses
                    for deserving students pursuing higher education.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#002366]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002366]/20 transition-colors duration-300">
                    <Users className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Mentorship Initiative</h3>
                  <p className="text-slate-600 leading-relaxed">
                    One-on-one and group mentorship connecting scholars with professionals, alumni, and community
                    leaders for guidance and support.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#facc15]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                    <BookOpen className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Academic Support</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tutoring, study skills workshops, and academic counseling to ensure scholars maintain
                    strong academic performance throughout their educational journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#002366]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002366]/20 transition-colors duration-300">
                    <Heart className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Community Outreach</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Programs that engage local communities, provide educational workshops, and build partnerships
                    with schools and organizations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#facc15]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                    <Target className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Career Development</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Internship opportunities, resume building, interview preparation, and career counseling
                    to prepare scholars for professional success.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#002366]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002366]/20 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Advocacy & Policy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Working with policymakers and institutions to address systemic barriers and promote
                    educational equity at a broader level.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Our Impact
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Through our comprehensive programs and partnerships, we've created lasting positive change
                in the lives of thousands of individuals and communities.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-[#002366]">2,500+</div>
                <div className="text-slate-600 font-medium">Scholars Supported</div>
                <div className="text-sm text-slate-500">Students who have received our scholarships and support</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-[#002366]">$15M+</div>
                <div className="text-slate-600 font-medium">Scholarships Awarded</div>
                <div className="text-sm text-slate-500">Total financial aid provided to our scholars</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-[#002366]">95%</div>
                <div className="text-slate-600 font-medium">Graduation Rate</div>
                <div className="text-sm text-slate-500">Of our scholars who complete their degrees</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-[#002366]">50+</div>
                <div className="text-slate-600 font-medium">Partner Organizations</div>
                <div className="text-sm text-slate-500">Universities, companies, and community partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <TeamMembers />


        {/* Call to Action */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Join Our Mission
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                Whether through volunteering, partnerships, or donations, there are many ways to support
                our work in creating educational equity and transforming lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate">
                  <Button className="bg-[#002366] hover:bg-[#002366]/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    Make a Donation
                  </Button>
                </Link>
                <Link href="/join-us">
                  <Button variant="outline" className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105 transition-all">
                    Get Involved
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
