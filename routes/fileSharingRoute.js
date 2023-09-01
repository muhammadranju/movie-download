const router = require("express").Router();
const {
  sharingController,
  watchingController,
  downloadController,
} = require("../controllers/mainController");
router.get("/", (_req, res) => {
  return res
    .status(200)
    .render("index", { title: "Download and Watching Movies" });
});
router.get("/movie", sharingController);
router.get("/watch", watchingController);
router.get("/download", downloadController);

module.exports = router;
