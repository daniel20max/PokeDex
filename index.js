const { constants } = require("buffer");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [];
let message = "";

app.get("/", (req, res) => {
    setTimeout(() => {
        message = "";
      }, 5000);

    
    res.render("index", {
        pokedex,
        message,
    });
  });

  app.get("/Cadastro", (req, res) =>{
      res.render("Cadastro")
  })

  app.post("/Add", (req, res) => {
    const pokemon = req.body;
    pokedex.push(pokemon);
    message = 'O Pokemon '+ pokemon.nome +' foi adicionado a Pokedex';
    res.redirect("/");
  });

app.get("/Deck/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex[id]
  res.render("Deck", {
    pokemon,
  });
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));