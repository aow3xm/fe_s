import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const pricingData = [
  {
    type: "Image to Text",
    price: 0.1,
    successRate: "99%", 
    speed: "0.2s",
    popular: true,
  },
  {
    type: "reCAPTCHA v2",
    price: 0.3,
    successRate: "99%",
    speed: "10s",
    popular: false,
  },
  {
    type: "reCAPTCHA v3",
    price: 0.3,
    successRate: "95%",
    speed: "5s",
    popular: false,
  },
  {
    type: "hCaptcha",
    price: 0.4,
    successRate: "95%",
    speed: "15s",
    popular: false,
  },
]

export function Price() {
  return (
    <div className="rounded-lg border mb-16">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>CAPTCHA Type</TableHead>
            <TableHead className="text-right">Price Per 1K</TableHead>
            <TableHead className="text-right">Success Rate</TableHead>
            <TableHead className="text-right">Avg. Speed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pricingData.map((item) => (
            <TableRow key={item.type}>
              <TableCell className="font-medium">
                {item.type}
                {item.popular && (
                  <Badge variant="secondary" className="ml-2">
                    Popular
                  </Badge>
                )}
              </TableCell>
              <TableCell className="text-right">${item.price}</TableCell>
              <TableCell className="text-right">{item.successRate}</TableCell>
              <TableCell className="text-right">{item.speed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

