const proffys = [
  {
    name: "Wanderson Chaves",
    avatar:
      "https://avatars3.githubusercontent.com/u/25234200?s=460&u=97cd00e84e456277c669e8ea9a87e5368ff163f8&v=4",
    whatsapp: "86998614821",
    bio: "Entusiasta das melhores tecnologias de química avançada.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: "Natalia Chaves",
    avatar:
      "https://avatars3.githubusercontent.com/u/25234200?s=460&u=97cd00e84e456277c669e8ea9a87e5368ff163f8&v=4",
    whatsapp: "86999298209",
    bio: "Entusiasta das melhores tecnologias de química avançada.",
    subject: "Português",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1220],
  },
];

const express = require("express");
const server = express();

server
  .use(express.static("public"))
  .get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html");
  })
  .get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html");
  })
  .get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html");
  })
  .listen(3000);
