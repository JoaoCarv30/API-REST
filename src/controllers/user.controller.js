import { createUser } from '../repositorys/user.repository.js'; // Corrigido o nome do arquivo

export const create = async (req, res) => {
  try {
    console.log(req.body);
    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao criar usuário', error });
  }
};
