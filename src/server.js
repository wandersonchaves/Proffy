require("express")()
  .get("/", (req, res) => {
    return res.send("Hi from NLW02");
  })
  .get("/study", (req, res) => {
    return res.send("Pagina Study");
  })
  .listen(3000);
