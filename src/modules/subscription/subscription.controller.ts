import { FastifyReply, FastifyRequest } from "fastify";
import { SubscriptionService } from "./subscription.service";





export class SubscriptionController {

    constructor(private subsService: SubscriptionService) { }


    createSubscription = async(req: FastifyRequest, res: FastifyReply) => {
        try {
            // const data = await this.subsService.createSubscription()
        } catch (error: any) {
            
        }
    }


}