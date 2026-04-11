const user = {
    type: "object",
    required: ["id", "name", "email", "role"],
    properties: {
        id: { type: "string" },
        name: { type: "string" },
        email: { type: "string" },
        role: { type: "string" }
    }
}

const userRegisterSchema = {
    body: {
        type: "object",
        required: ["name", "email", "password"],
        properties: {
            name: {
                type: "string",
                minLength: 2,
                maxLength: 50
            },
            email: {
                type: "string",
                format: "email"
            },
            password: {
                type: "string",
                minLength: 6
            }
        }
    },
    response: {
        201: {
            type: "object",
            properties: {
                status: { type: "boolean" },
                message: { type: "string" },
                data: user
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


const userLoginSchema = {
    body: {
        type: "object",
        required: ["email", "password"],
        properties: {
            email: {
                type: "string",
                format: "email"
            },
            password: { type: "string" }
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
                        id: {type: "string"},
                        name: {type: "string"},
                        email: {type: "string"},
                        role: {type: "string"}
                    }
                }
            }
        },

        401: {
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



export { userRegisterSchema, userLoginSchema, user };