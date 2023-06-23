const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "admin@dcryptgirl.com",
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

//read email template
const filepath = path.join(__dirname, "/templates/test.html");
const template = fs.readFileSync(filepath, "utf-8");

// Replace [Username] with actual username
const username = "John Doe";
const personalizedEmail = template.replace("[username]", username);

const mailOptions = {
  from: "admin@dcryptgirl.com",
  to: "geepytechnologies@gmail.com",
  subject: "Dcryptgirl",
  html: personalizedEmail,
};

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

module.exports = transporter;
