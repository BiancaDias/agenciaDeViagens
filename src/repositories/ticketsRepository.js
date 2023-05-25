import { db } from "../database/database.connection.js";

export async function getTicketsByCityDB(id){
    return db.query(`SELECT * FROM tickets WHERE city_dest = $1;`, [id]);
}