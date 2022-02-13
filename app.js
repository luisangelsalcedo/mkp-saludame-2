const express = require("express");
const app = express();

app.get("/makers/:name", (req, res) => {
  const { name } = req.params;

  !name
    ? res.send(`<h1>Hola desconocido!</h1>`)
    : res.send(`<h1>Hola ${name}!</h1>`);
});

app.listen("3000", () => {
  console.log("server run");
});
