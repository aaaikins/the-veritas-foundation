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
    },
    {
      id: 4,
      title: "From Rural Village to Ivy League: Ama's Transformation Story",
      content: `
        <p>Meet Ama Owusu, a remarkable young woman whose journey from a small farming village in Northern Ghana to the prestigious halls of Cornell University exemplifies the transformative power of education, determination, and community support.</p>
        
        <h2>Humble Beginnings</h2>
        <p>Ama's story begins in Bolgatanga, a rural community where her parents worked as subsistence farmers. Despite limited resources, her family valued education deeply. "My mother would always tell me that education was the one thing no one could take away from you," Ama recalls. She excelled in her local school, often studying by candlelight when the generator failed.</p>
        
        <h2>The Turning Point</h2>
        <p>When Ama was identified by our outreach team during a community visit, she was already exceptional but lacked the resources to pursue higher education abroad. The Veritas Foundation's comprehensive program provided not just financial assistance, but also SAT preparation, application guidance, and mentorship that would prove crucial to her success.</p>
        
        <h2>Rising to the Challenge</h2>
        <p>Through our intensive preparation program, Ama improved her SAT scores by over 400 points. More importantly, she gained confidence in her abilities and learned to articulate her unique perspective as a young African woman interested in technology. Her application essay about designing an irrigation system for her village's farms caught the attention of Cornell's admissions committee.</p>
        
        <h2>Making an Impact</h2>
        <p>Today, Ama is in her third year studying computer science at Cornell University. She's not just excelling academically with a 3.8 GPA, but also conducting research in AI for social good. Her current project involves developing machine learning algorithms to predict crop yields and optimize water usage for small-scale farmers in sub-Saharan Africa.</p>
        
        <h2>Giving Back</h2>
        <p>"The moment I received my acceptance letter, I knew I had a responsibility to use this opportunity to help others," Ama says. She now mentors prospective Veritas Foundation scholars and has established a coding club for young women in her hometown through virtual sessions.</p>
        
        <p>Ama's story demonstrates that with the right support and opportunities, young African minds can not only succeed at the highest levels but also create solutions that benefit their communities and the world at large.</p>
      `,
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
      content: `
        <p>The true measure of our impact isn't just in the individual success stories of our scholars, but in how they use their education and opportunities to uplift their communities. Our alumni network has become a powerful force for positive change across Africa, launching innovative projects that address critical challenges.</p>
        
        <h2>The Tech for Good Initiative</h2>
        <p>Led by Dr. Kwaku Mensah (Harvard '19), a group of alumni computer scientists has developed three groundbreaking technological solutions. Their telemedicine platform now connects over 50 remote villages to healthcare professionals in major cities, providing medical consultations to communities that previously had no access to doctors.</p>
        
        <h2>Financial Literacy Through Technology</h2>
        <p>Sarah Adjei (Stanford '20) created "CediWise," a mobile app that teaches financial literacy in local languages. The app has been downloaded over 100,000 times and is being used in schools across Ghana and Nigeria. "Financial education is liberation," Sarah explains. "When people understand money, they can break cycles of poverty."</p>
        
        <h2>The Alumni Scholarship Fund</h2>
        <p>Perhaps most remarkably, our alumni have established their own scholarship fund. Started with contributions from just five graduates, the fund has grown to support over 20 additional students annually. "We understand the struggle because we've lived it," says Emmanuel Opoku (MIT '18), one of the fund's founders.</p>
        
        <h2>Infrastructure and Innovation</h2>
        <p>Beyond technology, our alumni are also addressing basic infrastructure needs. A group of engineering graduates has designed and implemented solar-powered computer labs in 15 rural schools, bringing digital literacy to thousands of children who had never seen a computer before.</p>
        
        <h2>Sustainable Impact</h2>
        <p>What makes these initiatives truly special is their sustainability. Each project is designed to be maintained and expanded by local communities, creating lasting change that goes far beyond the initial intervention. Our alumni don't just implement solutions; they build capacity and empower local leaders.</p>
        
        <p>These projects represent the ripple effect of investing in education. When we support one student, we're actually investing in the transformation of entire communities. Our alumni prove that success isn't just about personal achievement—it's about lifting others up and creating pathways for the next generation.</p>
      `,
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
      content: `
        <p>When 18-year-old Kwame Asante left his village in the Eastern Region of Ghana to study engineering at MIT, his family gathered to see him off with mixed emotions. While proud of his achievement, they wondered if they would ever see the same Kwame again. Three years later, they have their answer—and it's more beautiful than they could have imagined.</p>
        
        <h2>The Scholar's Journey</h2>
        <p>Kwame's admission to MIT was just the beginning. Through the Veritas Foundation's comprehensive support system, he not only excelled academically but also developed a deep understanding of his responsibility to his community. His engineering studies focused on sustainable water systems, a choice directly inspired by his village's struggle with clean water access.</p>
        
        <h2>Immediate Family Impact</h2>
        <p>The changes began almost immediately. Kwame's younger sister, Akosua, who had been helping with farm work instead of attending school, was enrolled in secondary school with funds Kwame saved from his stipend. "Education became a family priority in a way it never was before," explains their mother, Maame Esi.</p>
        
        <p>His younger brothers, seeing Kwame's success, began taking their studies more seriously. The family's academic aspirations rose dramatically. Today, all four siblings are in school, with Akosua now preparing for university entrance exams.</p>
        
        <h2>The Engineering Solution</h2>
        <p>During his sophomore year, Kwame designed a solar-powered water purification system as part of his coursework. But rather than leaving it as an academic exercise, he adapted the design for his village's specific needs. With support from MIT's D-Lab and additional funding from the Veritas Foundation's community impact grants, the system was installed in his hometown.</p>
        
        <h2>Community Transformation</h2>
        <p>The water system serves over 500 people and has eliminated waterborne diseases that previously affected the community. But the impact goes beyond health. Women and children who previously spent hours fetching water can now pursue education and income-generating activities. The village has seen a 60% increase in school enrollment among girls.</p>
        
        <h2>Economic Ripples</h2>
        <p>Kwame's father, once skeptical about "book learning," has become an advocate for education. He used savings from reduced medical expenses (thanks to clean water) to expand his farming operation and now employs three additional people from the village. The family's economic situation has completely transformed.</p>
        
        <h2>The Next Generation</h2>
        <p>Perhaps most significantly, Kwame's 10-year-old cousin, Kofi, now talks about becoming an engineer "just like Kwame." The village school has started a science club where children experiment with basic engineering principles. The culture of the entire community has shifted toward valuing education and innovation.</p>
        
        <h2>Multiplying Impact</h2>
        <p>Kwame's story illustrates the true return on investment of educational support. One scholarship has resulted in five family members pursuing higher education, a village with clean water, improved health outcomes for 500 people, new economic opportunities, and a generation of children who now see engineering as a possibility for their own futures.</p>
        
        <p>"When you invest in one person's education, you're really investing in an entire ecosystem of change," Kwame reflects. "I carry the dreams of my family and community with me, and I'm determined to make them all proud."</p>
        
        <p>This is the Veritas Foundation difference: we don't just create individual success stories. We create catalysts for community transformation that ripple outward for generations.</p>
      `,
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

  return posts.find(p => p.slug === slug) || null
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
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
