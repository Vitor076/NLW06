import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import { classToPlain } from "class-transformer"

class ListUserService {
    async execute() {
        const userReoisitories = getCustomRepository(UserRepositories)
        const users = await userReoisitories.find()

        return classToPlain(users)
    }
}

export { ListUserService }