import { FastifyReply, FastifyRequest } from "fastify";
import { GatewayService } from "./gateway.service";
import { error } from "node:console";




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
            if (limit.error === "RATE_LIMIT_EXCEED") {
                return res.code(429).send({
                    status: limit.status,
                    message: limit.message
                });
            }
            return res.code(404).send(limit);
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }


}