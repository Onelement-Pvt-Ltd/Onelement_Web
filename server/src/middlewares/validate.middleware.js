export const validate = (schema, source = "body") => (req, res, next) => {
  const { error, value } = schema.validate(req[source], {
    abortEarly: false,
    convert: true,
    stripUnknown: false
  });

  if (error) {
    return res.status(400).json({
      message: "Validation error",
      details: error.details.map((d) => d.message)
    });
  }

  req.validated = { ...(req.validated || {}), [source]: value };
  next();
};
