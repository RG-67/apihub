import { Pool } from "pg";
import { apiKeyReqType } from "./gateway.types";



export class GatewayRepository {

    constructor(private db: Pool) { }

    async verifyApi(apiKeyreq: apiKeyReqType) {
        const verify = await this.db.query(`SELECT status FROM subscriptions WHERE user_id=$1 AND api_id=$2 AND status=$3`, [apiKeyreq.id, apiKeyreq.apiId, "active"]);
        return verify;
    }

    async getApiKey(apiKeyreq: apiKeyReqType) {
        const apiKey = await this.db.query(`SELECT api_key as "apiKey" FROM api_keys WHERE user_id=$1 AND api_id=$2`, [apiKeyreq.id, apiKeyreq.apiId]);
        return apiKey;
    }

    async getUrl(apiId: string) {
        const url = await this.db.query(`SELECT base_url || endpoint as url FROM apis WHERE id=$1`, [apiId]);
        return url;
    }

}