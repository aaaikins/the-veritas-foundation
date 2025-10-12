import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import { ScholarCard } from "./scholar-card"
import { UndergraduateScholar } from "@/lib/undergraduate-scholars-data"

interface ScholarGridProps {
  scholars: UndergraduateScholar[]
  yearFilter?: number | null
  onYearSelect?: (year: number) => void
  showYearHeaders?: boolean
}

export function ScholarGrid({ scholars, yearFilter, onYearSelect, showYearHeaders = false }: ScholarGridProps) {
  if (scholars.length === 0) {
    return (
      <div className="text-center py-12">
        <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-600 mb-2">No scholars found</h3>
        <p className="text-slate-500">Try adjusting your search criteria.</p>
      </div>
    )
  }

  if (yearFilter || !showYearHeaders) {
    // Single year view or simple grid
    return (
      <div>
        {yearFilter && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#002366] mb-4">
              Class of {yearFilter}
            </h2>
            <p className="text-slate-600 md:text-lg max-w-2xl mx-auto">
              {scholars.length} undergraduate scholar{scholars.length !== 1 ? 's' : ''} graduating in {yearFilter}
            </p>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {scholars.map((scholar) => (
            <ScholarCard key={scholar.id} scholar={scholar} />
          ))}
        </div>
      </div>
    )
  }

  // Group scholars by year for multi-year view
  const scholarsByYear = scholars.reduce((acc, scholar) => {
    const year = scholar.graduation_year
    if (!acc[year]) acc[year] = []
    acc[year].push(scholar)
    return acc
  }, {} as Record<number, UndergraduateScholar[]>)

  const years = Object.keys(scholarsByYear).map(Number).sort((a, b) => b - a)

  return (
    <div className="space-y-16">
      {years.map((year) => {
        const yearScholars = scholarsByYear[year]
        
        return (
          <div key={year}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#002366] mb-2">
                  Class of {year}
                </h2>
                <p className="text-slate-600">
                  {yearScholars.length} scholar{yearScholars.length !== 1 ? 's' : ''} graduating in {year}
                </p>
              </div>
              {onYearSelect && (
                <Button
                  onClick={() => onYearSelect(year)}
                  variant="outline"
                  className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white"
                >
                  View All {year}
                </Button>
              )}
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {yearScholars.map((scholar) => (
                <ScholarCard key={scholar.id} scholar={scholar} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}