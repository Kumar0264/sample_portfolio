"use client"
import Link from 'next/link';
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate form submission
    setFormStatus({ submitted: true, success: false, message: "Sending message..." })

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Your message has been sent successfully! I will get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco,+CA",
    },
  ]

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="glass rounded-xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

            {formStatus.submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg mb-6 ${
                  formStatus.success ? "bg-green-500/10 text-green-400" : "bg-indigo-500/10 text-indigo-400"
                }`}
              >
                {formStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-input resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-start p-4 rounded-lg hover:bg-slate-800/50 transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mr-4">{item.icon}</div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-slate-400">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="flex items-center justify-center p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Working Hours</h3>
                <p className="text-slate-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-slate-400">Weekend: Available for urgent matters</p>
              </div>
            </div>

            <div className="glass rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-slate-300 mb-4">
                I'm currently available for freelance work and open to new opportunities. If you have a project that
                needs some creative touch, I'd love to hear about it.
              </p>
              <p className="text-slate-400">
                Whether you need a website, web application, or digital solution, I'm here to help turn your ideas into
                reality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
