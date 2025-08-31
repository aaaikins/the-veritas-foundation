import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Scholarship Recipient",
    university: "Stanford University",
    quote: "The Veritas Foundation not only provided me with financial support but also connected me with incredible mentors who guided me through my academic journey. Their program gave me the confidence to pursue my dreams.",
    image: "/placeholder-user.jpg",
    year: "2024"
  },
  {
    name: "James Wilson",
    role: "Community Partner",
    organization: "Oakwood Community Center",
    quote: "Working with the Veritas Foundation has been transformative for our community. Their commitment to educational equity and youth development has created lasting positive change in countless lives.",
    image: "/placeholder-user.jpg",
    year: "2023"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Mentor & Supporter",
    organization: "Harvard University",
    quote: "I've had the privilege of mentoring several Veritas scholars, and their dedication and potential are truly inspiring. This foundation is doing essential work in breaking down barriers to higher education.",
    image: "/placeholder-user.jpg",
    year: "2024"
  },
  {
    name: "Marcus Johnson",
    role: "Alumni Beneficiary",
    university: "Yale University",
    quote: "Thanks to the Veritas Foundation's support, I was able to focus on my studies rather than financial worries. Today, I'm giving back by supporting the next generation of scholars through their mentorship program.",
    image: "/placeholder-user.jpg",
    year: "2022"
  },
  {
    name: "Linda Rodriguez",
    role: "Parent & Volunteer",
    organization: "Veritas Foundation",
    quote: "As a parent whose child benefited from the foundation's programs, I've seen firsthand how they transform lives. Their holistic approach addresses not just financial needs but emotional and academic support too.",
    image: "/placeholder-user.jpg",
    year: "2024"
  },
  {
    name: "Dr. Michael Thompson",
    role: "Corporate Partner",
    organization: "TechForward Inc.",
    quote: "Our company's partnership with Veritas Foundation has been incredibly rewarding. We're proud to support an organization that creates pathways to opportunity and builds stronger, more diverse communities.",
    image: "/placeholder-user.jpg",
    year: "2023"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[#facc15]/20 group-hover:text-[#facc15]/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-slate-600 italic leading-relaxed text-sm md:text-base">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-[#facc15]/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="text-sm font-bold text-[#002366] bg-[#facc15]/10">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold text-[#002366] text-sm md:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-slate-400 text-xs">
                        {testimonial.university || testimonial.organization} • {testimonial.year}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100">
            <h3 className="text-2xl md:text-3xl font-bold text-[#002366] mb-4">
              Ready to Share Your Story?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We love hearing from our community members, partners, and beneficiaries.
              Your testimonial helps inspire others and shows the real impact of our work.
            </p>
            <a
              href="mailto:testimonials@veritasfoundation.org"
              className="inline-flex items-center gap-2 bg-[#002366] hover:bg-[#002366]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
