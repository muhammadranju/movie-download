const extName = {
  mp4: ".mp4",
  mp3: ".mp3",
  jpeg: ".jpeg",
  jpg: ".jpg",
  zip: ".zip",
  rar: ".rar",
};

const fileName = `123${extName.mp4}`;

const sharingController = (_req, res) => {
  try {
    return res
      .status(200)
      .render("filesharing", { title: "Download the movie" });
  } catch (error) {
    console.log(error);
  }
};
const watchingController = (_req, res) => {
  try {
    return res
      .status(200)
      .render("watching", { fileName, title: "Watching Movies" });
  } catch (error) {
    console.log(error);
  }
};
const downloadController = (_req, res) => {
  try {
    // res.status(200).download(`./public/${fileName}`);
    res.status(200).download(`./public/files/${fileName}`, () => {
      console.log("Hello");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sharingController, watchingController, downloadController };
