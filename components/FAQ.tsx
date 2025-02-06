import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
type FaqData = {
  question: string
  answer: string
}

const FAQData: FaqData[] = 
  // In a real app, this would fetch from an API or database
   [
    {
      question: "What types of CAPTCHAs can you solve?",
      answer:
        "We support various CAPTCHA types including Image to Text, reCAPTCHA tokens, hCaptcha tokens, and Cloudflare Turnstile tokens. Each type has its own success rate and solution speed.",
    },
    {
      question: "How do you handle billing?",
      answer:
        "We use a pay-per-solve model, charging per thousand solutions. Prices vary by CAPTCHA type, ranging from $0.1 to $0.4 per thousand solutions. You only pay for successful solutions.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a free trial of 50 solutions.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cryptocurrency and VietQR (for Vietnamese users)",
    },
  ]


export async function FAQ() {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-4xl font-bold tracking-tighter text-center mb-12">FAQ</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {FAQData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

