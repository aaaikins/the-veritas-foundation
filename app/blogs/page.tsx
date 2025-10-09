import Image from "next/image"
import Link from "next/link"
import { User, Calendar, ArrowRight, ExternalLink } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface BlogPost {
  id: number
  title: string
  content: string
  excerpt: string | null
  slug: string | null
  status: string
  featured_image: string | null
  tags: string[] | null
  author_id: number
  published_at: string | null
  created_at: string
  updated_at: string
}

async function getBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/blogs?published_only=true`, {
      next: { revalidate: 60 }
    })
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }

  // Fallback to hardcoded data
  return [
    {
      id: 1,
      title: "Empowering the Next Generation of African Leaders",
      content: "Discover how our scholarship program is creating opportunities for young minds to excel in top universities worldwide.",
      excerpt: "Discover how our scholarship program is creating opportunities for young minds to excel in top universities worldwide.",
      slug: "empowering-next-generation-african-leaders",
      status: "published",
      featured_image: "/gallery/career-preview.jpg",
      tags: ["Education"],
      author_id: 1,
      published_at: "2025-01-15T00:00:00Z",
      created_at: "2025-01-15T00:00:00Z",
      updated_at: "2025-01-15T00:00:00Z"
    },
    {
      id: 2,
      title: "Breaking Barriers: Success Stories from Our Scholars",
      content: "Read inspiring stories from our scholars who have overcome challenges to achieve academic excellence at prestigious institutions.",
      excerpt: "Read inspiring stories from our scholars who have overcome challenges to achieve academic excellence at prestigious institutions.",
      slug: "breaking-barriers-success-stories",
      status: "published",
      featured_image: "/gallery/yale-scholar.jpeg",
      tags: ["Success Stories"],
      author_id: 1,
      published_at: "2025-01-10T00:00:00Z",
      created_at: "2025-01-10T00:00:00Z",
      updated_at: "2025-01-10T00:00:00Z"
    },
    {
      id: 3,
      title: "The Impact of Mentorship in Academic Achievement",
      content: "Learn how our mentorship program connects students with industry leaders to guide their academic and professional journey.",
      excerpt: "Learn how our mentorship program connects students with industry leaders to guide their academic and professional journey.",
      slug: "impact-mentorship-academic-achievement",
      status: "published",
      featured_image: "/gallery/grambling-scholar.png",
      tags: ["Mentorship"],
      author_id: 1,
      published_at: "2025-01-05T00:00:00Z",
      created_at: "2025-01-05T00:00:00Z",
      updated_at: "2025-01-05T00:00:00Z"
    },
    {
      id: 4,
      title: "From Rural Village to Ivy League: Ama's Transformation Story",
      content: "Meet Ama Owusu, who went from a small farming village in Northern Ghana to studying computer science at Cornell University. Her journey exemplifies the transformative power of education and community support. Through the Veritas Foundation's comprehensive program, Ama not only received financial assistance but also gained access to mentorship, SAT preparation, and application guidance that made her dream a reality. Today, she's pioneering research in AI for social good and inspiring countless young women back home.",
      excerpt: "Meet Ama Owusu, who went from a small farming village in Northern Ghana to studying computer science at Cornell University, exemplifying the transformative power of education.",
      slug: "rural-village-ivy-league-ama-transformation",
      status: "published",
      featured_image: "/blog/ama-cornell-story.jpg",
      tags: ["Impact Stories", "Women in STEM"],
      author_id: 1,
      published_at: "2024-12-20T00:00:00Z",
      created_at: "2024-12-20T00:00:00Z",
      updated_at: "2024-12-20T00:00:00Z"
    },
    {
      id: 5,
      title: "Building Bridges: How Our Alumni Give Back to Communities",
      content: "Discover the remarkable initiative launched by our alumni network to create lasting change in underserved communities across Africa. From establishing computer labs in rural schools to organizing free coding bootcamps, our graduates are proving that success is best measured by the lives you touch. This feature explores three groundbreaking projects: a telemedicine platform connecting remote villages to healthcare, a mobile app teaching financial literacy, and a scholarship fund created entirely by alumni contributions.",
      excerpt: "Discover how our alumni network creates lasting change through technology, education, and community-driven initiatives across Africa.",
      slug: "building-bridges-alumni-give-back-communities",
      status: "published",
      featured_image: "/blog/alumni-community-impact.jpg",
      tags: ["Alumni Impact", "Community Development"],
      author_id: 1,
      published_at: "2024-12-15T00:00:00Z",
      created_at: "2024-12-15T00:00:00Z",
      updated_at: "2024-12-15T00:00:00Z"
    },
    {
      id: 6,
      title: "The Ripple Effect: How One Scholarship Changes Entire Families",
      content: "When Kwame received his scholarship to study engineering at MIT, the impact went far beyond his individual success. Follow the incredible story of how one student's achievement created a cascade of positive change that transformed his entire extended family and community. From his younger sister now attending university to his village gaining access to clean water through his engineering project, this story illustrates the multiplier effect of investing in young African minds. Learn how the Veritas Foundation's holistic approach creates sustainable change that spans generations.",
      excerpt: "Follow Kwame's incredible story of how one MIT scholarship created a cascade of positive change transforming his family and entire community.",
      slug: "ripple-effect-scholarship-changes-families",
      status: "published",
      featured_image: "/blog/kwame-family-impact.jpg",
      tags: ["Impact Stories", "Community Change"],
      author_id: 1,
      published_at: "2024-12-10T00:00:00Z",
      created_at: "2024-12-10T00:00:00Z",
      updated_at: "2024-12-10T00:00:00Z"
    }
  ]
}

export default async function BlogsPage() {
  const posts = await getBlogs()

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#002366] mb-4">
                All Blog Posts
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Explore all our latest news, success stories, and insights from The Veritas Foundation community.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-1 w-24 bg-gradient-to-r from-[#002366] to-[#facc15] rounded-full"></div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border border-slate-200 hover:border-[#002366]/20"
                >
                  <div className="relative h-56 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                    <Image
                      src={post.featured_image || "/gallery/career-preview.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-[#facc15] text-[#002366] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          {post.tags[0]}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-5 w-5 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#002366] group-hover:text-[#facc15] transition-colors duration-300 leading-tight mb-3">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt || post.content.substring(0, 150) + "..."}
                    </p>

                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="font-medium">Author</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">5 min read</span>
                      <Link href={`/blogs/${post.slug}`} className="inline-flex items-center gap-2 text-[#002366] font-semibold hover:text-[#facc15] transition-colors duration-300 group/btn">
                        Read More
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
