import exp, {Express} from 'express'

//loes enviroment variables
import  'dotenv/config'

const app: Express = exp()



import authControlle from './controllers/authControlle'
import postControlle from './controllers/postController'
import userControlle from './controllers/userController'

app.use("/auth", authControlle)
app.use("/post", postControlle)
app.use("/user", userControlle)

app.listen(process.env.PORT, ():void => console.log(`see you at http::localhost:${process.env.PORT}`))