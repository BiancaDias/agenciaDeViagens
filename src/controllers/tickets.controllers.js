import { getTicketsByCityDB, getTicketsByIdDB } from "../repositories/ticketsRepository.js";

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

export async function getTicketsById(req, res){
    const { id } = req.params;
    try{
        const ticket = await getTicketsByIdDB(id);
        res.status(200).send(ticket.rows[0]);
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}