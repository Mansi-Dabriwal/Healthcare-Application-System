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
    beenInTherapy: {
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

export const Patient = mongoose.model('Patient', patientSchema);
export default { Patient };