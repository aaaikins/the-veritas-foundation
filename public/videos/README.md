# Video Setup Instructions

## Video Banner Component

To use the video banner feature, add your video files to the `/public/videos/` directory:

### Required Video Files:
- `foundation-highlights.mp4` (primary format)
- `foundation-highlights.webm` (optional, for better browser support)

### Video Specifications:
- **Duration**: 30-60 seconds recommended
- **Resolution**: 1920x1080 (Full HD) minimum
- **Format**: MP4 (H.264) for broad compatibility
- **File Size**: Keep under 10MB for optimal loading
- **Content**: Should showcase:
  - Scholars in educational settings
  - Community outreach activities
  - Students at internships (Google, Microsoft, etc.)
  - Graduation ceremonies
  - Team activities and events

### Video Creation Tips:
1. Use high-quality footage with good lighting
2. Keep scenes short (2-4 seconds each) for engagement
3. Include text overlays with key statistics
4. Use smooth transitions between clips
5. Ensure video is accessible (include captions if possible)

### Fallback:
The component will automatically fall back to the static hero image (`/public/hero-image.jpg`) if video files are not available.

## Current Configuration:
The homepage is currently set to use the **slideshow banner**. To switch to video banner:

1. Open `/lib/homepage-config.ts`
2. Change `bannerType: 'slideshow'` to `bannerType: 'video'`
3. Add your video files to `/public/videos/`

## Banner Options:
- `'original'` - Static background image (current Hero component)
- `'video'` - Video background with controls
- `'slideshow'` - Rotating images with animations (currently active)