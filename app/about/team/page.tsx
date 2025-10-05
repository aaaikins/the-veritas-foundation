import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Award, Users, Heart, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Director of Academic Programs",
      image: "/placeholder-user.jpg",
      bio: "Dr. Johnson brings over 15 years of experience in educational leadership and student development. She specializes in curriculum design and academic mentorship programs.",
      expertise: ["Academic Mentorship", "Curriculum Development", "Student Assessment"],
      education: "Ph.D. in Educational Leadership, Harvard University"
    },
    {
      name: "Michael Chen",
      role: "Program Coordinator", 
      image: "/placeholder-user.jpg",
      bio: "Michael oversees day-to-day operations and student engagement initiatives. His background in nonprofit management ensures smooth program delivery.",
      expertise: ["Program Management", "Student Engagement", "Community Outreach"],
      education: "M.A. in Nonprofit Management, Stanford University"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Research & Development Lead",
      image: "/placeholder-user.jpg", 
      bio: "Dr. Patel leads our research initiatives and program evaluation efforts. She ensures our programs are evidence-based and continuously improved.",
      expertise: ["Educational Research", "Program Evaluation", "Data Analysis"],
      education: "Ph.D. in Educational Psychology, UC Berkeley"
    },
    {
      name: "James Rodriguez",
      role: "Student Support Specialist",
      image: "/placeholder-user.jpg",
      bio: "James provides direct support to students, helping them navigate academic challenges and personal development opportunities.",
      expertise: ["Student Counseling", "Crisis Support", "Life Skills Development"],
      education: "M.S. in School Counseling, Teachers College"
    },
    {
      name: "Lisa Thompson",
      role: "Communications Manager",
      image: "/placeholder-user.jpg",
      bio: "Lisa manages our communications strategy and community engagement efforts, ensuring our impact stories reach the right audiences.",
      expertise: ["Strategic Communications", "Social Media", "Community Relations"],
      education: "B.A. in Communications, Northwestern University"
    },
    {
      name: "David Kim",
      role: "Finance & Operations",
      image: "/placeholder-user.jpg",
      bio: "David ensures financial transparency and operational efficiency, managing budgets and resource allocation for maximum impact.",
      expertise: ["Financial Management", "Operations", "Resource Planning"],
      education: "MBA in Finance, Wharton School"
    }
  ]

  const advisors = [
    {
      name: "Prof. Elizabeth Williams",
      role: "Educational Advisor",
      organization: "Former Dean, School of Education",
      expertise: "Higher Education Policy"
    },
    {
      name: "Dr. Robert Chang",
      role: "Research Advisor", 
      organization: "Educational Research Institute",
      expertise: "Student Success Metrics"
    },
    {
      name: "Maria Gonzalez",
      role: "Community Advisor",
      organization: "Community Development Leader",
      expertise: "Community Engagement"
    }
  ]

  const stats = [
    { number: "15+", label: "Team Members" },
    { number: "50+", label: "Combined Years of Experience" },
    { number: "1000+", label: "Students Impacted" },
    { number: "25+", label: "Partner Organizations" }
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#002366] via-[#003d82] to-[#0056b3] text-white py-20">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 bg-[#facc15] text-[#002366] font-semibold">
              Meet Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Dedicated professionals united by a shared passion for empowering students and transforming lives through education.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#facc15] mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#002366]">Our Collective Mission</h2>
              <p className="text-xl leading-relaxed text-slate-700 mb-8">
                We are a diverse team of educators, researchers, and community advocates who share a common vision: 
                to unlock the potential in every student we serve. Our combined expertise spans education, psychology, 
                nonprofit management, and community development.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Together, we create an environment where students don't just succeed academically—they develop into 
                confident leaders, critical thinkers, and compassionate individuals ready to make a positive impact in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Core Team</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Meet the dedicated professionals who work tirelessly to support our students and advance our mission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group overflow-hidden">
                  <div className="relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#002366] mb-2 text-sm">Education</h4>
                      <p className="text-slate-600 text-sm">{member.education}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-[#002366] mb-2 text-sm">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Advisory Board</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Distinguished leaders and experts who provide strategic guidance and expertise to our organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {advisors.map((advisor, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-[#002366]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#002366] mb-2">{advisor.name}</h3>
                    <p className="text-sm font-semibold text-slate-700 mb-2">{advisor.role}</p>
                    <p className="text-sm text-slate-600 mb-3">{advisor.organization}</p>
                    <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                      {advisor.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">What Drives Us</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The shared values and principles that unite our team in pursuit of educational excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#0056b3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#002366]">Passion</h3>
                <p className="text-slate-600 leading-relaxed">
                  We are deeply passionate about education and genuinely care about each student's success and well-being.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-[#002366]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#002366]">Collaboration</h3>
                <p className="text-slate-600 leading-relaxed">
                  We work together as a cohesive team, leveraging our diverse skills to create the best possible outcomes for students.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#0056b3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#002366]">Growth</h3>
                <p className="text-slate-600 leading-relaxed">
                  We are committed to continuous learning and improvement, both for ourselves and the students we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 bg-gradient-to-br from-[#002366] to-[#0056b3] text-white">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Are you passionate about education and student empowerment? We're always looking for dedicated 
              professionals who share our vision and want to make a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 font-semibold">
                <Link href="/join-us">
                  View Open Positions
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#002366] font-semibold">
                <Link href="mailto:careers@veritasfoundation.org">
                  Send Your Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}