import { getAccommodationsByCityDB, getAccommodationsByIdDB } from "../repositories/accommodationRepository.js";

export async function getAccommodationsByCity(req, res){
    const { id } = req.params;
    try{
        const accommodation = await getAccommodationsByCityDB(id);
        res.status(200).send(accommodation.rows);
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}

export async function getAccommodationsById(req, res){
    const { id } = req.params;
    try{
        const accommodation = await getAccommodationsByIdDB(id);
        res.status(200).send(accommodation.rows);
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}