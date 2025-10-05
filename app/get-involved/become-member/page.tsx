import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Heart, BookOpen, Award, Target, Clock, Mail } from "lucide-react"
import Link from "next/link"

export default function BecomeMemberPage() {
  const membershipTiers = [
    {
      title: "Volunteer Mentor",
      price: "Free",
      description: "Share your knowledge and experience by mentoring students",
      timeCommitment: "2-4 hours per week",
      duration: "6-12 months",
      benefits: [
        "Direct impact on student lives",
        "Flexible scheduling",
        "Mentor training provided",
        "Recognition and certificates",
        "Access to member events"
      ],
      requirements: [
        "Bachelor's degree or equivalent experience",
        "Passion for education and mentoring",
        "Background check required",
        "Commitment to program duration"
      ],
      icon: Users
    },
    {
      title: "Supporting Member",
      price: "$25/month",
      description: "Provide ongoing financial support for our programs and initiatives",
      timeCommitment: "No time commitment",
      duration: "Flexible",
      benefits: [
        "Monthly impact reports",
        "Member-only newsletter",
        "Invitation to annual events",
        "Tax-deductible contributions",
        "Recognition on website"
      ],
      requirements: [
        "Commitment to monthly giving",
        "Belief in our mission",
        "Desire to support education"
      ],
      icon: Heart
    },
    {
      title: "Advisory Member",
      price: "$100/month",
      description: "Provide strategic guidance and expertise to help shape our programs",
      timeCommitment: "4-6 hours per month",
      duration: "12+ months",
      benefits: [
        "Quarterly board meetings",
        "Direct program input",
        "Networking opportunities",
        "Leadership recognition",
        "All Supporting Member benefits"
      ],
      requirements: [
        "Professional expertise in relevant field",
        "Leadership experience",
        "Strategic thinking abilities",
        "Long-term commitment"
      ],
      icon: Target
    }
  ]

  const ways = [
    {
      icon: BookOpen,
      title: "Academic Mentoring",
      description: "Guide students in their academic journey, helping with study strategies, goal setting, and educational planning."
    },
    {
      icon: Users,
      title: "Career Guidance",
      description: "Share your professional experience to help students explore career paths and develop professional skills."
    },
    {
      icon: Award,
      title: "Leadership Development",
      description: "Help students develop leadership skills through workshops, projects, and personal development activities."
    },
    {
      icon: Heart,
      title: "Personal Support",
      description: "Provide emotional support and life coaching to help students overcome challenges and build confidence."
    }
  ]

  const volunteerBenefits = [
    "Make a meaningful difference in students' lives",
    "Develop your own mentoring and leadership skills",
    "Join a community of like-minded individuals",
    "Receive comprehensive training and ongoing support",
    "Flexible scheduling to fit your lifestyle",
    "Recognition and appreciation for your contributions"
  ]

  const process = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete our membership application form with your background, interests, and availability."
    },
    {
      step: 2,
      title: "Interview & Screening",
      description: "Participate in an interview and background check to ensure you're a good fit for our community."
    },
    {
      step: 3,
      title: "Training & Orientation",
      description: "Attend our comprehensive training program to learn about our methods and best practices."
    },
    {
      step: 4,
      title: "Start Making Impact",
      description: "Begin your journey as a member and start making a positive difference in students' lives."
    }
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#002366] via-[#003d82] to-[#0056b3] text-white py-20">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 bg-[#facc15] text-[#002366] font-semibold">
              Join Our Community
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Become a Member
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Join our community of educators, professionals, and advocates who are passionate about empowering the next generation of leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 font-semibold">
                <Link href="/join-us">
                  Apply to Join
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#002366] font-semibold">
                <Link href="#membership-options">
                  View Options
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Why Join The Veritas Foundation?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Be part of a movement that's transforming lives through education and creating lasting positive change in communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ways.map((way, index) => {
                const IconComponent = way.icon
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 group">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-[#002366]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#002366] mb-3">{way.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{way.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Membership Options */}
        <section id="membership-options" className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Membership Options</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the membership level that best fits your availability, interests, and desired level of involvement
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {membershipTiers.map((tier, index) => {
                const IconComponent = tier.icon
                return (
                  <Card key={index} className={`h-full hover:shadow-xl transition-all duration-300 border-0 ${index === 1 ? 'bg-gradient-to-br from-[#002366] to-[#0056b3] text-white' : 'bg-white'}`}>
                    <CardHeader className="text-center">
                      <div className={`mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center ${index === 1 ? 'bg-[#facc15]' : 'bg-gradient-to-br from-[#facc15] to-[#f59e0b]'}`}>
                        <IconComponent className={`w-8 h-8 ${index === 1 ? 'text-[#002366]' : 'text-[#002366]'}`} />
                      </div>
                      <CardTitle className={`text-2xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-[#002366]'}`}>
                        {tier.title}
                      </CardTitle>
                      <div className={`text-3xl font-bold mb-2 ${index === 1 ? 'text-[#facc15]' : 'text-[#002366]'}`}>
                        {tier.price}
                      </div>
                      <CardDescription className={`${index === 1 ? 'text-blue-100' : 'text-slate-600'}`}>
                        {tier.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className={`font-medium ${index === 1 ? 'text-blue-100' : 'text-slate-700'}`}>Time Commitment:</span>
                          <span className={`${index === 1 ? 'text-white' : 'text-slate-600'}`}>{tier.timeCommitment}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className={`font-medium ${index === 1 ? 'text-blue-100' : 'text-slate-700'}`}>Duration:</span>
                          <span className={`${index === 1 ? 'text-white' : 'text-slate-600'}`}>{tier.duration}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className={`font-medium mb-3 text-sm ${index === 1 ? 'text-blue-100' : 'text-slate-700'}`}>Benefits:</h4>
                        <ul className="space-y-2">
                          {tier.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className={`flex items-start text-sm ${index === 1 ? 'text-white' : 'text-slate-600'}`}>
                              <CheckCircle className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${index === 1 ? 'text-[#facc15]' : 'text-green-500'}`} />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className={`font-medium mb-3 text-sm ${index === 1 ? 'text-blue-100' : 'text-slate-700'}`}>Requirements:</h4>
                        <ul className="space-y-2">
                          {tier.requirements.map((requirement, reqIndex) => (
                            <li key={reqIndex} className={`flex items-start text-sm ${index === 1 ? 'text-white' : 'text-slate-600'}`}>
                              <div className={`w-2 h-2 rounded-full mr-2 mt-2 flex-shrink-0 ${index === 1 ? 'bg-[#facc15]' : 'bg-[#facc15]'}`}></div>
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        asChild 
                        className={`w-full ${
                          index === 1 
                            ? 'bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90' 
                            : 'bg-[#002366] text-white hover:bg-[#002366]/90'
                        } font-semibold`}
                      >
                        <Link href="/join-us">
                          Apply for {tier.title}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Volunteer Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Member Benefits</h2>
                <p className="text-xl text-slate-600">
                  As a member of The Veritas Foundation, you'll enjoy numerous benefits while making a meaningful impact
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {volunteerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">How to Join</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our membership process is designed to ensure the best fit for both you and our organization
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#002366] to-[#0056b3] rounded-full flex items-center justify-center text-white font-bold mr-6">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#002366] mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-slate-50 border-0">
                <CardContent className="p-0">
                  <Clock className="w-12 h-12 text-[#002366] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Membership Timeline</h3>
                  <p className="text-slate-600 mb-4">
                    The membership application process typically takes 2-3 weeks from application to approval. 
                    We'll keep you informed every step of the way.
                  </p>
                  <Badge variant="secondary" className="bg-[#facc15] text-[#002366] font-semibold">
                    Training begins monthly
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-[#002366] to-[#0056b3] text-white">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Join our community of passionate individuals who are committed to empowering students and transforming lives. 
              Your expertise, experience, and dedication can help shape the future of education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 font-semibold">
                <Link href="/join-us">
                  Start Your Application
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#002366] font-semibold">
                <Link href="mailto:membership@veritasfoundation.org">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
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