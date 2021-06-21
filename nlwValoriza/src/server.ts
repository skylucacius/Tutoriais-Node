import express from "express"
const app = express()

app.get("/", (req,res) => res.send("Olá"))

    app.listen(3000, () => {return console.log("iniciando aplicação na porta 3000 ...")})
