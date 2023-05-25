import { getTicketsByCityDB } from "../repositories/ticketsRepository.js";

export async function getTicketsByCity(req, res){
    const { id } = req.params;
    try{
        const tickets = await getTicketsByCityDB(id);
        res.status(200).send(tickets.rows);
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}