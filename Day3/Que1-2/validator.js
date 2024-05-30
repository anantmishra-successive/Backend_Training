const joi = require("joi");
// const validator = (schema) => (payload) =>
//   schema.validate(payload, { abortEarly: false });

const signupSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});


module.exports = {signupSchema}

// exports.validateField = validator(signupSchema)