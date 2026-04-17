import { Pool } from "pg";
import { providerApiType, updateApiType } from "./api.types";




export class ApiRepository {

    constructor(private db: Pool) { }

    async createApi(apiReq: providerApiType) {
        const api = await this.db.query(`
                INSERT INTO apis (provider_id, name, description, base_url, endpoint, method, price, rate_limit, status, is_public)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [apiReq.providerId, apiReq.name, apiReq.description, apiReq.baseUrl, apiReq.endPoint, apiReq.method.toUpperCase(),
            apiReq.price, apiReq.rateLimit, "inactive", false
            ]);
        return api;
    }


    async updateApi(apiReq: updateApiType) {
        const api = await this.db.query('UPDATE apis SET status=$1, is_public=$2 updated_at=CURRENT_TIMESTAMP WHERE id=$3 AND provider_id=$4',
            [apiReq.status, apiReq.isPublic, apiReq.apiId, apiReq.providerId]
        );
        return api;
    }

}