'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            YA
          </Link>
          
          <div className="hidden md:flex space-x-8 mr-12">
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            {/* <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link> */}
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
