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
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    preferredLanguage: {
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
    },
    poorAppetiteOrOvereating: {
        type: String,
        required: true
    },
    currentlyEmployed: {
        type: String,
        required: true
    },
    intimacyProblems: {
        type: String,
        required: true
    },
    alcoholFrequency: {
        type: String,
        required: true
    },
    medicationHistory: {
        type: String,
        required: true
    },
    chronicPain: {
        type: String,
        required: true
    },
    financialStatus: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: false
    },
    bookingDetails: {
        type: Array,
        required: false
    }


});

export const Patient = mongoose.model('Patient', patientSchema);
export default { Patient };