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
    <section id="placements" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002366]">Where Our Scholars Go</h2>
          <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our scholars are accepted into some of the world's most prestigious institutions.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {universities.map((uni) => (
            <div key={uni.name} className="flex justify-center">
              <Image
                src={uni.logoUrl || "/placeholder.svg"}
                alt={`${uni.name} Logo`}
                width={140}
                height={50}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
