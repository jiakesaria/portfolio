'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text"
        >
          About
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I'm a Computer Science and Data Science student at the University of Wisconsin–Madison with a passion for building data-driven solutions and scalable software systems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            My experience spans full-stack development, machine learning, and AI engineering—from designing RAG pipelines that process 30k+ documents to building real-time posture correction apps with computer vision. I thrive on solving complex problems with measurable impact.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Currently seeking internship opportunities in Data Analysis, Data Engineering, and Software Engineering where I can apply my technical skills to drive business value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
        >
          <div className="card">
            <div className="text-3xl font-bold gradient-text mb-2">3.8</div>
            <div className="text-gray-400">GPA</div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold gradient-text mb-2">Dean's List</div>
            <div className="text-gray-400">Academic Excellence</div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold gradient-text mb-2">UW-Madison</div>
            <div className="text-gray-400">BS in CS + Data Science</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

