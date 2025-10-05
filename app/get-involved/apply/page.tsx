import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, FileText, Users, Award, AlertCircle, GraduationCap, Target } from "lucide-react"
import Link from "next/link"

export default function ApplyPage() {
  const programs = [
    {
      title: "Academic Mentorship Program",
      description: "One-on-one mentoring with experienced educators and professionals",
      duration: "6-12 months",
      commitment: "2-3 hours per week",
      requirements: ["High school or college student", "GPA of 3.0 or higher", "Commitment to program duration"],
      benefits: ["Personalized academic guidance", "Study skills development", "Goal setting and tracking", "College/career counseling"]
    },
    {
      title: "Leadership Development Track",
      description: "Comprehensive leadership training and community engagement opportunities",
      duration: "12 months",
      commitment: "4-5 hours per week",
      requirements: ["Demonstrated leadership potential", "Community service experience", "Strong communication skills"],
      benefits: ["Leadership workshops", "Public speaking training", "Community project leadership", "Networking opportunities"]
    },
    {
      title: "Scholarship Program",
      description: "Financial support for educational expenses and academic pursuits",
      duration: "1-4 years",
      commitment: "Maintain academic standards",
      requirements: ["Financial need", "Academic excellence", "Essay submission", "Recommendation letters"],
      benefits: ["Tuition assistance", "Book and supply allowances", "Technology support", "Ongoing mentorship"]
    }
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Submit Initial Application",
      description: "Complete our online application form with basic information, academic records, and personal statement."
    },
    {
      step: 2,
      title: "Document Review",
      description: "Our team reviews your application, transcripts, and supporting documents."
    },
    {
      step: 3,
      title: "Interview Process",
      description: "Selected candidates participate in a virtual or in-person interview with our mentorship team."
    },
    {
      step: 4,
      title: "Program Matching",
      description: "We match successful applicants with appropriate programs and mentors based on their needs and goals."
    },
    {
      step: 5,
      title: "Onboarding",
      description: "Welcome session and program orientation to help you get started on your journey."
    }
  ]

  const faqs = [
    {
      question: "Who is eligible to apply for The Veritas Foundation programs?",
      answer: "We welcome applications from high school and college students who demonstrate academic potential, leadership qualities, and a commitment to personal growth. Specific eligibility requirements vary by program, but generally include maintaining a minimum GPA and showing dedication to the program's time commitments."
    },
    {
      question: "Is there an application fee?",
      answer: "No, there is absolutely no application fee. We believe that financial barriers should never prevent talented students from accessing our programs and support services."
    },
    {
      question: "How long does the application process take?",
      answer: "The typical application process takes 4-6 weeks from submission to final decision. This includes time for document review, interviews, and program matching. We'll keep you updated throughout the process."
    },
    {
      question: "Can I apply for multiple programs simultaneously?",
      answer: "Yes, you can apply for multiple programs. However, we recommend focusing on 1-2 programs that best align with your current needs and goals. Our team will help determine the best fit during the application process."
    },
    {
      question: "What support do you provide for students with financial need?",
      answer: "We offer comprehensive support including scholarship opportunities, technology assistance, educational materials, and in some cases, support for essential items like SAT registration fees, laptops, and even travel expenses for educational opportunities."
    },
    {
      question: "Do you provide support for college applications?",
      answer: "Absolutely! Our mentors provide extensive college application support including essay review, application strategy, scholarship guidance, and interview preparation. We also help with standardized test preparation and college selection."
    },
    {
      question: "What is expected of program participants?",
      answer: "Participants are expected to maintain regular communication with their mentors, meet program attendance requirements, maintain academic standards, and actively engage in program activities. We also encourage participants to give back to the community when possible."
    },
    {
      question: "How are mentors selected and matched?",
      answer: "Our mentors are carefully selected professionals and educators with relevant experience in their fields. We match mentors and mentees based on academic interests, career goals, personality compatibility, and specific needs to ensure the most effective mentoring relationship."
    },
    {
      question: "Is the program only for students in certain geographic areas?",
      answer: "While we have a physical presence in certain locations, many of our programs can be delivered virtually, allowing us to support students regardless of their geographic location. We're committed to expanding access to as many students as possible."
    },
    {
      question: "What happens after I complete a program?",
      answer: "Program completion is not the end of your relationship with The Veritas Foundation. Many of our alumni become part of our extended network, participate in alumni events, and some even become mentors themselves. We maintain long-term relationships and continue to provide support as needed."
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
              Start Your Journey
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Apply Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Take the first step toward unlocking your potential. Join our community of scholars, leaders, and changemakers.
            </p>
            <Button asChild size="lg" className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 font-semibold">
              <Link href="/applications">
                Start Application
              </Link>
            </Button>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Our Programs</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of programs designed to support students at every stage of their educational journey
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full flex items-center justify-center mb-4">
                      {index === 0 && <GraduationCap className="w-6 h-6 text-[#002366]" />}
                      {index === 1 && <Users className="w-6 h-6 text-[#002366]" />}
                      {index === 2 && <Award className="w-6 h-6 text-[#002366]" />}
                    </div>
                    <CardTitle className="text-xl text-[#002366]">{program.title}</CardTitle>
                    <CardDescription className="text-slate-600">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-700">Duration:</span>
                        <span className="text-slate-600">{program.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-700">Commitment:</span>
                        <span className="text-slate-600">{program.commitment}</span>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2 text-sm">Requirements:</h4>
                        <ul className="space-y-1">
                          {program.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start text-sm text-slate-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-slate-700 mb-2 text-sm">Benefits:</h4>
                        <ul className="space-y-1">
                          {program.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-sm text-slate-600">
                              <Target className="w-3 h-3 text-[#facc15] mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Application Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our streamlined application process is designed to be thorough yet accessible
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {applicationSteps.map((step, index) => (
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
                  <h3 className="text-xl font-bold text-[#002366] mb-4">Application Timeline</h3>
                  <p className="text-slate-600 mb-4">
                    Applications are reviewed on a rolling basis throughout the year. We recommend applying 
                    at least 6-8 weeks before you'd like to start a program.
                  </p>
                  <Badge variant="secondary" className="bg-[#facc15] text-[#002366] font-semibold">
                    Average Response Time: 2-3 weeks
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002366]">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Find answers to common questions about our application process and programs
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-[#002366]">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-[#002366] to-[#0056b3] text-white">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Your journey toward academic excellence and personal growth starts with a single step. 
              Join thousands of students who have transformed their lives through our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 font-semibold">
                <Link href="/applications">
                  Start Your Application
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#002366] font-semibold">
                <Link href="mailto:admissions@veritasfoundation.org">
                  Contact Admissions
                </Link>
              </Button>
            </div>

            <div className="mt-12 p-6 bg-white/10 rounded-lg max-w-2xl mx-auto">
              <AlertCircle className="w-8 h-8 text-[#facc15] mx-auto mb-4" />
              <h3 className="font-bold mb-2">Need Help with Your Application?</h3>
              <p className="text-blue-100 text-sm">
                Our admissions team is here to help! If you have questions about the application process, 
                need assistance with required documents, or want to discuss program options, don't hesitate to reach out.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}