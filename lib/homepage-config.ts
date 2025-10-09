// Homepage configuration
export const HOMEPAGE_CONFIG = {
  // Banner type options: 'original', 'video', 'slideshow'
  bannerType: 'slideshow' as 'original' | 'video' | 'slideshow',
  
  // Video banner settings
  video: {
    autoplay: true,
    muted: true,
    loop: true,
    showControls: true,
    sources: [
      { src: '/videos/foundation-highlights.mp4', type: 'video/mp4' },
      { src: '/videos/foundation-highlights.webm', type: 'video/webm' }
    ],
    fallbackImage: '/hero-image.jpg'
  },
  
  // Slideshow banner settings
  slideshow: {
    autoAdvance: true,
    interval: 5000, // 5 seconds
    showIndicators: true,
    showArrows: true,
    showProgressBar: true,
    slides: [
      {
        id: 1,
        image: '/hero-image.jpg',
        title: 'Empowering Education',
        subtitle: 'Supporting Tomorrow\'s Leaders',
        description: 'Providing scholarships and mentorship to deserving students across Ghana and beyond.'
      },
      {
        id: 2,
        image: '/gallery/scholars-group.jpg',
        title: 'Scholar Success Stories',
        subtitle: 'Achieving Excellence Together',
        description: 'Our scholars excel in top universities and secure positions at leading companies worldwide.'
      },
      {
        id: 3,
        image: '/gallery/outreach-program.jpg',
        title: 'Community Outreach',
        subtitle: 'Making a Difference',
        description: 'Engaging in meaningful community service and social impact initiatives.'
      },
      {
        id: 4,
        image: '/gallery/women-empowerment.jpg',
        title: 'Women Empowerment',
        subtitle: 'Breaking Barriers',
        description: 'Supporting women and girls through education and leadership development programs.'
      },
      {
        id: 5,
        image: '/gallery/tech-internship.jpg',
        title: 'Tech Innovation',
        subtitle: 'Future Tech Leaders',
        description: 'Our scholars intern at top tech companies including Google, Microsoft, and Apple.'
      }
    ]
  }
};

export type HomepageBannerType = typeof HOMEPAGE_CONFIG.bannerType;
export type VideoConfig = typeof HOMEPAGE_CONFIG.video;
export type SlideshowConfig = typeof HOMEPAGE_CONFIG.slideshow;