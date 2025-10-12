'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Play } from 'lucide-react'

interface VideoTestimonial {
  id: string
  name: string
  university: string
  thumbnail: string
  videoUrl: string
  description: string
}

interface VideoTestimonialCardProps {
  video: VideoTestimonial
}

export function VideoTestimonialCard({ video }: VideoTestimonialCardProps) {
  const handleVideoClick = () => {
    const videoElement = document.createElement('video');
    videoElement.src = video.videoUrl;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.objectFit = 'cover';
    
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modalOverlay.style.display = 'flex';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.zIndex = '9999';
    modalOverlay.style.cursor = 'pointer';
    
    const videoContainer = document.createElement('div');
    videoContainer.style.maxWidth = '90%';
    videoContainer.style.maxHeight = '90%';
    videoContainer.style.aspectRatio = '16/9';
    
    videoContainer.appendChild(videoElement);
    modalOverlay.appendChild(videoContainer);
    
    modalOverlay.onclick = () => {
      document.body.removeChild(modalOverlay);
    };
    
    document.body.appendChild(modalOverlay);
  }

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={`${video.name} testimonial`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="bg-[#facc15] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer p-4"
            onClick={handleVideoClick}
          >
            <Play className="w-8 h-8 text-[#002366] ml-1" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg mb-1">
            {video.name}
          </h3>
          <p className="text-[#facc15] text-sm font-medium">
            {video.university}
          </p>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-slate-600 leading-relaxed">
          {video.description}
        </p>
      </CardContent>
    </Card>
  )
}