import { postCiasAereasDB, postTicketsDB } from "../repositories/adminRepository.js";

export async function postTickets(req, res){
    const data = req.body;
    try{
        await postTicketsDB(data);
        res.sendStatus(200);
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}

export async function postCiasAereas(req, res){
    const data = req.body;
    try{
        await postCiasAereasDB(data);
        console.log("chegou aqui")
        res.sendStatus(200)
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}