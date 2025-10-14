import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Target, Heart, Globe, ArrowRight, GraduationCap, Laptop, MessageCircle, Megaphone, Eye, Compass } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WhatWeDoPage() {
  const quickLinks = [
    { title: "Our Story", href: "#our-story" },
    { title: "Mission & Vision", href: "#mission-vision" },
    { title: "Our Programs", href: "#programs" },
    { title: "Get Involved", href: "#get-involved" }
  ]

  const programs = [
    {
      icon: GraduationCap,
      title: "SAT Preparation Program",
      description: "We offer a free online-based preparation program that connects both Veritas Scholars and students outside the Scholars Program with experienced tutors who have scored 1500+ on the SAT. Through comprehensive virtual classes, we guide students step by step to excel on the Digital SAT and secure competitive scores for top universities.",
      link: "/programs/sat-prep"
    },
    {
      icon: Award,
      title: "Scholars Program", 
      description: "We support brilliant but needy students through step-by-step guidance in the application process, helping them secure fully funded scholarships for undergraduate and graduate studies at top universities in the United States and Canada.",
      link: "/applications",
      linkText: "Apply"
    },
    {
      icon: Users,
      title: "Mentorship & Community",
      description: "Scholars join a lifelong community of peers and mentors who support one another, share resources, and grow together throughout their studies abroad and beyond. Through the Mentorship Program, they also receive continuous guidance on career choices, campus opportunities, and personal growth."
    },
    {
      icon: Globe,
      title: "Community Outreach",
      description: "We partner with under-resourced schools and organizations to expand access to educational opportunities. Through guidance sessions, awareness programs, and long-term connections, we empower promising students to pursue higher education and build pathways to success beyond graduation."
    },
    {
      icon: MessageCircle,
      title: "Guidance & Counseling Sessions",
      description: "We create safe spaces where scholars in Ghana and abroad come together for open discussions, guidance, and encouragement. On special days, we host group sessions that strengthen mindsets, build resilience, and foster motivation. These gatherings allow scholars to share challenges, celebrate progress, and support one another."
    },
    {
      icon: Megaphone,
      title: "Advocacy and Policy",
      description: "We advocate for educational equity and policy reforms that create systemic change. Through research, partnerships, and advocacy initiatives, we work to address the root causes of educational inequality and create lasting impact beyond individual scholarships."
    }
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-br from-[#002366] via-[#003d82] to-[#0056b3] text-white py-24 md:py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(250,204,21,0.3)_0%,transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.2)_0%,transparent_50%)]"></div>
          </div>

          <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-[#facc15]/20 text-[#facc15] border-[#facc15]/30 font-semibold mb-6">
              ABOUT US
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              What We Do
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100">
              Empowering minds, transforming lives, and building a brighter future through comprehensive educational support and mentorship.
            </p>

            {/* Quick Access Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-[#002366]/10 text-[#002366] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <span>OUR STORY</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Our Foundation Story
                </h2>
                <div className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  <p>
                    The Veritas Foundation was born from a simple yet powerful belief: that every individual, regardless of background or circumstance, deserves the chance to pursue their dreams through education. Founded in 2023, The Veritas Foundation Inc. is a registered 501(c)(3) non-profit organization created to close the gap for brilliant students whose only barrier to higher education is financial instability. Through step-by-step support, we equip our scholars to gain admission and thrive at top universities in the United States and Canada on fully funded scholarships at both the undergraduate and graduate levels. Beyond admission, we continue to guide them through their studies and build a strong community of scholars who support one another and grow into leaders capable of transforming the world.
                  </p>
                </div>
              </div>

              {/* Image - Right */}
              <div className="order-1 lg:order-2">
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/gallery/scholars/2023-2024/Emanuel_Dartmouth.jpg"
                    alt="Emmanuel Dey, Scholar at Dartmouth College"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      Emmanuel - Scholar at Dartmouth College
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission-vision" className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Mission & Vision
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our driving purpose and the future we envision
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mission */}
              <Card className="border-0 shadow-xl bg-white h-full group hover:shadow-2xl transition-all duration-500">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-[#002366] to-[#0056b3] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Compass className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-[#002366] mb-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To empower brilliant but financially disadvantaged students by providing comprehensive support, mentorship, and resources to help them secure fully funded scholarships at top universities in the United States and Canada, fostering a community of global leaders committed to positive change.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-0 shadow-xl bg-white h-full group hover:shadow-2xl transition-all duration-500">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-[#002366]" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-[#002366] mb-4">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    A world where financial barriers never limit academic potential, where every brilliant mind has access to world-class education, and where our scholars become catalysts for transformative change in their communities and beyond.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visual Impact Banner */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src="/gallery/scholars-outreach-group.jpg" // Group picture of scholars on outreach
            alt="Veritas Foundation scholars during community outreach program"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="max-w-4xl mx-auto px-6">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                Transforming Communities Together
              </h3>
              <p className="text-xl md:text-2xl text-white/90">
                Our scholars making a difference through community outreach and education
              </p>
            </div>
          </div>
        </section>

        {/* Our Programs Section */}
        <section id="programs" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#002366]/10 text-[#002366] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span>OUR PROGRAMS</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Comprehensive Support Programs
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From SAT preparation to lifelong mentorship, we provide end-to-end support for educational success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const IconComponent = program.icon
                return (
                  <Card key={index} className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white group hover:-translate-y-2">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-[#002366]" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-[#002366] mb-4">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-slate-600 leading-relaxed mb-6 flex-1">
                        {program.description}
                      </CardDescription>
                      {program.link && (
                        <Link href={program.link}>
                          <Button variant="ghost" className="w-full justify-between text-[#002366] hover:text-[#facc15] hover:bg-transparent">
                            <span> {program.linkText || "Learn More"}</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Donation Advertisement */}
        <section id="get-involved" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image - Left */}
              <div className="order-2 lg:order-1">
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/gallery/scholar-mentoring-student.jpg" // Scholar speaking to student
                    alt="Veritas scholar mentoring a student"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content - Right */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-[#facc15]/20 text-[#002366] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Heart size={16} />
                  <span>BUILDING THE FUTURE</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Building the Future Together
                </h2>
                <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-4 mb-8">
                  <p>
                    Our future projects include Honors Programs in senior and junior high schools, where we identify brilliant but needy students early, mentor them, and prepare them for higher education through SAT training, leadership development, and academic guidance.
                  </p>
                  <p>
                    We also aim to cover key expenses such as school fees for junior high school students, motivating them to pursue excellence and preparing them to join the Scholars Program in the future.
                  </p>
                  <p className="font-semibold text-[#002366]">
                    These future programs, and more will only be possible through your generosity. Donate now to support the dream of a child whose future is limited only by financial barriers.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Link href="/donate">
                    <Button 
                      size="lg"
                      className="bg-[#002366] hover:bg-[#002366]/90 text-[#facc15] font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group"
                    >
                      Donate Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}