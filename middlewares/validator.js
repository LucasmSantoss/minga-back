const validator = (schema) => [
  (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      //Si existe la propiedad error en la validación hay almenos 1 error en los datos del formulario
      return res.status(400).json({
        succes: false,
        message: validation.error.details.map((error) => error.message),
      });
    }
    return next();
  },
];

export default validator;