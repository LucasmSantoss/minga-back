import Joi from 'joi-oid';

const schema = Joi.object({
    title: Joi
        .string()
        .min(3)
        .max(30)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
      }),
    cover_photo: Joi
        .string()
        .uri(),
    description: Joi
        .string()
        .min(20)
        .max(2000)
        .messages({
            "string.min": "The description must have at least 20 characters",
            "string.max": "The description must have a maximum of 200 characters",
      }),
    category_id: Joi
        .objectId(),
})

export default schema