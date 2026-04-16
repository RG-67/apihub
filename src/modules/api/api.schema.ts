

export const providerApi = {
    type: "object",
    required: ["providerId", "name", "description", "baseUrl", "endPoint", "method", "price", "rateLimit"],
    properties: {
        providerId: { type: "string" },
        name: { type: "string" },
        description: { type: "string" },
        baseUrl: { type: "string" },
        endPoint: { type: "string" },
        method: { type: "string" },
        price: { type: "string" },
        rateLimit: { type: "string" }
    }
}



const createApiSchema = {

    body: providerApi,

    response: {
        200: {
            type: "object",
            properties: {
                status: { type: "boolean" },
                message: { type: "string" },
                data: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                        name: { type: "string" },
                        status: { type: "string" },
                        price: { type: "string" },
                        rateLimit: { type: "string" },
                        createdAt: { type: "string" }
                    }
                }
            }
        },

        404: {
            type: "object",
            properties: {
                status: { type: "boolean" },
                message: { type: "string" }
            }
        },

        500: {
            type: "object",
            properties: {
                status: { type: "boolean" },
                message: { type: "string" }
            }
        }

    }

}



export { createApiSchema };