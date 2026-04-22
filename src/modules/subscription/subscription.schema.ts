

const subscribeData = {
    type: "object",
    required: ["apiKey"],
    properties: {
        apiKey: { type: "string" }
    }
}


const createSubscription = {
    body: {
        type: "object",
        properties: {
            userId: { type: "string" },
            apiId: { type: "string" }
        }
    },

    response: {
        201: {
            type: "object",
            properties: {
                status: { type: "boolean" },
                message: { type: "string" },
                data: subscribeData
            }
        },

        409: {
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


export { createSubscription };