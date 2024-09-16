import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (uid: string, password: string, name: string) => {
    return await prisma.user.create({
        data: {
            uid,
            password,
            name
        }
    });
};