export interface UndergraduateScholar {
  id: number
  first_name: string
  last_name: string
  school: string
  graduation_year: number
  major: string
  profile_image: string
  bio: string
  achievements?: string[]
  home_country: string
}

export const scholarsByYear: Record<number, UndergraduateScholar[]> = {
  2025: [
    {
      id: 1,
      first_name: "Amina",
      last_name: "Okafor",
      school: "MIT",
      graduation_year: 2025,
      major: "Electrical Engineering",
      profile_image: "/placeholder-user.jpg",
      bio: "Innovating in renewable energy systems, Amina is developing solar-powered solutions for rural communities in Ghana.",
      achievements: ["Outstanding Student Award", "IEEE Student Award", "First Year Excellence"],
      home_country: "Ghana"
    },
    {
      id: 2,
      first_name: "Kwame",
      last_name: "Asante",
      school: "California Institute of Technology",
      graduation_year: 2025,
      major: "Computer Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Passionate about AI for social good, Kwame is working on machine learning solutions for healthcare in underserved communities.",
      achievements: ["Dean's Honor List", "Programming Competition Winner"],
      home_country: "Ghana"
    },
    {
      id: 3,
      first_name: "Abena",
      last_name: "Mensah",
      school: "Harvard University",
      graduation_year: 2025,
      major: "Biomedical Engineering",
      profile_image: "/placeholder-user.jpg",
      bio: "Dedicated to creating affordable medical devices for low-resource settings, focusing on maternal health solutions.",
      achievements: ["Research Excellence Award", "Innovation Challenge Winner"],
      home_country: "Ghana"
    },
    {
      id: 4,
      first_name: "Emmanuel",
      last_name: "Boateng",
      school: "University of Pennsylvania",
      graduation_year: 2025,
      major: "Economics & Finance",
      profile_image: "/placeholder-user.jpg",
      bio: "Aspiring to work in development finance, Emmanuel studies sustainable economic growth models for emerging markets.",
      achievements: ["Economics Honor Society", "Financial Modeling Competition"],
      home_country: "Ghana"
    }
  ],
  2024: [
    {
      id: 5,
      first_name: "Emmanuel",
      last_name: "Dey",
      school: "Dartmouth College",
      graduation_year: 2024,
      major: "Computer Science",
      profile_image: "/gallery/scholars/2023-2024/Emmanuel dey dartmouth.jpg",
      bio: "Passionate about AI and machine learning, Sarah is working on innovative solutions for healthcare accessibility.",
      achievements: ["Dean's List", "CS Research Award", "Hackathon Winner"],
      home_country: "Ghana"
    },
    {
      id: 6,
      first_name: "George",
      last_name: "Asante",
      school: "Allegheny College",
      graduation_year: 2024,
      major: "International Relations",
      profile_image: "/gallery/scholars/2023-2024/George_Allengelly.jpg",
      bio: "Passionate about global diplomacy and conflict resolution, Fatima is preparing for a career in international development.",
      achievements: ["Model UN Award", "International Studies Excellence"],
      home_country: "Ghana"
    },
    {
      id: 7,
      first_name: "Mohammed",
      last_name: "Saabiq",
      school: "Princeton University",
      graduation_year: 2024,
      major: "Public Policy",
      profile_image: "/gallery/scholars/2023-2024/Saabiq_Grambling.jpg",
      bio: "Committed to education reform in Ghana, Kofi researches policy solutions for improving rural school systems.",
      achievements: ["Public Policy Excellence", "Leadership Award", "Community Service Recognition"],
      home_country: "Ghana"
    },
    {
      id: 8,
      first_name: "Akosua",
      last_name: "Frimpong",
      school: "Yale University",
      graduation_year: 2024,
      major: "Environmental Science",
      profile_image: "/placeholder-user.jpg",
      bio: "Environmental advocate working on climate change adaptation strategies for coastal communities in West Africa.",
      achievements: ["Environmental Leadership Award", "Research Publication"],
      home_country: "Ghana"
    }
  ],
  2023: [
    {
      id: 9,
      first_name: "Aikins",
      last_name: "Acheampong",
      school: "Colby College",
      graduation_year: 2023,
      major: "Computer Science",
      profile_image: "/placeholder-user.jpg",
      bio: ".",
      achievements: ["Pulver Science Scholar", "Dean's list"],
      home_country: "Ghana"
    },
    {
      id: 10,
      first_name: "Kwabena ",
      last_name: "Adomako",
      school: "York University",
      graduation_year: 2023,
      major: "Economics",
      profile_image: "/gallery/scholars/2022-2023/Kwabena_York.jpg",
      bio: "Researching microfinance and its impact on rural communities, Ama aims to work in development economics.",
      achievements: ["Economics Excellence Award", "Research Grant Recipient"],
      home_country: "Ghana"
    },
    {
      id: 11,
      first_name: "Francis",
      last_name: "Niiweh",
      school: "University of Chicago",
      graduation_year: 2023,
      major: "Biological sciences",
      profile_image: "/gallery/scholars/2022-2023/Francis_Uchicago.jpg",
      bio: "Developing low-cost diagnostic tools for tropical diseases, focusing on malaria prevention and treatment.",
      achievements: ["Innovation Award", "Biomedical Research Excellence"],
      home_country: "Ghana"
    },
    {
      id: 12,
      first_name: "Esther",
      last_name: "Osei",
      school: "Spellman College",
      graduation_year: 2023,
      major: "International Development",
      profile_image: "/placeholder-user.jpg",
      bio: "Passionate about education policy, Efua works on improving literacy rates in rural Ghanaian communities.",
      achievements: ["Development Studies Award", "Community Impact Recognition"],
      home_country: "Ghana"
    }
  ]
}

export const getAllScholars = () => Object.values(scholarsByYear).flat()

export const getScholarsByYear = (year: number) => scholarsByYear[year] || []

export const getAvailableYears = () => Object.keys(scholarsByYear).map(Number).sort((a, b) => b - a)

export const getScholarStats = () => {
  const allScholars = getAllScholars()
  return {
    totalScholars: allScholars.length,
    totalUniversities: new Set(allScholars.map(s => s.school)).size,
    totalMajors: new Set(allScholars.map(s => s.major)).size,
    totalYears: Object.keys(scholarsByYear).length
  }
}

export const filterScholars = (scholars: UndergraduateScholar[], searchTerm: string) => {
  if (!searchTerm) return scholars
  
  return scholars.filter(scholar =>
    `${scholar.first_name} ${scholar.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scholar.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scholar.school.toLowerCase().includes(searchTerm.toLowerCase())
  )
}