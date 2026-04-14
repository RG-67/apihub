import { FastifyReply, FastifyRequest } from "fastify";
import dotEnv from 'dotenv';
import jwt from 'jsonwebtoken';

dotEnv.config();

export const AuthHook = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.code(401).send({ status: false, message: "Token not provided" });
        }
        const token = req.headers.authorization?.split(" ")[1];
        const decoded: any = jwt.verify(token as string, process.env.JWT_SECRET_KEY as string);
        if (decoded.data.role !== "user" && decoded.data.role !== "admin") {
            return res.code(401).send({ status: false, message: "Unauthorized access" });
        }
        req.query = decoded.data.id;
    } catch (error: any) {
        return res.code(401).send({ status: false, message: "Token expired" });
    }
}