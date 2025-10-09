import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, ArrowRight, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutFounderPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section with Huge Founder Picture */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#002366]/10 text-[#002366] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Heart size={16} />
                <span>MEET THE FOUNDER</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
                A Personal Message from Emmanuel
              </h1>
            </div>

            {/* Huge Founder Picture */}
            <div className="flex justify-center mb-16">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder-user.jpg" // Replace with actual founder photo
                    alt="Emmanuel - Founder of The Veritas Foundation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative Quote */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center shadow-xl">
                  <Quote className="w-8 h-8 text-[#002366]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Message Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Who He Is */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-8 text-center">
                  Who I Am
                </h2>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-l-4 border-[#facc15]">
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    Hello, my name is Emmanuel Aikins Acheampong, and I'm honored to share my story with you. I come from a small village in the Northern Region of Ghana, where dreams often seemed bigger than the opportunities available to pursue them. Today, I'm pursuing my studies in the United States, but my heart remains deeply connected to the brilliant minds back home who face the same challenges I once did.
                  </p>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                    Every day, I'm reminded of how far I've come and how many others could achieve the same—if only they had the right guidance, support, and someone who believed in their potential. That's why I founded The Veritas Foundation.
                  </p>
                </div>
              </div>

              {/* Why He Started Veritas */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-8 text-center">
                  Why I Started Veritas
                </h2>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-l-4 border-[#facc15]">
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    Growing up in Ghana, I witnessed countless brilliant students—friends, classmates, younger siblings—whose academic journeys ended abruptly not because they lacked talent, but because they lacked guidance and financial support. I saw students with 1500+ SAT scores who didn't know how to apply to universities. I met young people with incredible potential who believed their dreams were impossible simply because no one had shown them the way.
                  </p>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    This broke my heart. I realized that talent is universal, but opportunity is not. The difference between a dream achieved and a dream deferred often comes down to having someone who cares enough to provide step-by-step guidance, resources, and unwavering support.
                  </p>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                    I dreamed of creating a bridge—a foundation that would ensure no brilliant mind is left behind because of financial barriers or lack of guidance. That dream became The Veritas Foundation.
                  </p>
                </div>
              </div>

              {/* What Veritas Is Doing Now */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-8 text-center">
                  What We're Achieving Together
                </h2>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-l-4 border-[#facc15]">
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    In just three short years, what started as a dream has become a powerful reality. Today, over 30 brilliant students from Ghana are thriving at top universities like Caltech, UPenn, Grambling State, and many others—all on fully funded scholarships. These aren't just statistics to me; these are young people whose lives have been transformed, whose families have been lifted, and whose communities will benefit from their success.
                  </p>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    We've distributed over $5 million in scholarship support, but more importantly, we've built a community. Our scholars don't just receive financial aid—they join a family that supports them through every challenge, celebrates every victory, and ensures they never walk their journey alone.
                  </p>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                    From our free SAT preparation programs to our community outreach in schools across Ghana's Northern Region, we're not just changing individual lives—we're transforming entire communities, one scholar at a time.
                  </p>
                </div>
              </div>

              {/* Vision for the Future */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-8 text-center">
                  My Vision for Tomorrow
                </h2>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-l-4 border-[#facc15]">
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    I envision a future where every brilliant student in Ghana—and beyond—knows that their dreams are achievable. I see Honors Programs in junior and senior high schools, where we identify and nurture talent early. I dream of a world where no student's potential is limited by their economic circumstances.
                  </p>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    But this vision cannot become reality without you. Every donation, every act of support, every person who believes in our mission helps us reach one more student, fund one more scholarship, and transform one more life. You're not just supporting a foundation—you're investing in the future leaders who will solve tomorrow's greatest challenges.
                  </p>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                    Together, we can ensure that talent and potential are the only factors that determine a student's success—not their financial background or geographic location.
                  </p>
                </div>
              </div>

              {/* Closing Invitation */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-8">
                  Join Me in This Journey
                </h2>
                <div className="bg-gradient-to-br from-[#002366] to-[#0056b3] rounded-2xl p-8 md:p-12 shadow-2xl text-white">
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    Every time I see one of our scholars graduate, land an internship at Google, or start their own company, I'm reminded that what we're doing together is not just changing individual lives—we're rewriting the future.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    But there are still so many brilliant minds waiting for their chance. Students sitting in classrooms across Ghana right now, dreaming of opportunities that seem impossible, but are actually just one scholarship away.
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-[#facc15] mb-8">
                    Together, we can rewrite the future. Will you join me?
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/donate">
                      <Button 
                        size="lg"
                        className="bg-[#facc15] hover:bg-[#facc15]/90 text-[#002366] font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group"
                      >
                        Donate Now to Support Our Dream
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                    <Link href="/applications">
                      <Button 
                        size="lg"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-[#002366] font-semibold px-8 py-4 text-lg transition-all duration-300"
                      >
                        Apply for Scholarship
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}