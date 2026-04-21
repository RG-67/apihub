import { Pool } from "pg";
import { subscriptionType } from "./subscription.types";



export class SubscriptionRepository {
    constructor(private db: Pool) { }

    async userSubscribe(subsReq: subscriptionType) {
        const insertData = await this.db.query(`
            INSERT INTO subscriptions (user_id, api_id, status, start_date, end_date) VALUES
            ($1, $2, $3, $4, $5) RETURNING id as "subscriptionId"
            `, [subsReq.userId, subsReq.apiId, subsReq.status, subsReq.startDate, subsReq.endDate]);
        return insertData;
    }

}