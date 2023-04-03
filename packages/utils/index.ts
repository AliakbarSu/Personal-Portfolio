import nodeMailer from 'nodemailer';


const TO_EMAIL = "hello@alisultani.com";
export const sendEmail = async (name: string, from: string, messsage: string, application: "Bog" | "Portfolio") => {
    const account = {
        user: process.env.GMAIL_USER || "",
        pass: process.env.GMAIL_PASS || "",
    }
    
    const transporter = nodeMailer.createTransport("SMTP", {
        service: "gmail",
        auth: {
        user: account.user,
        pass: account.pass,
        },
    });
    
    const info = await transporter.sendMail({
        from: from,
        to: TO_EMAIL,
        subject: `Contact Form: (${name})}) - ${application}`,
        text: messsage,
    })
    return info
}