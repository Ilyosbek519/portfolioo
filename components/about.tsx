"use client"

import { useState } from "react"
import { Sparkles, Code2, Palette, Zap } from "lucide-react"

export default function About() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      desc: "React, Next.js, Node.js va zamonaviy veb texnologiyalarida tajribali",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Palette,
      title: "Mobilogrof",
      desc: "Reklama va brendlar uchun chiroyli montaj va grafikalar yarataman",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Performance Fokusli",
      desc: "Tez, samarali va miqyoslanuvchi ilovalar yaratishga qoratganman",
      color: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-background to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Men haqimda</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Kim men?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Men Ilyosbek Mashrabjonov, Full-Stack Developer va Mobilogrofman. Zamonaviy veb-saytlar va mobil ilovalarni yarata olaman hamda reklama va brendlar uchun chiroyli montaj va grafikalar yarataman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, i) => {
            const IconComponent = item.icon
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group relative overflow-hidden rounded-xl p-8 cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-85 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} mb-4 flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-white transition-colors duration-300">{item.desc}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 group hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
          <p className="text-foreground leading-relaxed text-lg">
          Mening birinchi loyiham 2025 yilda Najot Ta'lim kursida boshlanib, u yerda men React, Tailwind va JavaScript bo‘yicha amaliy bilimlar oldim. Bu loyiha orqali men:

Intuitiv va chiroyli frontend interfeyslar yaratishni o‘rgandim.

Responsive dizayn va turli ekran o‘lchamlariga moslashuvni sinab ko‘rdim.

User experience tamoyillarini amalda qo‘llashni o‘rgandim.

Loyiha davomida version control (Git) va hamkorlikda ishlash tajribasini oldim.

Ushbu loyiha men uchun tajriba va bilimlarning poydevori bo‘lib xizmat qildi va hozirgi vaqtda men uni yanada rivojlantirib, real dunyo web ilovalari yaratish imkoniga ega bo‘ldim.
          </p>
        </div>
      </div>
    </section>
  )
}
