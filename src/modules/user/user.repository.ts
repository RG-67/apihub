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

}
