import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Target, Heart, Globe } from "lucide-react"

export default function WhatWeDoPage() {
  const programs = [
    {
      icon: BookOpen,
      title: "Academic Mentorship",
      description: "Providing one-on-one academic guidance and support to help students excel in their studies and reach their full potential.",
      features: ["Personalized study plans", "Subject-specific tutoring", "Academic goal setting", "Progress tracking"]
    },
    {
      icon: Award,
      title: "Scholarship Programs", 
      description: "Supporting deserving students with financial assistance to pursue higher education and break barriers to academic success.",
      features: ["Merit-based scholarships", "Need-based financial aid", "Educational expense coverage", "Long-term support"]
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Building future leaders through comprehensive programs that develop critical thinking, communication, and leadership skills.",
      features: ["Leadership workshops", "Public speaking training", "Critical thinking development", "Community engagement"]
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Preparing students for successful careers through professional development, networking opportunities, and industry exposure.",
      features: ["Career counseling", "Professional networking", "Industry mentorship", "Skill development"]
    },
    {
      icon: Heart,
      title: "Personal Development",
      description: "Fostering holistic growth through character building, emotional intelligence development, and life skills training.",
      features: ["Character building", "Emotional intelligence", "Life skills training", "Personal growth coaching"]
    },
    {
      icon: Globe,
      title: "Community Impact",
      description: "Encouraging students to become agents of positive change in their communities through service and civic engagement.",
      features: ["Community service projects", "Civic engagement", "Social responsibility", "Impact measurement"]
    }
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#002366] via-[#003d82] to-[#0056b3] text-white py-20">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              What We Do
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Empowering minds, transforming lives, and building a brighter future through comprehensive educational support and mentorship.
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-[#facc15] text-[#002366] font-semibold">
              Empowering Ideas, Transforming Lives
            </Badge>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#002366]">Our Mission</h2>
              <p className="text-xl leading-relaxed text-slate-700 mb-8">
                The Veritas Foundation is dedicated to empowering young minds through comprehensive educational support, 
                mentorship, and leadership development. We believe that every student deserves the opportunity to reach 
                their full potential, regardless of their background or circumstances.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Through our innovative programs and personalized approach, we're not just changing individual lives—
                we're building a network of future leaders who will drive positive change in their communities and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Our Programs</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive support designed to address every aspect of a student's educational journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const IconComponent = program.icon
                return (
                  <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-[#002366]" />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#002366] mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                            <div className="w-2 h-2 bg-[#facc15] rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Our Approach</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We believe in a holistic approach that addresses not just academic needs, but the complete development of each individual.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#0056b3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#002366]">Identify & Assess</h3>
                <p className="text-slate-600 leading-relaxed">
                  We identify talented students with potential and assess their unique needs, strengths, and areas for growth.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#002366]">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#002366]">Mentor & Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  We provide personalized mentorship, academic support, and resources tailored to each student's specific needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#0056b3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#002366]">Empower & Transform</h3>
                <p className="text-slate-600 leading-relaxed">
                  We empower students to become leaders and changemakers who transform their communities and inspire others.
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