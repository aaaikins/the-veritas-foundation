import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
// import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "The Veritas Foundation Inc.",
  description: "Empowering ideas, Transforming Lives.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", geistSans.variable)}>{children}</body>
    </html>
  )
}
