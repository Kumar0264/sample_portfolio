"use client"
import Link from 'next/link';
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Tilt from "react-parallax-tilt"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Vue.js", level: 70 },
        { name: "Framer Motion", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "GraphQL", level: 75 },
        { name: "REST API", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "AWS", level: 65 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Webpack", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Jest", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Figma", level: 80 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Three.js", level: 65 },
      ],
    },
  ]

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

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Skills</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants} className="glass rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6 text-center gradient-text">{category.title}</h2>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <Tilt
                    key={skillIndex}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1000}
                    scale={1.02}
                    transitionSpeed={1500}
                    className="skill-card"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                    </div>
                  </Tilt>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Other Skills & Interests</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "UI/UX Design",
              "Responsive Design",
              "Performance Optimization",
              "Accessibility",
              "SEO",
              "PWA",
              "WebGL",
              "Animation",
              "Mobile Development",
              "Cross-Browser Compatibility",
              "Code Review",
              "Technical Writing",
              "Mentoring",
              "Problem Solving",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
