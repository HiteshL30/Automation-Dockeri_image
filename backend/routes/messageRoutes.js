const express = require("express");
const router = express.Router();
const {
  getMessages,
  addMessage
} = require("../controllers/messageController");

router.get("/messages", getMessages);
router.post("/messages", addMessage);

module.exports = router;