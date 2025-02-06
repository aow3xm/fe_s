import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Clock, BarChart, Lock, Settings } from "lucide-react"

const features = [
  {
    title: "High Success Rate",
    description: "Industry-leading 99% success rate for all CAPTCHA types with advanced solving algorithms.",
    icon: BarChart,
  },
  {
    title: "Lightning Fast",
    description: "Blazing fast solution speeds with response times as low as 0.2 seconds for image CAPTCHAs.",
    icon: Zap,
  },
  {
    title: "24/7 Availability",
    description: "Our services are available round the clock with 99.9% uptime guarantee.",
    icon: Clock,
  },
  {
    title: "Secure & Private",
    description: "Enterprise-grade encryption and privacy measures to protect your data.",
    icon: Shield,
  },
  {
    title: "Easy Integration",
    description: "Simple API integration with comprehensive documentation and example code.",
    icon: Settings,
  },
  {
    title: "Data Protection",
    description: "GDPR compliant with strict data handling policies and regular security audits.",
    icon: Lock,
  },
]

export function Features() {
  return (
    <section className="container mx-auto py-20" aria-labelledby="features-heading">
      <div className="text-center mb-12">
        <h2 id="features-heading" className="text-4xl font-bold tracking-tighter mb-4">
          Powerful Features
        </h2>
        <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
          Advanced CAPTCHA solving capabilities powered by cutting-edge technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-2 transition-all hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 w-12 h-12 shrink-0 rounded-lg bg-primary/5 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

