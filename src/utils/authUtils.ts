import bcrypt from 'bcrypt';

// 비밀번호 해싱 함수
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10; // Salt 라운드 수, 복잡성을 결정
  return bcrypt.hash(password, saltRounds);
};

// 해시된 비밀번호와 사용자가 입력한 비밀번호를 비교하는 함수
export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};