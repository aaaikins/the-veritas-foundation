"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeartHandshake, ArrowRight, Sparkles, GraduationCap, Plane, Laptop } from "lucide-react"

function DonationBanner() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#002366] via-[#003488] to-[#0040aa] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(250,204,21,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.2)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 left-8 text-[#facc15]/20 animate-pulse">
          <GraduationCap size={32} />
        </div>
        <div className="absolute top-16 right-16 text-[#facc15]/30 animate-bounce" style={{ animationDelay: '1s' }}>
          <Laptop size={28} />
        </div>
        <div className="absolute bottom-12 left-12 text-[#facc15]/25 animate-pulse" style={{ animationDelay: '2s' }}>
          <Plane size={24} />
        </div>
        <div className="absolute bottom-8 right-8 text-[#facc15]/20 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <Sparkles size={30} />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 bg-[#facc15]/20 backdrop-blur-sm border border-[#facc15]/30 text-[#facc15] px-6 py-3 rounded-full text-sm font-semibold mb-8 hover:bg-[#facc15]/30 transition-all duration-300">
            <HeartHandshake size={16} />
            <span>MAKE AN IMPACT</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Fueling Futures with
            <br />
            <span className="text-[#facc15] relative">
              Your Support
              <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-[#facc15]/30 rounded-full"></div>
            </span>
          </h2>

          {/* Description */}
          <div className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto">
            <p className="mb-3 md:mb-4">
              Your donations make Veritas' work possible — from providing <strong className="text-[#facc15]">laptops and flight tickets</strong> that ensure our scholars can actually step into their dream universities, to sustaining <strong className="text-[#facc15]">outreach programs</strong> that inspire high school students to aim higher.
            </p>
            <p className="mb-3 md:mb-4">
              With your support, we can also launch future initiatives like <strong className="text-[#facc15]">Honors Programs</strong> in junior and senior high schools, giving brilliant students the recognition and guidance they deserve.
            </p>
            <p className="text-[#facc15] font-semibold">
              Every contribution drives a deeper impact.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-[#facc15] mb-1">30+</div>
              <div className="text-sm text-white/80">Scholars Supported</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-[#facc15] mb-1">$5M+</div>
              <div className="text-sm text-white/80">In Scholarships</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-[#facc15] mb-1">100%</div>
              <div className="text-sm text-white/80">Direct Impact</div>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/donate">
              <Button 
                size="lg"
                className="bg-[#facc15] hover:bg-[#facc15]/90 text-[#002366] font-bold px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl shadow-2xl hover:shadow-[#facc15]/25 hover:scale-105 transition-all duration-500 ease-out group relative overflow-hidden w-full sm:w-auto"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
            
            <div className="text-white/70 text-xs md:text-sm text-center sm:text-left">
              <span className="block">Secure • Tax-Deductible</span>
              <span className="block">501(c)(3) Non-Profit</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>PCI Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#facc15] rounded-full"></div>
                <span>GuideStar Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationBanner;