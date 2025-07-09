const express = require("express");

const courseController = require("../../controllers/v1/course");

const router = express.Router();

router.route("/").get(courseController.getAll);

module.exports = router;
