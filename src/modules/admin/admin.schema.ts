

const usersWithRole = {
    type: "array",
    required: ["id", "name", "email", "role", "status"],
    properties: {
        id: { type: "string" },
        name: { type: "string" },
        email: { type: "string" },
        role: { type: "string" },
        status: { type: "string" }
    }
}


const updateStatusResponse = {
    status: { type: "boolean" },
    message: { type: "string" }
}


const usersSchema = {
    response: {
        200: {
            type: "object",
            properties: {
                status: { type: "boolean" },
                message: { type: "string" },
                data: usersWithRole
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


const updateStatusSchema = {
    body: {
        type: "object",
        required: ["id", "role", "status"],
        properties: {
            id: { type: "string" },
            role: { type: "string" },
            status: { type: "string" }
        }
    },

    response: {
        200: {
            type: "object",
            properties: updateStatusResponse
        },
        404: {
            type: "object",
            properties: updateStatusResponse
        },
        500: {
            type: "object",
            properties: updateStatusResponse
        }
    }
}



export { usersSchema, updateStatusSchema };