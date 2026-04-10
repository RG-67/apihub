import bCrypt from 'bcrypt';


export const getHash = async (password: string) => {
    const hash = await bCrypt.hash(password, 10);
    return hash;
}