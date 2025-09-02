import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function GET(request: NextRequest) {
  try {
    const backendUrl = `${BACKEND_URL}/api/gallery/stats`

    console.log('Fetching gallery stats from:', backendUrl)

    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching gallery stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch gallery statistics' },
      { status: 500 }
    )
  }
}
