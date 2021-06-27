import { getCustomRepository } from "typeorm"
import { complimentRepositories } from "../repositories/ComplimentsRepositores"

class ListUserReceiveComplimentsService{

    async execute (user_id:string){
    const ComplimentRepositories = getCustomRepository(complimentRepositories)

    const compliment = await ComplimentRepositories.find({
        where:{
            user_receiver: user_id
        },
        relations:["user_Sender","user_Receiver","tags"]
    })

        return compliment
}
}

export{ListUserReceiveComplimentsService}