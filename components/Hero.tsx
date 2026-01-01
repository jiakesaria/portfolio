'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative section">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Jia Kesaria
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            Computer Science + Data Science Student
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Building data-driven solutions with ML/AI expertise • Seeking Data Analyst, Data Engineering & Software Engineering internships
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-purple-glow hover:bg-purple-glow/80 text-white rounded-lg font-semibold transition-all duration-300 glow-on-hover"
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 border border-purple-glow/50 hover:border-purple-glow text-purple-glow hover:text-white rounded-lg font-semibold transition-all duration-300 glow-on-hover"
            >
              View Portfolio
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-white transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

