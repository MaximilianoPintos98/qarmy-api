const express = require("express");

const certificateRouter = require("./certificate.router");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);

  router.use("/certificate", certificateRouter);
}

module.exports = routerApi;
