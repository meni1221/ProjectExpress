import exp from 'express';
//loes enviroment variables
import 'dotenv/config';
const app = exp();
import authController from './controllers/authController';
import postController from './controllers/postController';
import userController from './controllers/userController';
app.use("/auth", authController);
app.use("/post", postController);
app.use("/user", userController);
app.listen(process.env.PORT, () => console.log(`see you at http::localhost:${process.env.PORT}`));
