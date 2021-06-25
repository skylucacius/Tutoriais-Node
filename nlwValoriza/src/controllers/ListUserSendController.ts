import { Request, Response} from "express"
import { ListUserReceiveComplimentsService } from "../service/ListUserReceiveComplimentsService";
import { ListUserSendComplimentsService } from "../service/ListUserSendComplimentsService";

export class ListUserSendController {
    async handle(request: Request, response: Response) {
        const {user_id} = request.body
        const listUserSendComplimentsService = new ListUserSendComplimentsService();
        const compliments = await listUserSendComplimentsService.execute(user_id)
        return response.json(compliments)
    }
}