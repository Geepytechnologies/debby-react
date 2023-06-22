const express = require("express");
const { subscribe, getSubscribers } = require("../controllers/subscription");
const router = express.Router();

router.post("/", subscribe);
router.get("/", getSubscribers);

module.exports = router;
