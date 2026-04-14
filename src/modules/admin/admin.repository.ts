import { Pool } from "pg";



export class AdminRepository {

    constructor(private db: Pool) { }

    async getUsers() {
        const users = await this.db.query(`SELECT id, name, email, role, provider_status as status FROM users WHERE role<>'admin'`);
        return users;
    }

}