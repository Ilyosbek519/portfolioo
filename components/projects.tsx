"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { link } from "fs"

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "Zamonaviy e-commerce veb-sayt, React va Node.js bilan yaratilgan",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-cyan-500 to-blue-600",
      bgColor: "hover:shadow-cyan-500/50",
    },
    {
      id: 2,
      title: "Task Management App",
      desc: "Vazifalarni boshqarish uchun real-time ilova",
      tags: ["Next.js", "Firebase", "Tailwind"],
      color: "from-blue-500 to-purple-600",
      bgColor: "hover:shadow-blue-500/50",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      desc: "Ijtimoiy media statistikasi uchun dashboard",
      tags: ["React", "Chart.js", "API"],
      color: "from-purple-500 to-pink-600",
      bgColor: "hover:shadow-purple-500/50",
    },
    {
      id: 4,
      title: "Design System",
      desc: "Qayta ishlatilgan komponentlar kutubxonasi",
      tags: ["Storybook", "TypeScript", "CSS"],
      color: "from-pink-500 to-orange-600",
      bgColor: "hover:shadow-pink-500/50",
    },
    {
      id: 5,
      title: "AI Chat Application",
      desc: "Sun'iy intellekt bilan chatbot veb-sayt",
      tags: ["Next.js", "OpenAI", "TypeScript"],
      color: "from-orange-500 to-red-600",
      bgColor: "hover:shadow-orange-500/50",
    },
    {
      id: 6,
      title: "Portfolio Website",
      desc: "Shuningdek bu portfel veb-sayt!",
      tags: ["Next.js", "React", "Animation"],
      color: "from-red-500 to-cyan-600",
      bgColor: "hover:shadow-red-500/50",
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
          <p className="text-muted-foreground text-lg">Sifat va innovatsiya bilan yaratilgan loyihalar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
              />

              {/* Content */}
              <div
                className={`relative p-6 h-full bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 group-hover:border-transparent transition-all duration-500 group-hover:shadow-2xl ${project.bgColor}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
                  >
                    <ExternalLink className="w-6 h-6 text-white"  />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 group-hover:text-white transition-colors duration-300">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                        
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform">
                      <span>Ko'rish</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button  className="flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform" >
                      <a href="#"><Github className="w-4 h-4" /></a>
                      <span><a href="https://github.com/Ilyosbek519" target="_blank" rel="noopener noreferrer">Code</a></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
