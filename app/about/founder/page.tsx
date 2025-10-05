import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Quote, Award, GraduationCap, Heart, Users, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutFounderPage() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Educational Excellence",
      description: "Advanced degrees and continuous learning in education and leadership development"
    },
    {
      icon: Users,
      title: "Mentorship Impact",
      description: "Successfully mentored hundreds of students across different academic levels"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Received multiple awards for contributions to education and community development"
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Dedicated years of volunteer service to educational and community initiatives"
    }
  ]

  const values = [
    {
      title: "Excellence",
      description: "Striving for the highest standards in everything we do, believing that every student deserves exceptional support and opportunities."
    },
    {
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical principles in all our interactions and decision-making processes."
    },
    {
      title: "Empowerment",
      description: "Believing in the potential of every individual and providing them with the tools and confidence to succeed."
    },
    {
      title: "Innovation",
      description: "Continuously seeking new and creative approaches to address educational challenges and maximize student potential."
    }
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#002366] via-[#003d82] to-[#0056b3] text-white py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 bg-[#facc15] text-[#002366] font-semibold">
                  Founder & Visionary
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  About the Founder
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-100">
                  Meet the visionary behind The Veritas Foundation—a passionate educator and advocate for student empowerment.
                </p>
                <Button asChild size="lg" className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 font-semibold">
                  <Link href="/applications">
                    Apply for Mentorship
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full p-2">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Founder of The Veritas Foundation"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Quote className="w-12 h-12 text-[#002366]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#002366] text-center">The Journey Begins</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-slate-700 mb-8">
                  The Veritas Foundation was born from a deeply personal experience and an unwavering belief in the transformative power of education. 
                  Our founder's journey began with witnessing firsthand the challenges that talented students face when they lack proper guidance, 
                  resources, and support systems.
                </p>

                <Card className="my-12 p-8 bg-gradient-to-br from-slate-50 to-blue-50 border-l-4 border-[#facc15]">
                  <CardContent className="p-0">
                    <Quote className="w-8 h-8 text-[#002366] mb-4" />
                    <blockquote className="text-xl italic text-slate-700 mb-4">
                      "I realized that talent is universal, but opportunity is not. Too many brilliant minds were being left behind 
                      simply because they didn't have access to the right guidance and support. That's when I knew I had to act."
                    </blockquote>
                    <cite className="text-[#002366] font-semibold">— Founder, The Veritas Foundation</cite>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Growing up, our founder experienced the challenges of navigating educational systems without adequate mentorship. 
                  This personal struggle ignited a passion for ensuring that no student would have to face these challenges alone. 
                  Through years of working in education, mentoring students, and building educational programs, the vision for 
                  The Veritas Foundation crystallized.
                </p>

                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  The foundation represents more than just an organization—it embodies a commitment to breaking down barriers 
                  and creating pathways for student success. Every program, every scholarship, and every mentorship opportunity 
                  is designed with the understanding that investing in a student's potential creates ripple effects that 
                  transform entire communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Leadership & Impact</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Years of dedication to educational excellence and student empowerment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white group">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-[#002366]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#002366] mb-3">{achievement.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Core Values</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The principles that guide our founder's vision and shape everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-[#facc15] rounded-full mr-4"></div>
                      <h3 className="text-xl font-bold text-[#002366]">{value.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-[#002366] to-[#0056b3] text-white">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Be part of a movement that's transforming lives through education and mentorship. 
              Whether you're a student seeking guidance or someone who wants to support our cause, 
              there's a place for you in the Veritas family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 font-semibold">
                <Link href="/applications">
                  Apply for Mentorship
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#002366] font-semibold">
                <Link href="/donate">
                  Support Our Cause
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