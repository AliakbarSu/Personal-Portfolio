import * as sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

const TO_EMAIL = 'aliakbar.su@gmail.com'
const SENDER_IDENTITY = 'hello@alisultani.com'
export const sendEmail = async (
  name: string,
  from: string,
  message: string,
  application: 'Bog' | 'Portfolio'
) => {
  return new Promise((resolve, reject) => {
    sgMail
      .send({
        from: SENDER_IDENTITY,
        to: TO_EMAIL,
        subject: `Email From: ${name} - ${application}`,
        text: `A new email from: ${from} - ${message}`,
        html: `<p>A new email from: ${from} - ${message}</p><p>${message}</p>`
      })
      .then(resolve)
      .catch(reject)
  })
}
