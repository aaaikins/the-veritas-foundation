"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Scholarship Recipient",
    university: "Stanford University",
    quote: "The Veritas Foundation not only provided me with financial support but also connected me with incredible mentors who guided me through my academic journey.",
    image: "/placeholder-user.jpg",
    year: "2024"
  },
  {
    name: "James Wilson",
    role: "Community Partner",
    organization: "Oakwood Community Center",
    quote: "Working with the Veritas Foundation has been transformative for our community. Their commitment to educational equity has created lasting positive change.",
    image: "/placeholder-user.jpg",
    year: "2023"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Mentor & Supporter",
    organization: "Harvard University",
    quote: "I've had the privilege of mentoring several Veritas scholars, and their dedication and potential are truly inspiring. This foundation is doing essential work.",
    image: "/placeholder-user.jpg",
    year: "2024"
  },
  {
    name: "Marcus Johnson",
    role: "Alumni Beneficiary",
    university: "Yale University",
    quote: "Thanks to the Veritas Foundation's support, I was able to focus on my studies rather than financial worries. Today, I'm giving back through mentorship.",
    image: "/placeholder-user.jpg",
    year: "2022"
  },
  {
    name: "Linda Rodriguez",
    role: "Parent & Volunteer",
    organization: "Veritas Foundation",
    quote: "As a parent whose child benefited from the foundation's programs, I've seen firsthand how they transform lives with their holistic approach.",
    image: "/placeholder-user.jpg",
    year: "2024"
  },
  {
    name: "Dr. Michael Thompson",
    role: "Corporate Partner",
    organization: "TechForward Inc.",
    quote: "Our company's partnership with Veritas Foundation has been incredibly rewarding. We're proud to support pathways to opportunity.",
    image: "/placeholder-user.jpg",
    year: "2023"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  // Auto-slide testimonials every 10 seconds with fade animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        setFade(true)
      }, 300)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const handleIndexChange = (index: number) => {
    if (index !== currentIndex) {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex(index)
        setFade(true)
      }, 300)
    }
  }

  return (
    <section id="testimonials" className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
            <Quote className="h-4 w-4" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
            Stories of
            <br />
            <span className="text-[#facc15]">Impact & Success</span>
          </h2>
          <p className="mx-auto max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
            Hear from the scholars, mentors, partners, and community members whose lives have been transformed
            through the Veritas Foundation's programs and initiatives.
          </p>
        </div>

        {/* Single testimonial display */}
        <div className="relative w-full max-w-6xl mx-auto">
          <Card className="w-full group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white rounded-2xl">
            <CardContent className={`p-6 md:p-8 lg:p-12 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                {/* Avatar Section */}
                <div className="md:col-span-2 flex justify-center md:justify-start">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-[#facc15]/20 rounded-full blur-sm group-hover:bg-[#facc15]/30 transition-colors duration-300"></div>
                    <Avatar className="w-16 h-16 md:w-20 md:h-20 border-4 border-[#facc15]/20 shadow-lg relative z-10">
                      <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                      <AvatarFallback className="text-lg md:text-xl font-bold text-[#002366] bg-[#facc15]/10">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-[#facc15] rounded-full p-1.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Quote className="w-3 h-3 text-[#002366]" />
                    </div>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="md:col-span-7 text-center md:text-left">
                  <blockquote className="text-slate-700 italic leading-relaxed text-xl md:text-2xl lg:text-3xl font-light">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                </div>

                {/* Author Info Section */}
                <div className="md:col-span-3 text-center md:text-right space-y-2">
                  <h4 className="font-bold text-[#002366] text-base md:text-lg lg:text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-slate-500 font-medium text-sm md:text-base">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="text-slate-400 text-xs md:text-sm">
                    {testimonials[currentIndex].university || testimonials[currentIndex].organization} • {testimonials[currentIndex].year}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndexChange(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#facc15] scale-125 shadow-lg'
                    : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6">
            <span className="text-slate-500 text-sm font-medium">
              {currentIndex + 1} of {testimonials.length}
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#002366] mb-4">
              Ready to Share Your Story?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We love hearing from our community members, partners, and beneficiaries.
              Your testimonial helps inspire others and shows the real impact of our work.
            </p>
            <a
              href="mailto:testimonials@veritasfoundation.org"
              className="inline-flex items-center gap-2 bg-[#002366] hover:bg-[#002366]/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 text-lg"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}