import {Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

export function ensureAuthenticated(request:Request, response:Response,nextFunction:NextFunction) {
    //Receber o token
    const authToken = request.headers.authorization
    //Validar se o token está preenchido
    if (!authToken) return response.status(401).json("Token inválido.")
    const token = authToken.split(" ")[1]
    try {
        //Validar se o token é válido
        const validToken = verify(token,"EEFC92021A30682ECA385A7D91BB91C7E2E3192936297243C38DDF1E4724121B").sub as string
        //Recuperar informações do usuário
        request.user_id = validToken
        return nextFunction()
    }
    catch (error) { return response.status(401).end() }
}