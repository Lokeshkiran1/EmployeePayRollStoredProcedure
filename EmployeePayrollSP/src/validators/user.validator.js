import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().min(3).required(),
    password: Joi.string().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

export const newEmployeeValidator = (req, res, next) => {
  const schema = Joi.object({
    employeeName: Joi.string().min(3).required(),
    dateOfBirth: Joi.string().optional(),
    department: Joi.string().optional(),
    address: Joi.string().optional(),
    phoneNumber:Joi.string().optional()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
