import Image from "next/image"

const galleryImages = [
  { src: "/hero-image.jpg", alt: "Veritas Foundation group photo", className: "col-span-2 row-span-2" },
  { src: "/gallery/career-preview.jpg", alt: "Scholars at a Career Preview event", className: "row-span-2" },
  { src: "/gallery/caltech-scholar.png", alt: "Veritas Foundation scholar at Caltech", className: "" },
  {
    src: "/gallery/grambling-scholar.png",
    alt: "Veritas Foundation scholar at Grambling State University",
    className: "",
  },
  { src: "/gallery/yale-scholar.jpeg", alt: "Veritas Foundation scholar at Yale University", className: "" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-20 md:py-28 lg:py-36 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-10 text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#facc15]/10 text-[#002366] px-5 py-3 rounded-full text-sm font-semibold border border-[#facc15]/20">
            <span>Success Stories</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002366] leading-tight">
              Moments from Our
              <br />
              <span className="text-[#facc15]">Journey</span>
            </h2>
            <p className="max-w-3xl text-slate-600 md:text-lg/relaxed leading-relaxed font-light">
              A glimpse into the lives we've touched and the community we've built. These are the faces of change,
              the stories of transformation, and the future we're creating together.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl">
          {galleryImages.map((image, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 ${image.className} bg-slate-100`}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={600}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-base font-medium leading-relaxed drop-shadow-lg">
                    {image.alt}
                  </p>
                </div>
              </div>
              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
