const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.dcryptgirl.com33333333333333333",
  port: 465,
  secure: true,
  auth: {
    user: "info@dcryptgirl.com",
    pass: "Richgift196897",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailOptions = {
  from: "admin@dcryptgirl.net",
  to: "geepytechnologies@gmail.com",
  subject: "Complete Your Registration",
  html: `<html>
  <head>
    <meta charset="UTF-8">
    <title>My HTML Email</title>
  </head>
  <body>
    <div>
      <div class="header" style="background-color: teal;">
        <div class="headertext" style="color: white; font-weight: 600; font-size: 25px;">This is Geepy</div>
      </div>
    </div>
  </body>
</html>
  `,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

module.exports = transporter;
