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


const userProfile = {
    querystring: {
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



export { userProfile };