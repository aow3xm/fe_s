import { Hero } from "../components/Hero"
import { Price } from "../components/Price"
import { FAQ } from "@/components/FAQ"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/30 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/30 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Price />
        <FAQ />
      </div>
    </div>
  )
}

