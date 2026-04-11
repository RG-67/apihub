import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "./auth.services";


export class AuthController {
    constructor(private service: AuthService) { }

    create = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const user = await this.service.createUser(req.body as any);
            res.code(201).send({ status: true, message: "User registered successfully", data: user });
        } catch (error: any) {
            res.code(500).send({ status: false, message: error.message });
        }
    }

    login = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const user = await this.service.loginUser(req.body as any);
            if (user) {
                return res.code(200).send({ status: true, message: "Login successfully", data: user });
            }
            return res.code(401).send({ status: false, message: "Unauthorized user" });
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }

}