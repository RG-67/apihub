import { FastifyReply, FastifyRequest } from "fastify";
import { AdminService } from "./admin.service";



export class AdminController {

    constructor(private service: AdminService) { }

    async getUsers(req: FastifyRequest, res: FastifyReply) {
        try {
            const users = await this.service.getUsers();
            if (users) {
                return res.code(200).send({ status: true, message: "Users retreived successfully", data: users });
            }
            return res.code(404).send({ status: false, message: "Users not found" });
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }

}