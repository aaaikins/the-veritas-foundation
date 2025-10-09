import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: "Emmanuel Aikins Acheampong",
      role: "Founder & Executive Director",
      image: "/placeholder-user.jpg",
      bio: "A first-generation scholar from the Northern Region of Ghana, currently pursuing his studies in the United States. Emmanuel founded Veritas after experiencing firsthand the challenges brilliant students face without proper guidance. Has mentored 30+ scholars into top U.S. universities including Caltech, UPenn, and Grambling State, with over $5M in scholarships secured."
    },
    {
      name: "Sarah Mensah",
      role: "Program Coordinator",
      image: "/placeholder-user.jpg", 
      bio: "A development studies graduate from the University of Ghana, now working in nonprofit management in Accra. Sarah coordinates outreach programs across Northern Ghana's high schools. Has directly impacted 200+ students through guidance sessions and connected 15 scholars to the foundation's programs."
    },
    {
      name: "Kwame Asante",
      role: "SAT Preparation Lead",
      image: "/placeholder-user.jpg",
      bio: "A computer science student at MIT who scored 1580 on the SAT. Originally from Kumasi, Ghana, Kwame leads our online SAT preparation program. Has tutored over 100 students, with 80% achieving scores above 1400 and 25+ gaining admission to top-tier universities."
    },
    {
      name: "Akosua Boateng",
      role: "Outreach & Community Lead",
      image: "/placeholder-user.jpg",
      bio: "A social work professional based in Tamale, Ghana, with deep connections to Northern Ghana's educational landscape. Akosua coordinates our high school partnerships and community awareness programs. Has established relationships with 12+ schools and reached over 1,000 students with scholarship information."
    },
    {
      name: "Michael Oppong",
      role: "Scholar Support Coordinator", 
      image: "/placeholder-user.jpg",
      bio: "A Veritas Foundation alumnus studying engineering at the University of Pennsylvania. Michael provides ongoing support to current scholars navigating university life in the U.S. Has mentored 25+ scholars through their first-year transitions and maintains a 95% academic success rate among his mentees."
    },
    {
      name: "Fatimah Abdul-Rahman",
      role: "Women's Empowerment Lead",
      image: "/placeholder-user.jpg",
      bio: "A graduate student in public policy at Harvard Kennedy School, originally from Bolgatanga, Ghana. Fatimah spearheads our women's empowerment initiatives and female scholar support programs. Has specifically mentored 20+ young women into STEM fields and leadership positions."
    }
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Large Banner Intro */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Image Option */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/team-group-photo.jpg" // Replace with actual team photo
              alt="Veritas Foundation Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#002366]/80 via-[#002366]/70 to-[#0056b3]/80"></div>
          </div>

          {/* Fallback Banner with Text (if no image) */}
          {/* Uncomment this section if using text banner instead of image
          <div className="absolute inset-0 bg-gradient-to-br from-[#002366] via-[#003d82] to-[#0056b3]"></div>
          */}

          <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Users size={16} />
              <span>OUR TEAM</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Meet the Passionate People
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-[#facc15] mb-8">
              Driving Veritas Foundation Forward
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              From Ghana to the United States, our diverse team combines lived experience, educational expertise, and unwavering dedication to transform lives through education.
            </p>
          </div>
        </section>

        {/* Individual Team Member Cards */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Our Team Members
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Each member brings unique experiences and expertise to our mission of empowering students
              </p>
            </div>

            {/* Grid of Team Member Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 bg-white">
                  <CardContent className="p-0">
                    {/* Photo */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Name and Role Overlay */}
                      <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-sm text-white/90 font-medium">{member.role}</p>
                      </div>
                    </div>

                    {/* Bio Content */}
                    <div className="p-6">
                      {/* Name and Role (visible when not hovering) */}
                      <div className="mb-4 md:hidden lg:block group-hover:opacity-0 transition-opacity duration-300">
                        <h3 className="text-xl font-bold text-[#002366] mb-1">{member.name}</h3>
                        <p className="text-sm font-semibold text-[#facc15] mb-3">{member.role}</p>
                      </div>
                      
                      {/* Short Bio (3-4 lines) */}
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {member.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                United by Purpose
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-12">
                Together, our team combines lived experience, passion for education, and global expertise to build pathways for brilliant minds. We are scholars, educators, mentors, and advocates united by the belief that every student deserves the chance to transform their dreams into reality.
              </p>

              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-l-4 border-[#facc15] mb-12">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                  From coordinating SAT preparation in Accra to mentoring students at MIT, from establishing partnerships with high schools in Northern Ghana to supporting scholars navigating Ivy League universities—our diverse experiences create a comprehensive support network that addresses every aspect of a student's educational journey.
                </p>
                <p className="text-lg font-semibold text-[#002366]">
                  We don't just provide opportunities; we create a family that supports, guides, and celebrates every step of the journey.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#002366] mb-6">
                  Join Our Mission
                </h3>
                <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
                  Whether you're an educator, mentor, or someone passionate about empowering students, there's a place for you in our growing team.
                </p>
                
                <Link href="/get-involved/become-member">
                  <Button 
                    size="lg"
                    className="bg-[#002366] hover:bg-[#002366]/90 text-[#facc15] font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group"
                  >
                    Get Involved
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
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