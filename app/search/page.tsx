import { Metadata } from "next"
import { AdvisorCard } from "@/components/advisor/advisor-card"
import { fetchAdvisors } from "@/lib/api"

interface SearchPageProps {
  searchParams: { q: string }
}

export const metadata: Metadata = {
  title: "Search Results | ProDirectory",
  description: "Find professional advisors matching your search criteria.",
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const advisors = query ? await fetchAdvisors(query, "") : []

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Search Results
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
              Showing results for "{query}"
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <AdvisorCard key={advisor.id} advisor={advisor} />
            ))}
          </div>
          {advisors.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No Results Found</h2>
              <p className="text-gray-600">
                We couldn't find any results matching your search.
                Please try different keywords or browse by category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}