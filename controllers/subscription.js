const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../public/email-list/email.txt");
const transporter = require("../email/nodemailer.js");
const logger = require("../logger");
const emailVerify = require("email-verify");

const checkSubscription = (email) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) {
        logger.error("An error occurred while reading the file:", err);
        reject(err);
        return;
      }
      const emailsArray = data.split("\n");
      const emailExists = emailsArray.includes(email);
      resolve(emailExists);
    });
  });
};

const checkIfEmailIsValid = (emailcheck) => {
  return new Promise((resolve, reject) => {
    emailVerify.verify(emailcheck, function (err, info) {
      if (err) {
        logger.error("Error checking email:", err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

const subscribe = async (req, res) => {
  const { email } = req.body;
  const username = email.split("@")[0];
  //read email template
  const emailpath = path.join(__dirname, "../email/templates/test.html");
  const template = fs.readFileSync(emailpath, "utf-8");

  // Replace [Username] with actual username
  const personalizedEmail = template.replace("[username]", username);
  const mailOptions = {
    from: "admin@dcryptgirl.com",
    to: email,
    subject: "Dcryptgirl",
    html: personalizedEmail,
  };

  const info = await checkIfEmailIsValid(email);
  let message;
  if (info.success) {
    message = "Email address is valid";
  } else {
    message = "Email address is Invalid";
  }

  if (message === "Email address is Invalid") {
    res.json(message);
  } else {
    const userIsSubscribed = await checkSubscription(email);
    if (!userIsSubscribed) {
      try {
        fs.appendFile(filepath, email + "\n", (err) => {
          if (err) {
            logger.error("An error occurred while saving the file:", err);
            return;
          }
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              logger.error(error);
            } else {
              logger.info(`Email sent to ${email}: ` + info.response);
            }
          });
          res.status(200).json("file saved and Email sent");
        });
      } catch (err) {
        throw err;
      }
    } else {
      res.json("You're already a subscriber");
    }
  }
};

const getSubscribers = (req, res) => {
  try {
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occured while reading file:", err);
        return;
      }
      const emailsArray = data.split("\n");
      const filteremails = emailsArray.filter((item) => item.trim() !== "");
      console.log({ emails: filteremails });
    });
  } catch (err) {}
};

module.exports = { subscribe, getSubscribers };
