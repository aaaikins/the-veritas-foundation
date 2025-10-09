# Homepage Banner Implementation

This implementation provides three different banner options for the Veritas Foundation homepage, making it easy to showcase the foundation's impact through various engaging formats.

## Banner Options

### 1. Video Banner (`VideoHero`)
A dynamic video background featuring scholars in action, with:
- **Autoplay functionality** with respect for user motion preferences
- **Play/pause and mute controls** for accessibility
- **Fallback to static image** if video fails to load
- **Intersection Observer** for performance optimization
- **Mobile-responsive design** with proper video handling

**Features:**
- ✅ Auto-play with motion preference detection
- ✅ User controls (play/pause, mute/unmute)
- ✅ Accessibility labels and descriptions
- ✅ Performance optimized with lazy loading
- ✅ Graceful fallback to hero image

### 2. Sliding Image Banner (`SlideHero`)
An interactive slideshow with 3-5 rotating images featuring:
- **Auto-advancing slides** (5-second intervals)
- **Smooth transitions** between images
- **Animated call-to-action buttons** sliding up from bottom
- **Navigation arrows and indicators**
- **Progress bar** showing slide progression
- **Pause on hover** for better user experience

**Features:**
- ✅ Configurable auto-advance timing
- ✅ Manual navigation (arrows, indicators)
- ✅ Animated CTA with staggered timing
- ✅ Progress visualization
- ✅ Motion preference detection
- ✅ Image optimization with Next.js

### 3. Original Static Banner (`Hero`)
The existing static hero banner with background image.

## Configuration

Banner selection is controlled through `/lib/homepage-config.ts`:

```typescript
export const HOMEPAGE_CONFIG = {
  // Change this to switch banner types
  bannerType: 'slideshow' as 'original' | 'video' | 'slideshow',
  
  // Video-specific settings
  video: {
    autoplay: true,
    muted: true,
    showControls: true,
    // ... more options
  },
  
  // Slideshow-specific settings
  slideshow: {
    autoAdvance: true,
    interval: 5000,
    showIndicators: true,
    showArrows: true,
    // ... slide data
  }
};
```

### Quick Setup

1. **For Video Banner:**
   - Set `bannerType: 'video'`
   - Add video files to `/public/videos/`
   - See `/public/videos/README.md` for detailed setup

2. **For Slideshow Banner:**
   - Set `bannerType: 'slideshow'` (current default)
   - Customize slides in the config file
   - Add images to `/public/gallery/`

3. **For Original Banner:**
   - Set `bannerType: 'original'`

## Technical Implementation

### Performance Optimizations
- **Lazy loading** for non-critical images
- **Intersection Observer** for video playback
- **Image optimization** with Next.js Image component
- **Reduced motion support** for accessibility
- **Efficient slide transitions** using CSS transforms

### Accessibility Features
- **ARIA labels** for all interactive elements
- **Keyboard navigation** support
- **Screen reader descriptions** for video content
- **Motion preference detection** 
- **High contrast indicators** and controls
- **Semantic HTML structure**

### Mobile Responsiveness
- **Touch-friendly controls** with proper sizing
- **Responsive typography** scaling
- **Optimized image delivery** for different screen sizes
- **Touch gesture support** for slide navigation
- **Proper viewport handling** for videos

## Content Suggestions

### Video Content Ideas:
- Scholars in university classrooms
- Community outreach activities
- Internship highlights at tech companies
- Graduation ceremonies and achievements
- Team building and networking events
- Impact stories and testimonials

### Slideshow Image Themes:
1. **Education Focus** - Studying, libraries, universities
2. **Success Stories** - Graduations, job placements, achievements
3. **Community Impact** - Outreach programs, volunteering
4. **Empowerment** - Women's leadership, breaking barriers
5. **Innovation** - Tech internships, STEM education

## Animation Details

### Call-to-Action Animation
The slideshow banner features a sophisticated animation sequence:
1. **Slide transition** (1 second)
2. **Content fade-in** (500ms delay)
3. **CTA buttons slide up** (staggered timing):
   - Donation button: 200ms delay
   - Join Us button: 300ms delay
   - Trust indicators: 500ms delay

### Slide Transitions
- **Opacity-based transitions** for smooth visual flow
- **1-second duration** for optimal user experience
- **Pause on hover** to allow reading
- **Smooth progress bar** animation

## Browser Support
- **Modern browsers** with ES6+ support
- **Safari** with video autoplay policies respected
- **Chrome/Firefox** with full feature support
- **Mobile browsers** with touch optimization
- **Graceful degradation** for older browsers

## Future Enhancements
- [ ] Video captions/subtitles support
- [ ] Advanced slide transition effects
- [ ] Analytics integration for engagement tracking
- [ ] A/B testing framework for banner performance
- [ ] Dynamic content loading from CMS
- [ ] Progressive Web App optimization