import express, { json }  from 'express';
import router from './routes/user';
import { connectDB } from './connection';

// Connecr to DB
connectDB()
// Routeing
const userRouter = router()

const app = express()

app.use(express.json());


// Rinnign Serever
app.listen(2000,()=>{
    console.log("Server Connected ")
})