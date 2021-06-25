import { Request, Response} from "express"
import { CreateUserService } from "../service/CreateUserService"
class CreateUserController {
    async handle(request: Request, response: Response) {
        const {password, name, email, admin} = request.body
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name,password,email,admin})
        return response.json(user)
    }
}
export { CreateUserController }