import { Request, Response} from "express"
import { ListUserReceiveComplimentsService } from "../service/ListUserReceiveComplimentsService";

export class ListUserReceiveController {
    async handle(request: Request, response: Response) {
        const {user_id} = request.body
        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();
        const compliments = await listUserReceiveComplimentsService.execute(user_id)
        return response.json(compliments)
    }
}