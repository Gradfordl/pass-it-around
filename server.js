const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//99 bottles of beer
app.get("/", (req, res) => {
    res.send(`<h2>99 bottles of beer on the wall</h2> <a href="/98">Take one down pass it around </a>`)
})
//99 little bugs
app.get("/debug", (req, res) => {
  res.send(
    `<h2>99 little bugs in the code</h2> <h2>99 little bugs</h2> <a href="/debug/123">Take one down patch it around </a>`
  );
});

//99 bottles of beer continued
app.get("/:num", (req, res) => {
    let nextPage = parseInt(req.params.num) - 1
    if (parseInt(req.params.num) > 0) {
        res.send(`<h2>${req.params.num} bottles of beer on the wall</h2> <a href="${nextPage}">Take one down pass it around </a>`)
    } else {
        res.send(`<h2>Beer's all gone! Let's go get more! </h2> <a href="/"> Store Run!</a>`)
    }
})

//99 little bugs continued
app.get("/debug/:num", (req, res) => {
  let rdm = Math.floor(Math.random() * 50) + 1;
  let nextDebug = parseInt(req.params.num) + rdm;
  res.send(
    `<h2>${req.params.num} little bugs in the code,</h2> <h3>${req.params.num} little bugs, </h3> <a href="/debug/${nextDebug}">Take one down patch it around </a>`
  );
});

app.listen(3000, () => {
  console.log("Running on", PORT);
});
