import Image from "next/image"

const universities = [
  { name: "Caltech", logoUrl: "/logos/caltech.png" },
  { name: "Dartmouth", logoUrl: "/logos/dartmouth.png" },
  { name: "Yale", logoUrl: "/logos/yale.png" },
  { name: "University of Pennsylvania", logoUrl: "/logos/penn.png" },
  { name: "University of Chicago", logoUrl: "/logos/uchicago.png" },
  { name: "Grambling State University", logoUrl: "/logos/grambling-updated.png" },
]

export default function UniversityLogos() {
  return (
    <section id="placements" className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-white via-slate-50 to-white">
            <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-10 text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
            <span>Prestigious Placements</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
              Where Our Scholars
              <br />
              <span className="text-[#facc15]">Excel</span>
            </h2>
            <p className="max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
              Our scholars gain admission to some of the world's most prestigious institutions,
              continuing their journey of academic excellence and leadership.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {universities.map((uni) => (
            <div key={uni.name} className="group flex justify-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 border border-slate-100">
              <Image
                src={uni.logoUrl || "/placeholder.svg"}
                alt={`${uni.name} Logo`}
                width={160}
                height={60}
                className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
