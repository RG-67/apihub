import { randomBytes } from "node:crypto";
import { SubscriptionRepository } from "./subscription.repository";
import { subscriptionType } from "./subscription.types";
import { ApiKeyService } from "../apiKey/apiKey.service";



export class SubscriptionService {

    constructor(
        private subscriptionRepo: SubscriptionRepository,
        private apiKeyService: ApiKeyService) { }


    async createSubscription(apiReq: subscriptionType) {
        try {
            const data = await this.subscriptionRepo.userSubscribe(apiReq);
            console.error("SUB_DATA: ", data);
            if (Number(data.rowCount) > 0) {
                const insertApiKey = await this.apiKeyService.insertApiKey(apiReq.userId, apiReq.apiId);
                console.error("SUB_KEY: ", insertApiKey);
                if (insertApiKey) {
                    return insertApiKey;
                }
                return false;
            }
            return false;
        } catch (error: any) {
            console.error("SUB_ERR: ", error.message);
            return false
        }
    }


}