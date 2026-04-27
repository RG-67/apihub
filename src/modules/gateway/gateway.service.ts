import { GatewayRepository } from "./gateway.repository";
import { apiKeyReqType } from "./gateway.types";




export class GatewayService {

    constructor(private gatewayRepo: GatewayRepository) { }


    async getApiKey(apiKeyreq: apiKeyReqType) {
        try {
            const verify = await this.gatewayRepo.verifyApi(apiKeyreq);
            if (Number(verify.rowCount) > 0) {
                const getKey = await this.gatewayRepo.getApiKey(apiKeyreq);
                if (Number(getKey.rowCount) > 0) {
                    const url = await this.gatewayRepo.getUrl(apiKeyreq.apiId);
                    if (Number(url.rowCount) > 0) {
                        return url.rows[0];
                    }
                    return false;
                }
                return false;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

}