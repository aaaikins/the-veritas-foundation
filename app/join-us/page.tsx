'use client'

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import ApplicationForm from "@/components/application-form"

const roles = [
  {
    title: "Scholar",
    icon: BookOpen,
    description: "As a Veritas Foundation Scholar, you'll receive comprehensive financial support to pursue your educational goals. Our scholarship program is designed to remove financial barriers and empower exceptional students from diverse backgrounds to achieve academic excellence. Scholars gain access to exclusive mentorship opportunities, career development workshops, and a supportive network of fellow scholars and alumni. Whether you're pursuing undergraduate or graduate studies, our program provides not just financial aid, but also the guidance and resources needed to succeed academically and professionally.",
    requirements: ["High school senior or current college student", "Demonstrated financial need", "Academic excellence (minimum 3.0 GPA)", "Community involvement and leadership", "Clear educational and career goals", "Commitment to giving back to underserved communities"],
    type: "scholar"
  },
  {
    title: "Mentor",
    icon: Users,
    description: "Join our esteemed mentorship program as a guide and role model for the next generation of leaders. As a Veritas Foundation Mentor, you'll work one-on-one with scholars, providing career advice, academic guidance, and personal development support. Our mentorship program creates lasting relationships that extend beyond graduation, helping scholars navigate challenges, build confidence, and achieve their full potential. You'll have the opportunity to share your professional expertise while developing your own leadership and coaching skills through our mentor training programs.",
    requirements: ["Bachelor's degree or equivalent professional experience", "3+ years of professional experience in your field", "Strong communication and interpersonal skills", "Commitment to 6+ months of active mentorship", "Passion for education and youth development", "Willingness to participate in mentor training workshops"],
    type: "mentor"
  },
  {
    title: "Volunteer",
    icon: Heart,
    description: "Make a direct impact on our community programs through hands-on volunteering. As a Veritas Foundation Volunteer, you'll contribute your time and skills to various initiatives including educational workshops, community outreach events, administrative support, and program coordination. Whether you have specialized skills in education, marketing, event planning, or simply a passion for community service, there's a volunteer role that matches your interests and availability. Our volunteer program offers flexible scheduling and the opportunity to see the immediate impact of your contributions on the lives of scholars and community members.",
    requirements: ["18+ years old", "Reliable transportation for in-person activities", "Successful completion of background check", "Commitment to 4+ hours per month", "Willingness to participate in volunteer orientation", "Openness to learning and professional development"],
    type: "volunteer"
  },
  {
    title: "Board Member",
    icon: Award,
    description: "Serve on our board of directors and help shape the strategic direction of the Veritas Foundation. As a board member, you'll play a crucial role in governance, policy development, and long-term planning. You'll work with fellow board members to ensure fiscal responsibility, program effectiveness, and organizational growth. This leadership position offers the opportunity to influence educational equity initiatives, build partnerships with educational institutions and corporations, and contribute to the sustainable growth of our scholarship and mentorship programs. Board members participate in quarterly meetings, committee work, and strategic planning sessions.",
    requirements: ["5+ years of professional experience", "Demonstrated leadership experience", "Commitment to 2+ years of service", "Strong understanding of nonprofit governance", "Passion for education and social justice", "Excellent communication and analytical skills"],
    type: "board"
  }
]

export default function JoinUsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-white">
      <div
        className="relative rounded-b-[4rem] md:rounded-b-[6rem] pt-24 md:pt-32 pb-24 px-6 md:px-12 text-center bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: "url(/hero-image.jpg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '710px',
                width: '100%'
         }}
      >
            {/* Enhanced overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 rounded-b-[4rem] md:rounded-b-[6rem]"></div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10 rounded-b-[4rem] md:rounded-b-[6rem]">
              <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>

            {/* Content container, positioned above the overlay */}
            <div className="relative z-10 max-w-4xl mx-auto justify-center text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-5 py-3 rounded-full text-sm font-semibold mb-8 hover:bg-white/20 transition-all duration-300">
                <span>Join Our Mission</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Be Part of
                <br />
                <span className="text-[#facc15]">Something Greater</span>
              </h1>
              <p className="max-w-3xl mx-auto text-white/90 md:text-lg leading-relaxed font-medium">
                Whether you're seeking educational opportunities, looking to give back through mentorship,
                or wanting to support our mission, there's a place for you in the Veritas Foundation community.
              </p>
            </div>
          </div>
        </div>

        {/* Roles Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <span>Opportunities</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Ways to
                <br />
                <span className="text-[#facc15]">Get Involved</span>
              </h2>
              <p className="mx-auto max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                Discover the various ways you can contribute to our mission of empowering ideas and transforming lives.
                Each role plays a crucial part in building stronger communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roles.map((role, index) => {
                const IconComponent = role.icon
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 h-full">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-16 h-16 bg-[#facc15]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-[#002366]" />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#002366] group-hover:text-[#facc15] transition-colors duration-300">
                        {role.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-slate-600 text-center leading-relaxed">
                        {role.description}
                      </p>

                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border-l-4 border-[#facc15] shadow-lg hover:shadow-xl transition-all duration-300">
                          <h4 className="font-semibold text-[#002366] mb-3 text-sm">Requirements:</h4>
                          <ul className="space-y-2">
                            {role.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="text-slate-600 text-sm flex items-start gap-2">
                                <span className="text-[#facc15] mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          className="w-full bg-[#002366] hover:bg-[#facc15] text-white font-semibold py-3 hover:scale-105 transition-all duration-300"
                          onClick={() => {
                            const element = document.getElementById('application-form')
                            element?.scrollIntoView({ behavior: 'smooth' })
                          }}
                        >
                          Apply for {role.title}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="application-form" className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <span>Apply Now</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Start Your
                <br />
                <span className="text-[#facc15]">Journey With Us</span>
              </h2>
              <p className="mx-auto max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                Ready to take the next step? Fill out our application form below and join our community of
                changemakers, scholars, and supporters working together to create lasting impact.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <ApplicationForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <span>FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Frequently Asked
                <br />
                <span className="text-[#facc15]">Questions</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-l-4 border-[#facc15] shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#002366] mb-4">How long does the application process take?</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  The application review process typically takes 2-4 weeks. We'll notify you of our decision via email,
                  and successful applicants will be contacted for next steps including interviews or additional documentation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-l-4 border-[#002366] shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#002366] mb-4">Are there any fees to apply?</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  No, there are absolutely no application fees for any of our programs. We believe that financial barriers
                  shouldn't prevent anyone from accessing opportunities and applying for our various roles.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-l-4 border-[#facc15] shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#002366] mb-4">Can I apply for multiple roles?</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Yes, you can apply for multiple roles that interest you. However, please submit separate applications
                  for each role to ensure we can properly review your qualifications for each specific opportunity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-l-4 border-[#002366] shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#002366] mb-4">What if I don't meet all the requirements?</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  While we have minimum requirements for each role, we also consider potential, passion, and unique
                  circumstances. If you don't meet every requirement but are enthusiastic about our mission,
                  we encourage you to apply and explain your situation in your application.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
