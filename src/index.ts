import exp, {Express} from 'express'

//loes enviroment variables
import  'dotenv/config'

const app: Express = exp()



app.listen(process.env.PORT)