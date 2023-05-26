import { db } from "../database/database.connection.js";

export async function getTicketsByCityDB(id){
    return db.query(`SELECT t.*, c.name AS city_dest_name, ci.name AS cia_name, ci.logo
    FROM tickets t
    JOIN cities c ON c.id = t.city_dest
    JOIN cias ci ON ci.id = t.cia
    WHERE c.id = $1;
    `, [id]);
}

export async function getTicketsByIdDB(id){
    return db.query(`SELECT t.*, c.name AS city_dest_name, ci.name AS cia_name, ci.logo
    FROM tickets t
    JOIN cities c ON c.id = t.city_dest
    JOIN cias ci ON ci.id = t.cia
    WHERE t.id = $1;
    `, [id]);

}