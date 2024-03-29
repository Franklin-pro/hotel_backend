import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import router from './routes/index';
import cors from 'cors'

const app = express();
dotenv.config()
app.use(bodyParser.json())
app.use(cors())
app.use("/api/v1",router)

//config port
const port = process.env.PORT
const database = process.env.DATABASE

app.listen(port,()=>{
    console.log(`port running on ${port}`)
})
mongoose.connect(database).then(()=>{
    console.log(`database connect successfully`)
})
export default app