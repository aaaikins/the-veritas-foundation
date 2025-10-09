"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Story {
  id: number;
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  category: string;
}

const stories: Story[] = [
  {
    id: 1,
    image: "/placeholder-user.jpg", // Will be replaced with actual scholar image
    title: "Drive Meets Discipline",
    description: "If there is one thing this scholar shows us, it is that when drive meets discipline, anything is possible. Meet Mohammed Sabiq Saha, from the village of Yendi, Ghana, who embraced the program's resources to earn admission to Grambling State University. Today, he is seizing every opportunity, including launching Nassari, his startup supported by Microsoft for Startups and already valued at $250,000.",
    linkText: "Learn More",
    linkUrl: "/blogs",
    category: "Success Story"
  },
  {
    id: 2,
    image: "/gallery/scholars-group.jpg", // Group photo of scholars
    title: "Meet Our Current Scholars",
    description: "Meet the current scholars. In just three years, the Veritas Foundation has helped 30+ brilliant yet underserved students earn admission to top universities in US and Canada like Caltech and UPenn, where their full potential is met.",
    linkText: "Learn More",
    linkUrl: "/scholars",
    category: "Our Scholars"
  },
  {
    id: 3,
    image: "/gallery/outreach-program.jpg", // Outreach program image
    title: "Sneak Peek: Veritas Outreach Program",
    description: "We are creating awareness in senior high schools like Ahmadiyya SHS and Tamale SHS in Ghana's Northern Region, where we educate students about scholarships and global opportunities. Our goal is to prevent brilliant students from finishing high school only to be left behind without a path forward.",
    linkText: "Learn More",
    linkUrl: "/about/what-we-do",
    category: "Impact"
  }
];

function FeaturedStories() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#002366]/10 text-[#002366] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span>FEATURED STORIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Stories of <span className="text-[#facc15]">Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we're transforming lives and creating opportunities for the next generation of leaders.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {stories.map((story, index) => (
            <Link href={story.linkUrl} key={story.id} className="block">
              <Card 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 bg-white active:scale-95 md:active:scale-100 cursor-pointer"
              >
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-48 lg:h-56 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      priority={index === 0}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-[#002366]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {story.category}
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className="absolute bottom-4 right-4 bg-[#facc15] text-[#002366] p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-5 lg:p-6">
                    {/* Title */}
                    <h3 className="text-xl md:text-lg lg:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#002366] transition-colors duration-300 min-h-[3.5rem] flex items-start">
                      <span className="leading-tight">
                        {story.title}
                      </span>
                    </h3>
                    
                    {/* Description */}
                    <div className="mb-6 min-h-[5rem] flex items-start">
                      <p className="text-slate-600 text-sm md:text-xs lg:text-sm leading-relaxed">
                        {story.description.length > 140 
                          ? `${story.description.substring(0, 140)}...` 
                          : story.description
                        }
                      </p>
                    </div>
                    
                    {/* Call-to-Action Link */}
                    <div className="flex items-center justify-between font-semibold text-[#002366] group-hover:text-[#facc15] transition-colors duration-300">
                      <span>{story.linkText}</span>
                      <ArrowRight 
                        size={16} 
                        className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link href="/blogs">
            <Button 
              size="lg"
              className="bg-[#002366] hover:bg-[#002366]/90 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group"
            >
              View All Stories
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedStories;