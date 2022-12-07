import * as patientService from '../service/patientService.js'

const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

// this function is used to set the error in response 
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

export const createPatient = async (req, res) => {
    try {
        console.log("creating patient!")
        const user = await patientService.save(req, res);
    } catch (error) {
        setError(error, res)
    }
}

export const getAll = async (req, res) => {
    try {
        const user = await patientService.getAll(req, res);
    } catch (error) {
        setError(error, res)
    }

}


export const login = async (req, res) => {
    try {
        const user = await patientService.login(req, res);
    } catch (error) {
        setError(error, res)
    }
}

export const feedback = async (req, res) => {
    try {
        const user = await patientService.feedback(req, res);
    } catch (error) {
        setError(error, res)
    }
}

export const bookAppointment = async (req, res) => {
    try {
        const user = await patientService.bookAppointment(req, res);
    } catch (error) {
        setError(error, res)
    }
}


