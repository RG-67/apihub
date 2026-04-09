import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "./auth.services";


export class AuthController {
    constructor(private service: AuthService) { }
    create = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const user = this.service.createUser(req.body as any);
            res.code(201).send({ status: true, message: "User registered successfully", data: user });
        } catch (error: any) {
            res.code(500).send({ status: false, message: error.message });
        }
    }
}