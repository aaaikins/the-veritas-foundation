import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'API is working' })
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // For now, just return success without calling the backend
    // This prevents the 404 error while the backend is being set up
    console.log('Application form submitted:', Object.fromEntries(formData))

    return NextResponse.json({
      message: 'Application submitted successfully',
      status: 'success'
    }, { status: 200 })
  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}
