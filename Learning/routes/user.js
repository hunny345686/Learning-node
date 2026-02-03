import express  from 'express';
import { createUser } from '../controllers/user';

const router = express.Router();


router.post("/",createUser)

router.get("/",(req, res)=>{
    return res.send("Hello From Express server")
})
export default router