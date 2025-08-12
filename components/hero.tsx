import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeartHandshake } from "lucide-react"
import Image from "next/image"

function Hero(props: { id: string }) {
    const { id } = props;
  return (
    <div className="bg-white mt-20">
      {/* The main hero container now has a background image */}
      <div
        className="relative rounded-b-[4rem] md:rounded-b-[6rem] pt-12 pb-20 px-4 md:px-12 text-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url(/hero-image.jpg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '500px',
                width: '100%'
         }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-b-[4rem] md:rounded-b-[6rem]"></div>

        {/* Content container, positioned above the overlay */}
        <div className="relative z-10">
          {/* Top text */}
          <div className="text-sm font-bold tracking-widest mb-6">
            <span>EMPOWERING IDEAS</span>
            <span className="mx-2">.</span>
            <span>TRANSFORMING LIVES</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            The Veritas Foundation Inc.
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto mb-8">
            Join us on our mission to promote inclusivity and empower the next generation
            through education, social justice initiatives, children and women empowerment
            programs
          </p>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-4">
            <button className="p-3 border-2 border-white rounded-full hover:bg-white hover:bg-opacity-20 transition-colors">
              <FiArrowLeft size={24} />
            </button>
            <button className="p-3 border-2 border-white rounded-full hover:bg-white hover:bg-opacity-20 transition-colors">
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Buttons below the hero section */}
      <div className="flex justify-center mt-5 space-x-0">
            <Button asChild size="lg" className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90">
            <Link href="#donate">
                <HeartHandshake className="mr-2 h-5 w-5" />
                Donate Now
            </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
            <Link href="#mission">Learn More</Link>
            </Button>
      </div>
    </div>
  );
};

export default Hero
