'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Postura',
    subtitle: 'Full-Stack + ML',
    period: 'Aug 2025',
    description: 'Real-time posture correction app using computer vision and machine learning.',
    highlights: [
      'Developed using MediaPipe (33 keypoints) + custom ML models reducing form errors by 25% in pilot tests.',
      'Implemented an exercise library (10+ movements) with rep counting, scoring and instant audio/visual feedback to improve usability.',
      'Built cross-platform prototypes: Streamlit + FastAPI web app and iOS SwiftUI app, tested with 20+ users for accuracy and usability.',
    ],
    tech: ['Python', 'MediaPipe', 'FastAPI', 'Streamlit', 'Swift', 'SwiftUI', 'ML'],
  },
  {
    title: 'Campus Path Finder',
    subtitle: 'Java, JavaFX, Git',
    period: 'April — May 2025',
    description: 'Shortest-path desktop application for campus navigation.',
    highlights: [
      'Built a shortest-path desktop app for 50+ campus locations using Dijkstra\'s algorithm with sub-second response times.',
      'Designed a modular UI (GraphCanvas, ControlPanel, ResultsPanel) to enhance usability and support future feature expansion.',
    ],
    tech: ['Java', 'JavaFX', 'Git', 'Dijkstra Algorithm'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card h-full flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-purple-glow text-sm mb-2">{project.subtitle} • {project.period}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-gray-400 text-sm flex items-start">
                    <span className="text-purple-glow mr-2 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-night-light/30">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-night-light/50 text-purple-glow rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

