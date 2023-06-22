const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const logger = require("./logger");
const cors = require("cors");
const subscriptionRoute = require("./routes/subscription");

//This redirect method is pecuilar to express
// app.use((req, res, next) => {
//   if (!req.secure) {
//     console.log("not secure");
//     res.redirect(`https://${req.hostname}${req.url}`);
//   } else {
//     console.log("secure");
//     next();
//   }
// });

// Redirect HTTP to HTTPS using headers
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https") {
      res.redirect(`https://${req.hostname}${req.url}`);
    } else {
      next();
    }
  });
}
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "/dist")));
app.use("/api/subscribe", subscriptionRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info("Backend server is Running");
});
