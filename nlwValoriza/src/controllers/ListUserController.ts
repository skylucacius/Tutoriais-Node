import { Request, Response} from "express"
import { ListUserService } from "../service/ListUserService";


export class ListUserController {
    async handle(request: Request, response: Response) {
        const listUserService = new ListUserService();
        let users = await listUserService.execute()
        
        return response.json(users)
    }
}