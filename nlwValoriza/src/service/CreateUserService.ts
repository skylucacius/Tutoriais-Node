import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";


interface IUserRequest {
    name: string,
    email: string,
    password: string,
    admin?: boolean
}

class CreateUserService {
    async execute({name, email,password,admin=false} : IUserRequest){
    const usersRepository = getCustomRepository(UserRepository) 

    if (!email) {
        throw new Error("Email inválido")
    }

    const userAlreadyExists = await usersRepository.findOne({email});
    if (userAlreadyExists) {throw new Error("Usuário já existe!")};

    const passwordHashed = await hash(password, 8)

    const user = new User()
    user.name = name; user.password = passwordHashed; user.admin = admin; user.email = email 
    await usersRepository.save(user)
    return user
    }
}

export { CreateUserService }