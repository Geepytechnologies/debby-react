const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Backend server is Running");
});
