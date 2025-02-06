import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/pricing", label: "Pricing" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About Us" },
]

export function Navigation({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center", className)}>
      <ul className="flex justify-center space-x-8 w-full">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

