'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:jiakesaria@gmail.com',
    text: 'jiakesaria@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/jiakesaria',
    text: 'linkedin.com/in/jiakesaria',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/jiakesaria',
    text: 'github.com/jiakesaria',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          I'm actively seeking internship opportunities in Data Analysis, Data Engineering, and Software Engineering. Let's connect!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card hover:border-purple-glow group"
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-purple-glow group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">{link.label}</h3>
                <p className="text-gray-400 text-sm">{link.text}</p>
              </a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-night-light/30"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jia Kesaria. Built with Next.js & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

