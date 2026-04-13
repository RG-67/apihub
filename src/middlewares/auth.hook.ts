import { FastifyReply, FastifyRequest } from "fastify";
import dotEnv from 'dotenv';
import jwt from 'jsonwebtoken';

dotEnv.config();

export const AuthHook = async (req: FastifyRequest, res: FastifyReply, next: any) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.code(401).send({ status: false, message: "No token provided" });
        }
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token as string, process.env.JWT_SECRET_KEY as string);
        console.log("Decoded: ", decoded);
        if (decoded) {
            
        }
    } catch (error) {

    }
}