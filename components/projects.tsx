"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  desc: string
  tags: string[]
  color: string
  bgColor: string
  image: string
  liveLink: string
  codeLink: string
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "PORTFOLIO Bloger",
      desc: "To'liq funksional blog platformasi",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-cyan-500 to-blue-600",
      bgColor: "hover:shadow-cyan-500/50",
      image: "/images/2025-11-15_19-01-14.png",
      liveLink: "https://umid-uz-agro.netlify.app/",
      codeLink: "https://github.com/Ilyosbek519",
    },
    {
      id: 2,
      title: "AnimeFlix",
      desc: "Anime va Kino Serial tamosha qilish platformasi",
      tags: ["CSS", "HTML", "Tailwind"],
      color: "from-blue-500 to-purple-600",
      bgColor: "hover:shadow-blue-500/50",
      image: "/images/2025-11-15_19-02-23.png",
      liveLink: "https://animeflix-org.netlify.app/#",
      codeLink: "https://github.com/Ilyosbek519",
    },
    {
      id: 3,
      title: "Animated Portfolio",
      desc: "Shaxsiy portfolioni jonlantirish",
      tags: ["Next.js", "Firebase", "Tailwind"],
      color: "from-purple-500 to-pink-600",
      bgColor: "hover:shadow-purple-500/50",
      image: "/images/2025-11-15_18-54-10.png",
      liveLink: "https://v0-portfolio-with-animations-nu.vercel.app/",
      codeLink: "https://github.com/Ilyosbek519",
    },
    {
      id: 4,
      title: "Todo ish va bajarmalar uchun ilova",
      desc: "Vazifalarni boshqarish uchun real-time ilova",
      tags: ["Next.js", "Firebase", "Tailwind"],
      color: "from-pink-500 to-orange-600",
      bgColor: "hover:shadow-pink-500/50",
      image: "/images/2025-11-15_18-55-41.png",
      liveLink: "https://next-loyha.vercel.app/",
      codeLink: "https://github.com/Ilyosbek519",
    },
    {
      id: 5,
      title: "Pinteres copy",
      desc: "Pinteres ning nusxasi",
      tags: ["Next.js", "Firebase", "Tailwind"],
      color: "from-orange-500 to-red-600",
      bgColor: "hover:shadow-orange-500/50",
      image: "/images/2025-11-15_19-00-08.png",
      liveLink: "https://pinteres-git-main-ilyosbek-mashrabjonovs-projects.vercel.app/",
      codeLink: "https://github.com/Ilyosbek519",
    },
    {
      id: 6,
      title: "Test Login page",
      desc: "Test Login page dizayni",
      tags: ["Next.js", "Firebase", "Tailwind"],
      color: "from-red-500 to-cyan-600",
      bgColor: "hover:shadow-red-500/50",
      image: "/images/2025-11-15_18-57-41.png",
      liveLink: "https://test-kappa-nine-21.vercel.app/",
      codeLink: "https://github.com/Ilyosbek519",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mening Loyihalarim
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sifat va innovatsiya bilan yaratilgan loyihalar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-slate-900 border border-slate-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative p-6 z-10">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform"
                  >
                    <span>Ko'rish</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
