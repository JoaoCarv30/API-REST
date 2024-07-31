import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';



const app = express();
app.use(cors({
  origin: '*'
}));
app.use(express.json());

routes(app);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
