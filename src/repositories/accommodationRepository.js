import { db } from "../database/database.connection.js";

export async function getAccommodationsByCityDB(id){
    //return db.query(`SELECT * FROM accommodation WHERE city = $1;`, [id]);
    return db.query(`
    SELECT
      accommodation.id,
      accommodation.name,
      accommodation.city,
      accommodation.price,
      accommodation.description,
      (
        SELECT ARRAY_AGG(images.image)
        FROM images
        WHERE images.id_accommodation = accommodation.id
      ) AS images,
      (
        SELECT ARRAY_AGG(convenience.name)
        FROM accommodation_convenience
        JOIN convenience ON accommodation_convenience.id_convenience = convenience.id
        WHERE accommodation_convenience.id_accommodation = accommodation.id
      ) AS conveniences
    FROM
      accommodation
    WHERE
      accommodation.city = $1;
  `, [id]);
}

export async function getAccommodationsByIdDB(id){
    return db.query(`
    SELECT
      accommodation.id,
      accommodation.name,
      accommodation.city,
      accommodation.price,
      accommodation.description,
      (
        SELECT ARRAY_AGG(images.image)
        FROM images
        WHERE images.id_accommodation = accommodation.id
      ) AS images,
      (
        SELECT ARRAY_AGG(convenience.name)
        FROM accommodation_convenience
        JOIN convenience ON accommodation_convenience.id_convenience = convenience.id
        WHERE accommodation_convenience.id_accommodation = accommodation.id
      ) AS conveniences,
    c.name AS city_name
    FROM
      accommodation
    JOIN
      cities c ON c.id = accommodation.city
    WHERE
      accommodation.id = $1;
  `, [id]);
}