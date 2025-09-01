import Header from "@/components/header"
import Footer from "@/components/footer"
import DonationForm from "@/components/donation-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, DollarSign, Users, Target, Award, Globe } from "lucide-react"
import Image from "next/image"

export default function DonatePage() {
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
                <span>Support Our Mission</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Your Support
                <br />
                <span className="text-[#facc15]">Changes Lives</span>
              </h1>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Every donation, no matter the size, helps us provide scholarships, mentorship, and resources
                to deserving students who are working to build a better future for themselves and their communities.
              </p>
              <div className="flex justify-center pt-4">
                <DonationForm />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Your Impact
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                See how your generosity transforms lives and creates opportunities for students across the country.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#facc15]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                    <Award className="w-8 h-8 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">$25</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Provides study materials and supplies for one student for a semester
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#002366]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#002366]/20 transition-colors duration-300">
                    <Users className="w-8 h-8 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">$100</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Funds a mentorship session and career counseling for one student
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#facc15]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                    <Target className="w-8 h-8 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">$500</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Covers emergency assistance and academic support for one student
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ways to Give */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Ways to Give
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Choose the giving method that works best for you. Every contribution makes a difference.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#facc15]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                    <DollarSign className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">One-Time Gift</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Make an immediate impact with a single donation that supports our current scholars and programs.
                  </p>
                  <DonationForm />
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#002366]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002366]/20 transition-colors duration-300">
                    <Heart className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Monthly Giving</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Become a sustaining partner with monthly donations that provide consistent support for our programs.
                  </p>
                  <Button variant="outline" className="w-full border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white transition-all duration-300">
                    Set Up Monthly
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#facc15]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-[#002366]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Corporate Giving</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Partner with us through corporate sponsorships, matching gifts, or employee volunteer programs.
                  </p>
                  <Button variant="outline" className="w-full border-[#facc15] text-[#002366] hover:bg-[#facc15] hover:text-[#002366] transition-all duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Ready to Make a Difference?
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                Your generosity today creates opportunities tomorrow. Join thousands of donors who are
                investing in the future of education and equity.
              </p>
              <div className="flex justify-center">
                <DonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
