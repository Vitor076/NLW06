import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs"

interface IUserRequest {
    name: string
    email: string
    admin?: boolean
    password: string

}

class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
        const usersRepositoty = getCustomRepository(UserRepositories)

        if (!email) {
            throw new Error("Email Incorrect")
        }

        const userAlreadyExists = await usersRepositoty.findOne(email)

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const passawordHash = await hash(password, 8)

        const user = usersRepositoty.create({
            name,
            email,
            admin,
            password: passawordHash
        })

        await usersRepositoty.save(user)

        return user

    }
}

export { CreateUserService }