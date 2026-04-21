import { randomBytes } from "node:crypto";
import { SubscriptionRepository } from "./subscription.repository";
import { subscriptionType } from "./subscription.types";



export class SubscriptionService {

    constructor(private subscriptionRepo: SubscriptionRepository) { }


    async createSubscription(apiReq: subscriptionType): Promise<string | object> {
        try {
            const data = await this.subscriptionRepo.userSubscribe(apiReq);
            if (Number(data.rowCount) > 0) {
                const apiKey = randomBytes(32).toString("hex");
                /* const keyDetails = await this.repo.generateApiKey(apiReq.userId, apiReq.apiId, apiKey);
                if (Number(keyDetails.rowCount) > 0) {
                    return keyDetails.rows[0];
                } */
                return "key already generated";
            }
            return "already subscribed";
        } catch (error: any) {
            return error.message;
        }
    }


}