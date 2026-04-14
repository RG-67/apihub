import { FastifyInstance } from "fastify";
import { users } from "./admin.schema";
import { AdminRepository } from "./admin.repository";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";


export default function AdminRoute(app: any) {
    const adminRepo = new AdminRepository(app.db);
    const adminService = new AdminService(adminRepo);
    const adminController = new AdminController(adminService);

    app.patch('/users', { schema: users }, adminController.getUsers);

}