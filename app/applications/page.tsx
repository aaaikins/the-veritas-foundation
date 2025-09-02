import Header from "@/components/header"
import Footer from "@/components/footer"
import ApplicationForm from "@/components/application-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Award, Target, BookOpen, Heart } from "lucide-react"
import Image from "next/image"

export default function ApplicationsPage() {
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
                <span>Join Our Community</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Apply to Join
                <br />
                <span className="text-[#facc15]">The Veritas Foundation</span>
              </h1>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Whether you're seeking scholarship opportunities, looking to mentor others, or wanting to
                volunteer your time, we have programs designed to help you achieve your goals and contribute
                to our mission of educational equity.
              </p>
              <div className="flex justify-center pt-4">
                <ApplicationForm />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Our Programs
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Discover the various ways you can engage with The Veritas Foundation and become part of
                our community dedicated to educational excellence and equity.
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
                    Apply for comprehensive scholarships covering tuition, books, housing, and living expenses
                    to pursue your educational dreams without financial barriers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#002366]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002366]/20 transition-colors duration-300">
                    <Users className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Mentorship Program</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Join our mentorship network to guide and support scholars, or become a mentee to receive
                    guidance from experienced professionals in your field.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#facc15]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                    <Heart className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Volunteer Opportunities</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Contribute your time and skills to support our community outreach, events, and administrative
                    needs. Every volunteer role makes a meaningful impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#002366]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002366]/20 transition-colors duration-300">
                    <BookOpen className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Academic Support</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Access tutoring, study groups, and academic counseling, or volunteer to provide these
                    essential services to fellow scholars.
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
                    Participate in internship programs, career counseling, resume building workshops, and
                    professional development opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#002366]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002366]/20 transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Board Membership</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Join our board of directors to help shape the strategic direction of the foundation
                    and ensure we're meeting our mission effectively.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Application Process
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Our streamlined application process ensures we can quickly connect you with the right
                opportunities while maintaining the quality and integrity of our programs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#002366]">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#002366]">Submit Application</h3>
                <p className="text-slate-600 leading-relaxed">
                  Fill out our comprehensive application form with your personal information,
                  academic background, and program preferences.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#002366] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#002366]">Review Process</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our team reviews your application and matches you with the most appropriate
                  programs and opportunities based on your profile.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#002366]">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#002366]">Get Started</h3>
                <p className="text-slate-600 leading-relaxed">
                  Once approved, you'll receive detailed information about next steps,
                  orientation, and how to begin your journey with us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Ready to Apply?
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                Take the first step towards joining our community. Whether you're a student seeking
                support or someone looking to make a difference, we have opportunities waiting for you.
              </p>
              <div className="flex justify-center">
                <ApplicationForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
