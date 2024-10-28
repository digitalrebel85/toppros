"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
            Find Top Professionals in Your Area
          </h1>
          <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
            Connect with expert mortgage advisors, solicitors, and wealth managers to help you make informed decisions.
          </p>
          <div className="w-full max-w-sm space-y-2">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input 
                className="max-w-lg flex-1" 
                placeholder="Search professionals..." 
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" className="bg-white text-purple-600 hover:bg-zinc-100">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}