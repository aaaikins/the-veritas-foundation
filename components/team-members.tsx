import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Executive Director",
    bio: "PhD in Education Policy with 15+ years of experience in non-profit leadership and community development.",
    image: "/placeholder-user.jpg",
    linkedin: "#",
    email: "sarah@veritasfoundation.org"
  },
  {
    name: "Michael Chen",
    role: "Program Director",
    bio: "Former educator and program manager specializing in youth development and mentorship initiatives.",
    image: "/placeholder-user.jpg",
    linkedin: "#",
    email: "michael@veritasfoundation.org"
  },
  {
    name: "Dr. Amanda Rodriguez",
    role: "Education Specialist",
    bio: "Educational psychologist focused on creating equitable access to higher education opportunities.",
    image: "/placeholder-user.jpg",
    linkedin: "#",
    email: "amanda@veritasfoundation.org"
  },
  {
    name: "James Thompson",
    role: "Development Director",
    bio: "Experienced fundraiser and grant writer with a passion for social impact organizations.",
    image: "/placeholder-user.jpg",
    linkedin: "#",
    email: "james@veritasfoundation.org"
  },
  {
    name: "Lisa Park",
    role: "Community Outreach Coordinator",
    bio: "Community organizer dedicated to building partnerships and expanding our reach in underserved communities.",
    image: "/placeholder-user.jpg",
    linkedin: "#",
    email: "lisa@veritasfoundation.org"
  },
  {
    name: "David Williams",
    role: "Finance Director",
    bio: "CPA with extensive experience in non-profit financial management and reporting.",
    image: "/placeholder-user.jpg",
    linkedin: "#",
    email: "david@veritasfoundation.org"
  }
]

export default function TeamMembers() {
  return (
    <section id="team" className="w-full py-20 md:py-28 lg:py-36 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
            <span>Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
            Meet the People Behind
            <br />
            <span className="text-[#facc15]">the Vision</span>
          </h2>
          <p className="mx-auto max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
            Our dedicated team of professionals brings together diverse expertise in education, community development,
            and social impact to drive meaningful change in our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="relative mx-auto w-32 h-32">
                    <Avatar className="w-full h-full border-4 border-[#facc15]/20 group-hover:border-[#facc15]/40 transition-colors duration-300">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-2xl font-bold text-[#002366] bg-[#facc15]/10">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#002366] group-hover:text-[#facc15] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="bg-[#002366]/10 text-[#002366] hover:bg-[#002366]/20">
                      {member.role}
                    </Badge>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex justify-center gap-4 pt-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-slate-400 hover:text-[#002366] transition-colors duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-slate-400 hover:text-[#002366] transition-colors duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
