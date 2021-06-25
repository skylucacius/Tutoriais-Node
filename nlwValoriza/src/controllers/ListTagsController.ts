import { Request, Response} from "express"
import { ListTagsService } from "../service/ListTagsService";

export class ListUserTagsController {
    async handle(request: Request, response: Response) {
        const listTagsService = new ListTagsService();
        let tags = await listTagsService.execute()
        // tags.map((tag) => ({...tag, customName: `#${tag.name}`}))
        
        return response.json(tags)
    }
}