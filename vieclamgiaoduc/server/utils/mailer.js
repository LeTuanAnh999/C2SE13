const nodeMailer = require('nodemailer');
const mailConfig = require('../email');

exports.sendMail = (to, subject, htmlContent) => {

 
    const transport = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secureConnection: false,
        secure: false,
        auth: {
            user: 'tuan_1851220007@dau.edu.vn',
            pass: 'jsegxxxhpwonmpke',
        }
    })

    const options = {
        from: 'tuan_1851220007@dau.edu.vn',
        to: to,
        subject: subject,
        html: htmlContent
    }
    return transport.sendMail(options);
}