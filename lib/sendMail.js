import { createTransport } from 'nodemailer';
import env from 'dotenv';
env.config();

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

export default async function sendMail(name, email, message) {
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: user,
            pass: pass,
        }
    });

    const mailOptions = {
        from: user,
        to: email,
        subject: `Thank you for registering with us`,
        html: `<p>Hello ${name},</p><br>
                <p>${message}</p><br>
                <p>Best regards,</p>
                <p>HackThrone Team</p>`,
    };

    await transporter.sendMail(mailOptions).then((info, error) => {
        if (error) {
            console.error("Error sending email:", error);
            throw new Error("Error sending email");
        }
        console.log("Email sent:", info.response);
    });

}
