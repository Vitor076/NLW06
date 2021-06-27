import { ListUserService } from "../Service/ListUserService"
import { Request, Response } from "express"

class ListUserController {

    async handle(request: Request, response: Response) {
        const listUserService = new ListUserService()
        const tags = await listUserService.execute()
        return response.json(tags)
    }

}

export { ListUserController }