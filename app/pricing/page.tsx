import type { Metadata } from "next"
import { PricingHeader } from "@/components/pricing/PricingHeader"
import { Price } from "@/components/Price"
import { PricingFAQ } from "@/components/pricing/PricingFAQ"
import { PaymentMethods } from "@/components/pricing/PaymentMethods"

export const metadata: Metadata = {
  title: "CAPTCHA Solving Pricing - Pay Per Solve Model",
  description:
    "Transparent pay-per-solve pricing for all CAPTCHA types. No subscriptions, only pay for successful solutions. Volume discounts available.",
  openGraph: {
    title: "CAPTCHA Solving Pricing - Pay Per Solve Model",
    description: "Transparent pay-per-solve pricing for all CAPTCHA types",
    type: "website",
    url: "https://yourdomain.com/pricing",
  },
}

export default function PricingPage() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            name: "CAPTCHA Solving Service Pricing",
            description: "Pay-per-solve pricing model for CAPTCHA solving services",
            price: "0.001",
            priceCurrency: "USD",
            unitText: "per solve",
          }),
        }}
      />

      <div className="container mx-auto px-4">
        <PricingHeader />
        <Price />
        <PaymentMethods />
        <PricingFAQ />
      </div>
    </div>
  )
}

