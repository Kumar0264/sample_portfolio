"use client"

import { useState, useEffect, FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface NavLink {
  path: string
  label: string
}

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks: NavLink[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur bg-black/50 shadow-md" : "py-5 bg-slate-950"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          DevPortfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative px-3 py-2 text-white font-medium transition-all duration-300 ${
                pathname === link.path ? "text-indigo-400" : "text-gray-300 hover:text-white"
              } group`}
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur py-4 rounded-b-xl shadow-lg"
          >
            <nav className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-3 py-2 text-white font-medium transition-all duration-300 ${
                    pathname === link.path ? "text-indigo-400" : "text-gray-300 hover:text-white"
                  } group`}
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
