"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HeartHandshake, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#mission", label: "About Us" },
    { href: "#achievements", label: "Impact" },
    { href: "#blogs", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/95 shadow-xl backdrop-blur-lg border-b border-slate-200/50" : "bg-white/90 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Veritas Foundation Logo"
            className="h-12 w-12 object-contain transition-transform group-hover:scale-105 duration-300"
          />
          <span className="font-bold text-lg hidden sm:inline-block text-[#002366] group-hover:text-[#facc15] transition-colors duration-300">
            The Veritas Foundation
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-700 hover:text-[#002366] transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-[#facc15] after:transition-all after:duration-300 hover:after:w-full py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-6 py-3 group">
            <Link href="/donate">
              <HeartHandshake className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Donate
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" className="hover:bg-slate-100 transition-colors duration-300">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-t border-slate-200/50 shadow-xl">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-slate-800 hover:text-[#002366] transition-colors duration-300 py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="w-4/5 bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 hover:scale-105 transition-all duration-300 shadow-lg font-semibold mt-2">
              <Link href="#donate" onClick={() => setIsMenuOpen(false)}>
                <HeartHandshake className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
