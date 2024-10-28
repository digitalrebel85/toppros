import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LineChart } from "lucide-react"
import { advisorTypes } from "@/data/advisor-types"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <LineChart className="h-6 w-6" />
          <span className="font-bold">FindAnAdvisor</span>
        </Link>
        <nav className="ml-8 hidden md:flex items-center space-x-4">
          {advisorTypes.map((type) => (
            <Link 
              key={type.slug}
              href={`/${type.slug}`} 
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              {type.name}
            </Link>
          ))}
        </nav>
        <nav className="ml-auto flex items-center space-x-4">
          <Link href="#" className="text-sm font-medium hover:underline">About</Link>
          <Link href="#" className="text-sm font-medium hover:underline">Contact</Link>
          <Button>Sign Up</Button>
        </nav>
      </div>
    </header>
  )
}