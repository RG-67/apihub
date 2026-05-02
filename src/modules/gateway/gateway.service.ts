import { redis } from "../../config/redis";
import { GatewayRepository } from "./gateway.repository";
import { apiKeyReqType } from "./gateway.types";




export class GatewayService {

    constructor(private gatewayRepo: GatewayRepository) { }

    async getApiKey(apiKeyreq: apiKeyReqType): Promise<{ status: boolean; message?: string; data?: any; error?: string }> {
        try {
            const verify = await this.gatewayRepo.verifyApi(apiKeyreq);
            if (Number(verify.rowCount) > 0) {
                const getKey = await this.gatewayRepo.getApiKey(apiKeyreq);
                if (Number(getKey.rowCount) > 0) {
                    const url = await this.gatewayRepo.getUrl(apiKeyreq.apiId);
                    if (Number(url.rowCount) > 0) {
                        const result = {
                            apiKey: getKey.rows[0].apiKey,
                            url: url.rows[0].url
                        }
                        return { status: true, message: "Api key found successfully", data: result };
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


    async getRateLimit(apiKey: string, url: string): Promise<{ status: boolean; message?: string; data?: any; error?: string }> {
        try {
            const apiId = await this.gatewayRepo.getApiId(apiKey);
            if (Number(apiId.rowCount) === 0) {
                return { status: false, message: "Invalid api id" };
            }

            const apiReqForLimit = {
                apiId: apiId.rows[0].apiId,
                url: url
            }
            const rateLimit = await this.gatewayRepo.getRateLimit(apiReqForLimit);
            if (Number(rateLimit.rowCount) === 0) {
                return { status: false, message: "Invalid URL" };
            }
            const limit = rateLimit.rows[0].rateLimit;
            const window = 60;
            const key = `rate:${apiKey}:${url}`;
            const current = await redis.incr(key);

            if (Number(current) === 1) {
                await redis.expire(key, window);
            }

            if (current > limit) {
                return { status: false, message: `Rate limit exceed, Max ${limit} requests per minute`, error: "RATE_LIMIT_EXCEED" };
            }

            return { status: true, message: "Data fetch successfully", data: rateLimit.rows[0] };

        } catch (error: any) {
            return { status: false, message: error.message };
        }
    }




}