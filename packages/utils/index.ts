import * as sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

const TO_EMAIL = 'aliakbar.su@gmail.com'
const SENDER_IDENTITY = 'hello@alisultani.com'
export const sendEmail = async (
  name: string,
  from: string,
  messsage: string,
  application: 'Bog' | 'Portfolio'
) => {
  return new Promise((resolve, reject) => {
    sgMail
      .send({
        from: SENDER_IDENTITY,
        to: TO_EMAIL,
        subject: `Contact Form: (${name})}) - ${application}`,
        text: `A new email from: ${from} - ${messsage}`
      })
      .then(resolve)
      .catch(reject)
  })
}
