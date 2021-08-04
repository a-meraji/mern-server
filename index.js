import express from "express";
import path from "path";
import cors from "cors";
import allCourses from "./data.js";
const PORT = 8080;

const app = express();

app.use(cors());

app.use("/dls", (req, res) => {
  const sec = req.query.section;
  const name = req.query.file;

  const address = `./dls/${sec}/${name}`;

  res.download(path.resolve(address));
});

app.get("/courses/:index", (req, res) => {
  const index = req.params.index;
  res.send(allCourses[index]);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
