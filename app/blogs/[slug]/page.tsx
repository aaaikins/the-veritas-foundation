import Image from "next/image"
import Link from "next/link"
import { User, Calendar, ArrowLeft } from "lucide-react"
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

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/blogs/slug/${slug}`, {
      next: { revalidate: 60 }
    })
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
  }

  // Fallback to hardcoded data
  const posts = [
    {
      id: 1,
      title: "Empowering the Next Generation of African Leaders",
      content: `
        <p>Discover how our scholarship program is creating opportunities for young minds to excel in top universities worldwide.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Our Mission</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      `,
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
      content: `
        <p>Read inspiring stories from our scholars who have overcome challenges to achieve academic excellence at prestigious institutions.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Overcoming Challenges</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      `,
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
      content: `
        <p>Learn how our mentorship program connects students with industry leaders to guide their academic and professional journey.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Building Connections</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      `,
      excerpt: "Learn how our mentorship program connects students with industry leaders to guide their academic and professional journey.",
      slug: "impact-mentorship-academic-achievement",
      status: "published",
      featured_image: "/gallery/grambling-scholar.png",
      tags: ["Mentorship"],
      author_id: 1,
      published_at: "2025-01-05T00:00:00Z",
      created_at: "2025-01-05T00:00:00Z",
      updated_at: "2025-01-05T00:00:00Z"
    }
  ]

  return posts.find(p => p.slug === slug) || null
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">
          <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="container mx-auto px-6 md:px-8 text-center">
              <h1 className="text-4xl font-bold text-[#002366] mb-4">Post Not Found</h1>
              <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
              <Link href="/blogs" className="inline-flex items-center gap-2 bg-[#002366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#002366]/90 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to All Posts
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-6 md:px-8 max-w-4xl">
            <div className="mb-8">
              <Link href="/blogs" className="inline-flex items-center gap-2 text-[#002366] hover:text-[#facc15] transition-colors mb-4">
                <ArrowLeft className="h-4 w-4" />
                Back to All Posts
              </Link>
            </div>

            <article className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-96 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                <Image
                  src={post.featured_image || "/gallery/career-preview.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {post.tags && post.tags.length > 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#facc15] text-[#002366] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {post.tags[0]}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">
                  {post.title}
                </h1>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="font-medium">Author</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className="text-slate-400">5 min read</span>
                </div>

                <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
