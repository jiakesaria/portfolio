'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Customer Success Software Engineer Intern',
    company: 'LambdaTest Inc.',
    location: 'Remote — San Francisco, CA',
    period: 'June – August 2025',
    bullets: [
      'Designed a Retrieval-Augmented Generation (RAG) pipeline (FAISS + LLaMA3.2-3B) enabling semantic Q&A over 30k+ docs with <1.5s latency.',
      'Optimized LLM inference with QLoRA fine-tuning, cutting GPU memory use by 40% while sustaining 95% task accuracy.',
      'Built a full-stack AI prototype (Next.js, Tailwind, FastAPI) adopted by internal teams, demonstrating end-to-end product development from ingestion to deployment.',
    ],
  },
  {
    title: 'PrEPS Facilitator',
    company: 'University of Wisconsin–Madison',
    location: 'Madison, WI',
    period: 'August 2025 – Present',
    bullets: [
      'Lead Math 113 PrEPS sessions, facilitating small-group problem-solving and delivering mini-lectures to strengthen student understanding of foundational concepts.',
      'Enrolled in a tutor development course covering active learning, research-based strategies and effective feedback to enhance facilitation skills.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Damacloid Technologies pvt ltd.',
    location: 'Mumbai, India',
    period: 'April 2021',
    bullets: [
      'Automated banking workflows by converting raw data into Java model files, reducing manual data entry by 30+ hours weekly for a major Indian bank.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section bg-night-medium/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-purple-glow font-medium">{exp.company}</p>
                </div>
                <div className="text-right md:text-left md:ml-4">
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-gray-300 flex items-start">
                    <span className="text-purple-glow mr-2 mt-1.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

