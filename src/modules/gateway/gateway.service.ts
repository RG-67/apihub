import { GatewayRepository } from "./gateway.repository";
import { apiKeyReqType } from "./gateway.types";




export class GatewayService {

    constructor(private gatewayRepo: GatewayRepository) { }

    async getApiKey(apiKeyreq: apiKeyReqType): Promise<{ status: boolean; message?: string; data?: string; error?: string }> {
        try {
            const verify = await this.gatewayRepo.verifyApi(apiKeyreq);
            if (Number(verify.rowCount) > 0) {
                const getKey = await this.gatewayRepo.getApiKey(apiKeyreq);
                if (Number(getKey.rowCount) > 0) {
                    const url = await this.gatewayRepo.getUrl(apiKeyreq.apiId);
                    if (Number(url.rowCount) > 0) {
                        return { status: true, message: "Api key found successfully", data: url.rows[0] as string };
                    }
                    return { status: false, message: "url not found" };
                }
                return { status: false, message: "api key not found" };
            }
            return { status: false, message: "Invalid user id or api id" };
        } catch (error: any) {
            return { status: false, message: error.message };
        }
    }



}