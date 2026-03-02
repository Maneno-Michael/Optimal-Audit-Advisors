import React, { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  // Navbar is over dark background when on home page and not yet scrolled
  const isDarkBg = isHome && !isScrolled
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    setIsOpen(false)
    if (isHome) {
      // If on home page, smooth scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        })
      }
    } else {
      // If on other page, navigate to home then scroll
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          })
        }
      }, 100)
    }
  }
  const handleHomeClick = () => {
    setIsOpen(false)
    if (isHome) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      navigate('/')
      setTimeout(
        () =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          }),
        50,
      )
    }
  }
  const navLinks = [
    {
      name: 'Services',
      href: '#services',
      type: 'scroll',
    },
    {
      name: 'About',
      href: '#about',
      type: 'scroll',
    },
    {
      name: 'Why Us',
      href: '#why-us',
      type: 'scroll',
    },
  ]
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white py-4 transition-all duration-300 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.18)] border-b border-slate-900/10"
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-amber-500 font-bold text-xl group-hover:bg-slate-800 transition-colors">
              OA
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-slate-900">
                Optimal Audit
              </span>
              <span className="text-xs font-medium text-amber-500 tracking-wider">
                ADVISORS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={handleHomeClick}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Home
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              <Button variant="primary" size="sm">
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: 'auto',
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          className="md:hidden bg-white border-t border-slate-100"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={handleHomeClick}
              className="text-base font-medium text-slate-700 py-2 text-left"
            >
              Home
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-700 py-2"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              <Button className="w-full">Contact Us</Button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
