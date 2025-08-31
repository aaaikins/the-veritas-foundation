import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import { IncomingMessage } from 'http'

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parser for FormData
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

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

      // Parse FormData
      const form = formidable({ multiples: true })

      form.parse(req as any, (err: any, fields: any, files: any) => {
        if (err) {
          console.error('Form parsing error:', err)
          res.status(500).json({ error: 'Failed to parse form data' })
          return
        }

        console.log('Parsed fields:', fields)
        console.log('Parsed files:', files)

        // For now, just return success
        res.status(200).json({
          message: 'Application submitted successfully (pages route)',
          status: 'success',
          data: fields
        })
      })
    } catch (error) {
      console.error('Error processing application:', error)
      res.status(500).json({ error: 'Failed to process application' })
    }
    return
  }

  res.status(405).json({ error: 'Method not allowed' })
}
