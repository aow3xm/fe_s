"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Navigation } from "./Navigation"
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="font-bold text-xl">
              Brand
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-8">
          <Navigation className="flex-col items-start space-y-4" />
          <div className="flex flex-col space-y-4 pt-4">
            <Button variant="outline" className="w-full">
              Login
            </Button>
            <Button className="w-full whitespace-nowrap">Get Started</Button>
          </div>
          <div className="flex justify-between items-center pt-4">
            <span className="text-sm font-medium">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

