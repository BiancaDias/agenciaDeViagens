import { db } from "../database/database.connection.js";

export async function getCitiesDB(){
    return db.query(`SELECT * FROM cities`)
}