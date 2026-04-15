import { AdminRepository } from "./admin.repository";
import { userStatusType } from "./admin.types";



export class AdminService {

    constructor(private repo: AdminRepository) { }

    async getUsers() {
        try {
            const users = await this.repo.getUsers();
            if (Number(users.rowCount) > 0) {
                return users.rows;
            }
            return false;
        } catch (error: any) {
            return false;
        }
    }

    async updateStatus(userStatusReq: userStatusType) {
        try {
            const userStatus = await this.repo.createProvider(userStatusReq);
            if (Number(userStatus.rowCount) > 0) {
                return true;
            }
            return false;
        } catch (error: any) {
            return false;
        }
    }

}