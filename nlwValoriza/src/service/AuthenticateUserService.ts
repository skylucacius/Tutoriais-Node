import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IAuthenticateRequest {
    email: string,
    password: string
}

export class AuthenticateUserService {
    async execute( {email, password} : IAuthenticateRequest ) {
        const userRepository = getCustomRepository(UserRepository)
        // Verificar se o email existe
        const user = await userRepository.findOne({email:email})
        if (!user) throw new Error("Email/senha incorreto(s)")
        // // Verificar se a senha está correta
        const correctPassword = await compare(password,user.password)
        // const correctPassword = true

        if (!correctPassword) throw new Error("Email/senha incorreto(s)")

        // Gerar o token
        const token = sign(
            {email:email},
            "EEFC92021A30682ECA385A7D91BB91C7E2E3192936297243C38DDF1E4724121B",
            {subject:user.id, expiresIn:"1d"})

            return token
    }
}