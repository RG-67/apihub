import { GatewayRepository } from "./gateway.repository";
import { apiKeyReqType } from "./gateway.types";




export class GatewayService {

    constructor(private gatewayRepo: GatewayRepository) { }

    async getApiKey(apiKeyreq: apiKeyReqType) {
        try {
            const verify = await this.gatewayRepo.verifyApi(apiKeyreq);
            console.log("VERIFY: ", verify);
            if (Number(verify.rowCount) > 0) {
                const getKey = await this.gatewayRepo.getApiKey(apiKeyreq);
                console.log("KEY: ", getKey);
                if (Number(getKey.rowCount) > 0) {
                    const url = await this.gatewayRepo.getUrl(apiKeyreq.apiId);
                    console.log("URL: ", url);
                    if (Number(url.rowCount) > 0) {
                        return url.rows[0];
                    }
                    return false;
                }
                return false;
            }
            return false;
        } catch (error: any) {
            console.log("ERR_MSG: ", error.message);
            return false;
        }
    }


    
}