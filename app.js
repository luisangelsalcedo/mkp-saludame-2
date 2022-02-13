const express = require("express");
const app = express();

app.get("/makers/:name", (req, res) => {
  const { name } = req.params;

  if (name) {
    const [first, ...rest] = name.split("");

    res.send(`<h1>Hola ${first.toUpperCase()}${rest.join("")}!</h1>`);
  }
});

app.listen("3000", () => {
  console.log("server run");
});
