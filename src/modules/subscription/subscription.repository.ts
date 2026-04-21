import { Pool } from "pg";
import { apiKeyType, subscriptionType } from "./subscription.types";



export class Subscription {
    constructor(private db: Pool) { }

    async userSubscribe(subsReq: subscriptionType) {
        const insertData = await this.db.query(`
            INSERT INTO subscriptions (user_id, api_id, status, start_date, end_date) VALUES
            ($1, $2, $3, $4, $5) RETURNING *
            `, [subsReq.userId, subsReq.apiId, subsReq.status, subsReq.startDate, subsReq.endDate]);
        return insertData;
    }

    async generateApiKey(apiKeyReq: apiKeyType) {
        const insertData = await this.db.query(`
            INSERT INTO api_keys (user_id, api_id, api_key) VALUES
            ($1, $2, $3) RETURNING api_key as "apiKey"`, [apiKeyReq.userId, apiKeyReq.apiId, apiKeyReq.apiKey]);
        return insertData;
    }

}