import { FastifyReply, FastifyRequest } from "fastify";
import { SubscriptionService } from "./subscription.service";





export class SubscriptionController {

    constructor(private subsService: SubscriptionService) { }


    createSubscription = async (req: FastifyRequest, res: FastifyReply) => {
        try {
            const data = await this.subsService.createSubscription(req.body as any);
            if (data) {
                return res.code(201).send({ status: true, message: "Subscription successfully completed", data: data });
            }
            return res.code(409).send({ status: false, message: "Already subscribed" });
        } catch (error: any) {
            return res.code(500).send({ status: false, message: error.message });
        }
    }


}