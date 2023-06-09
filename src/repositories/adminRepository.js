import { db } from "../database/database.connection.js";

export async function postTicketsDB(obj){
    
    const { dest, origin, cia, time_origin, time_destin, price } = obj;
    const query = `
      INSERT INTO tickets (city_dest, city_orig, cia, time_orig, time_dest, price)
      VALUES (
        (SELECT id FROM cities WHERE name = $1),
        $3,
        (SELECT id FROM cias WHERE name = $2),
        $4,
        $5,
        $6
    );
    `;
    return db.query(query, [dest, cia, origin, time_origin, time_destin, price]);

}

export async function postCitiesDB(obj){
  const {name} = obj;
  return db.query(`INSERT INTO cities (name) VALUES ($1);`, [name])
}
export async function postCiasAereasDB(obj){
    const {name, logo } = obj;
     return db.query(`INSERT INTO cias (name, logo) VALUES ($1, $2);`, [name, logo])   
}

export async function postAccommodationDB(obj){
     const {name, city, price, conveniences, images, description} = obj;
     const query = `
    WITH inserted_accommodation AS (
      INSERT INTO accommodation (name, city, price, description)
      SELECT $1, c.id, $2, $3
      FROM cities c
      WHERE c.name = $4
      RETURNING id
    ),
    inserted_images AS (
      INSERT INTO images (image, id_accommodation)
      SELECT i.image, ia.id
      FROM inserted_accommodation ia, unnest($5::text[]) AS i(image)
    ),
    inserted_conveniences AS (
      INSERT INTO accommodation_convenience (id_accommodation, id_convenience)
      SELECT ia.id, c.id
      FROM inserted_accommodation ia, unnest($6::text[]) AS cv(name)
      JOIN convenience c ON c.name = cv.name
    )
    SELECT * FROM inserted_accommodation
  `;


    const values = [
        name,
        price,
        description,
        city,
        images,
        conveniences
      ];

    return db.query(query, values);
 }

export async function postConveniencesDB(obj){
    const {name} = obj;
    return db.query(`INSERT INTO convenience (name) VALUES ($1);`, [name])
}