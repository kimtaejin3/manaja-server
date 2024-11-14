module.exports = (app) => {
  const meeting = require("../controllers/meeting.controller");

  const router = require("express").Router();

  router.post("/", meeting.create);
  router.get("/:id", meeting.findOne);

  app.use("/api/meetings", router);
};
