const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
// Middleware
app.use([
  morgan("dev"),
  compression({
    level: 6,
    threshold: 100 * 1000,
    filter: (req, res) => {
      if (req.header["x-no-compression"]) {
        return false;
      }
      return compression.filter(req, res);
    },
  }),
]);

// Routes
app.use(require("../routes/preFix"));
module.exports = app;
