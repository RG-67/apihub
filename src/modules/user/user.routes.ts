import { FastifyInstance } from "fastify";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.sevices";
import { UserController } from "./user.controller";
import { filteredApiSchema, userProfile } from "./user.schema";
import { AuthHook } from "../../middlewares/auth.hook";



export default async function UserRoute(app: any) {
    const userRepo = new UserRepository(app.db);
    const userService = new UserService(userRepo);
    const userController = new UserController(userService);

    app.post('/profile', { preHandler: [AuthHook], schema: userProfile }, userController.getUserProfile)
        .post('/provider', { preHandler: [AuthHook] }, userController.applyForProvider);
    app.get('filteredApi/', { schema: filteredApiSchema }, userController.filteredApi);

}