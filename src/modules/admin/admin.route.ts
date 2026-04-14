import { FastifyInstance } from "fastify";
import { updateStatusSchema, usersSchema } from "./admin.schema";
import { AdminRepository } from "./admin.repository";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";


export default function AdminRoute(app: any) {
    const adminRepo = new AdminRepository(app.db);
    const adminService = new AdminService(adminRepo);
    const adminController = new AdminController(adminService);

    app.patch('/users', { schema: usersSchema }, adminController.getUsers).post('/updateStatus', { schema: updateStatusSchema }, adminController.updateStatus);

}