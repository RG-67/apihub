import { FastifyReply, FastifyRequest } from "fastify";
import { GatewayService } from "./gateway.service";




export class GatewayController {

    constructor(private gatewayService: GatewayService) { }


    getApiKey = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const url = await this.gatewayService.getApiKey(req.query as any);
            if (url.status) {
                return res.code(200).send(url);
            }
            return res.code(404).send(url);
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }


    getRateLimit = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const { apiKey } = req.query as any;
            const { url } = req.body as any;
            const limit = await this.gatewayService.getRateLimit(apiKey, url);
            if (limit.status) {
                return res.code(200).send(limit);
            }
            return res.code(404).send(limit);
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }


}