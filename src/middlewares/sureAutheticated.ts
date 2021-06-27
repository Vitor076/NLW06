import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPatload{
    sub:string;
}

export function SureAuthenticad(request: Request, response: Response, next: NextFunction) {
    // get token
    const auth_Token = request.headers.authorization
    // validation token
    if (!auth_Token) {
        return response.status(401).json({ message: "token missing" })
    }

    const [, token] = auth_Token.split(" ")

    // confirmation token
    try {
        const { sub } = verify(token, "62a23c406afdb23f5efc3014f228ccc9") as IPatload

        request.user_id = sub

        return next()
    } catch (err) {
        return response.status(401).end()



    }
}
