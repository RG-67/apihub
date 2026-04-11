import { FastifyInstance } from "fastify";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./auth.services";
import { AuthController } from "./auth.controller";
import { userLoginSchema, userRegisterSchema } from "./auth.schema";




export default async function authRoutes(app: any) {

    const repo = new AuthRepository(app.db);
    const service = new AuthService(repo);
    const controller = new AuthController(service);

    app.post('/register', { schema: userRegisterSchema }, controller.create)
        .post('/login', { schema: userLoginSchema }, controller.login);


}