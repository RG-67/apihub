

const subscribeData = {
    type: "object",
    required: ["apiKey"],
    properties: {
        apiKey: { type: "string" }
    }
}


const createSubscription = {
    body: {
        userId: { type: "string" },
        apiId: { type: "string" },
        status: { type: "string" },
        startDate: { type: "string" },
        endDate: { type: "string" }
    },

    response: {
        200: {
            type: "object",
            properties: {
                status: { type: "boolean" },
                message: { type: "string" },
                data: subscribeData
            }
        },

        400: {
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