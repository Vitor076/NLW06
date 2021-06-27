import { Request, Response } from "express"
import { CreateTagsService } from "../Service/CreateTagsService"

class CreateTagController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const createtagsService = new CreateTagsService()

        const tags = await createtagsService.execute(name)

        return response.json(tags)
    }

}

export { CreateTagController }
