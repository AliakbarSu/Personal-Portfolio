import nodeMailer from 'nodemailer'

const TO_EMAIL = 'hello@alisultani.com'
export const sendEmail = async (
  name: string,
  from: string,
  messsage: string,
  application: 'Bog' | 'Portfolio'
) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      serviceClient: process.env.GMAIL_SERVICE_CLIENT,
      privateKey: process.env.GMAIL_PRIVATE_KEY
    }
  })

  const info = await transporter.sendMail({
    from: from,
    to: TO_EMAIL,
    subject: `Contact Form: (${name})}) - ${application}`,
    text: messsage
  })
  return info
}
