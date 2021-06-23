import express from "express"
import "reflect-metadata"
import "./database"

const app = express()
// app.get("/", (req,res) => res.send("Olá"))

app.listen(3000, () => {return console.log("iniciando aplicação na porta 3000 ...")})
