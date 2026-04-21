import { Pool } from "pg";



export class ApiKeyRepository {

    constructor(private db: Pool) { }

    async generateApiKey(userId: string, apiId: string, apiKey: string) {
        const insertData = await this.db.query(`
            INSERT INTO api_keys (user_id, api_id, api_key) VALUES
            ($1, $2, $3) RETURNING api_key as "apiKey"`, [userId, apiId, apiKey]);
        return insertData;
    }

}