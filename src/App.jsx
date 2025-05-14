"use client"

import Link from 'next/link';
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Cursor from "./components/Cursor"

function App() {
  const location = useLocation()

  return (
    <div className="relative bg-slate-950 text-white min-h-screen">
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
