'use client'

import { useState } from 'react'
import { searchDiseases, getDiseaseHierarchy, getResearchPapers } from '../utils/api'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import DiseaseHierarchy from './DiseaseHierarchy'
import ResearchPapers from './ResearchPapers'
import DiseaseDetails from './DiseaseDetails'; // Import the DiseaseDetails component

interface Disease {
  id: string
  label: string
  ontology_name: string
  obo_id?: string
  description?: string[]
  iri: string
}

interface ResearchPaper {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
}

export default function DiseaseExplorer() {
  const [searchResults, setSearchResults] = useState<Disease[]>([]) // Expecting an array of Disease objects
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null) // Disease or null
  const [hierarchy, setHierarchy] = useState<any | null>(null) // Replace 'any' with a more specific type if needed
  const [papers, setPapers] = useState<ResearchPaper[]>([]) // Array of research papers
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (query: string) => {
    setIsLoading(true)
    setError('')
    try {
      const results = await searchDiseases(query)
      setSearchResults(results)
      setSelectedDisease(null)
    } catch (err) {
      setError('Failed to search diseases. Please try again.')
    }
    setIsLoading(false)
  }

  const handleSelectDisease = async (disease: Disease) => {
    setIsLoading(true)
    setError('')
    try {
      const [hierarchyData, paperIds] = await Promise.all([
        getDiseaseHierarchy(disease.iri),
        getResearchPapers(disease.label)
      ])
      setSelectedDisease(disease)
      setHierarchy(hierarchyData)
      setPapers(paperIds)
    } catch (err) {
      setError('Failed to fetch disease details. Please try again.')
    }
    setIsLoading(false)
  }

  return (
    <div className="space-y-4">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {isLoading && <p>Loading...</p>}
      {!selectedDisease && <SearchResults results={searchResults} onSelect={handleSelectDisease} />}
      {selectedDisease && (
        <DiseaseDetails
          disease={selectedDisease}
          hierarchy={hierarchy}
          papers={papers}
          onBack={() => setSelectedDisease(null)}
        />
      )}
    </div>
  )
}
