import { AuthRepository } from "./auth.repository";
import { createUserType } from "./auth.types";


export class AuthService {
    constructor(private repo: AuthRepository) { }

    createUser(data: createUserType) {
        return this.repo.create(data);
    }
}