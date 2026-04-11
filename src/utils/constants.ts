import bCrypt from "bcrypt";

export const getHash = (password: string) => {
    const hashPass = bCrypt.hashSync(password, 10);
    return hashPass;
}

export const compareHash = (password: string, hashPass: string) => {
    const isMatch = bCrypt.compareSync(password, hashPass);
    return isMatch;
}
