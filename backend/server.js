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
app.use(express.json());

// users.json 파일의 경로
const usersFilePath = path.join(__dirname, "mock", "users.json");

app.post("/users", (req, res) => {
  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading users data");
      return;
    }
    let users = JSON.parse(data);
    let newUser = req.body;
    console.log(users);
    console.log(newUser);

    // 새로운 사용자 추가
    users.push(newUser);

    // 업데이트된 사용자 데이터를 파일에 저장
    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        res.status(500).send("Error saving user data");
        return;
      }
      res.status(201).send(newUser); // 새로운 사용자 데이터 반환
    });
  });
});

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
