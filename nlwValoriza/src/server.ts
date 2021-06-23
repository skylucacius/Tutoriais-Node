import express from "express"
import "reflect-metadata"
import "./database"
import { router } from "./routes"

const app = express()
app.get("/", (req,res) => res.send("Olá"))
app.use(express.json())
app.use(router)

app.listen(3000, () => {return console.log("iniciando aplicação na porta 3000 ...")})
