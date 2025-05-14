"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setFormStatus({ submitted: true, success: false, message: "Sending message..." })

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Your message has been sent successfully! I will get back to you soon.",
      })

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
    <div className="min-h-screen pt-24 pb-16 bg-slate-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="glass bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>

            {formStatus.submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg mb-6 text-sm ${
                  formStatus.success ? "bg-green-500/10 text-green-400" : "bg-indigo-500/10 text-indigo-400"
                }`}
              >
                {formStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-slate-300 mb-1 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    required
                    placeholder={`Your ${field}`}
                    className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
              ))}

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
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all"
              >
                Send Message <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="glass bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-5">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition"
                  >
                    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">{item.icon}</div>
                    <div>
                      <h3 className="text-base font-medium">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
              <p className="text-slate-300 mb-4">
                I'm currently available for freelance work and open to new opportunities. If you have a project that
                needs some creative touch, I'd love to hear about it.
              </p>
              <p className="text-slate-400 text-sm">
                Whether you need a website, web application, or digital solution, I'm here to help turn your ideas into
                reality.
              </p>
              <div className="mt-6">
                <h3 className="font-medium text-sm mb-2">Working Hours</h3>
                <p className="text-slate-400 text-sm">Mon - Fri: 9:00 AM – 6:00 PM</p>
                <p className="text-slate-400 text-sm">Weekend: Available for urgent matters</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
