import Joi from "joi";

const schema = Joi.object({
    title: Joi
        .string()
        .required()
        .messages({
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
        .messages({
            "string.empty": "pages must be at least 1 characteres",
            "any.required": "the pages have to be url"
        }),
    manga_id: Joi
        .string()
        .required(),
})

export default schema