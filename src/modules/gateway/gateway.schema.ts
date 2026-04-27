




const getUrlByApiKeySchema = {
    queryString: {
        type: "object",
        properties: {
            id: { type: "string" },
            apiId: { type: "string" }
        }
    },

    response: {

        200: {
            type: "object",
            properties: {
                status: { type: "boolean" },
                message: { type: "string" },
                data: {
                    type: "object",
                    properties: {
                        url: { type: "string" }
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


export { getUrlByApiKeySchema };