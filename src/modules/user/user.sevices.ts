import { UserRepository } from "./user.repository";



export class UserService {

    constructor(private repo: UserRepository) { }

    async userProfileService(id: string) {
        try {
            const profileData = await this.repo.getUserProfile(id);
            if (Number(profileData.rowCount) > 0) {
                return profileData.rows[0];
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async userStatus(id: string) {
        try {
            const status = await this.repo.createProvider(id);
            if (Number(status.rowCount) > 0) {
                return true;
            }
            return false;
        } catch (error: any) {
            return false;
        }
    }

    async getFilteredApi(keyWord: string) {
        try {
            console.log("KKKKKK: ", keyWord);
            const apiData = await this.repo.filterApiByLetter(keyWord);
            if (Number(apiData.rowCount) > 0 && apiData.rows.length > 0) {
                return apiData.rows;
            }
            return false;
        } catch (error) {
            false;
        }
    }

}