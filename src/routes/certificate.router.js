const express = require("express");
const router = express.Router();
const certificateService = require("../controllers/certificate.controller");

router
  .get("/", certificateService.getAllCertificates)
  .post("/", certificateService.getCertificateByLicense)
  .post("/", certificateService.createCertificate)
  .put("/:id", certificateService.updateCertificate)
  .delete("/:id", certificateService.deleteCertificate);

module.exports = router;
