// Dados
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

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Fícica",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

// Funcionalidades
function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}

function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
  const data = req.query;

  // se tiver dados
  const isNotEmpty = Object.keys(data).length > 0;
  if (isNotEmpty) {
    data.subject = getSubject(data.subject);

    // adicionar dados a lista de proffys
    proffys.push(data);

    return res.redirect("/study");
  }

  // se nao, mostrar a pagina
  return res.render("give-classes.html", { subjects, weekdays });
}

// Servidor
const express = require("express");
const server = express();

// configurar nunjucks (template engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", { express: server, noCache: true });

// Inicio e configuracao do servidor
server
  // configurar arquivos estaticos (css, script, imagens)
  .use(express.static("public"))
  // rotas da aplicacao
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  // start do servidor
  .listen(3000);
