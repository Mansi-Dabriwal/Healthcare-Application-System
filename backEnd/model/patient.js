import mongoose from "mongoose";
import Joi from "joi";
//Defining the Schema for the employee
const patientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    sexualOrientation: {
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
    therapyType: {
        type: String,
        required: true
    },
    beenInTherpay: {
        type: String,
        required: true
    },
    relationStatus: {
        type: String,
        required: true
    },
    reasonForTherapy: {
        type: String,
        required: true
    },
    therapistPreference: {
        type: String,
        required: true
    },
    rateHealth: {
        type: Number,
        required: true
    },
    eatingHabits: {
        type: String,
        required: true
    },
    currentlyDepressed: {
        type: String,
        required: true
    },
    sleepProblems: {
        type: String,
        required: true
    },
    currentlyTired: {
        type: String,
        required: true
    }
});

export const validate = (data) => {
    const schema = Joi.object({
        fullName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: passwordComplexity().required().label("Password"),
        age: Joi.number().required(),
        gender: Joi.string().required(),
        sexualOrientation: Joi.string().required(),
        phone: Joi.string().regex(/^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/).messages({ 'string.pattern.base': `Phone number must be of format 1-xxx-xxx-xxxx / 1xxxxxxxxx / 1 xxx xxx xxxx` }).required(),
        address: Joi.string().required(),
        therapyType: Joi.string().required(),
        beenInTherpay: Joi.string().required(),
        relationStatus: Joi.string().required(),
        reasonForTherapy: Joi.string().required(),
        therapistPreference: Joi.string().required(),
        rateHealth: Joi.number().required(),
        eatingHabits: Joi.string().required(),
        currentlyDepressed: Joi.string().required(),
        sleepProblems: Joi.string().required(),
        currentlyTired: Joi.string().required()
    });
    return schema.validate(data);
};



export const Patient = mongoose.model('Patient', patientSchema);
export default { Patient };