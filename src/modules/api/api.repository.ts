import { Pool } from "pg";
import { providerApi } from "./api.types";




export class ApiRepository {

    constructor(private db: Pool) { }

    async createApi(providerApi: providerApi) {
        const api = await this.db.query(`
                INSERT INTO apis (provider_id, name, description, base_url, endpoint, method, price, rate_limit, status, is_public)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [providerApi.providerId, providerApi.name, providerApi.description, providerApi.baseUrl, providerApi.endPoint, providerApi.method,
            providerApi.price, providerApi.rateLimit, "inactive", false
            ]);
        return api;
    }

}