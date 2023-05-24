import { db } from "../database/database.connection.js";

export async function postTicketsDB(obj){
    
    const { dest, origin, cia, time_origin, time_destin, price } = obj;
    const query = `
        WITH existing_citie AS (
        SELECT id FROM cities WHERE name = $1
        ),
        inserted_citie AS (
        INSERT INTO cities (name)
        SELECT $1
        WHERE NOT EXISTS (SELECT 1 FROM existing_citie)
        RETURNING id
        ),
        selected_citie AS (
        SELECT id FROM existing_citie UNION SELECT id FROM inserted_citie
        ),
        selected_companhia AS (
        SELECT id FROM cias WHERE name = $2
        )
        INSERT INTO tickets (city_dest, city_orig, cia, time_orig, time_dest, price)
        SELECT selected_citie.id, $3, selected_companhia.id, $4, $5, $6
        FROM selected_citie, selected_companhia;
    `;
    return db.query(query, [dest, cia, origin, time_origin, time_destin, price]);
    
    
    
    // const companhia = await db.query(`SELECT * FROM cias WHERE name = $1;`, [cia]);
    // const citie = await db.query(`SELECT * FROM cities WHERE name = $1;`, [dest]);
    
    // if (citie.rowCount === 0) {
    //     await db.query(`INSERT INTO cities (name) VALUES ($1);`, [dest]);
    // }
    
    // const citieId = await db.query(`SELECT id FROM cities WHERE name = $1;`, [dest]);
    
    // return db.query(
    //     `INSERT INTO tickets (city_dest, city_orig, cia, time_orig, time_dest, price) VALUES ($1, $2, $3, $4, $5, $6);`,
    //     [citieId.rows[0].id, origin, companhia.rows[0].id, time_origin, time_destin, price]
    // );
    
      

    // return db.query(
    //     `
    //         INSERT INTO tickets (city_dest, city_orig, cia, time_orig, time_dest, price)
    //         SELECT cities.id, $1, cias.id, $2, $3, $4
    //         FROM cities, cias
    //         WHERE cities.name = $5 AND cias.name = $6
    //     `,
    //     [dest, origin, cia, time_origin, time_destin, price]
    // )

}

export async function postCiasAereasDB(obj){
    const {name, logo } = obj;
     return db.query(`INSERT INTO cias (name, logo) VALUES ($1, $2);`, [name, logo])   
}