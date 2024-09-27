const Joi = require("joi")

const signUpValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required().messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 5 characters long",
            "string.max": "Name must be less than 50 characters",
        }),
        email: Joi.string().email().required().messages({
            "string.email": "Enter a valid email address",
            "string.empty": "Email is required",
        }),
        password: Joi.string().min(8).max(100).required().messages({
            "string.empty": "Passwordd is required",
            "string.min": "Password must be at last 8 characters long",
            "string.max": "Password must be less than 100 characters",
        }),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Bad request",
            error,
        });
    }
    next();
};

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(100).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error });
    }
    next();
};

module.exports = { signUpValidation, loginValidation };
