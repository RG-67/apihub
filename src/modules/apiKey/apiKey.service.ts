import { randomBytes } from "node:crypto";
import { ApiKeyRepository } from "./apiKey.repository";



export class ApiKeyService {

    constructor(private repo: ApiKeyRepository) { }


    async insertApiKey(userId: string, apiId: string) {
        try {
            const apiKey = randomBytes(32).toString("hex");
            const data = await this.repo.generateApiKey(userId, apiId, apiKey);
            if (Number(data.rowCount) > 0) {
                return data.rows[0];
            }
            return false;
        } catch (error) {
            return false
        }
    }


}