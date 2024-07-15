import { create, allUsers, remove, update} from '../controllers/user.controller.js'; 
const userRoutes = (app) => {
  app.post('/user', create);
  app.get('/users', allUsers);
  app.delete('/user/:id', remove);
  app.put('/user/:id', update);
};

export default userRoutes;