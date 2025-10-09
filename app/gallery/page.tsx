"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Eye, Download, Calendar, X, ChevronLeft, ChevronRight, Loader2, Filter } from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  description?: string
  image_url: string
  thumbnail_url?: string
  album?: string
  category?: string
  tags?: string[]
  views?: number
  downloads?: number
  created_at: string
}

interface GalleryStats {
  total_images: number
  total_albums: number
  total_views: number
  total_downloads: number
  recent_uploads: number
}

// Fallback gallery data with categories
const fallbackGalleryData: GalleryItem[] = [
  // Outreach Category
  {
    id: 1,
    title: "Community outreach visit to local schools",
    image_url: "/gallery/outreach/community-visit-1.jpg",
    category: "outreach",
    album: "Community Outreach",
    tags: ["outreach", "community", "schools"],
    views: 156,
    downloads: 23,
    created_at: "2024-03-15T00:00:00Z"
  },
  {
    id: 2,
    title: "Scholarship information session",
    image_url: "/gallery/outreach/scholarship-info-session.jpg",
    category: "outreach",
    album: "Community Outreach",
    tags: ["outreach", "scholarships", "information"],
    views: 89,
    downloads: 12,
    created_at: "2024-03-10T00:00:00Z"
  },
  {
    id: 3,
    title: "Educational workshop for prospective students",
    image_url: "/gallery/outreach/education-workshop.jpg",
    category: "outreach",
    album: "Community Outreach",
    tags: ["outreach", "workshop", "education"],
    views: 134,
    downloads: 18,
    created_at: "2024-02-28T00:00:00Z"
  },
  {
    id: 4,
    title: "Visit to rural school communities",
    image_url: "/gallery/outreach/rural-school-visit.jpg",
    category: "outreach",
    album: "Community Outreach",
    tags: ["outreach", "rural", "schools"],
    views: 78,
    downloads: 9,
    created_at: "2024-02-20T00:00:00Z"
  },
  
  // Scholars Category
  {
    id: 5,
    title: "Veritas Foundation scholar at Caltech",
    image_url: "/gallery/caltech-scholar.png",
    category: "scholars",
    album: "Scholar Achievements",
    tags: ["scholars", "Caltech", "achievement"],
    views: 245,
    downloads: 34,
    created_at: "2024-03-20T00:00:00Z"
  },
  {
    id: 6,
    title: "Veritas Foundation scholar at Grambling State University",
    image_url: "/gallery/grambling-scholar.png",
    category: "scholars",
    album: "Scholar Achievements",
    tags: ["scholars", "Grambling", "university"],
    views: 198,
    downloads: 28,
    created_at: "2024-03-18T00:00:00Z"
  },
  {
    id: 7,
    title: "Veritas Foundation scholar at Yale University",
    image_url: "/gallery/yale-scholar.jpeg",
    category: "scholars",
    album: "Scholar Achievements",
    tags: ["scholars", "Yale", "university"],
    views: 312,
    downloads: 45,
    created_at: "2024-03-16T00:00:00Z"
  },
  {
    id: 8,
    title: "Scholar graduating from Harvard University",
    image_url: "/gallery/scholars/harvard-graduation.jpg",
    category: "scholars",
    album: "Scholar Achievements",
    tags: ["scholars", "Harvard", "graduation"],
    views: 289,
    downloads: 41,
    created_at: "2024-05-15T00:00:00Z"
  },
  {
    id: 9,
    title: "Scholar conducting research at MIT",
    image_url: "/gallery/scholars/mit-research-lab.jpg",
    category: "scholars",
    album: "Scholar Achievements",
    tags: ["scholars", "MIT", "research"],
    views: 167,
    downloads: 25,
    created_at: "2024-04-10T00:00:00Z"
  },
  {
    id: 10,
    title: "Scholar at Stanford University campus",
    image_url: "/gallery/scholars/stanford-campus.jpg",
    category: "scholars",
    album: "Scholar Achievements",
    tags: ["scholars", "Stanford", "campus"],
    views: 203,
    downloads: 30,
    created_at: "2024-04-05T00:00:00Z"
  },
  
  // Events Category
  {
    id: 11,
    title: "Scholars at a Career Preview event",
    image_url: "/gallery/career-preview.jpg",
    category: "events",
    album: "Foundation Events",
    tags: ["events", "career", "preview"],
    views: 178,
    downloads: 22,
    created_at: "2024-03-25T00:00:00Z"
  },
  {
    id: 12,
    title: "Annual Veritas Foundation Gala 2024",
    image_url: "/gallery/events/annual-gala-2024.jpg",
    category: "events",
    album: "Foundation Events",
    tags: ["events", "gala", "annual"],
    views: 456,
    downloads: 67,
    created_at: "2024-05-20T00:00:00Z"
  },
  {
    id: 13,
    title: "Scholarship award ceremony",
    image_url: "/gallery/events/scholarship-ceremony.jpg",
    category: "events",
    album: "Foundation Events",
    tags: ["events", "scholarship", "ceremony"],
    views: 234,
    downloads: 35,
    created_at: "2024-04-15T00:00:00Z"
  },
  {
    id: 14,
    title: "Donor appreciation dinner",
    image_url: "/gallery/events/donor-appreciation.jpg",
    category: "events",
    album: "Foundation Events",
    tags: ["events", "donor", "appreciation"],
    views: 145,
    downloads: 19,
    created_at: "2024-04-20T00:00:00Z"
  },
  
  // Hangout/Community Category
  {
    id: 15,
    title: "Scholars casual meetup and networking",
    image_url: "/gallery/hangout/scholars-meetup.jpg",
    category: "hangout",
    album: "Community Gatherings",
    tags: ["hangout", "meetup", "networking"],
    views: 123,
    downloads: 16,
    created_at: "2024-03-12T00:00:00Z"
  },
  {
    id: 16,
    title: "Summer retreat for scholars",
    image_url: "/gallery/hangout/summer-retreat.jpg",
    category: "hangout",
    album: "Community Gatherings",
    tags: ["hangout", "retreat", "summer"],
    views: 189,
    downloads: 27,
    created_at: "2024-07-10T00:00:00Z"
  },
  {
    id: 17,
    title: "Alumni reunion gathering",
    image_url: "/gallery/hangout/alumni-reunion.jpg",
    category: "hangout",
    album: "Community Gatherings",
    tags: ["hangout", "alumni", "reunion"],
    views: 267,
    downloads: 38,
    created_at: "2024-06-15T00:00:00Z"
  },
  {
    id: 18,
    title: "Scholars study group session",
    image_url: "/gallery/hangout/study-group.jpg",
    category: "hangout",
    album: "Community Gatherings",
    tags: ["hangout", "study", "group"],
    views: 98,
    downloads: 14,
    created_at: "2024-02-25T00:00:00Z"
  },
  {
    id: 19,
    title: "Cultural celebration night",
    image_url: "/gallery/hangout/cultural-night.jpg",
    category: "hangout",
    album: "Community Gatherings",
    tags: ["hangout", "cultural", "celebration"],
    views: 156,
    downloads: 21,
    created_at: "2024-08-05T00:00:00Z"
  },
  
  // Mentorship Category
  {
    id: 20,
    title: "Mentor and student one-on-one session",
    image_url: "/gallery/mentorship/mentor-student-meeting.jpg",
    category: "mentorship",
    album: "Mentorship Program",
    tags: ["mentorship", "meeting", "guidance"],
    views: 134,
    downloads: 18,
    created_at: "2024-03-08T00:00:00Z"
  },
  {
    id: 21,
    title: "Group mentoring session",
    image_url: "/gallery/mentorship/group-mentoring.jpg",
    category: "mentorship",
    album: "Mentorship Program",
    tags: ["mentorship", "group", "session"],
    views: 112,
    downloads: 15,
    created_at: "2024-02-15T00:00:00Z"
  },
  {
    id: 22,
    title: "Virtual mentoring and coaching session",
    image_url: "/gallery/mentorship/virtual-coaching.jpg",
    category: "mentorship",
    album: "Mentorship Program",
    tags: ["mentorship", "virtual", "coaching"],
    views: 87,
    downloads: 11,
    created_at: "2024-01-20T00:00:00Z"
  },
  {
    id: 23,
    title: "Mentorship industry visit",
    image_url: "/gallery/mentorship/industry-visit.jpg",
    category: "mentorship",
    album: "Mentorship Program",
    tags: ["mentorship", "industry", "visit"],
    views: 145,
    downloads: 20,
    created_at: "2024-04-25T00:00:00Z"
  },
  
  // Foundation group photo (featured)
  {
    id: 24,
    title: "Veritas Foundation group photo",
    image_url: "/hero-image.jpg",
    category: "events",
    album: "Foundation Events",
    tags: ["events", "group", "foundation"],
    views: 589,
    downloads: 89,
    created_at: "2024-01-01T00:00:00Z"
  }
]

