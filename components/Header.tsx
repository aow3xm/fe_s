"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Navigation } from "./Navigation"
import { MobileMenu } from "./MobileMenu"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ThemeToggle = dynamic(() => import("./ThemeToggle").then((mod) => mod.ThemeToggle), { ssr: false })

export function Header() {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsAnnouncementVisible(currentScrollY === 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-100 ${
        isAnnouncementVisible ? "top-10" : "top-0"
      }`}
    >
      <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="w-[200px] flex items-center">
          <Link href="/" className="font-bold text-xl">
            Brand
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Navigation className="hidden lg:flex" />
        </div>
        <div className="w-[200px] flex items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button className="whitespace-nowrap">Get Started</Button>
            <ThemeToggle />
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

