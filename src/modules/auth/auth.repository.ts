import { Pool } from "pg";
import { createUserType } from "./auth.types";


export class AuthRepository {
    constructor(private db: Pool) { }

    async create(data: createUserType) {
        
    }
}