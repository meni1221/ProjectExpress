import exp , {Express} from 'express'
//loes enviroment variables
import  'dotenv/config'

import authController from './controllers/authController'
import postController from './controllers/postController'
import userController from './controllers/userController'

const app: Express = exp()

app.use("/auth", authController)
app.use("/post", postController)
app.use("/user", userController)

app.listen(process.env.PORT, ():void => console.log(`see you at http::localhost:${process.env.PORT}`))