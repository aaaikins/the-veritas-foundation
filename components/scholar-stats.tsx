interface ScholarStatsProps {
  totalScholars: number
  totalUniversities: number
  totalMajors: number
  totalYears: number
}

export function ScholarStats({ totalScholars, totalUniversities, totalMajors, totalYears }: ScholarStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
      <div className="text-center">
        <div className="text-3xl font-bold text-[#facc15] mb-2">{totalScholars}</div>
        <div className="text-slate-300 text-sm">Total Scholars</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#facc15] mb-2">{totalUniversities}</div>
        <div className="text-slate-300 text-sm">Universities</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#facc15] mb-2">{totalMajors}</div>
        <div className="text-slate-300 text-sm">Majors</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#facc15] mb-2">{totalYears}</div>
        <div className="text-slate-300 text-sm">Class Years</div>
      </div>
    </div>
  )
}