import {Request, Response, NextFunction} from "express"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"

export async function ensureAdmin(request:Request, response:Response,nextFunction:NextFunction) {
    const userRepository = await getCustomRepository(UserRepository)
    const userId = request.user_id
    if (userId) 
    { 
        const user = await userRepository.findOne(userId)
        if (user.admin) return nextFunction()
        else return response.status(401).json("Não autorizado pois não é admin.")
    }

    return response.status(401).json("Não Autorizado.")
}