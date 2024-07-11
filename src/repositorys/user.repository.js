import { prisma } from '../services/prisma.js';

export const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    });
    return user;
};


