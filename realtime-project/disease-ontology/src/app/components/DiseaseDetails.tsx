import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import DiseaseHierarchy from './DiseaseHierarchy'
import ResearchPapers from './ResearchPapers'
import { ArrowLeft } from 'lucide-react'

interface DiseaseDetailsProps {
  disease: {
    id: string
    label: string
    ontology_name: string
    obo_id?: string
    description?: string[]
    iri: string
  }
  hierarchy?: any // Define a more specific type for hierarchy if needed
  papers: {
    id: string
    title: string
    authors: string[]
  }[]
  onBack: () => void
  onHierarchySelect: (selectedHierarchy: any) => void // Ensure to define the correct type for selectedHierarchy if possible
}

export default function DiseaseDetails({ disease, hierarchy, papers, onBack, onHierarchySelect }: DiseaseDetailsProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{disease.label}</CardTitle>
        <CardDescription>
          {disease.ontology_name} ID: {disease.obo_id || disease.id}
        </CardDescription>
        <Button onClick={onBack} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Search Results
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Description</h3>
          <p>{disease.description?.[0] || 'No description available.'}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">IRI</h3>
          <p className="break-all">{disease.iri}</p>
        </div>
        {hierarchy && (
          <div>
            <h3 className="text-lg font-semibold">Hierarchy</h3>
            <DiseaseHierarchy hierarchy={hierarchy} onSelect={onHierarchySelect} />
          </div>
        )}
        {papers.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold">Related Research Papers</h3>
            <ResearchPapers papers={papers} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}