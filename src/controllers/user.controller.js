import { createUser } from '../repositorys/user.repositorys'; // Corrigido o nome do arquivo

export const create = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao criar usuário', error });
  }
};
