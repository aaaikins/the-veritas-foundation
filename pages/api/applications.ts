import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method === 'GET') {
    console.log('GET request to /api/applications (pages)')
    res.status(200).json({
      message: 'API is working (pages route)',
      timestamp: new Date().toISOString()
    })
    return
  }

  if (req.method === 'POST') {
    try {
      console.log('POST request to /api/applications (pages)')
      console.log('Body:', req.body)

      // For now, just return success
      res.status(200).json({
        message: 'Application submitted successfully (pages route)',
        status: 'success'
      })
    } catch (error) {
      console.error('Error processing application:', error)
      res.status(500).json({ error: 'Failed to process application' })
    }
    return
  }

  res.status(405).json({ error: 'Method not allowed' })
}
