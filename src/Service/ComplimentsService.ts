import { getCustomRepository } from "typeorm"
import { complimentRepositories } from "../repositories/ComplimentsRepositores"
import { UserRepositories } from "../repositories/UsersRepositories"

interface IComplementsRequest {
    tags_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

class CreateComplimentService {

    async execute({ tags_id, user_sender, user_receiver, message }: IComplementsRequest) {
        const ComplimentRepositories = getCustomRepository(complimentRepositories)
        const usersRepositories = getCustomRepository(UserRepositories)

        if (user_sender == user_receiver) {
            throw new Error("Ai não pode né amigão")
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver)
        if (!userReceiverExists) {
            throw new Error("User Receiver does not exists!")
        }

        const compliment = ComplimentRepositories.create({
            tags_id, user_receiver, user_sender, message
        })

        await ComplimentRepositories.save(compliment)
        return compliment
    }

}

export { CreateComplimentService }