import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Award, DollarSign, GraduationCap, Users } from "lucide-react"

const achievements = [
  {
    icon: <Users className="h-8 w-8 text-[#facc15]" />,
    title: "30+",
    description: "Scholars Supported Annually",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-[#facc15]" />,
    title: "1500+",
    description: "Average SAT Score Achieved",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-[#facc15]" />,
    title: "$5M+",
    description: "In Scholarship Funding Secured",
  },
  {
    icon: <Award className="h-8 w-8 text-[#facc15]" />,
    title: "Top-Tier",
    description: "University Placements",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002366]">
              Our Impact by the Numbers
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are proud of our scholars and their incredible achievements. Our success is measured by their success.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {achievements.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-[#002366] p-4 rounded-full">{item.icon}</div>
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold text-[#002366]">{item.title}</h3>
                <p className="text-slate-600 mt-2">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
