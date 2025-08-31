import Image from "next/image"
import Link from "next/link"
import { User, Calendar, ArrowRight, ExternalLink } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogsPage() {
  const posts = [
    {
      tag: "Education",
      title: "Empowering the Next Generation of African Leaders",
      excerpt:
        "Discover how our scholarship program is creating opportunities for young minds to excel in top universities worldwide.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      image: "/gallery/career-preview.jpg",
      readTime: "5 min read",
      slug: "empowering-next-generation-african-leaders"
    },
    {
      tag: "Success Stories",
      title: "Breaking Barriers: Success Stories from Our Scholars",
      excerpt:
        "Read inspiring stories from our scholars who have overcome challenges to achieve academic excellence at prestigious institutions.",
      author: "Michael Chen",
      date: "January 10, 2025",
      image: "/gallery/yale-scholar.jpeg",
      readTime: "7 min read",
      slug: "breaking-barriers-success-stories"
    },
    {
      tag: "Mentorship",
      title: "The Impact of Mentorship in Academic Achievement",
      excerpt:
        "Learn how our mentorship program connects students with industry leaders to guide their academic and professional journey.",
      author: "Dr. Amara Okafor",
      date: "January 5, 2025",
      image: "/gallery/grambling-scholar.png",
      readTime: "6 min read",
      slug: "impact-mentorship-academic-achievement"
    }
  ]

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
              {posts.map((p, idx) => (
                <article
                  key={idx}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border border-slate-200 hover:border-[#002366]/20"
                >
                  <div className="relative h-56 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-[#facc15] text-[#002366] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {p.tag}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-5 w-5 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#002366] group-hover:text-[#facc15] transition-colors duration-300 leading-tight mb-3">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {p.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="font-medium">{p.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{p.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{p.readTime}</span>
                      <Link href={`/blogs/${p.slug}`} className="inline-flex items-center gap-2 text-[#002366] font-semibold hover:text-[#facc15] transition-colors duration-300 group/btn">
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
