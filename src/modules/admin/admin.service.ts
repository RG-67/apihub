import { AdminRepository } from "./admin.repository";



export class AdminService {

    constructor(private repo: AdminRepository) { }

    async getUsers() {
        try {
            const users = await this.repo.getUsers();
            if (Number(users.rowCount) > 0) {
                console.log("USERS: ", users.rows);
                return users.rows;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

}