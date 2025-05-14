"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { Github, ExternalLink, X } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This e-commerce platform provides a complete solution for online stores. It features product listings, search functionality, user authentication, shopping cart, checkout process, and payment integration with Stripe. The admin dashboard allows for easy product and order management.",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux", "React DnD"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This task management application helps teams organize their work efficiently. It includes features like drag-and-drop task organization, real-time updates, team collaboration tools, task assignments, due dates, and progress tracking. The app uses Firebase for real-time database and authentication.",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A creative portfolio website for a digital artist with 3D elements and animations.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Frontend",
      technologies: ["React", "Three.js", "Framer Motion", "GSAP", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This portfolio website showcases a digital artist's work with immersive 3D elements and smooth animations. It features a custom 3D gallery, interactive project showcases, and creative transitions between pages. The site is fully responsive and optimized for performance across all devices.",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application with detailed forecasts, interactive maps, and location-based services.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js", "Geolocation API"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This weather dashboard provides comprehensive weather information with an intuitive interface. It includes current conditions, hourly and 7-day forecasts, precipitation maps, temperature trends, and severe weather alerts. The app uses geolocation for automatic local weather and allows users to save favorite locations.",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing and analyzing social media accounts and performance.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Full Stack",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Social Media APIs"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This social media dashboard helps users manage multiple social media accounts from a single interface. It provides analytics on post performance, audience demographics, engagement metrics, and growth trends. The dashboard includes scheduling tools, content suggestions, and competitor analysis features.",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "A mobile-first application for tracking workouts, nutrition, and fitness progress.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      technologies: ["React", "Firebase", "Chart.js", "Progressive Web App", "Health APIs"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This fitness tracking application helps users monitor their health and fitness journey. It includes workout logging, exercise demonstrations, nutrition tracking, progress visualization, goal setting, and achievement badges. The app works offline and syncs data when connectivity is restored.",
    },
  ]

  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const categories = ["All", "Frontend", "Full Stack", "Web App"]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Projects</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work, personal projects, and experiments.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1}
                transitionSpeed={1500}
                className="h-full"
              >
                <div
                  className="project-card h-full flex flex-col cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-t-xl aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/80 text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs rounded-full bg-slate-800 text-slate-300">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-slate-800 text-slate-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                        View Details
                      </button>

                      <div className="flex space-x-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 30 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-auto glass rounded-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-300 z-10"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} />
                </button>

                <div className="relative aspect-video">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold gradient-text">{selectedProject.title}</h2>
                    <span className="mt-2 md:mt-0 px-3 py-1 text-sm rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-slate-300 mb-6">{selectedProject.longDescription}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-300 flex items-center justify-center"
                    >
                      View Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>

                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-transparent hover:bg-slate-800 text-white border border-slate-700 font-medium transition-all duration-300 flex items-center justify-center"
                    >
                      View Source Code
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
