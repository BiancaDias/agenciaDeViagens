import Joi from "joi"

export const ticketSchema = Joi.object({
    dest: Joi.string().min(1).required(),
    origin: Joi.string().min(1).required(),
    cia: Joi.string().min(1).required(),
    time_origin: Joi.string().min(1).required(),
    time_destin:Joi.string().min(1).required(),
    price: Joi.number().min(1).required()
})

export const citiesSchema = Joi.object({
    name: Joi.string().min(1).required()
})

export const ciaAereaSchema = Joi.object({
    name:Joi.string().min(1).required(),
    logo:Joi.string().min(1).required()
})
