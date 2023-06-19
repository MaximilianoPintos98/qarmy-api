const express = require("express");
const router = express.Router();
const certificateService = require("../controllers/certificate.controller");

router
  .get("/", certificateService.get)
  .get("/:id", certificateService.getById)
  .post("/", certificateService.create)
  .put("/:id", certificateService.update)
  .delete("/:id", certificateService._delete);

module.exports = router;
