import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "./user.sevices";


export class UserController {

    constructor(private service: UserService) { }

    getUserProfile = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const { id } = req.query as any;
            const userData = await this.service.userProfileService(id);
            if (userData) {
                return res.code(200).send({ status: true, message: "User data get successfully", data: userData });
            }
            return res.code(404).send({ status: false, message: "User not found" });
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }

    applyForProvider = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const { id } = req.query as any;
            const status = await this.service.userStatus(id);
            if (status) {
                return res.code(200).send({ status: true, message: "Applied successfully, wait for admin approval" }); 
            }
            return res.code(404).send({ status: false, message: "Failed to apply" });
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }


    filteredApi = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const { keyWord } = req.query as any;
            const apiData = await this.service.getFilteredApi(keyWord);
            if (apiData) {
                return res.code(200).send({ status: true, message: "Apis found successfullly", data: apiData });
            }
            return res.code(404).send({ status: false, message: "Apis not found" });
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }


}