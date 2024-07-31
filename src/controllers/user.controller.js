import bcrypt from 'bcrypt';
import { userValidation } from '../validations/user.validation.js';
import { createUser, getAllUsers, deleteUser, updateUser } from '../repositorys/user.repository.js';

// Função para criar usuário
export const create = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);

    await userValidation.validate(req.body); // Validação da biblioteca yup

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    req.body.image = req.file.filename; // Adiciona o nome do arquivo da imagem ao corpo da requisição

    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).send({ message: 'Erro ao criar usuário', error });
  }
};

// Função para obter todos os usuários
export const allUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).send({ message: 'Erro ao buscar usuários', error });
  }
};

// Função para remover usuário
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.status(200).send({ message: 'Usuário removido com sucesso' });
  } catch (error) {
    console.error("Erro ao remover usuário:", error);
    res.status(500).send({ message: 'Erro ao remover usuário', error });
  }
};

// Função para atualizar usuário
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;

    if (req.body.password) {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      updatedUser.password = hashPassword;
    }

    if (req.file) {
      updatedUser.image = req.file.filename;
    }

    await userValidation.validate(updatedUser); // Validação da biblioteca yup

    const user = await updateUser(id, updatedUser);
    res.status(200).send(user);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).send({ message: 'Erro ao atualizar usuário', error });
  }
};
