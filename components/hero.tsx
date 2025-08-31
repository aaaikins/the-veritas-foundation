import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeartHandshake } from "lucide-react"
import Image from "next/image"
import ApplicationForm from "@/components/application-form"
import DonationForm from "@/components/donation-form"

function Hero(props: { id: string }) {
    const { id } = props;
  return (
    <div className="bg-white">
      {/* The main hero container now has a background image */}
      <div
        className="relative rounded-b-[4rem] md:rounded-b-[6rem] pt-24 md:pt-32 pb-24 px-6 md:px-12 text-center bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: "url(/hero-image.jpg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '600px',
                width: '100%'
         }}
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 rounded-b-[4rem] md:rounded-b-[6rem]"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 rounded-b-[4rem] md:rounded-b-[6rem]">
          <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>

        {/* Content container, positioned above the overlay */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-6 py-3 rounded-full text-sm font-semibold mb-8 hover:bg-white/20 transition-all duration-300">
            <span>EMPOWERING IDEAS</span>
            <span className="text-[#facc15]">•</span>
            <span>TRANSFORMING LIVES</span>
          </div>

          {/* Main heading with improved typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The Veritas
            <br />
            <span className="text-[#facc15]">Foundation Inc.</span>
          </h1>

          {/* Enhanced subheading */}
          <p className="max-w-4xl mx-auto mb-10 text-lg md:text-xl text-white/90 leading-relaxed font-medium">
            Join us on our mission to promote inclusivity and empower the next generation
            through education, social justice initiatives, children and women empowerment
            programs. Together, we build a brighter future.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <DonationForm />
            <ApplicationForm />
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-white/70 font-normal">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>501(c)(3) Non-Profit</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>30+ Scholars Supported</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#facc15] rounded-full"></div>
              <span>$5M+ in Scholarships</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero
