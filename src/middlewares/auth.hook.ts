import { FastifyReply, FastifyRequest } from "fastify";


export const AuthHook = async (req: FastifyRequest, res: FastifyReply, next: any) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
    } catch (error) {

    }
}