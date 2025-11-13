"use client"

import { useState } from "react"
import { Code2, Database, Palette } from "lucide-react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const icons = {
    Frontend: Code2,
    Backend: Database,
    Design: Palette,
  }

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95, color: "from-cyan-500 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-blue-500 to-purple-600" },
        { name: "TypeScript", level: 88, color: "from-purple-500 to-pink-600" },
        { name: "Tailwind CSS", level: 92, color: "from-pink-500 to-orange-600" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 65, color: "from-orange-500 to-red-600" },
        { name: "MongoDB", level: 12, color: "from-red-500 to-cyan-600" },
        { name: "PostgreSQL", level: 20, color: "from-cyan-500 to-green-600" },
        { name: "GraphQL", level: 18, color: "from-green-500 to-blue-600" },
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Men Bilgan Texnologiyalar
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">Mustahkam texnik ko'nikma va zamonaviy asboblar</p>
        </div>

        <div className="grid grid-cols-2 gap-10 mb:grid-cols-1">
          {skills.map((skillGroup, groupIdx) => {
            const IconComponent = icons[skillGroup.category as keyof typeof icons]
            return (
              <div key={groupIdx} className="group">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:border-cyan-500 group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, idx) => {
                    const itemId = `${groupIdx}-${idx}`
                    const isHovered = hoveredSkill === itemId
                    return (
                      <div
                        key={itemId}
                        onMouseEnter={() => setHoveredSkill(itemId)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group/skill cursor-pointer "
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span
                            className={`font-semibold transition-all duration-300 ${isHovered ? "text-transparent bg-gradient-to-r bg-clip-text " + skill.color : "text-foreground"}`}
                          >
                            {skill.name}
                          </span>
                          <span
                            className={`text-sm font-bold transition-all duration-300 ${isHovered ? "text-transparent bg-gradient-to-r bg-clip-text " + skill.color : "text-muted-foreground"}`}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden group-hover/skill:bg-gradient-to-r group-hover/skill:from-slate-600 group-hover/skill:to-slate-700 transition-all duration-300">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 ${
                              isHovered ? "shadow-lg" : ""
                            }`}
                            style={{
                              width: isHovered ? `${skill.level}%` : "0%",
                              boxShadow: isHovered ? `0 0 20px currentColor` : "none",
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
