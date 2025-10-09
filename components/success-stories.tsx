"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star, Quote, ArrowRight, GraduationCap, Building, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const successStories = [
  {
    id: 1,
    name: "Saabiq Saha",
    title: "Rhodes Scholar & Harvard Graduate",
    university: "Harvard University",
    graduationYear: 2023,
    currentPosition: "Policy Analyst at World Bank",
    image: "/placeholder-user.jpg",
    story: "From a small village in Northern Ghana to Harvard University, Saabiq's journey exemplifies the transformative power of education. As the first in his family to attend university, he graduated summa cum laude with a degree in Economics and Public Policy.",
    achievement: "First Ghanaian Rhodes Scholar from Rural Background",
    quote: "The Veritas Foundation didn't just fund my education; they invested in my dreams and believed in my potential when I couldn't even see it myself.",
    blogSlug: "saabiq-saha-rhodes-scholar-journey",
    impact: "Now working on poverty alleviation policies affecting millions across Africa",
    tags: ["Rhodes Scholar", "World Bank", "Policy", "Economics"]
  },
  {
    id: 2,
    name: "Kobi Twum",
    title: "MIT Engineering Graduate & Tech Entrepreneur",
    university: "Massachusetts Institute of Technology",
    graduationYear: 2022,
    currentPosition: "Founder & CEO of SolarTech Africa",
    image: "/placeholder-user.jpg",
    story: "Kobi's passion for renewable energy began when his village experienced frequent power outages. At MIT, he developed solar microgrid technology that is now providing electricity to over 50 rural communities across Ghana.",
    achievement: "40 Under 40 African Innovators Award Winner",
    quote: "Every time I see lights come on in a village that never had electricity before, I remember why I started this journey. Education is the bridge between dreams and reality.",
    blogSlug: "kobi-twum-solar-innovation-africa",
    impact: "Bringing sustainable electricity to 50+ rural communities",
    tags: ["MIT", "Solar Energy", "Entrepreneur", "Innovation"]
  },
  {
    id: 3,
    name: "Emmanuel Prince Dey",
    title: "Yale Medical School & Pediatric Surgeon",
    university: "Yale University",
    graduationYear: 2021,
    currentPosition: "Pediatric Surgery Resident at Children's Hospital",
    image: "/placeholder-user.jpg",
    story: "Emmanuel's commitment to healing began when he witnessed the lack of specialized pediatric care in his hometown. Today, he's training to become Ghana's next generation of pediatric surgeons, with plans to establish a children's medical center.",
    achievement: "Youngest Ghanaian Accepted to Yale Medical School",
    quote: "Every child deserves the chance to grow up healthy and strong. My mission is to ensure that no child in Ghana lacks access to quality medical care because of where they were born.",
    blogSlug: "emmanuel-prince-dey-pediatric-surgeon",
    impact: "Training to save children's lives and build Ghana's pediatric infrastructure",
    tags: ["Yale Medicine", "Pediatric Surgery", "Healthcare", "Children"]
  }
]

export default function SuccessStories() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-10 text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
            <Star className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
              Inspiring
              <br />
              <span className="text-[#facc15]">Journeys</span>
            </h2>
            <p className="max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
              Meet some of our remarkable scholars who are making a global impact. Their stories of perseverance, 
              excellence, and commitment to giving back inspire the next generation of leaders.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:gap-12 lg:gap-16">
          {successStories.map((scholar, index) => (
            <Card 
              key={scholar.id} 
              className={`overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] bg-white ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 min-h-[500px] ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#002366]/20 to-[#facc15]/20 z-10"></div>
                    <Image
                      src={scholar.image}
                      alt={scholar.name}
                      fill
                      className="object-cover"
                    />
                    {/* Achievement Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <Badge className="bg-[#facc15] text-[#002366] font-semibold px-4 py-2 text-sm shadow-lg">
                        <Star className="w-4 h-4 mr-2" />
                        {scholar.achievement}
                      </Badge>
                    </div>
                    {/* Tags */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="flex flex-wrap gap-2">
                        {scholar.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex}
                            variant="outline" 
                            className="bg-white/90 text-[#002366] border-white/50 backdrop-blur-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`flex flex-col justify-center p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#002366] mb-3">
                          {scholar.name}
                        </h3>
                        <p className="text-xl text-slate-600 font-semibold mb-4">
                          {scholar.title}
                        </p>
                        
                        {/* University and Year */}
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span>{scholar.university}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Class of {scholar.graduationYear}</span>
                          </div>
                        </div>

                        <div className="bg-[#002366]/5 border-l-4 border-[#facc15] p-4 rounded-r-lg mb-6">
                          <p className="text-slate-700 font-medium">
                            <strong>Current Role:</strong> {scholar.currentPosition}
                          </p>
                        </div>
                      </div>

                      {/* Story */}
                      <div>
                        <p className="text-slate-600 leading-relaxed text-lg mb-6">
                          {scholar.story}
                        </p>
                        
                        {/* Quote */}
                        <div className="bg-gradient-to-r from-[#facc15]/10 to-[#facc15]/5 p-6 rounded-xl border-l-4 border-[#facc15] mb-6">
                          <div className="flex items-start gap-3">
                            <Quote className="w-6 h-6 text-[#facc15] flex-shrink-0 mt-1" />
                            <p className="text-[#002366] font-medium italic text-lg leading-relaxed">
                              "{scholar.quote}"
                            </p>
                          </div>
                        </div>

                        {/* Impact */}
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="w-4 h-4 text-green-600" />
                            <span className="text-green-800 font-semibold text-sm">Current Impact</span>
                          </div>
                          <p className="text-green-700 text-sm">
                            {scholar.impact}
                          </p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={`/blogs/${scholar.blogSlug}`}>
                          <Button className="bg-[#002366] hover:bg-[#002366]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex-1 sm:flex-none">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Read Full Story
                          </Button>
                        </Link>
                        <Link href="/scholars">
                          <Button variant="outline" className="border-[#facc15] text-[#002366] hover:bg-[#facc15] hover:text-[#002366] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex-1 sm:flex-none">
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Meet More Scholars
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-[#002366] to-blue-900 rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Write Your Own Success Story
            </h3>
            <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto">
              These are just three of our many incredible scholars. With dedication, support, and the right opportunities, 
              your story could be the next one inspiring others to reach for their dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/applications">
                <Button className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/blogs">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002366] px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105">
                  <Star className="w-5 h-5 mr-2" />
                  Read More Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}