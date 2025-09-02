"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Eye, Download, Calendar, X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"

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

interface GalleryStats {
  total_images: number
  total_albums: number
  total_views: number
  total_downloads: number
  recent_uploads: number
}

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [stats, setStats] = useState<GalleryStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        // Fetch gallery items
        const itemsResponse = await fetch('/api/gallery?limit=50')
        if (itemsResponse.ok) {
          const itemsData = await itemsResponse.json()
          setGalleryItems(itemsData)
        }

        // Fetch gallery stats
        const statsResponse = await fetch('/api/gallery/stats')
        if (statsResponse.ok) {
          const statsData = await statsResponse.json()
          setStats(statsData)
        }
      } catch (err) {
        console.error('Error fetching gallery data:', err)
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
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="w-full py-20 md:py-28 lg:py-36 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            {galleryItems.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-600">No gallery items available at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryItems.map((item, index) => (
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
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
