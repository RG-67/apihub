import { FastifyReply, FastifyRequest } from "fastify";
import { GatewayService } from "./gateway.service";




export class GatewayController {

    constructor(private gatewayService: GatewayService) { }


    getApiKey = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const apiKey = await this.gatewayService.getApiKey(req.query as any);
            if (apiKey) {
                return res.code(200).send({ status: true, message: "Api key found successfully", data: apiKey });
            }
            return res.code(404).send({ status: false, message: "Invalid userId or apiId" });
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }


}