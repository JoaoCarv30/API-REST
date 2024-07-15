import { createUser, getAllUsers, deleteUser, uptadeUser} from '../repositorys/user.repository.js'; 

export const create = async (req, res) => {
  try {
    console.log(req.body);
    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao criar usuário', error });
  }
};

export const allUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar usuários', error });
  }
};

export const remove = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ message: 'Erro ao deletar usuário', error });
  }
};

export const update = async (req, res) => {
  try{
    const user = await uptadeUser(req.params.id, req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar usuário', error });
  }
};


