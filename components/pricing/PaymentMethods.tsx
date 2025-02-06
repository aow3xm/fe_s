import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bitcoin, CreditCard, Wallet } from "lucide-react"

const paymentMethods = [
  {
    icon: Bitcoin,
    title: "Cryptocurrency",
    description: "Pay with Bitcoin, Ethereum, or other major cryptocurrencies",
  },
  {
    icon: CreditCard,
    title: "Credit Card",
    description: "Secure payment via major credit cards through Stripe",
  },
  {
    icon: Wallet,
    title: "VietQR",
    description: "Quick and easy payments for users in Vietnam",
  },
]

export function PaymentMethods() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Payment Methods</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {paymentMethods.map((method) => (
          <Card key={method.title}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <method.icon className="h-6 w-6" />
                <CardTitle>{method.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{method.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

