import { create } from '../controllers/user.controller'; 
export const userRoutes = (app) => {
  app.post('/user', create);
};

