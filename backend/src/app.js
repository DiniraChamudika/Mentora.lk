const express = require("express");
const cors = require("cors");

const classRoutes = require("./routes/classRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/classes", classRoutes);

module.exports = app;