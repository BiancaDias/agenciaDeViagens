import { db } from "../database/database.connection.js";

export async function postTicketsDB(obj){
    const { dest, origin, cia, time_origin, time_destin, price } = obj;

    return db.query(
        `
            INSERT INTO tickets (city_dest, city_orig, cia, time_orig, time_dest, price)
            SELECT cities.id, $1, cias.id, $2, $3, $4
            FROM cities, cias
            WHERE cities.name = $5 AND cias.name = $6
        `,
        [dest, origin, cia, time_origin, time_destin, price]
    )

}

export async function postCiasAereasDB(obj){
    const {name, logo } = obj;
     return db.query(`INSERT INTO cias (name, logo) VALUES ($1, $2);`, [name, logo])   
}