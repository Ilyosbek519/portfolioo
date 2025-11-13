"use client"

import { useState } from "react"
import { Mail, Linkedin, Github, Send, Instagram, Target } from "lucide-react"

export default function Contact() {
  const [hoveredInput, setHoveredInput] = useState<string | null>(null)

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "azomjonovumidjon@gmail.com",
      color: "from-cyan-500 to-blue-600",
      href: "https://mail.google.com/mail/u/0/#sent?compose=new",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@mashrabjonovv.44",
      color: "from-blue-500 to-purple-600",
      href: "",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Ilyosbek519",
      color: "from-purple-500 to-pink-600",
      href: "https://github.com/Ilyosbek519",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@ilyosbek_mashrabjonov",
      color: "from-pink-500 to-orange-600",
      href: "https://t.me/ilyosbek_mashrabjonov",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-slate-950 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Bog'lanish</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Men sizning proyektingiz haqida eshitishni xohlayman. Uning o'lchami qanday bo'lmasin!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contacts.map((contact, i) => {
            const IconComponent = contact.icon
            return (
              <a
                key={i}
                href={contact.href}
                onMouseEnter={() => setHoveredInput(contact.label)}
                onMouseLeave={() => setHoveredInput(null)}
                className="group relative overflow-hidden rounded-lg p-6 cursor-pointer transition-all duration-500 hover:shadow-2xl transform hover:scale-105 active:scale-95"
                target="blank"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
                />

                {/* Fallback background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 group-hover:border-transparent" />

                <div className="relative z-10">
                  <div className="mb-2 flex justify-center">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${contact.color} group-hover:shadow-lg transition-all duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300 mb-1">
                    {contact.label}
                  </p>
                  <p
                    className={`font-semibold transition-all duration-300 ${hoveredInput === contact.label ? "text-white" : "text-white"}`}
                  >
                    {contact.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden group flex items-center justify-center gap-2 mx-auto">
          <span className="relative z-10">Men bilan bog'lanish</span>
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  )
}
