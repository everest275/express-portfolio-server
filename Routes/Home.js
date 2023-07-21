import { Router } from "express";
import {getHome} from "../Controllers/Home.js"


const router=Router();
router.get('/',getHome)



export default router