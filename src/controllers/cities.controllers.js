import { getCitiesDB } from "../repositories/citiesRepository.js";

export async function getCities(req, res){
    try{
        const cities = await getCitiesDB();
        res.status(200).send(cities.rows);
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}