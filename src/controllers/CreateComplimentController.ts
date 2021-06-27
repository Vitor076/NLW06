import { Request, Response } from "express"
import { CreateComplimentService } from "../Service/ComplimentsService"

class CreateComplimentController {

    async handle(request: Request, response: Response) {
        const { tags_id,user_receiver, message } = request.body
        const {user_id} = request
        const createComplimentService = new CreateComplimentService()

        const compliment = await createComplimentService.execute({ tags_id, user_sender:user_id, user_receiver, message })
        

        return response.json(compliment)
    }

}

export { CreateComplimentController }