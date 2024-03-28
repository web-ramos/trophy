import nodemailer, { Transport } from 'nodemailer'
import { Mail } from "../../types/types"
import { logger } from '../Logger'

const sendMail = async (data: Mail) => {
    if (!data) {
        return
    }

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT ?? '587'),
        secure: (process.env.MAIL_SECURE ?? 'false').toLowerCase() === 'true',
        debug: true,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        },
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 5000
    });

    // ---- verify connection
    // transporter.verify(function (error, success) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log("Server is ready to take our messages");
    //     }
    // });

    const mailOptions = {
        from: process.env.MAIL_SENDER,
        to: process.env.MAIL_ADMIN,
        subject: 'Email from ModernTrophy',
        html: `
            <p>
                First Name      :   ${data.firstName}<br>
                Last Name       :   ${data.lastName}<br>
                Work Email      :   ${data.workEmail}<br>
                Work Phone      :   ${data.workPhone}<br>
                Event Date      :   ${data.eventDate.toLocaleDateString('en-US')}<br>
                Budget          :   ${data.budget}<br>
                Awards Needed   :   ${data.awardsNeeded}<br>
                Details         :   ${data.details}
            </p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            logger.error({message: `Letter send successfuly ${error.message}`})
            return console.log(error);
        }
        logger.info({message: 'Letter send successfuly'})
    });
}

 export default sendMail