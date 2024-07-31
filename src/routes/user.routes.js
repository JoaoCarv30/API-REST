import { create, allUsers, remove, update } from '../controllers/user.controller.js';
import { upload } from '../services/multer.js';

const userRoutes = (app) => {
  app.post('/user', upload.single('image'), create);
  app.get('/users', allUsers);
  app.delete('/user/:id', remove);
  app.put('/user/:id', upload.single('image'), update);
};

export default userRoutes;
