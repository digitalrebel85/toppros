import { Metadata } from 'next'
import { advisorTypes } from '@/data/advisor-types'
import { cities } from '@/data/cities'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from 'next/link'

export function generateStaticParams() {
  return advisorTypes.map((advisor) => ({
    advisorType: advisor.slug,
  }))
}

export async function generateMetadata({ params }: { params: { advisorType: string } }): Promise<Metadata> {
  const advisorType = advisorTypes.find(a => a.slug === params.advisorType)
  const typeLabel = advisorType?.name.toLowerCase() || 'advisors'

  return {
    title: `Find ${advisorType?.name || 'Advisors'} Near You | FindAnAdvisor`,
    description: `Connect with experienced ${typeLabel} in your area. Compare ratings, read reviews, and contact professionals directly.`,
    keywords: `${typeLabel}, financial advice, professional ${typeLabel}, local ${typeLabel}`,
  }
}

export default function AdvisorTypePage({
  params,
}: {
  params: { advisorType: string }
}) {
  const advisorType = advisorTypes.find(a => a.slug === params.advisorType)

  if (!advisorType) {
    return <div>Advisor type not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Find {advisorType.name} Near You
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our directory of experienced {advisorType.name.toLowerCase()} in your area. 
          Compare ratings, read reviews, and contact professionals directly.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <Link 
            key={city.slug} 
            href={`/${params.advisorType}/${city.slug}`}
          >
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <CardTitle>{city.name}</CardTitle>
                </div>
                <CardDescription>
                  Find {advisorType.name} in {city.name}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}