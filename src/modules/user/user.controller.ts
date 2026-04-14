import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "./user.sevices";




export class UserController {

    constructor(private service: UserService) { }

    getUserProfile = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const userData = await this.service.userProfileService(req.query as any);
            if (userData) {
                return res.code(200).send({ status: true, message: "User data get successfully", data: userData });
            }
            return res.code(404).send({ status: false, message: "User not found" });
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }

    userStatus = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const status = await this.service.userStatus(req.query as any);
            if (status) {
                return res.code(200).send({ status: true, message: "Applied successfully, wait for admin approval" });
            }
            return res.code(404).send({ status: false, message: "Failed to apply" });
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }


}