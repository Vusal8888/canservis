"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CS</span>
            </div>
            <span className="text-primary">Can Servis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#services" className="text-foreground hover:text-primary transition">
              Xidmətlər
            </Link>
            <Link href="#features" className="text-foreground hover:text-primary transition">
              Xüsusiyyətlər
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition">
              Əlaqə
            </Link>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-medium transition">
              Zəng edin
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link
              href="#services"
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Xidmətlər
            </Link>
            <Link
              href="#features"
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Xüsusiyyətlər
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Əlaqə
            </Link>
            <button className="mt-4 w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-medium transition">
              Zəng edin
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
