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
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002366]">Moments from Our Journey</h2>
          <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A glimpse into the lives we've touched and the community we've built.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {galleryImages.map((image, index) => (
            <div key={index} className={`overflow-hidden rounded-xl ${image.className}`}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={600}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
