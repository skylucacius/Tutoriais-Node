import { getCustomRepository } from "typeorm";
import { Tag } from "../entities/Tag";
import { TagRepository } from "../repositories/TagRepository";

export class CreateTagService {
    async execute(name: string) {
        const tagRepository = getCustomRepository( TagRepository )

        if (!name) throw new Error("Nome inválido!")
        const tagAlreadyExists = await tagRepository.findOne({name})
        if (tagAlreadyExists) throw new Error("Tag já existe!")

        //não irei usar TagRepository.create() aqui e sim instanciação comum de um objeto tag.
        const tag = new Tag();tag.name = name
        await tagRepository.save(tag)
        return tag
    }
}