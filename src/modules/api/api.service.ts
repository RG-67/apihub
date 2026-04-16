import { ApiRepository } from "./api.repository";
import { providerApi } from "./api.types";




export class ApiService {

    constructor(private repo: ApiRepository) { }


    async createApi(providerApi: providerApi) {
        try {
            const data = await this.repo.createApi(providerApi);
            if (Number(data.rowCount) > 0) {
                return data.rows[0];
            }
            return false;
        } catch (error) {
            return false;
        }
    }

}