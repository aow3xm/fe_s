import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Advanced Captcha Solving",
  description: "Unlock seamless user experiences with our expert captcha-solving capabilities.",
}

export function Hero() {
  return (
    <section className="w-full flex items-center justify-center min-h-[90vh] py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Advanced Captcha
              <br />
              Solving
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground text-lg">
              Unlock seamless user experiences with our expert captcha-solving capabilities.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="text-lg">
              Start Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8"></div>
        </div>
      </div>
    </section>
  )
}

