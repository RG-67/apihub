import { compareHash } from "../../utils/constants";
import { AuthRepository } from "./auth.repository";
import { createUserType, loginUserType } from "./auth.types";
import jwt from "jsonwebtoken";
import dotEnv from 'dotenv';


dotEnv.config();


export class AuthService {
    constructor(private repo: AuthRepository) { }

    async createUser(data: createUserType) {
        const user = await this.repo.create(data);
        return user;
    }

    async loginUser(data: loginUserType): Promise<any> {
        const user = await this.repo.login(data);
        if (Number(user.rowCount) > 0) {
            const isMatch = compareHash(data.password, user.rows[0].password);
            if (isMatch) {
                const userRow = user.rows[0];
                const userData = {
                    "id": userRow.id,
                    "role": userRow.role
                }
                const token = jwt.sign({
                    data: userData
                }, process.env.JWT_SECRET_KEY as string, { expiresIn: '5m' });
                const { id, name, email, role } = user.rows[0];
                return { id, name, email, role, token };
            }
            return false;
        }
        return false;
    }

}