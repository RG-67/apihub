import { FastifyInstance } from "fastify";
import { ApiRepository } from "./api.repository";
import { ApiService } from "./api.service";
import { ApiController } from "./api.controller";
import { createApiSchema, providerApiSchema, updateApiSchema } from "./api.schema";




export function apiRoute(app: any) {

    const apiRepo = new ApiRepository(app.db);
    const apiService = new ApiService(apiRepo);
    const apiController = new ApiController(apiService);

    app.post('/createApi', { schema: createApiSchema }, apiController.createApi).post('/updateApi', { schema: updateApiSchema }, apiController.updateApi);
    app.get('/getApi', { schema: providerApiSchema }, apiController.getProviderApi);

}