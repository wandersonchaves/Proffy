// Servidor
const express = require("express");
const server = express();

const { pageLanding, pageStudy, pageGiveClasses } = require("./pages");

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
