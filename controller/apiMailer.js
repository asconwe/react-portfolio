const nodeMailer = require('nodemailer');

const apiMailer = (app) => {
    app.post('/api/mailer', (req, res) => {
        const { name, email, message } = req.body;
        'use strict';
        const nodemailer = require('nodemailer');

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // secure:true for port 465, secure:false for port 587
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: `"Your Portfolio" <aconwellportfolio@gmail.com>`, // sender address
            to: 'august.conwell@gmail.com', // list of receivers
            subject: `A new message from ${name} via your portfolio contact page`, // Subject line
            text: `Email address: ${email}, name${name}, & message: ${message}`, // plain text body
            html: `Email address: ${email}<br>
                    Name: ${name}<br> 
                    Message: ${message} 
                    <br>============================<br>
                    Automated delivery` // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.send("Error:::::" + error)
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.send("Success:::::" + info);
        });
    })
}





module.exports = apiMailer;