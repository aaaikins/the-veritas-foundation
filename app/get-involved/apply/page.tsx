"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Users, Award, AlertCircle, GraduationCap, Target, Calendar, BookOpen, ExternalLink, Star, TrendingUp, Heart, Lightbulb, MessageCircle, Clock, Globe } from "lucide-react"

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <span>Get Involved</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Apply to Become a
                <br />
                <span className="text-[#facc15]">Veritas Scholar</span>
              </h1>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                Join our community of exceptional scholars who are transforming their lives through education.
                Take the first step toward your academic dreams.
              </p>
            </div>
          </div>
        </section>

        {/* General Information */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight mb-8">
                General Information
              </h2>
              
              <div className="space-y-6 text-slate-600 md:text-lg leading-relaxed">
                <p>
                  Each year, application opens on <strong>January 22nd</strong> for undergraduate scholars and <strong>March 22nd</strong> for graduate scholars selection. 
                  We select 25 to 30 undergraduate applicants and 25 to 30 graduate applicants from hundreds of candidates. 
                  Selected scholars are guided through a step-by-step application process to schools in the U.S. and Canada.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mt-12 mb-8">
                <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#facc15] mb-4">January 22nd</div>
                  <div className="text-xl font-semibold text-[#002366] mb-2">Undergraduate Scholars</div>
                  <div className="text-slate-600">Applications open</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#facc15] mb-4">March 22nd</div>
                  <div className="text-xl font-semibold text-[#002366] mb-2">Graduate Scholars</div>
                  <div className="text-slate-600">Applications open</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Eligibility Requirements */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight mb-12">
                Key Eligibility Requirements
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#002366] mb-6">Undergraduate Applicants</h3>
                  <div className="space-y-4 text-slate-600">
                    <div>
                      <strong className="text-[#002366]">WASSCE or Equivalent International Exam:</strong> Strong performance, with four A's and above for the WASSCE.
                    </div>
                    <div>
                      <strong className="text-[#002366]">SAT Score:</strong> 1450 and above.
                    </div>
                    <div>
                      <strong className="text-[#002366]">Additional Requirements:</strong> <em>[To be added based on further guidance].</em>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#002366] mb-6">Graduate Applicants</h3>
                  <div className="space-y-4 text-slate-600">
                    <div>
                      <strong className="text-[#002366]">Undergraduate Degree:</strong> Minimum of Second Class Upper.
                    </div>
                    <div>
                      <strong className="text-[#002366]">Additional Requirements:</strong> <em>[To be added once confirmed]</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight mb-12">
                Selection Process
              </h2>
              
              <div className="space-y-6 text-slate-600 md:text-lg leading-relaxed">
                <div className="grid gap-8 md:grid-cols-3 mb-8">
                  <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#002366] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
                    <h3 className="text-xl font-semibold text-[#002366] mb-4">Fill Application</h3>
                    <p className="text-slate-600">Fill out the online application form (link provided below).</p>
                  </div>
                  <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#facc15] text-[#002366] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
                    <h3 className="text-xl font-semibold text-[#002366] mb-4">Interview Stage</h3>
                    <p className="text-slate-600">Qualified applicants move to the interview stage.</p>
                  </div>
                  <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
                    <h3 className="text-xl font-semibold text-[#002366] mb-4">Notification</h3>
                    <p className="text-slate-600">Accepted applicants are notified via email about their acceptance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualities selected applicants Embody */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight mb-12">
                Qualities Selected Applicants Embody
              </h2>
              <p className="text-slate-600 md:text-lg leading-relaxed mb-8">
                Accepted applicants demonstrate the following qualities:
              </p>
              
              <div className="space-y-4">
                {[
                  "Academic Excellence – strong performance in their studies",
                  "Problem-Solving Skills – ability to think critically and overcome challenges",
                  "Financial Need – comes from a low-income background",
                  "Engagement in Impactful Extracurricular Activities – actively involved in activities that make a difference",
                  "Resilience and Passion – determination and drive to thrive despite challenges",
                  "Communication Skills – able to express ideas clearly and collaborate effectively",
                  "Commitment to Giving Back – demonstrated interest in contributing to their community"
                ].map((quality, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="w-6 h-6 bg-[#facc15] text-[#002366] rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">•</span>
                    <span className="text-slate-600 leading-relaxed">{quality}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Checklist */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight mb-8">
                Application Checklist
              </h2>
              <p className="text-slate-600 md:text-lg leading-relaxed mb-12">
                These are the materials required during the application process. You can start preparing them ahead of time.
              </p>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#002366] mb-6">Undergraduate Applicants</h3>
                  <div className="space-y-4">
                    {[
                      "WASSCE results or equivalent international exam results",
                      "WASSCE results checker",
                      "SAT score",
                      "Personal statement",
                      "Four essays, each averaging 300 words each",
                      "Resume",
                      "Headshot (passport-style photo)",
                      "LinkedIn profile link"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-[#facc15] text-[#002366] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">•</span>
                        <span className="text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#002366] mb-6">Graduate Applicants</h3>
                  <div className="space-y-4">
                    {[
                      "Undergraduate degree certificate",
                      "Resume",
                      "Four essays, each averaging 600 words"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-[#facc15] text-[#002366] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">•</span>
                        <span className="text-slate-600">{item}</span>
                      </div>
                    ))}
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <span className="text-slate-500 italic">Additional requirements to be communicated later</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight mb-12">
                Disclaimer
              </h2>
              
              <div className="space-y-6">
                {[
                  "Being selected as a Veritas Scholar does not guarantee admission to any U.S. or Canadian school. Applicants compete with students from around the world. We provide guidance and resources to maximize your chances, but final admission decisions are determined by the schools.",
                  "The Veritas Foundation does not provide scholarships. Any financial aid or scholarships for study abroad are awarded directly by the schools, not the foundation."
                ].map((disclaimer, index) => (
                  <div key={index} className="flex items-start gap-4 bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 shadow-lg">
                    <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">!</span>
                    <span className="text-slate-700 leading-relaxed">{disclaimer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#002366] leading-tight">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                Take the first step toward your academic dreams. Join our community of exceptional scholars 
                who are making a difference in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe3VXoHj7JeUMzo9icecWFoEyj9Vy2UrO_id3SnYc8WCWwLjQ/viewform?usp=header">
                <Button className="bg-[#002366] hover:bg-[#002366]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
                </Link>

                <Button variant="outline" className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
