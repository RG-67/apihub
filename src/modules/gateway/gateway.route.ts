import { FastifyInstance } from "fastify";
import { GatewayRepository } from "./gateway.repository";
import { GatewayService } from "./gateway.service";
import { GatewayController } from "./gateway.controller";
import { getRateLimitSchema, getUrlByApiKeySchema } from "./gateway.schema";
import { AuthHook } from "../../middlewares/auth.hook";



export function gatewayRoute(app: any) {

    const gatewayRepo = new GatewayRepository(app.db);
    const gatewayService = new GatewayService(gatewayRepo);
    const gatewayController = new GatewayController(gatewayService);

    app.post('/apiKey', { preHandler: [AuthHook], schema: getUrlByApiKeySchema }, gatewayController.getApiKey);
    app.post('/rateLimit', { schema: getRateLimitSchema }, gatewayController.getRateLimit);

}