import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { HeartHandshake } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


function about() {
  return (
        <section id="mission" className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            {/* About us badge above the grid */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <span>About us</span>
              </div>
            </div>

            <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24 mb-16">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                    About The Veritas Foundation
                  </h2>
                  <p className="max-w-[600px] text-slate-600 md:text-lg leading-relaxed font-normal">
                    The Veritas Foundation Inc. is a registered 501(c)(3) non-profit organization dedicated to educational
                    equity and social justice. Founded with the belief that every individual deserves the opportunity to
                    pursue their dreams, we have been transforming lives through comprehensive scholarship programs,
                    mentorship initiatives, and community empowerment projects since our inception.
                  </p>
                  <div className="pt-4">
                    <Link href="/about">
                      <Button className="bg-[#002366] hover:bg-[#002366]/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <Image
                    src="/logo.png"
                    width={450}
                    height={450}
                    alt="Veritas Foundation Logo"
                    className="rounded-3xl object-contain shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[#facc15] w-32 h-32 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute -top-6 -left-6 bg-[#002366] w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

          </div>
        </section>
  )
}

export default about