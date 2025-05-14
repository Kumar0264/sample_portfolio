import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Cursor from "@/components/Cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Developer Portfolio",
  description: "A modern developer portfolio showcasing projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-slate-950 text-white min-h-screen`}>
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
