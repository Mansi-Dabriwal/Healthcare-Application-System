import nodemailer from 'nodemailer';

export const sendEmail = async (email, subject, text) => {

    try {
        console.log("start email")
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'doc101team@gmail.com',
                pass: "wsfyksceqvrddeei",
            }
        });

        let mailDetails = {
            from: 'docs101team@gmail.com',
            to: email,
            subject: subject,
            text: text,
        };
        console.log(mailDetails)
        let ct = transporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log('Email sent successfully', data);
            }
        });

    } catch (error) {
        console.log("email not sent!");
        console.log(error);
        return error;
    }
};

export default sendEmail;