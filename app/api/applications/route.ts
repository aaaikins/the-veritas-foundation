import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const queryString = searchParams.toString()
    const backendUrl = `${BACKEND_URL}/api/applications${queryString ? `?${queryString}` : ''}`

    console.log('Proxying GET request to:', backendUrl)

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
    console.error('Error fetching applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const backendUrl = `${BACKEND_URL}/api/applications`

    console.log('Proxying POST request to:', backendUrl)
    console.log('Request body:', body)

    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Backend error:', errorData)
      throw new Error(`Backend responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error creating application:', error)
    return NextResponse.json(
      { error: 'Failed to create application' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const applicationId = url.pathname.split('/').pop()
    const body = await request.json()
    const backendUrl = `${BACKEND_URL}/api/applications/${applicationId}`

    console.log('Proxying PUT request to:', backendUrl)
    console.log('Request body:', body)

    const response = await fetch(backendUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // TODO: Add authentication headers if needed
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Backend error:', errorData)
      throw new Error(`Backend responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error updating application:', error)
    return NextResponse.json(
      { error: 'Failed to update application' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const applicationId = url.pathname.split('/').pop()
    const backendUrl = `${BACKEND_URL}/api/applications/${applicationId}`

    console.log('Proxying DELETE request to:', backendUrl)

    const response = await fetch(backendUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // TODO: Add authentication headers if needed
      },
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Backend error:', errorData)
      throw new Error(`Backend responded with status: ${response.status}`)
    }

    return NextResponse.json({ message: 'Application deleted successfully' })
  } catch (error) {
    console.error('Error deleting application:', error)
    return NextResponse.json(
      { error: 'Failed to delete application' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}
