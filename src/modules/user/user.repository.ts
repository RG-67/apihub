import { Pool } from 'pg';


export class UserRepository {

    constructor(private db: Pool) { }

    async getUserProfile(id: string) {
        const userData = await this.db.query('SELECT id, name, email, role, provider_status as status FROM users WHERE id=$1', [id]);
        return userData;
    }

    async createProvider(id: string) {
        const updateStatus = await this.db.query(`UPDATE users SET provider_status='pending' WHERE id=$1`, [id]);
        return updateStatus;
    }

    async filterApiByLetter(keyWord: string) {
        const getApi = await this.db.query(`SELECT id as apiId, provider_id as providerId, name, description, base_url as baseUrl, 
            endpoint, method, price, rate_limit as rateLimit FROM apis WHERE (name ILIKE '%$1%' OR description ILIKE '%$1%') AND status=$2 AND is_public=$3`,
            [keyWord, "active", true]);
        return getApi;
    }

}
