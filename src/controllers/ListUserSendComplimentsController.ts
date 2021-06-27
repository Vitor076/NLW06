import {Request,Response} from "express"
import { ListUserSendComplimentsService } from "../Service/ListUserSendComplomentsService"

class ListUserSendComplimentsController{
 async handle(request: Request, response:Response){
    const {user_id} = request
    const listUserSendComplimentsService = new ListUserSendComplimentsService
    const complimets = await listUserSendComplimentsService.execute(user_id)

    return response.json(complimets)
 }
}

export{ListUserSendComplimentsController}