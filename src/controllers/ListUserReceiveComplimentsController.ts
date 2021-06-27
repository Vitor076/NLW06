import {Request,Response} from "express"
import { ListUserReceiveComplimentsService } from "../Service/ListUserReceiveComplimentsService"

class ListUserReceiveComplimentsController{
 async handle(request: Request, response:Response){
    const {user_id} = request
    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService
    const complimets = await listUserReceiveComplimentsService.execute(user_id)

    return response.json(complimets)
 }
}

export{ListUserReceiveComplimentsController}