"use client"
import { useEffect, useState, useCallback } from "react"

export function PointerEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((event: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.1), transparent 80%)`,
      }}
    />
  )
}

