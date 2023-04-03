// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const application = 'Portfolio'
    await sendEmail(name, email, message, application)
    return res.json({ message: 'Email sent' })
  } else {
    return res.status(500).json({ error: 'Method not allowed' })
  }
}
