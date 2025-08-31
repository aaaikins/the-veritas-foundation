import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Award, DollarSign, GraduationCap, Users } from "lucide-react"

const achievements = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "30+",
    description: "Scholars Supported Annually",
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "1500+",
    description: "Average SAT Score Achieved",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "$5M+",
    description: "In Scholarship Funding Secured",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Top-Tier",
    description: "University Placements",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-20 md:py-28 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-10 text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
            <span>Our Impact</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
              Success by the
              <br />
              <span className="text-[#facc15]">Numbers</span>
            </h2>
            <p className="max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
              We are proud of our scholars and their incredible achievements. Our success is measured by their success
              and the positive impact we create in our communities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <Card key={index} className="text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-0 group overflow-hidden">
              <CardHeader className="items-center pb-6 pt-8">
                <div className="bg-gradient-to-br from-[#002366] to-[#003366] p-5 rounded-2xl group-hover:from-[#facc15] group-hover:to-[#facc15]/80 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <div className="text-[#facc15] group-hover:text-[#002366] transition-colors duration-500">
                    {item.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-8">
                <h3 className="text-4xl md:text-5xl font-bold text-[#002366] mb-4 group-hover:text-[#facc15] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
