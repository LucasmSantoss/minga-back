import Joi from "joi";

const schema = Joi.object({
    title: Joi
        .string()
        .required()
        .message({
            "string.min": "the title must be at least 4 characteres",
            "string.empty": "the title cannot be empty",
            "any.required": "the title is required"
        }),
    order: Joi
        .any(),
    pages: Joi
        .array().items(Joi.string().uri())
        .required()
        .min(1)
        .massages({
            "array.empty": "pages cannot be empty",
            "string.min": "pages must be at least 1 characteres",
            "any.required": "pages is required"
        }),
    manga_id: Joi
        .string()
        .required()
        .messages({
            "string.empty": "the title cannot be empty",
            "any.required": "the title is required"
        }),
    cover_photo: Joi
        .string(),
    time_stamps: Joi
        .string(),
          
})

export default schema