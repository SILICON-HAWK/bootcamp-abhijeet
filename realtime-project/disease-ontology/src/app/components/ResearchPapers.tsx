import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getPaperDetails } from '../utils/api'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

interface Paper {
  id: string
  title: string
  authors: string[]
  abstract: string
}

interface ResearchPapersProps {
  papers: string[] // Array of paper IDs
}

export default function ResearchPapers({ papers }: ResearchPapersProps) {
  const [paperDetails, setPaperDetails] = useState<Paper[]>([])
  const [errorPapers, setErrorPapers] = useState<string[]>([])
  const renderedPaperIds = new Set<string>()

  useEffect(() => {
    const fetchPaperDetails = async () => {
      for (const paperId of papers) {
        if (renderedPaperIds.has(paperId)) {
          continue // Skip if we've already rendered this paper
        }
        try {
          const paper = await getPaperDetails(paperId)
          setPaperDetails((prev) => {
            if (prev.some(p => p.id === paper.id)) {
              return prev; // Avoid adding duplicate papers
            }
            renderedPaperIds.add(paper.id)
            return [...prev, paper]
          })
        } catch (err) {
          console.error(`Error fetching details for paper ID ${paperId}:`, err)
          setErrorPapers((prev) => {
            if (prev.includes(paperId)) {
              return prev; // Avoid adding duplicate error entries
            }
            return [...prev, paperId]
          })
        }
      }
    }

    fetchPaperDetails()
  }, [papers])

  return (
    <div className="space-y-4">
      {/* Show successful paper details */}
      {paperDetails.map((paper) => (
        <Card key={paper.id}>
          <CardHeader>
            <CardTitle>{paper.title}</CardTitle>
            <CardDescription>Authors: {paper.authors.join(', ')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{paper.abstract}</p>
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${paper.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View on PubMed
            </a>
          </CardContent>
        </Card>
      ))}

      {/* Show errors for papers that failed to fetch */}
      {errorPapers.map((paperId) => (
        <Alert key={paperId}>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Failed to Load</AlertTitle>
          <AlertDescription>
            Could not fetch details for paper ID {paperId}. Please try again later.
          </AlertDescription>
        </Alert>
      ))}
    </div>
  )
}