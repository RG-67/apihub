import { FastifyInstance } from "fastify";
import { SubscriptionRepository } from "./subscription.repository";
import { SubscriptionService } from "./subscription.service";
import { ApiKeyRepository } from "../apiKey/apiKey.repository";
import { ApiKeyService } from "../apiKey/apiKey.service";
import { SubscriptionController } from "./subscription.controller";
import { createSubscription } from "./subscription.schema";



export default function subscriptionRoute(app: any) {

    const subRepo = new SubscriptionRepository(app.db);
    const apiKeyRepo = new ApiKeyRepository(app.db);
    const apiKeyService = new ApiKeyService(apiKeyRepo);
    const subService = new SubscriptionService(subRepo, apiKeyService);
    const subController = new SubscriptionController(subService);

    app.post('/createSubscription', { schema: createSubscription }, subController.createSubscription);

}