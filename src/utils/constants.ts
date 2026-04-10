import bCrypt from "bcrypt";

export const getHash = (password: string) => {
    const hashPass = bCrypt.hash(password, 10);
    return hashPass;
}
