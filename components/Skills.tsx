'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'Swift', 'SQL', 'R', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'FastAPI',
      'TensorFlow',
      'scikit-learn',
      'NumPy',
      'Pandas',
      'MediaPipe',
      'FAISS',
      'Next.js',
      'Tailwind',
      'Streamlit',
      'JavaFX',
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      'GCP',
      'GitHub',
      'GitLab',
      'Linux/Unix',
      'VS Code',
      'IntelliJ',
      'PyCharm',
      'Xcode',
      'Jupyter',
      'Colab',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section bg-night-medium/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-white mb-4 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-night-light/50 text-gray-300 rounded-lg text-sm hover:bg-purple-glow/20 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 card"
        >
          <h3 className="text-xl font-semibold text-white mb-4 gradient-text">Certifications</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="text-purple-glow mr-2 mt-1">•</span>
              <div>
                <p className="text-white font-medium">Machine Learning Specialization</p>
                <p className="text-gray-400 text-sm">DeepLearning.AI, Stanford University • Jun 2025 – Jul 2025</p>
                <p className="text-gray-300 text-sm mt-1">
                  Implemented supervised and unsupervised ML algorithms in Python using NumPy, scikit-learn, and TensorFlow (regression, decision trees, clustering, anomaly detection). Built recommender systems, multi-class neural networks, and reinforcement learning agents for real-world tasks.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

