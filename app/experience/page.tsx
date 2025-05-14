"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description:
        "Led the frontend development team in building a modern SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
      link: "#",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client projects. Worked on both frontend and backend systems, implementing new features and ensuring code quality.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS"],
      link: "#",
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      location: "Boston, MA",
      period: "2017 - 2019",
      description:
        "Created responsive and interactive web applications for various clients. Collaborated with designers to implement pixel-perfect interfaces.",
      technologies: ["JavaScript", "React", "CSS3", "SASS", "Webpack"],
      link: "#",
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      location: "Austin, TX",
      period: "2016 - 2017",
      description:
        "Assisted in developing web applications and websites. Learned modern development practices and collaborated with senior developers.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"],
      link: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Experience</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A timeline of my professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {/* Experience Items */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12 relative"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-12">
                {/* Timeline Dot */}
                <div className="timeline-dot"></div>

                <div className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold gradient-text">{exp.title}</h3>
                    <span className="text-sm text-slate-400 flex items-center mt-2 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center text-slate-300 mb-4">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden md:block mx-2">•</span>
                    <span className="flex items-center text-sm text-slate-400 mt-1 md:mt-0">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                  >
                    View Company
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
