"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Award, DollarSign, GraduationCap, Users, Building, MapPin, Trophy, Heart, BookOpen, Star } from "lucide-react"
import { useState, useEffect } from "react"

const achievements = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "30+",
    description: "Scholars Supported",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "$2.5M",
    description: "Scholarship Funding Secured",
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "15+",
    description: "Top Universities",
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "100%",
    description: "Success Rate",
  },
]

const slidingTexts = [
  "Success by the Numbers",
  "Building Tomorrow's Leaders",
  "Transforming Lives Through Education",
  "Creating Global Impact from Ghana",
  "Excellence Without Compromise"
]

export default function Achievements() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % slidingTexts.length)
        setIsVisible(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="achievements" className="w-full bg-gradient-to-br from-[#002366] via-[#002366] to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#facc15]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#facc15]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 py-20 md:py-28 lg:py-36 relative">
        {/* Full-width animated banner */}
        <div className="w-full text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#facc15] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20 mb-8">
            <Award className="w-4 h-4" />
            <span>Our Impact</span>
          </div>
          
          {/* Sliding Text Animation */}
          <div className="h-24 md:h-32 lg:h-40 flex items-center justify-center overflow-hidden">
            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight transition-all duration-500 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'
            }`}>
              <span className="text-[#facc15]">{slidingTexts[currentTextIndex]}</span>
            </h2>
          </div>
          
          <p className="max-w-4xl mx-auto text-slate-200 md:text-xl/relaxed leading-relaxed font-light mt-8">
            Our mission is creating lasting change through education. Every number tells a story of transformation, 
            determination, and the incredible potential we unlock when we invest in exceptional young minds from Ghana.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
          {achievements.map((item, index) => (
            <Card key={index} className="text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-white/95 backdrop-blur-sm border-0 group overflow-hidden">
              <CardHeader className="items-center pb-6 pt-8">
                <div className="bg-gradient-to-br from-[#002366] to-[#003366] p-5 rounded-2xl group-hover:from-[#facc15] group-hover:to-[#facc15]/80 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <div className="text-[#facc15] group-hover:text-[#002366] transition-colors duration-500">
                    {item.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-[#002366] mb-3 group-hover:text-[#facc15] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed text-base">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Impact Metrics */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center text-white">
            <div className="text-3xl md:text-4xl font-bold text-[#facc15] mb-2">15</div>
            <div className="text-slate-200">Countries Where Alumni Work</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl md:text-4xl font-bold text-[#facc15] mb-2">$2.8M</div>
            <div className="text-slate-200">Average Career Earnings Increase</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl md:text-4xl font-bold text-[#facc15] mb-2">100%</div>
            <div className="text-slate-200">Committed to Giving Back</div>
          </div>
        </div> */}

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-slate-200 text-lg mb-6 max-w-2xl mx-auto">
            Every statistic represents a life transformed, a family uplifted, and a community strengthened. 
            Be part of our growing impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/scholars" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#facc15] text-[#002366] font-semibold rounded-lg hover:bg-[#facc15]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Meet Our Scholars
            </a>
            <a 
              href="/donate" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#002366] transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              Support Our Mission
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}
