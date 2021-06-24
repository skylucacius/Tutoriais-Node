import express, {Request, Response, NextFunction} from "express"
import "express-async-errors"
import "reflect-metadata"
import "./database"
import { router } from "./routes"

const app = express()

app.get("/", (req,res) => res.send("Olá"))
app.use(express.json())
app.use(router)
app.use( (error:Error, request:Request, response: Response, next: NextFunction) => 
{
    if (error instanceof Error) 
    {
        return response.status(400).json({ error : error.message})
    }
    return response.status(500).json({status: "erro", error: "Erro interno do servidor."})
})

app.listen(3000, () => {return console.log("iniciando aplicação na porta 3000 ...")})
