

const providerApi = {
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