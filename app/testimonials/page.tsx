import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote, Star, Play, ArrowRight } from 'lucide-react'

// Define types for our testimonials
interface Testimonial {
  id: string
  name: string
  role: string
  university?: string
  content: string
  image: string
  rating: number
}

interface VideoTestimonial {
  id: string
  name: string
  university: string
  thumbnail: string
  videoUrl: string
  description: string
}

export default function TestimonialsPage() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Abigail Mensah",
      role: "Current Scholar",
      university: "University of Pennsylvania",
      content: "The Veritas Foundation didn't just help me get into university - they created a community where I could thrive. The application journey was challenging, but having mentors who understood my background and believed in my potential made all the difference. Now I'm part of an incredible network of scholars who support each other every step of the way.",
      image: "/testimonials/abigail.jpg",
      rating: 5
    },
    {
      id: "2",
      name: "Mohammed Sabiq Saha",
      role: "Entrepreneur & Scholar",
      university: "Grambling State University",
      content: "From a small village in Yendi, Ghana, to launching a startup valued at $250,000 and supported by Microsoft for Startups - none of this would have been possible without Veritas Foundation. They saw potential in me when I couldn't see it in myself and provided the guidance and support to turn dreams into reality.",
      image: "/testimonials/sabiq.jpg",
      rating: 5
    },
    {
      id: "3",
      name: "Kobi Twum",
      role: "Google Intern",
      university: "Grambling State University",
      content: "Landing an internship at Google in New York seemed impossible from where I started. The Veritas Foundation not only helped me gain admission to university but also prepared me for the competitive world beyond academics. Their mentorship program equipped me with the skills and confidence needed to succeed at the highest levels.",
      image: "/testimonials/kobi.jpg",
      rating: 5
    },
    {
      id: "4",
      name: "Emmanuel Prince Dey",
      role: "Research Scholar & Founder",
      university: "Dartmouth College",
      content: "At Dartmouth, I've been able to conduct groundbreaking research and found the Voima Initiative, all while maintaining excellence in my studies. The foundation's support extends far beyond financial aid - they provide a framework for success that transforms how you think about your potential and impact in the world.",
      image: "/testimonials/emmanuel.jpg",
      rating: 5
    },
    {
      id: "5",
      name: "Sarah Osei",
      role: "Graduate Student",
      university: "University of Toronto",
      content: "The transition from Ghana to Canada was made seamless by the continuous support from Veritas Foundation. They don't just get you admitted - they ensure you have everything you need to succeed. From academic guidance to emotional support, they truly understand what it takes for students like us to thrive internationally.",
      image: "/testimonials/sarah.jpg",
      rating: 5
    },
    {
      id: "6",
      name: "David Asante",
      role: "Current Scholar",
      university: "California Institute of Technology",
      content: "Being at Caltech was always a dream, but the path seemed impossible until I found Veritas Foundation. Their SAT preparation program, application guidance, and continuous mentorship turned an impossible dream into reality. I'm now studying engineering at one of the world's top institutions, and I owe it all to their belief in my potential.",
      image: "/testimonials/david.jpg",
      rating: 5
    }
  ]

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: "abigail-video",
      name: "Abigail Mensah",
      university: "University of Pennsylvania",
      thumbnail: "/testimonials/abigail-video-thumb.jpg",
      videoUrl: "#",
      description: "Abigail shares her journey from Ghana to UPenn and how Veritas Foundation transformed her life"
    },
    {
      id: "kelvin-video",
      name: "Kelvin Opoku",
      university: "University of Pennsylvania",
      thumbnail: "/testimonials/kelvin-video-thumb.jpg",
      videoUrl: "#",
      description: "Kelvin reflects on his experience with Veritas and the impact it has had on his academic journey"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#002366] to-[#003d82] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/testimonials/testimonials-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <Quote className="w-16 h-16 mx-auto mb-6 text-[#facc15]" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Stories of Transformation
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Hear directly from our scholars about their journey with Veritas Foundation and how it has shaped their futures
            </p>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">
              Voices of Success
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Read the inspiring stories of our scholars and how Veritas Foundation has impacted their lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#002366] text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {testimonial.role}
                      </p>
                      {testimonial.university && (
                        <p className="text-[#facc15] text-sm font-medium">
                          {testimonial.university}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <Quote className="w-8 h-8 text-[#facc15] mb-4" />
                  
                  <p className="text-slate-700 leading-relaxed flex-1 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">
              Video Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch our scholars share their personal journeys and experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <Card key={video.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={`${video.name} testimonial`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Play className="w-8 h-8 text-[#002366] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {video.name}
                    </h3>
                    <p className="text-[#facc15] text-sm font-medium">
                      {video.university}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 leading-relaxed">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#002366] to-[#003d82]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Story Could Be Next
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our community of scholars and start your journey toward educational excellence and personal transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 hover:scale-105 transition-all duration-300 shadow-lg font-semibold px-8 py-4"
            >
              <Link href="/get-involved/apply">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#002366] transition-all duration-300 font-semibold px-8 py-4"
            >
              <Link href="/donate">
                Support Our Scholars
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}