const categories = [
  { value: "all", label: "All Photos" },
  { value: "scholars", label: "Scholars" },
  { value: "events", label: "Events" },
  { value: "outreach", label: "Outreach" },
  { value: "hangout", label: "Community" },
  { value: "mentorship", label: "Mentorship" }
]

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [stats, setStats] = useState<GalleryStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        // Fetch gallery items
        const itemsResponse = await fetch('/api/gallery?limit=50')
        if (itemsResponse.ok) {
          const itemsData = await itemsResponse.json()
          setGalleryItems(itemsData.length > 0 ? itemsData : fallbackGalleryData)
        } else {
          // Use fallback data if API fails
          setGalleryItems(fallbackGalleryData)
        }

        // Fetch gallery stats
        const statsResponse = await fetch('/api/gallery/stats')
        if (statsResponse.ok) {
          const statsData = await statsResponse.json()
          setStats(statsData)
        } else {
          // Use fallback stats
          setStats({
            total_images: fallbackGalleryData.length,
            total_albums: Array.from(new Set(fallbackGalleryData.map(item => item.album))).length,
            total_views: fallbackGalleryData.reduce((sum, item) => sum + (item.views || 0), 0),
            total_downloads: fallbackGalleryData.reduce((sum, item) => sum + (item.downloads || 0), 0),
            recent_uploads: fallbackGalleryData.filter(item => 
              new Date(item.created_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
            ).length
          })
        }
      } catch (err) {
        console.error('Error fetching gallery data:', err)
        // Use fallback data on error
        setGalleryItems(fallbackGalleryData)
        setStats({
          total_images: fallbackGalleryData.length,
          total_albums: Array.from(new Set(fallbackGalleryData.map(item => item.album))).length,
          total_views: fallbackGalleryData.reduce((sum, item) => sum + (item.views || 0), 0),
          total_downloads: fallbackGalleryData.reduce((sum, item) => sum + (item.downloads || 0), 0),
          recent_uploads: fallbackGalleryData.filter(item => 
            new Date(item.created_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
          ).length
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchGalleryData()
  }, [])

  const openImageModal = (item: GalleryItem, index: number) => {
    setSelectedImage(item)
    setCurrentImageIndex(index)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return

    const newIndex = direction === 'next'
      ? (currentImageIndex + 1) % galleryItems.length
      : (currentImageIndex - 1 + galleryItems.length) % galleryItems.length

    setCurrentImageIndex(newIndex)
    setSelectedImage(galleryItems[newIndex])
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const filteredGalleryItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-[#002366] mx-auto mb-4" />
            <p className="text-slate-600">Loading gallery...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
                <span>Photo Gallery</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
                Moments from Our
                <br />
                <span className="text-[#facc15]">Journey</span>
              </h1>
              <p className="text-slate-600 md:text-lg/relaxed leading-relaxed font-light max-w-3xl mx-auto">
                A visual journey through our community&apos;s achievements, celebrations, and milestones.
                Each image tells a story of transformation and hope.
              </p>

              {/* Stats */}
              {stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#002366]">{stats.total_images}</div>
                    <div className="text-sm text-slate-600">Total Images</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#002366]">{stats.total_albums}</div>
                    <div className="text-sm text-slate-600">Albums</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#002366]">{stats.total_views.toLocaleString()}</div>
                    <div className="text-sm text-slate-600">Total Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#002366]">{stats.recent_uploads}</div>
                    <div className="text-sm text-slate-600">Recent Uploads</div>
                  </div>
                </div>
              )}

              {/* Category Filter */}
              <div className="mt-12">
                <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20 mb-6">
                  <Filter className="h-4 w-4" />
                  <span>Filter by Category</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category.value}
                      variant={selectedCategory === category.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.value)}
                      className={`${
                        selectedCategory === category.value
                          ? "bg-[#002366] text-white hover:bg-[#002366]/90"
                          : "border-[#002366]/20 text-[#002366] hover:bg-[#002366]/10"
                      } transition-all duration-300`}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            {filteredGalleryItems.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-600">No gallery items available for this category.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-[#002366] mb-2">
                    {selectedCategory === "all" ? "All Photos" : categories.find(c => c.value === selectedCategory)?.label}
                  </h3>
                  <p className="text-slate-600">
                    Showing {filteredGalleryItems.length} of {galleryItems.length} images
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredGalleryItems.map((item, index) => (
                    <Card key={item.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden" onClick={() => openImageModal(item, index)}>
                          <Image
                            src={item.image_url}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-[#002366] mb-2 line-clamp-2">{item.title}</h3>
                          <div className="flex items-center justify-between text-sm text-slate-600">
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
                          </div>
                          {item.album && (
                            <Badge variant="secondary" className="mt-2 text-xs">
                              {item.album}
                            </Badge>
                          )}
                          {item.category && (
                            <Badge variant="outline" className="mt-2 ml-2 text-xs">
                              {categories.find(c => c.value === item.category)?.label}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black/95">
            {selectedImage && (
              <>
                <div className="relative">
                  <Image
                    src={selectedImage.image_url}
                    alt={selectedImage.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />

                  {/* Navigation buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => navigateImage('prev')}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => navigateImage('next')}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  {/* Close button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                    onClick={closeImageModal}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Image info */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-[#002366] mb-2">{selectedImage.title}</h3>
                  {selectedImage.description && (
                    <p className="text-slate-600 mb-4">{selectedImage.description}</p>
                  )}
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(selectedImage.created_at)}</span>
                      </div>
                      {selectedImage.views !== undefined && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{selectedImage.views} views</span>
                        </div>
                      )}
                      {selectedImage.downloads !== undefined && (
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          <span>{selectedImage.downloads} downloads</span>
                        </div>
                      )}
                    </div>
                    {selectedImage.album && (
                      <Badge variant="secondary">{selectedImage.album}</Badge>
                    )}
                  </div>
                  {selectedImage.tags && selectedImage.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedImage.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  )
}
