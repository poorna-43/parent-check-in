
const express = require("express");
console.log("authRoutes loaded");
const router = express.Router();


router.post("/signup", (req, res) => {

  console.log("POST /signup HIT");


  res.status(201).json({
    success: true,
    message: "user registered successfully",
  });

});

module.exports = router;