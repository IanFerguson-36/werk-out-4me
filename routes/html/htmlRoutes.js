const router = require("express").Router();
const path = require("path");

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname));
});