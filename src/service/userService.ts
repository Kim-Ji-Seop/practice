import { hashPassword } from '../utils/authUtils';  // 비밀번호 해싱 함수
import { createUser } from '../model/userModel';

export const registerUser = async (uid: string, password: string, name: string) => {
    const hashedPassword = await hashPassword(password);
    return createUser(uid, hashedPassword, name);
};