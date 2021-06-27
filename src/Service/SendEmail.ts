const nodemailer = require("nodemailer");
var fs = require('fs');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: "",
        pass: ""
    },
});

fs.readFile('teste.html', { encoding: 'utf-8' }, function (err, html) {

    let mailOptions = {
        from: '',
        to: "",
        subject: "Elogio",
        html: html
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('OK')
        }

    })
})