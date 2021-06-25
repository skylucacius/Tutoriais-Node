import { getCustomRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";

interface IComplimentRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

export class CreateComplimentService {
    async execute({tag_id, user_sender, user_receiver, message} : IComplimentRequest) {
        const complimentRepository = getCustomRepository( ComplimentRepository )
        const userRepository = getCustomRepository( UserRepository )

        if (user_sender === user_receiver) throw new Error("Receptor é igual ao emissor!")

        const userReceiverExists = userRepository.findOne({})

        if (!userReceiverExists) throw new Error("Receptor inválido!")

        const compliment = new Compliment();compliment.messsage = message;compliment.tag_id = tag_id; compliment.user_sender = user_sender; compliment.user_receiver = user_receiver
        await complimentRepository.save(compliment)
        return compliment
    }
}