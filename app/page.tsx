'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 starry-bg opacity-30 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-night-dark via-night-medium to-night-dark pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}

