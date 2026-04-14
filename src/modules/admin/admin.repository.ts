import { Pool } from "pg";
import { userStatusType } from "./admin.types";



export class AdminRepository {

    constructor(private db: Pool) { }

    async getUsers() {
        const users = await this.db.query(`SELECT id, name, email, role, provider_status as status FROM users WHERE role<>'admin' AND provider_status='pending'`);
        return users;
    }

    async createProvider(userStatus: userStatusType) {
        const updateStatus = await this.db.query(`UPDATE users SET role=$1 AND provider_status=$2 WHERE id=$3`, [userStatus.role, userStatus.status, userStatus.id]);
        return updateStatus;
    }

}