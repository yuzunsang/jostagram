import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import cors from "cors";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS 설정
app.use(cors());

// users.json 파일의 경로
// const usersFilePath = path.join(__dirname, "mock", "users.json");

// app.get("/users", (req, res) => {
//   fs.readFile(usersFilePath, "utf8", (err, data) => {
//     if (err) {
//       res.status(500).send("Error reading users data");
//       return;
//     }
//     res.send(JSON.parse(data));
//   });
// });

// posts.json 파일의 경로
const postsFilePath = path.join(__dirname, "mock", "posts.json");

app.get("/posts", (req, res) => {
  fs.readFile(postsFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading posts file");
      return;
    }
    res.send(JSON.parse(data));
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
