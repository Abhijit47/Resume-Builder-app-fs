const Joi = require('joi');

// function to validate a user in registration
const signUpValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string()
      .trim()
      .min(3)
      .max(30)
      .required(),

    email: Joi.string()
      .trim()
      .email({ maxDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'in'] } })
      .required(),

    password: Joi.string()
      .trim()
      .min(6)
      .max(1024)
      .required(),
  });

  return schema.validateAsync(data);
};

// function to validate a user in login
const signInValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .trim()
      .email({ maxDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'in'] } })
      .required(),

    password: Joi.string()
      .trim()
      .min(6)
      .max(1024)
      .required(),
  });

  return schema.validateAsync(data);
};

module.exports = { signUpValidation, signInValidation };