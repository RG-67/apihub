import { FastifyInstance } from "fastify";
import { GatewayRepository } from "./gateway.repository";
import { GatewayService } from "./gateway.service";
import { GatewayController } from "./gateway.controller";
import { getUrlByApiKeySchema } from "./gateway.schema";



export function GatewayRoute(app: any) {

    const gatewayRepo = new GatewayRepository(app.db);
    const gatewayService = new GatewayService(gatewayRepo);
    const gatewayController = new GatewayController(gatewayService);

    app.post('apiKey/', { schema: getUrlByApiKeySchema }, gatewayController.getApiKey);

}