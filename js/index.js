import exp from 'express';
//loes enviroment variables
import 'dotenv/config';
const app = exp();
import authControlle from './controllers/authControlle';
import postControlle from './controllers/postController';
import userControlle from './controllers/userController';
app.use("/auth", authControlle);
app.use("/post", postControlle);
app.use("/user", userControlle);
app.listen(process.env.PORT, () => console.log(`see you at http::localhost:${process.env.PORT}`));
