import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Do you charge for failed solutions?",
    answer:
      "You only pay for successfully solved CAPTCHAs. Failed attempts are not charged.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major cryptocurrencies (Bitcoin, Ethereum), VietQR for users in Vietnam.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Unfortunately, we do not offer refunds.",
  }
]

export function PricingFAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

