import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, GraduationCap, School, Award } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

// Define types for our data
interface Scholar {
  id: string
  name: string
  university: string
  story: string
  image: string
  instagramLink: string
}

interface Achievement {
  number: string
  label: string
  description: string
  icon: React.ReactNode
}

export default function ImpactPage() {
  const achievements: Achievement[] = [
    {
      number: "30+",
      label: "Scholars Supported",
      description: "Brilliant students from underserved communities",
      icon: <Users className="w-8 h-8" />
    },
    {
      number: "15+",
      label: "Top Universities",
      description: "Including Caltech, UPenn, and more",
      icon: <School className="w-8 h-8" />
    },
    {
      number: "100%",
      label: "Full Scholarships",
      description: "Every scholar receives full funding",
      icon: <Award className="w-8 h-8" />
    },
    {
      number: "3",
      label: "Years of Impact",
      description: "Since our founding in 2023",
      icon: <GraduationCap className="w-8 h-8" />
    }
  ]

  const featuredScholars: Scholar[] = [
    {
      id: "saabiq-saha",
      name: "Saabiq Saha",
      university: "Grambling State University",
      story: "Saabiq Saha is making waves at Grambling State University, stepping into rooms most students only dream of. Learn more about his journey.",
      image: "/testimonials/placeholder-scholar.jpg",
      instagramLink: "#"
    },
    {
      id: "kobi-twum",
      name: "Kobi Twum",
      university: "Google Internship, New York",
      story: "Kobi Twum, a Ghanaian scholar at Grambling State University, landed an incredible internship at Google in New York. Discover his story.",
      image: "/testimonials/placeholder-scholar.jpg",
      instagramLink: "#"
    },
    {
      id: "emmanuel-prince-dey",
      name: "Emmanuel Prince Dey",
      university: "Dartmouth & Voima Initiative",
      story: "Emmanuel Prince Dey joined multiple programs at Dartmouth, conducted research, and founded the Voima Initiative. Explore his journey.",
      image: "/testimonials/placeholder-scholar.jpg",
      instagramLink: "#"
    }
  ]

  const universities = [
    "California Institute of Technology (Caltech)",
    "University of Pennsylvania",
    "Dartmouth College",
    "Grambling State University",
    "University of Toronto",
    "McGill University",
    "Yale University",
    "Harvard University",
    "MIT",
    "Stanford University",
    "Columbia University",
    "Princeton University"
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-20">
      {/* Hero Section with Animated Text */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/scholars-banner.jpg"
            alt="Veritas Foundation Scholars"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Success by the Numbers
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              We are proud of our scholars and their incredible achievements. Our success is measured by their success and the positive impact we create in our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-yellow-50">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-[#002366]">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold text-[#002366] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-xl font-semibold text-slate-800 mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-slate-600">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">
              Schools Our Scholars Attend
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our scholars have been accepted to some of the world's most prestigious institutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {universities.map((university, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="p-4 text-center justify-center bg-white hover:bg-[#facc15] hover:text-[#002366] transition-all duration-300 text-sm font-medium border border-slate-200 hover:border-[#facc15] cursor-default"
              >
                {university}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Scholar Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">
              What Our Scholars Are Doing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the incredible journeys and achievements of our scholars in the United States
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredScholars.map((scholar, index) => (
              <Card key={scholar.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={scholar.image}
                    alt={scholar.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#002366] mb-2">
                    {scholar.name} – {scholar.university}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {scholar.story}
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="group/btn border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white transition-all duration-300"
                  >
                    <Link href="/blogs">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
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
            Be Part of Our Success Story
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Every donation helps us create more success stories and transform more lives through education
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 hover:scale-105 transition-all duration-300 shadow-lg font-semibold px-8 py-4"
          >
            <Link href="/donate">
              Support Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
    <Footer />
  </>
  )
}