import { NextResponse } from 'next/server'
import axios from 'axios'

const PUBMED_API_BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const paperId = searchParams.get('id')

  if (!paperId) {
    return NextResponse.json({ error: 'Paper ID is required' }, { status: 400 })
  }

  try {
    const response = await axios.get(`${PUBMED_API_BASE}/esummary.fcgi`, {
      params: {
        db: "pubmed",
        id: paperId,
        retmode: "json",
      },
    })

    const paperData = response.data.result[paperId]
    return NextResponse.json({
      id: paperId,
      title: paperData.title,
      authors: paperData.authors.map((author: any) => `${author.name}`),
      abstract: paperData.abstract || "No abstract available.",
    })
  } catch (error) {
    console.error("Error fetching paper details:", error)
    return NextResponse.json(
      { error: 'Failed to fetch paper details' },
      { status: 500 }
    )
  }
}

