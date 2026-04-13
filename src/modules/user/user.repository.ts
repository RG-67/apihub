import { Pool } from 'pg';


export class UserRepository {

    constructor(private db: Pool) { }

    async getUserProfile(id: string) {
        const userData = await this.db.query('SELECT id, name, email, role, provider_status as status FROM users WHERE id=$1', [id]);
        return userData;
    }

}
