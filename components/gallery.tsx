"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Loader2, Eye, Download, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface GalleryItem {
  id: number
  title: string
  description?: string
  image_url: string
  thumbnail_url?: string
  album?: string
  tags?: string[]
  views?: number
  downloads?: number
  created_at: string
}

const galleryImages = [
  { src: "/hero-image.jpg", alt: "Veritas Foundation group photo", className: "col-span-2 row-span-2" },
  { src: "/gallery/career-preview.jpg", alt: "Scholars at a Career Preview event", className: "row-span-2" },
  { src: "/gallery/caltech-scholar.png", alt: "Veritas Foundation scholar at Caltech", className: "" },
  {
    src: "/gallery/grambling-scholar.png",
    alt: "Veritas Foundation scholar at Grambling State University",
    className: "",
  },
  { src: "/gallery/yale-scholar.jpeg", alt: "Veritas Foundation scholar at Yale University", className: "" },
]

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await fetch('/api/gallery?limit=8')
        if (!response.ok) {
          throw new Error('Failed to fetch gallery items')
        }
        const data = await response.json()
        setGalleryItems(data)
      } catch (err) {
        console.error('Error fetching gallery items:', err)
        setError('Unable to load gallery items')
      } finally {
        setIsLoading(false)
      }
    }

    fetchGalleryItems()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <section id="gallery" className="w-full py-20 md:py-28 lg:py-36 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-10 text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
              <span>Success Stories</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Moments from Our
                <br />
                <span className="text-[#facc15]">Journey</span>
              </h2>
              <p className="max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                A glimpse into the lives we&apos;ve touched and the community we&apos;ve built. These are the faces of change,
                the stories of transformation, and the future we&apos;re creating together.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-[#002366]" />
            <span className="ml-2 text-slate-600">Loading gallery...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="gallery" className="w-full py-20 md:py-28 lg:py-36 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-10 text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
              <span>Success Stories</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Moments from Our
                <br />
                <span className="text-[#facc15]">Journey</span>
              </h2>
              <p className="max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
                A glimpse into the lives we&apos;ve touched and the community we&apos;ve built. These are the faces of change,
                the stories of transformation, and the future we&apos;re creating together.
              </p>
            </div>
          </div>
          <div className="text-center py-20">
            <p className="text-slate-600">{error}</p>
            <p className="text-sm text-slate-500 mt-2">Showing fallback gallery</p>
          </div>
          <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl">
            {galleryImages.map((image, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 ${image.className} bg-slate-100`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-base font-medium leading-relaxed drop-shadow-lg">
                      {image.alt}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Use API data if available, otherwise fallback to static images
  const displayItems = galleryItems.length > 0 ? galleryItems : galleryImages.map((img, index) => ({
    id: index,
    title: img.alt,
    image_url: img.src,
    created_at: new Date().toISOString(),
    views: 0,
    downloads: 0
  }))

  return (
    <section id="gallery" className="w-full py-20 md:py-28 lg:py-36 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-10 text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
            <span>Success Stories</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
              Moments from Our
              <br />
              <span className="text-[#facc15]">Journey</span>
            </h2>
            <p className="max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
              A glimpse into the lives we&apos;ve touched and the community we&apos;ve built. These are the faces of change,
              the stories of transformation, and the future we&apos;re creating together.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-6 py-3 group">
                <Link href="/gallery">
                  View Full Gallery
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl">
          {displayItems.map((item, index) => (
            <div key={item.id || index} className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 ${galleryImages[index]?.className || ''} bg-slate-100`}>
              <Image
                src={item.image_url || "/placeholder.svg"}
                alt={item.title || "Gallery image"}
                width={600}
                height={600}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-base font-medium leading-relaxed drop-shadow-lg mb-3">
                    {item.title}
                  </p>
                  {item.created_at && (
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(item.created_at)}</span>
                      </div>
                      {item.views !== undefined && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{item.views}</span>
                        </div>
                      )}
                      {item.downloads !== undefined && (
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>{item.downloads}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
