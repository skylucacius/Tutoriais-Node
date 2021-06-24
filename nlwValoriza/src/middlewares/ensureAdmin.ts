import {Request, Response, NextFunction} from "express"

export function ensureAdmin(request:Request, response:Response,nextFunction:NextFunction) {
    const admin = true
    
    if (admin) return nextFunction //verificar a diferença entre nextFunction() e nextFunction.

    return response.status(401).json("Não autorizado.")
}