import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownItem {
  href: string
  label: string
  description?: string
}

interface NavigationDropdownProps {
  trigger: string
  items: DropdownItem[]
  className?: string
}

export function NavigationDropdown({ trigger, items, className }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150) // Small delay to allow moving to dropdown
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div 
      className={cn("relative group", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        className="flex items-center gap-1 text-base font-medium text-slate-700 hover:text-[#002366] transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-[#facc15] after:transition-all after:duration-300 hover:after:w-full py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
        <ChevronDown 
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-slate-200/50 py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-3 hover:bg-slate-50 transition-colors duration-200 group/item"
              onClick={() => setIsOpen(false)}
            >
              <div>
                <div className="font-medium text-slate-900 group-hover/item:text-[#002366] transition-colors duration-200">
                  {item.label}
                </div>
                {item.description && (
                  <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

interface MobileDropdownProps {
  trigger: string
  items: DropdownItem[]
  isOpen: boolean
  onToggle: () => void
  onItemClick: () => void
}

export function MobileNavigationDropdown({ trigger, items, isOpen, onToggle, onItemClick }: MobileDropdownProps) {
  return (
    <div className="border-b border-slate-200/50">
      <button
        className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-slate-800 hover:text-[#002366] transition-colors duration-300"
        onClick={onToggle}
      >
        {trigger}
        <ChevronDown 
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      
      {isOpen && (
        <div className="bg-slate-50 px-6 pb-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block py-3 text-base text-slate-700 hover:text-[#002366] transition-colors duration-200 border-b border-slate-200/30 last:border-b-0"
              onClick={onItemClick}
            >
              <div>
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-slate-600 mt-1">
                    {item.description}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}