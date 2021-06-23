// import { UsersRepository } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepositories";


interface IUserRequest {
    name: string,
    email: string,
    admin?: boolean
}

class CreateUserService {
    async execute({name, email, admin} : IUserRequest){
    const usersRepository = getCustomRepository(UsersRepository) 
    // UnhandledPromiseRejectionWarning: EntityMetadataNotFound: No metadata for "User" was found.

    if (!email) {
        throw new Error("Email inválido")
    }

    // return {"teste": "teste"}

    const userAlreadyExists = await usersRepository.findOne({email}); // usersRepository aparentemente está vindo null
    if (userAlreadyExists) {throw new Error("Usuário já existe!")};


    const user = usersRepository.create({name,email,admin});
    await usersRepository.save(user)
    return user
    }
}

export { CreateUserService }