import { FastifyReply, FastifyRequest } from "fastify";
import { ApiService } from "./api.service";



export class ApiController {

    constructor(private service: ApiService) { }

    createApi = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const apiData = await this.service.createApi(req.body as any);
            if (apiData) {
                return res.code(201).send({ status: true, message: "Api created successfully", data: apiData });
            }
            return res.code(404).send({ status: false, message: "Api creation failed" });
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message })
        }
    }

    updateApi = async(req: FastifyRequest, res: FastifyReply) => {
        try {
            // const apiData = await this.service.updateApi()
        } catch (error) {
            
        }
    }

}