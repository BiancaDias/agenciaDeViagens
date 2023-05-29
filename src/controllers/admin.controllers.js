import { postAccommodationDB, postCiasAereasDB, postCitiesDB, postConveniencesDB, postTicketsDB } from "../repositories/adminRepository.js";

export async function postTickets(req, res){
    const data = req.body;
    try{
        await postTicketsDB(data);
        res.sendStatus(201);
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}

export async function postCities(req, res){
    const data = req.body;
    try{
        await postCitiesDB(data)
        res.sendStatus(201)
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}
export async function postCiasAereas(req, res){
    const data = req.body;
    try{
        await postCiasAereasDB(data);
        res.sendStatus(201)
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}

export async function postConveniences(req, res){
    try{
        await postConveniencesDB(req.body);
        res.sendStatus(201)
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}

export async function postAccommodation(req, res){
    try{
        await postAccommodationDB(req.body);
        res.sendStatus(201)
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}