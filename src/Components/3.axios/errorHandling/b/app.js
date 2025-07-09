const express = require("express");
const cors = require("cors");

const courseRoutes = require("./routes/v1/course");

const app = express();

app.use(cors());
app.use("/v1/courses", courseRoutes);

module.exports = app;
