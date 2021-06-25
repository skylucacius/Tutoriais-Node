import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";

export class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const userRepository = await getCustomRepository(UserRepository)
        const user = await userRepository.findOne(user_id)
        if (!user) throw new Error("Usuário não encontrado!")
        const complimentRepository = await getCustomRepository(ComplimentRepository)
        const compliments = complimentRepository.find( {where: {user_receiver:user_id}, relations:["user_sender", "user_receiver", "tag_id"]})
        return compliments
    }
}