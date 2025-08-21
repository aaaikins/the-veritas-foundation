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
    { href: "#gallery", label: "Gallery" },
    { href: "#donate", label: "Support" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Veritas Foundation Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="font-semibold text-lg hidden sm:inline-block text-slate-900">The Veritas Foundation</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-800 transition-colors hover:text-[#002366] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#facc15] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90">
            <Link href="#donate">
              <HeartHandshake className="mr-2 h-4 w-4" />
              Donate
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-slate-800 hover:text-[#002366]"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="w-4/5 bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90">
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
