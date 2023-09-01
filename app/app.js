const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
// Middleware
app.use([morgan("dev")]);

// Routes
app.use(require("../routes/preFix"));
module.exports = app;
