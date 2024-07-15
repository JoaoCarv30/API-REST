import { prisma } from '../services/prisma.js';

export const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    });
    return user;
};

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const deleteUser = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
};

export const uptadeUser = async (id, data) => {
  const user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data,
  });
  return user;
};


