import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin, Trophy } from "lucide-react"
import Image from "next/image"
import { UndergraduateScholar } from "@/lib/undergraduate-scholars-data"

interface ScholarCardProps {
  scholar: UndergraduateScholar
}

export function ScholarCard({ scholar }: ScholarCardProps) {
  return (
    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
      <CardContent className="p-0">
        {/* Scholar Image and Flag */}
        <div className="relative p-6 pb-4">
          <div className="relative mx-auto w-24 h-24 mb-4">
            <Image
              src={scholar.profile_image || "/placeholder-user.jpg"}
              width={96}
              height={96}
              alt={`${scholar.first_name} ${scholar.last_name}`}
              className="rounded-full object-cover w-full h-full border-4 border-slate-100 group-hover:border-[#facc15] transition-colors duration-300"
            />
            {/* Graduation Year Badge */}
            <div className="absolute -top-2 -right-2">
              <Badge 
                className="text-xs font-semibold bg-[#002366] text-white border-[#002366]"
                variant="outline"
              >
                '{scholar.graduation_year.toString().slice(-2)}
              </Badge>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold text-[#002366] mb-1">
              {scholar.first_name} {scholar.last_name}
            </h3>
            <p className="text-slate-600 text-sm mb-2 font-medium">{scholar.major}</p>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-2">
              <Building className="w-3 h-3" />
              <span>{scholar.school}</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-3">
              <MapPin className="w-3 h-3" />
              <span>{scholar.home_country}</span>
            </div>
          </div>
        </div>

        {/* Bio and Achievements */}
        <div className="px-6 pb-6">
          {scholar.bio && (
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {scholar.bio.length > 120 ? `${scholar.bio.substring(0, 120)}...` : scholar.bio}
            </p>
          )}

          {scholar.achievements && scholar.achievements.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-[#facc15]" />
                <span className="text-xs font-semibold text-slate-700">Achievements</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {scholar.achievements.slice(0, 2).map((achievement, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs bg-slate-50 text-slate-600 border-slate-200"
                  >
                    {achievement}
                  </Badge>
                ))}
                {scholar.achievements.length > 2 && (
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-slate-50 text-slate-600 border-slate-200"
                  >
                    +{scholar.achievements.length - 2} more
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}