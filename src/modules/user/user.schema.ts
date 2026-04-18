const user = {
    type: "object",
    required: ["id", "name", "email", "role", "status"],
    properties: {
        id: { type: "string" },
        name: { type: "string" },
        email: {
            type: "string",
            format: "email"
        },
        role: { type: "string" },
        status: { type: "string" }
    }
}

const providerApiDetails = {
    type: "array",
    properties: {
        "apiId": { type: "string" },
        "providerId": { type: "string" },
        "name": { type: "string" },
        "description": { type: "string" },
        "baseUrl": { type: "string" },
        "endpoint": { type: "string" },
        "method": { type: "string" },
        "price": { type: "string" },
        "rateLimit": { type: "string" }
    }
}


const userProfile = {
    queryString: {
        type: "object",
        properties: {
            id: { type: "string" }
        }
    },

    200: {
        type: "object",
        properties: {
            status: { type: "boolean" },
            message: { type: "string" },
            data: user
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


const filteredApiSchema = {
    queryString: {
        type: "object",
        properties: {
            keyWord: { type: "string" }
        }
    },

    response: {

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

}



export { userProfile, filteredApiSchema };