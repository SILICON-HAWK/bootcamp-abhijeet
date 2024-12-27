import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

// Define the Disease interface
interface Disease {
  id: string;
  obo_id?: string;
  label: string;
  ontology_name: string;
  description?: string[];
}

// Define the component props interface
interface SearchResultsProps {
  results: Disease[];
  onSelect: (disease: Disease) => void;
}

export default function SearchResults({ results, onSelect }: SearchResultsProps) {
  if (results.length === 0) return null

  // Keep track of seen keys to prevent duplicate renders
  const seenKeys = new Set<string>()

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {results.map((disease, index) => {
        // Generate the key
        const itemKey = `${disease.obo_id || disease.id || index}`
        
        // If we've seen this key before, skip rendering
        if (seenKeys.has(itemKey)) {
          return null
        }
        
        // Add the key to our Set of seen keys
        seenKeys.add(itemKey)

        return (
          <Card 
            key={itemKey}
            className="flex flex-col hover:shadow-neutral-800 transition-shadow duration-300 ease-in-out bg-gradient-to-br from-fuchsia-100 to-cyan-100 background-animate dark:from-purple-700 dark:to-cyan-600 dark:hover:transform dark:hover:scale-105 dark:transition-all hover:transform hover:scale-105 hover:transition-all"
          >
            <CardHeader>
              <CardTitle className="text-2xl">{disease.label}</CardTitle>
              <CardDescription className='dark:text-white'>{disease.ontology_name} ID: {disease.obo_id || disease.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-3 dark:text-white">
                {disease.description?.[0] || 'No description available.'}
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button onClick={() => onSelect(disease)}>View Details</Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}