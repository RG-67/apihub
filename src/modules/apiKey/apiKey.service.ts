import { ApiKeyRepository } from "./apiKey.repository";



export class ApiKeyService {

    constructor(private repo: ApiKeyRepository) { }


    async insertApiKey(userId: string, apiId: string, apiKey: string) {
        try {
            const data = await this.repo.generateApiKey(userId, apiId, apiKey);
            if (Number(data.rowCount) > 0) {
                return true;
            }
            return "User already has key";
        } catch (error: any) {
            return error.message;
        }
    }


}