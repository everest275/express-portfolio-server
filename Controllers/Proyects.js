import Proyects from '../Services/Proyects.json'assert { type: 'json' }

export const getProyects= (req,res)=>{
    res.json(Proyects)
}