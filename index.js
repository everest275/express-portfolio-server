import express from 'express'
import Home from './Routes/Home.js'
import Proyects from './Routes/Proyects.js'
import cors from 'cors';
const app =express();
app.use(cors())

app.use(express.json())
app.use(Home,Proyects)
let port =8085;
app.listen(port,()=>{
    console.log('Esta corriendo en http://localhost:'+port)
})
