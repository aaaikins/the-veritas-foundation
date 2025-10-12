import { Search, Calendar } from "lucide-react"

interface ScholarFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedYear: number | null
  onYearChange: (year: number | null) => void
  availableYears: number[]
  totalScholars: number
  filteredCount: number
  onClearYear?: () => void
}

export function ScholarFilters({
  searchTerm,
  onSearchChange,
  selectedYear,
  onYearChange,
  availableYears,
  totalScholars,
  filteredCount,
  onClearYear
}: ScholarFiltersProps) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 mb-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Search */}
          <div className="relative lg:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search scholars by name, major, or university..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
            />
          </div>

          {/* Year Filter */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <select
              value={selectedYear || ""}
              onChange={(e) => onYearChange(e.target.value ? Number(e.target.value) : null)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent appearance-none"
            >
              <option value="">All Years</option>
              {availableYears.map((year) => (
                <option key={year} value={year}>Class of {year}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-slate-600">
            Showing {filteredCount} of {totalScholars} undergraduate scholars
            {selectedYear && ` from Class of ${selectedYear}`}
          </p>
        </div>

        {selectedYear && onClearYear && (
          <div className="mt-4 text-center">
            <button
              onClick={onClearYear}
              className="px-4 py-2 border border-slate-300 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              View All Years
            </button>
          </div>
        )}
      </div>
    </div>
  )
}