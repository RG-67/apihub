import { ApiRepository } from "./api.repository";
import { providerApiType, updateApiType } from "./api.types";




export class ApiService {

    constructor(private repo: ApiRepository) { }


    async createApi(apiReq: providerApiType) {
        try {
            const data = await this.repo.createApi(apiReq);
            if (Number(data.rowCount) > 0) {
                return data.rows[0];
            }
            return false;
        } catch (error: any) {
            return false;
        }
    }

    async updateApi(apiReq: updateApiType) {
        try {
            const api = await this.repo.updateApi(apiReq);
            if (Number(api.rowCount) > 0) {
                return true;
            }
            return false;
        } catch (error: any) {
            return false;
        }
    }

}