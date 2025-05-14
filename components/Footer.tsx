"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={18} />, url: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={18} />, url: "https://twitter.com", label: "Twitter" },
    { icon: <Mail size={18} />, url: "mailto:hello@example.com", label: "Email" },
  ]

  return (
    <footer className="py-8 mt-20 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-sm text-slate-400">© {currentYear} DevPortfolio. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
