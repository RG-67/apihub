

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


const updateApi = {
    type: "object",
    properties: {
        status: { type: "boolean" },
        message: { type: "string" }
    }
}

const providerApiDetails = {
    type: "array",
    properties: {
        "apId": { type: "string" },
        "providerId": { type: "string" },
        "name": { type: "string" },
        "description": { type: "string" },
        "baseUrl": { type: "string" },
        "endpoint": { type: "string" },
        "method": { type: "string" },
        "price": { type: "string" },
        "rateLimit": { type: "string" },
        "status": { type: "string" },
        "isPublic": { type: "boolean" }
    }
}


const createApiSchema = {

    body: providerApi,

    response: {
        201: {
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


const updateApiSchema = {
    body: {
        type: "object",
        required: ["apiId", "providerId", "status", "isPublic"],
        properties: {
            apiId: { type: "string" },
            providerId: { type: "string" },
            status: { type: "string" },
            isPublic: { type: "boolean" }
        }
    },

    response: {
        200: updateApi,

        404: updateApi,

        500: updateApi
    }
}


const providerApiSchema = {
    queryString: {
        type: "objetc",
        properties: {
            id: { type: "string" }
        }
    },

    200: {
        type: "object",
        properties: {
            status: { type: "boolean" },
            message: { type: "string" },
            data: providerApiDetails
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


export { createApiSchema, updateApiSchema, providerApiSchema };