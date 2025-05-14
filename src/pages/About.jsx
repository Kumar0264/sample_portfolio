"use client"
import Link from 'next/link';
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { Code, Briefcase, Lightbulb, Coffee } from "lucide-react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Avatar Section */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1500}
              className="rounded-2xl overflow-hidden glass p-1"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="absolute inset-0 hero-gradient"></div>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Developer Avatar"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </Tilt>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              I'm <span className="gradient-text">John Doe</span>, a passionate Full-Stack Developer
            </h2>

            <p className="text-slate-300">
              With over 5 years of experience in web development, I specialize in creating beautiful, functional, and
              user-centered digital experiences. I am passionate about building excellent software that improves the
              lives of those around me.
            </p>

            <p className="text-slate-300">
              I started my journey as a front-end developer and gradually expanded my skills to become proficient in
              back-end technologies as well. I enjoy tackling complex problems and turning them into simple and
              beautiful interface designs.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">What I do</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Code size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Web Development</h4>
                    <p className="text-sm text-slate-400">Creating responsive and performant web applications</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">UI/UX Design</h4>
                    <p className="text-sm text-slate-400">Designing intuitive and engaging user experiences</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Problem Solving</h4>
                    <p className="text-sm text-slate-400">Finding elegant solutions to complex problems</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Coffee size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Continuous Learning</h4>
                    <p className="text-sm text-slate-400">Always exploring new technologies and approaches</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">5+</h3>
            <p className="text-slate-400">Years Experience</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</h3>
            <p className="text-slate-400">Projects Completed</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">20+</h3>
            <p className="text-slate-400">Happy Clients</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">10+</h3>
            <p className="text-slate-400">Technologies</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
