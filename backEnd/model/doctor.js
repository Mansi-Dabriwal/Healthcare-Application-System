import mongoose from "mongoose";
//Defining the Schema for the employee
const doctorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Object,
        required: true
    },

    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialisation:
    {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    expertise: {
        type: String,
        required: true
    },
    appointmentPatient: {
        type: Array,
        required: false
    }
});


export const validate = (data) => {
    const schema = Joi.object({
        fullName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: passwordComplexity().required(),
        age: Joi.number().required(),
        gender: Joi.string().required(),
        phone: Joi.string().regex(/^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/).messages({ 'string.pattern.base': `Phone number must be of format 1-xxx-xxx-xxxx / 1xxxxxxxxx / 1 xxx xxx xxxx` }).required(),
        address: Joi.string().required(),
        specialisation: Joi.string().required(),
        rating: Joi.number().required(),
        expertise: Joi.string().required()
    });
    return schema.validate(data);
};

export const Doctor = mongoose.model('Doctor', doctorSchema);
export default { Doctor };