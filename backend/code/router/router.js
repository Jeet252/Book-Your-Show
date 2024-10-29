const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.route("/movie").get(controller.movie);
router.route("/cinema").get(controller.cinema);
router.route("/ticketdata").post(controller.ticketdata);
router.route("/sendticketdata").get(controller.sendticketdata);
module.exports = router;
