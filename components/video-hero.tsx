"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Loader2, Play, Pause, Volume2, VolumeX } from "lucide-react"
import DonationForm from "@/components/donation-form"

function VideoHero() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleJoinUsClick = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Check user's motion preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (!prefersReducedMotion) {
        // Intersection Observer for performance
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                video.play().catch(() => {
                  // Autoplay failed, which is fine
                  setIsPlaying(false);
                });
              } else {
                video.pause();
                setIsPlaying(false);
              }
            });
          },
          { threshold: 0.5 }
        );

        observer.observe(video);

        return () => {
          observer.disconnect();
        };
      } else {
        setIsPlaying(false);
      }
    }
  }, []);

  return (
    <div className="bg-white" id="hero">
      <div className="relative rounded-b-[4rem] md:rounded-b-[6rem] pt-24 md:pt-32 pb-24 px-6 md:px-12 text-center text-white overflow-hidden min-h-[600px]">
        
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover rounded-b-[4rem] md:rounded-b-[6rem]"
          muted={isMuted}
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          poster="/hero-image.jpg"
          preload="metadata"
          aria-label="Background video showing Veritas Foundation scholars and activities"
        >
          {/* Add your video sources here when available */}
          <source src="/videos/foundation-highlights.mp4" type="video/mp4" />
          <source src="/videos/foundation-highlights.webm" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
          <track kind="descriptions" src="/videos/foundation-highlights-descriptions.vtt" srcLang="en" label="English descriptions" />
        </video>

        {/* Fallback Image (shown if video doesn't load) */}
        {!videoLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-b-[4rem] md:rounded-b-[6rem]"
            style={{ 
              backgroundImage: "url(/hero-image.jpg)",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          />
        )}

        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60 rounded-b-[4rem] md:rounded-b-[6rem]"></div>

        {/* Video Controls */}
        <div className="absolute top-8 right-8 z-20 flex gap-2">
          <button
            onClick={togglePlayPause}
            className="bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={toggleMute}
            className="bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-6 py-3 rounded-full text-sm font-semibold mb-8 hover:bg-white/20 transition-all duration-500 ease-out">
            <span>EMPOWERING IDEAS</span>
            <span className="text-[#facc15]">•</span>
            <span>TRANSFORMING LIVES</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The Veritas
            <br />
            <span className="text-[#facc15]">Foundation Inc.</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-4xl mx-auto mb-10 text-lg md:text-xl text-white/90 leading-relaxed font-medium">
            Watch our scholars in action—participating in outreach programs, excelling in education, 
            and making their mark at top companies. Together, we're building tomorrow's leaders.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <DonationForm />
            <Link href="/join-us">
              <Button
                size="lg"
                className="bg-[#002366] hover:bg-[#002366]/90 text-[#facc15] font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                onClick={handleJoinUsClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Join Us Now'
                )}
              </Button>
            </Link>
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

        {/* Accessibility notice */}
        <div className="sr-only">
          Background video showing scholars participating in outreach programs, studying, and working at leading companies like Google.
        </div>
      </div>
    </div>
  );
}

export default VideoHero;