import Header from "@/components/header"
import Footer from "@/components/footer"
import DonationForm from "@/components/donation-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, DollarSign, Users, Target, Award, Globe, Laptop, PlaneTakeoff, BookOpen, GraduationCap, Building, Zap, Clock, CheckCircle } from "lucide-react"
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

        {/* Current Needs and Future Projects */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Where Your Support Goes
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Your donations address immediate student needs while investing in transformative long-term initiatives that expand our impact.
              </p>
            </div>

            <Tabs defaultValue="current" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-lg grid-cols-2 bg-slate-100 p-1 rounded-xl">
                  <TabsTrigger 
                    value="current" 
                    className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#002366] data-[state=active]:shadow-sm rounded-lg"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Current Needs
                  </TabsTrigger>
                  <TabsTrigger 
                    value="future" 
                    className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#002366] data-[state=active]:shadow-sm rounded-lg"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Future Projects
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="current" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-red-700">SAT Registrations</CardTitle>
                      <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200">
                        Urgent Need
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        Cover SAT test fees for 25 students who cannot afford the $55 registration cost.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Per Student:</span>
                          <span className="font-semibold text-red-700">$55</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Goal:</span>
                          <span className="font-semibold text-red-700">$1,375</span>
                        </div>
                        <div className="w-full bg-red-100 rounded-full h-2 mt-3">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                        <p className="text-xs text-slate-500">35% funded</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Laptop className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-blue-700">Laptops & Technology</CardTitle>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                        Critical
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        Provide reliable laptops for students who lack access to essential technology for their studies.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Per Laptop:</span>
                          <span className="font-semibold text-blue-700">$600</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Goal:</span>
                          <span className="font-semibold text-blue-700">$12,000</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2 mt-3">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <p className="text-xs text-slate-500">60% funded</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <PlaneTakeoff className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-green-700">Travel Support</CardTitle>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        Opportunity
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        Fund flight tickets for scholars to attend conferences, interviews, and educational opportunities.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Per Trip:</span>
                          <span className="font-semibold text-green-700">$400</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Goal:</span>
                          <span className="font-semibold text-green-700">$8,000</span>
                        </div>
                        <div className="w-full bg-green-100 rounded-full h-2 mt-3">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                        <p className="text-xs text-slate-500">25% funded</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-purple-700">Outreach Programs</CardTitle>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                        Ongoing
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        Sustain our community outreach and mentorship programs that identify and support talented students.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Monthly:</span>
                          <span className="font-semibold text-purple-700">$2,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Goal:</span>
                          <span className="font-semibold text-purple-700">$30,000</span>
                        </div>
                        <div className="w-full bg-purple-100 rounded-full h-2 mt-3">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                        <p className="text-xs text-slate-500">80% funded</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-slate-600 mb-6 text-lg">
                    These immediate needs affect our scholars right now. Your support helps remove barriers to their success.
                  </p>
                  <DonationForm />
                </div>
              </TabsContent>

              <TabsContent value="future" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 hover:shadow-xl transition-all duration-300 group col-span-full lg:col-span-2">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Building className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold text-yellow-700 mb-2">Honors Programs in High Schools</CardTitle>
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 mb-4">
                            Flagship Initiative
                          </Badge>
                          <p className="text-slate-600 leading-relaxed">
                            Establish comprehensive Honors Programs in junior and senior high schools across underserved communities. 
                            These programs will provide advanced academic coursework, college preparation, leadership development, 
                            and direct pathways to higher education opportunities.
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-3">Program Components:</h4>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                              Advanced curriculum development
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                              Teacher training and certification
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                              Student mentorship networks
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                              College partnership programs
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-3">Impact Goals:</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Target Schools:</span>
                              <span className="font-semibold text-yellow-700">15 schools</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Students Reached:</span>
                              <span className="font-semibold text-yellow-700">2,500+ annually</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Total Investment:</span>
                              <span className="font-semibold text-yellow-700">$2.5M</span>
                            </div>
                            <div className="w-full bg-yellow-100 rounded-full h-2 mt-3">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{width: '15%'}}></div>
                            </div>
                            <p className="text-xs text-slate-500">15% funded • $375,000 raised</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-indigo-700">Scholarship Endowment</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        Build a permanent endowment fund to provide sustainable scholarship support for future generations of scholars.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Current Fund:</span>
                          <span className="font-semibold text-indigo-700">$150,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Target:</span>
                          <span className="font-semibold text-indigo-700">$1M</span>
                        </div>
                        <div className="w-full bg-indigo-100 rounded-full h-2 mt-3">
                          <div className="bg-indigo-500 h-2 rounded-full" style={{width: '15%'}}></div>
                        </div>
                        <p className="text-xs text-slate-500">15% of goal reached</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200 hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-teal-700">Innovation Labs</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        Create technology and innovation labs in partner schools to foster STEM education and entrepreneurship.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Per Lab:</span>
                          <span className="font-semibold text-teal-700">$75,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Goal:</span>
                          <span className="font-semibold text-teal-700">$750,000</span>
                        </div>
                        <div className="w-full bg-teal-100 rounded-full h-2 mt-3">
                          <div className="bg-teal-500 h-2 rounded-full" style={{width: '5%'}}></div>
                        </div>
                        <p className="text-xs text-slate-500">5% funded</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200 hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-rose-700">Global Exchanges</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        Establish international exchange programs to broaden our scholars' perspectives and global understanding.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Program Setup:</span>
                          <span className="font-semibold text-rose-700">$200,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Annual Ops:</span>
                          <span className="font-semibold text-rose-700">$100,000</span>
                        </div>
                        <div className="w-full bg-rose-100 rounded-full h-2 mt-3">
                          <div className="bg-rose-500 h-2 rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <p className="text-xs text-slate-500">Planning stage</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-slate-600 mb-6 text-lg">
                    These visionary projects will transform educational opportunities for thousands of students. Be part of building the future.
                  </p>
                  <DonationForm />
                </div>
              </TabsContent>
            </Tabs>
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
