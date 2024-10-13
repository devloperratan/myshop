const Joi = require("joi")

exports.createProductValidation = (validator) => {
    const productValidationSchema = Joi.object({
        productCode: Joi.string().required(),
        productTitle: Joi.string().required(),
        productDescription: Joi.string().required(),
        productRate: Joi.number().required(),
    })
    return productValidationSchema.validate(validator)
}