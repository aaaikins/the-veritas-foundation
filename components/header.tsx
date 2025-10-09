"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavigationDropdown, MobileNavigationDropdown } from "@/components/ui/navigation-dropdown"
import { HeartHandshake, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const aboutUsItems = [
    {
      href: "/about/what-we-do",
      label: "What We Do",
      description: "Our comprehensive programs and initiatives"
    },
    {
      href: "/about/founder",
      label: "About the Founder",
      description: "Meet the visionary behind our mission"
    },
    {
      href: "/about/team",
      label: "Our Team",
      description: "Dedicated professionals driving our impact"
    }
  ]

  const scholarsItems = [
    {
      href: "/scholars/graduate",
      label: "Graduate Scholars",
      description: "Masters and PhD students in our program"
    },
    {
      href: "/scholars/undergraduate",
      label: "Undergraduate Scholars",
      description: "Bachelor's degree students we support"
    }
  ]

  const getInvolvedItems = [
    {
      href: "/get-involved/apply",
      label: "Apply",
      description: "Join our scholarship and mentorship programs"
    },
    {
      href: "/get-involved/become-member",
      label: "Become a Member",
      description: "Volunteer as a mentor or support our mission"
    }
  ]

  const navLinks = [
    { href: "/impact", label: "Impact" },
    { href: "/blogs", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
  ]

  const handleMobileDropdownToggle = (dropdown: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown)
  }

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setOpenMobileDropdown(null)
  }

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
          {/* Home Link */}
          <Link
            href="/"
            className="text-base font-medium text-slate-700 hover:text-[#002366] transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-[#facc15] after:transition-all after:duration-300 hover:after:w-full py-2"
          >
            Home
          </Link>
          
          {/* About Us Dropdown */}
          <NavigationDropdown 
            trigger="About Us" 
            items={aboutUsItems}
          />
          
          {/* Scholars Dropdown */}
          <NavigationDropdown 
            trigger="Scholars" 
            items={scholarsItems}
          />
          
          {/* Other Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-700 hover:text-[#002366] transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-[#facc15] after:transition-all after:duration-300 hover:after:w-full py-2"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Get Involved Dropdown */}
          <NavigationDropdown 
            trigger="Get Involved" 
            items={getInvolvedItems}
          />
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
          <nav className="flex flex-col">
            {/* Home Link */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block px-6 py-4 text-lg font-medium text-slate-800 hover:text-[#002366] transition-colors duration-300 border-b border-slate-200/50"
            >
              Home
            </Link>
            
            {/* Mobile About Us Dropdown */}
            <MobileNavigationDropdown
              trigger="About Us"
              items={aboutUsItems}
              isOpen={openMobileDropdown === "about"}
              onToggle={() => handleMobileDropdownToggle("about")}
              onItemClick={closeMobileMenu}
            />
            
            {/* Mobile Scholars Dropdown */}
            <MobileNavigationDropdown
              trigger="Scholars"
              items={scholarsItems}
              isOpen={openMobileDropdown === "scholars"}
              onToggle={() => handleMobileDropdownToggle("scholars")}
              onItemClick={closeMobileMenu}
            />
            
            {/* Other Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block px-6 py-4 text-lg font-medium text-slate-800 hover:text-[#002366] transition-colors duration-300 border-b border-slate-200/50"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Get Involved Dropdown */}
            <MobileNavigationDropdown
              trigger="Get Involved"
              items={getInvolvedItems}
              isOpen={openMobileDropdown === "involved"}
              onToggle={() => handleMobileDropdownToggle("involved")}
              onItemClick={closeMobileMenu}
            />
            
            <div className="p-6">
              <Button asChild size="lg" className="w-full bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 hover:scale-105 transition-all duration-300 shadow-lg font-semibold">
                <Link href="/donate" onClick={closeMobileMenu}>
                  <HeartHandshake className="mr-2 h-5 w-5" />
                  Donate Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
