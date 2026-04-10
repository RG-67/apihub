import { Pool } from "pg";
import { createUserType } from "./auth.types";
import { getHash } from "../../utils/constants";


export class AuthRepository {
    constructor(private db: Pool) { }

    async create(data: createUserType) {
        const password = getHash(data.password);
        const result = await this.db.query('INSERT INTO users(name, email, role, password) values($1, $2, $3, $4) RETURNING *',
            [data.name, data.email, "user", password]);
        return result.rows[0];
    }

}