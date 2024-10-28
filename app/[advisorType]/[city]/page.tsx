import { Metadata } from 'next'
import { advisorTypes } from '@/data/advisor-types'
import { cities } from '@/data/cities'
import { fetchAdvisors } from '@/lib/api'
import { AdvisorCard } from '@/components/advisor/advisor-card'
import { generateAdvisorListSchema } from '@/lib/structured-data'

export function generateStaticParams() {
  const paths = []
  for (const advisor of advisorTypes) {
    for (const city of cities) {
      paths.push({
        advisorType: advisor.slug,
        city: city.slug,
      })
    }
  }
  return paths
}

export async function generateMetadata({ params }: { params: { advisorType: string; city: string } }): Promise<Metadata> {
  const advisorType = advisorTypes.find(a => a.slug === params.advisorType)
  const city = cities.find(c => c.slug === params.city)
  const typeLabel = advisorType?.name.toLowerCase() || 'advisors'
  const cityName = city?.name || 'your area'

  return {
    title: `${advisorType?.name || 'Advisors'} in ${cityName} | FindAnAdvisor`,
    description: `Find experienced ${typeLabel} in ${cityName}. Compare ratings, read reviews, and contact professionals directly.`,
    keywords: `${typeLabel}, ${cityName}, financial advice, professional ${typeLabel}, local ${typeLabel}`,
  }
}

export default async function AdvisorCityPage({
  params,
}: {
  params: { advisorType: string; city: string }
}) {
  const advisorType = advisorTypes.find(a => a.slug === params.advisorType)
  const city = cities.find(c => c.slug === params.city)

  if (!advisorType || !city) {
    return <div>Page not found</div>
  }

  const advisors = await fetchAdvisors(advisorType.name, city.name)
  const structuredData = generateAdvisorListSchema(advisors, city.name, advisorType.name)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {advisorType.name} in {city.name}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the best {advisorType.name.toLowerCase()} in {city.name}. Compare ratings, read reviews, and contact professionals directly.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.length > 0 ? (
            advisors.map((advisor) => (
              <AdvisorCard key={advisor.id} advisor={advisor} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No Results Found</h2>
              <p className="text-gray-600">
                We couldn't find any {advisorType.name.toLowerCase()} in {city.name} at the moment.
                Please try another city or contact us for assistance.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}