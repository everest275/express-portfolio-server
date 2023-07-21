import { Router } from "express";
import {getProyects} from "../Controllers/Proyects.js"


const router=Router();
router.get('/proyects/',getProyects)



export default router