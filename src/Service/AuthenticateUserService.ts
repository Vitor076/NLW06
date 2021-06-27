import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UserRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateRequest {
    email: string
    password: string
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositoty = getCustomRepository(UserRepositories)

        const user = await usersRepositoty.findOne({
            email
        })

        if (!user) {
            throw new Error("Seu Email ou Password incorrect")
        }

        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) {
            throw new Error("Seu Email ou Password incorrect")
        }

        const token = sign({
            email: user.email

        }, "62a23c406afdb23f5efc3014f228ccc9", { subject: user.id, expiresIn: "1d" })


        return token
    }

}

export { AuthenticateUserService }
