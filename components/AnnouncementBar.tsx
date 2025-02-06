"use client"
import {useState, useEffect} from 'react'
export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY === 0) { 
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground px-4 py-2 transition-transform duration-100 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container max-w-8xl mx-auto flex items-center justify-center">
        <p className="text-sm font-medium">Thong bao nam o day</p>
      </div>
    </div>
  )
}

