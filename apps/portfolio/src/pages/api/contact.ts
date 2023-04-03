// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from 'utils';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const application = "Portfolio";
  return sendEmail(name, email, message, application)
}
