import "./globals.css"
import { Azeret_Mono as Geist_Mono } from "next/font/google"
import { Header } from "../components/Header"
import { ThemeProvider } from "../components/ThemeProvider"
import type React from "react"
import { PointerEffect } from "@/components/PointerEffect"
import { AnnouncementBar } from "@/components/AnnouncementBar"

export const metadata = {
  title: {
    default: "Brand",
    template: "%s | Brand",
  },
  description: "Your brand description",
  keywords: ["captcha", "solving", "automation", "security"],
  openGraph: {
    title: "Brand",
    description: "Your brand description",
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistMono.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnnouncementBar />
          <Header />
          <PointerEffect />
          <main className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

