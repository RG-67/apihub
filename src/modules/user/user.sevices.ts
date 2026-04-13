import { UserRepository } from "./user.repository";



export class UserService {

    constructor(private repo: UserRepository) { }

    async userProfileService(id: string) {
        try {
            console.log("ID: ", id);
            const profileData = await this.repo.getUserProfile(id);
            if (Number(profileData.rowCount) > 0) {
                return profileData.rows[0];
            }
            return false;
        } catch (error) {
            return false;
        }
    }

}